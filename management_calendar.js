/**
 * Management of Google Calendar
 */

/**
 * This function retrieves events from the specific dates on Google Calendar.
 * @private
 */
function search_schedule_on_Google_Calendar(object = {}) {
  const { start, end, search = "" } = object;
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
    const cal = CalendarApp.getDefaultCalendar()
    const events = cal.getEvents(startDate, endDate, search ? { search } : null); // or CalendarApp.getCalendarById("###").getEvents(startDate, endDate, search ? { search } : null);
    let messagesStr, jsonSchemaStr;
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
    } else {
      messagesStr = ["New events were not found."];
      jsonSchemaStr = [];
    }
    const text = [...messagesStr, ...jsonSchemaStr].join("\n");
    result = { content: [{ type: "text", text }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function create an event to Google Calendar.
 * @private
 */
function create_schedule_to_Google_Calendar(object = {}) {
  const { startDatetime, endDatetime, title, description } = object;
  let result;
  try {
    const cal = CalendarApp.getDefaultCalendar(); // or CalendarApp.getCalendarById("###");
    const timeZone = Session.getScriptTimeZone();
    cal.createEvent(
      title,
      Utilities.parseDate(startDatetime, timeZone, "yyyy-MM-dd HH:mm:ss"),
      Utilities.parseDate(endDatetime, timeZone, "yyyy-MM-dd HH:mm:ss")
    ).setDescription(description);
    result = { content: [{ type: "text", text: `An event was created as Start: ${startDatetime}, End: ${endDatetime}, Title: ${title}, Description: ${description}` }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// Descriptions of the functions.
const descriptions_management_calendar = {
  search_schedule_on_Google_Calendar: {
    description: "Search the schedules and events on Google Calendar by providing the date range.",
    parameters: {
      type: "object",
      properties: {
        start: { description: "Start date for searching the schedule and events on Google Calendar. The format of the date should be ISO format (yyyy-MM-dd).", type: "string" },
        end: { description: "End date for searching the schedule and events on Google Calendar. The format of the date should be ISO format (yyyy-MM-dd).", type: "string" },
        search: { description: "Search string for searching the schedule and events on Google Calendar. Even only when the start and end are provided, the correct results are returned.", type: "string" },
      },
      required: ["start", "end"]
    }
  },

  create_schedule_to_Google_Calendar: {
    description: "Create an event (schedule) to Google Calendar.",
    parameters: {
      type: "object",
      properties: {
        startDatetime: { description: `Start datetime of the event (schedule). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`, type: "string" },
        endDatetime: { description: `End datetime of the event (schedule). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`, type: "string" },
        title: { description: `Title of event (schedule).`, type: "string" },
        description: { description: `Description of event (schedule).`, type: "string" },
      },
      required: ["startDatetime", "endDatetime", "title", "description"]
    }
  },

};
