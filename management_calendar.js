/**
 * Management of Google Calendar
 * Updated on 20250729 12:10
 */

/**
 * This function retrieves schedules (events) from the specific dates on Google Calendar.
 * @private
 */
function search_schedule_on_Google_Calendar(object = {}) {
  const { calendarId, start, end, search = "" } = object;
  let result;
  try {
    let startDate = new Date(start);
    let endDate = new Date(end);
    const st = startDate.getTime();
    const et = endDate.getTime();
    if (st == et) {
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);
      endDate.setDate(endDate.getDate() + 1);
    } else if (st > et) {
      startDate = new Date(et);
      endDate = new Date(st);
    }
    const cal = calendarId ? CalendarApp.getCalendarById(calendarId) : defaultCalendarId ? CalendarApp.getCalendarById(defaultCalendarId) : CalendarApp.getDefaultCalendar();
    const events = cal.getEvents(startDate, endDate, search ? { search } : null);
    let messagesStr, jsonSchemaStr, forTable;
    if (events.length > 0) {
      const timezone = cal.getTimeZone();
      const coundEvent = events.length;
      const eventObj = events.map(e => ({
        title: e.getTitle(),
        startTime: Utilities.formatDate(e.getStartTime(), timezone, "yyyy-MM-dd HH:mm:ss"),
        endTime: Utilities.formatDate(e.getEndTime(), timezone, "yyyy-MM-dd HH:mm:ss"),
        location: e.getLocation() || "No location",
        description: e.getDescription() || "No description",
        eventId: e.getId(),
      }));
      const jsonSchema = {
        type: "array",
        items: {
          type: object,
          properties: {
            title: {
              type: "string",
              description: "Event title."
            },
            startTime: {
              type: "string",
              description: "Start time of the event. The date format is 'yyyy-MM-dd HH:mm:ss'."
            },
            endTime: {
              type: "string",
              description: "End time of the event. The date format is 'yyyy-MM-dd HH:mm:ss'."
            },
            location: {
              type: "string",
              description: "Location of the event."
            },
            description: {
              type: "string",
              description: "Description of the event."
            },
            eventId: {
              type: "string",
              description: "Event ID."
            },
          },
          required: ["title", "startTime", "endTime", "description", "eventId"]
        }
      };
      messagesStr = [
        `${coundEvent} events were found.`,
        `The events from Google Calendar are put in "Data" of a JSON array.`,
        `<Data>${JSON.stringify(eventObj)}</Data>`,
      ];
      jsonSchemaStr = [
        `The JSON schema of "Data" is as follows. Understand "Data" using this JSON schema.`,
        `<JSONSchema>${JSON.stringify(jsonSchema)}</JSONSchema>`,
      ];
      forTable = [
        `Final display is as follows.`,
        `<FinalDisplay>`,
        `As an additional mission, create the retrieved events in the month, the week, or the day calendar as a 2-dimensional array.`,
        `In the case of the month calendar, the 1st row is the day of the week from Sunday to Saturday. After the 2nd row, those are the days in a month. Each day is required to be included in each cell.`,
        `In the case of the week calendar, the 1st row is the day of the week from Sunday to Saturday. The 2nd row is the days of the week. Each day is required to be included in each cell.`,
        `In the case of the day calendar, the 1st row is the day. After the 2nd row, the hours with 24 h.`,
        `Use the simple identification name of each event in the calendar. Additionally, display the detailed information about each event, which corresponds to the simple identification name of each event, below the calendar.`,
        `The names of the day of the week should be omitted like "Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", and "Sat.".`,
        `In order to keep the visibility, adjust the visibility by adding spaces, and use the colorful texts.`,
        `Display the 2-dimensional array in a table with the box-drawing characters, and all rows are required to be split with the horizontal lines using the box-drawing characters.`,
        `</FinalDisplay>`,
      ];
    } else {
      messagesStr = ["New events were not found."];
      jsonSchemaStr = [];
      forTable = [];
    }
    const text = [...messagesStr, ...jsonSchemaStr, ...forTable].join("\n");
    result = { content: [{ type: "text", text }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function create a schedule (event) on Google Calendar.
 * @private
 */
function create_schedule_on_Google_Calendar(object = {}) {
  const { calendarId, startDatetime, endDatetime, title, description, location, guests, googleMeet = false } = object;
  let result;

  /**
   * Check API.
   */
  const apiName = "Calendar";
  if (isAPIAtAdvancedGoogleServices_(apiName).api == "disable") {
    result = { content: [{ type: "text", text: `${apiName} API is disabled. Please enable ${apiName} API in the Advanced Google services.` }], isError: true };
    return { jsonrpc: "2.0", result };
  }

  try {
    const cal = calendarId ? CalendarApp.getCalendarById(calendarId) : defaultCalendarId ? CalendarApp.getCalendarById(defaultCalendarId) : CalendarApp.getDefaultCalendar();
    const timeZone = Session.getScriptTimeZone();
    const opt = {};
    if (description) {
      opt.description = description;
    }
    if (location) {
      opt.location = location;
    }
    if (guests) {
      opt.guests = guests.join(",");
      opt.sendInvites = true;
    }
    const event = cal.createEvent(
      title,
      Utilities.parseDate(startDatetime, timeZone, "yyyy-MM-dd HH:mm:ss"),
      Utilities.parseDate(endDatetime, timeZone, "yyyy-MM-dd HH:mm:ss"),
      opt
    );
    const eventId = event.getId().split("@")[0];
    const eventUrl = Calendar.Events.get(cal.getId(), eventId).htmlLink;
    let meetLink = "";
    if (googleMeet) {
      const eventObj = Calendar.Events.patch(
        { conferenceData: { createRequest: { requestId: Utilities.getUuid(), conferenceSolutionKey: { type: "hangoutsMeet" } } } },
        cal.getId(),
        eventId,
        { conferenceDataVersion: 1 }
      );
      if (eventObj.conferenceData && eventObj.conferenceData.entryPoints) {
        meetLink = eventObj.conferenceData.entryPoints.find(e => e.entryPointType == "video" && e.uri);
      }
    }
    let text = `An event (event id and link are "${eventId}" and "${eventUrl}", respectively.) was created on the calendar ${cal.getName()} as Start: ${startDatetime}, End: ${endDatetime}, Title: ${title}, Description: ${description}`;
    if (googleMeet && meetLink) {
      text += `, GoogleMeetLink: "${meetLink.uri}"`;
    }
    result = { content: [{ type: "text", text }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function deletes schedules (events) from Google Calendar.
 * @private
 */
function delete_schedules_on_Google_Calendar(object = {}) {
  const { calendarId, eventIds = [] } = object;
  let result;
  try {
    if (eventIds.length > 0) {
      const cal = calendarId ? CalendarApp.getCalendarById(calendarId) : defaultCalendarId ? CalendarApp.getCalendarById(defaultCalendarId) : CalendarApp.getDefaultCalendar();
      const n = eventIds.reduce((ar, id) => {
        const event = cal.getEventById(id);
        if (event) {
          event.deleteEvent();
          ar.push(id);
        }
        return ar;
      }, []);
      result = { content: [{ type: "text", text: `${n.length} events were deleted from the calendar "${cal.getName()}".` }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "No event IDs." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function updates schedule (event) from Google Calendar.
 * @private
 */
function update_schedule_on_Google_Calendar(object = {}) {
  const { calendarId, eventId, startDatetime, endDatetime, title, description, location, guests, googleMeet = false } = object;
  let result;

  /**
   * Check API.
   */
  const apiName = "Calendar";
  if (isAPIAtAdvancedGoogleServices_(apiName).api == "disable") {
    result = { content: [{ type: "text", text: `${apiName} API is disabled. Please enable ${apiName} API in the Advanced Google services.` }], isError: true };
    return { jsonrpc: "2.0", result };
  }

  try {
    if (eventId) {
      const cal = calendarId ? CalendarApp.getCalendarById(calendarId) : defaultCalendarId ? CalendarApp.getCalendarById(defaultCalendarId) : CalendarApp.getDefaultCalendar();
      const event = cal.getEventById(eventId);
      if (event) {
        if (startDatetime && endDatetime) {
          const timeZone = Session.getScriptTimeZone();
          event.setTime(Utilities.parseDate(startDatetime, timeZone, "yyyy-MM-dd HH:mm:ss"), event.getEndTime());
        }
        if (title) {
          event.setTitle(title);
        }
        if (description) {
          event.setDescription(description);
        }
        if (location) {
          event.setLocation(location);
        }
        if (guests) {
          event.addGuest(guests.join(","));
        }
        if (googleMeet) {
          Calendar.Events.patch(
            { conferenceData: { createRequest: { requestId: Utilities.getUuid(), conferenceSolutionKey: { type: "hangoutsMeet" } } } },
            cal.getId(),
            event.getId().split("@")[0],
            { conferenceDataVersion: 1 }
          );
        }
        result = { content: [{ type: "text", text: `An event (event id is "${event.getId()}") was created on the calendar ${cal.getName()}.` }], isError: false };
      } else {
        result = { content: [{ type: "text", text: `No event of the event ID ${eventId} on the calendar ${cal.getName()}.` }], isError: true };
      }
    } else {
      result = { content: [{ type: "text", text: "No eventId." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// Descriptions of the functions.
const descriptions_management_calendar = {
  search_schedule_on_Google_Calendar: {
    description: "Use to search the schedules (events) on Google Calendar by providing the date range.",
    parameters: {
      type: "object",
      properties: {
        calendarId: { description: "Calendar ID.", type: "string" },
        start: { description: "Start date for searching the schedule and events on Google Calendar. The format of the date should be ISO format (yyyy-MM-dd).", type: "string" },
        end: { description: "End date for searching the schedule and events on Google Calendar. The format of the date should be ISO format (yyyy-MM-dd).", type: "string" },
        search: { description: "Search string for searching the schedule and events on Google Calendar. Even only when the start and end are provided, the correct results are returned.", type: "string" },
      },
      required: ["start", "end"]
    }
  },

  create_schedule_on_Google_Calendar: {
    description: "Use to create a new schedule (event) on Google Calendar.",
    parameters: {
      type: "object",
      properties: {
        calendarId: { description: "Calendar ID.", type: "string" },
        startDatetime: { description: `Start datetime of the schedule (event). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`, type: "string" },
        endDatetime: { description: `End datetime of the schedule (event). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`, type: "string" },
        title: { description: `Title of schedule (event).`, type: "string" },
        description: { description: `Location of the schedule (event).`, type: "string" },
        location: { description: `Description of schedule (event).`, type: "string" },
        guests: { description: `Email addresses that should be added as guests.`, type: "array", items: { type: "string", description: "Guest email." } },
        googleMeet: { description: `The default is false. When Google Meet is used, set this as true.`, type: "boolean" },
      },
      required: ["startDatetime", "endDatetime", "title", "description"]
    }
  },

  delete_schedules_on_Google_Calendar: {
    description: "Use to delete schedules (events) from Google Calendar.",
    parameters: {
      type: "object",
      properties: {
        calendarId: { description: "Calendar ID.", type: "string" },
        eventIds: { description: "Event IDs on Google Calendar.", type: "array", items: { description: "Event ID on Google Calendar.", type: "string" } },
      },
      required: ["eventIds"]
    }
  },

  update_schedule_on_Google_Calendar: {
    description: "Use to update the schedule (event) on Google Calendar.",
    parameters: {
      type: "object",
      properties: {
        calendarId: { description: "Calendar ID.", type: "string" },
        eventId: { description: "Event ID of the schedule (event).", type: "string" },
        startDatetime: { description: `Start datetime of the schedule (event). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`, type: "string" },
        endDatetime: { description: `End datetime of the schedule (event). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`, type: "string" },
        title: { description: `Title of schedule (event).`, type: "string" },
        description: { description: `Location of the schedule (event).`, type: "string" },
        location: { description: `Description of schedule (event).`, type: "string" },
        guests: { description: `Email addresses that should be added as guests.`, type: "array", items: { type: "string", description: "Guest email." } },
        googleMeet: { description: `The default is false. When Google Meet is used, set this as true.`, type: "boolean" },
      },
      required: ["eventId"]
    }
  },

};
