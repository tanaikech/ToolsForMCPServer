import { z } from "zod";

/**
 * Please set your Web Apps URL.
 */
const webAppsURL = "https://script.google.com/macros/s/###/exec?accessKey=sample";

async function request_({ name, method, body }) {
  let result;
  try {
    const payload = {
      jsonrpc: "2.0",
      id: 1,
      method,
      params: { name, arguments: body },
    };
    const response = await fetch(webAppsURL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const copiedResponse = response.clone();
    if (!response.ok) {
      result = {
        content: [
          { type: "text", text: `Response status: ${response.status}` },
        ],
        isError: true,
      };
    }
    const o = await response.json();
    if (o.result && o.result?.content && o.result.hasOwnProperty("isError")) {
      // For tools
      result = o.result || null;
    } else if (o.result && o.result?.messages) {
      // For prompts
      result = o.result || null;
    } else {
      const text = await copiedResponse.text();
      result = {
        content: [{ type: "text", text }],
        isError: false,
      };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  // console.log(result); // Check response.
  return result;
}

const tools_management_APIs = [
  {
    name: "get_exchange_rate",
    schema: {
      description:
        "Use this to get the current exchange rate. Using this, for example, it can exchange yen for dollars.",
      inputSchema: {
        currency_from: z
          .string()
          .describe("Source currency (major currency). Default is USD."),
        currency_to: z
          .string()
          .describe("Destination currency (major currency). Default is EUR."),
        currency_date: z
          .string()
          .describe(
            "Date of the currency. Default is latest. It should be ISO format (YYYY-MM-DD)."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_exchange_rate",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "get_current_weather",
    schema: {
      description: [
        "Use this to get the current weather using the latitude and the longitude.",
        "At that time, convert the location to the latitude and the longitude and provide them to the function.",
        `If you cannot know the location, decide the location using the timezone.`,
      ].join("\n"),
      inputSchema: {
        latitude: z.number().describe("The latitude of the inputed location."),
        longitude: z
          .number()
          .describe("The longitude of the inputed location."),
        timezone: z
          .string()
          .describe(
            `The timezone. In the case of Japan, "Asia/Tokyo" is used.`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_current_weather",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "get_specific_date_weather",
    schema: {
      description: [
        "Use this to get the weather for the specific date using the latitude and the longitude.",
        "At that time, convert the location to the latitude and the longitude and provide them to the function.",
        `The date is required to be included. The date format is "yyyy-MM-dd HH:mm"`,
        `If you cannot know the location, decide the location using the timezone.`,
      ].join("\n"),
      inputSchema: {
        latitude: z.number().describe("The latitude of the inputed location."),
        longitude: z
          .number()
          .describe("The longitude of the inputed location."),
        date: z
          .string()
          .describe(
            `Date for searching the weather. The date format is "yyyy-MM-dd HH:mm". But, in this case, "mm" is required to be "00".`
          ),
        timezone: z
          .string()
          .describe(
            `The timezone. In the case of Japan, "Asia/Tokyo" is used.`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_specific_date_weather",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "get_current_date_time",
    schema: {
      description:
        "The current date and time are returned. Please provide your timezone. If you don't know the timezone, it is automatically detected with the script.",
      inputSchema: {
        timezone: z
          .string()
          .describe(
            "Your timezone. The default timezone is provided by Session.getScriptTimeZone()."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_current_date_time",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_analytics = [
  {
    name: "analytics_admin_accountSummaries_list",
    schema: {
      description: `Use to retrieve a list of all Google Analytics accounts accessible by the current user. Each entry provides key details for the account and a summary of its properties, making it useful for discovering available data streams and managing permissions.`,
      inputSchema: {
        queryParameters: z.object({}).passthrough(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "analytics_admin_accountSummaries_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "analytics_admin_properties_get",
    schema: {
      description: `Use to get detailed information about a single Google Analytics property, providing essential details for management and analysis. Use this to confirm property settings or to retrieve its metadata.`,
      inputSchema: {
        pathParameters: z.object({
          name: z
            .string()
            .describe(
              `Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000"`
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "analytics_admin_properties_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "analytics_data_properties_runReport",
    schema: {
      description: `Use to fetch a custom report from a Google Analytics property. Specify the metrics (e.g., active users, event count) and dimensions (e.g., country, event name) to retrieve specific user activity data. This tool is best for answering questions about user behavior, such as "How many active users did we have in Japan last month?" or "What are the top 5 most popular events?"`,
      inputSchema: {
        pathParameters: z.object({
          property: z
            .string()
            .describe(
              `A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see where to find your Property ID. Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234`
            ),
        }),
        requestBody: z
          .record(z.any())
          .describe(
            `Create the request body for "Method: properties.runReport" of Google Analytics Data API. If you want to know how to create the request body, please check a tool "explanation_analytics_data_properties_runReport".`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "analytics_data_properties_runReport",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "analytics_data_properties_runRealtimeReport",
    schema: {
      description: `Use to generate a customized report of real-time event data from a Google Analytics property, showing events and user activity that occurred within the last 30 minutes. Useful for monitoring live traffic and immediate user behavior.`,
      inputSchema: {
        pathParameters: z.object({
          property: z
            .string()
            .describe(
              `A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see where to find your Property ID. Example: properties/1234`
            ),
        }),
        requestBody: z
          .record(z.any())
          .describe(
            `Create the request body for "Method: properties.runRealtimeReport" of Google Analytics Data API. If you want to know how to create the request body, please check a tool "explanation_analytics_data_properties_runRealtimeReport".`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "analytics_data_properties_runRealtimeReport",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_calendar = [
  {
    name: "search_schedule_on_Google_Calendar",
    schema: {
      description:
        "Use to search the schedules (events) on Google Calendar by providing the date range.",
      inputSchema: {
        calendarId: z.string().describe("Calendar ID.").optional(),
        start: z
          .string()
          .describe(
            "Start date for searching the schedule and events on Google Calendar. The format of the date should be ISO format (yyyy-MM-dd)."
          ),
        end: z
          .string()
          .describe(
            "End date for searching the schedule and events on Google Calendar. The format of the date should be ISO format (yyyy-MM-dd)."
          ),
        search: z
          .string()
          .describe(
            "Search string for searching the schedule and events on Google Calendar. Even only when the start and end are provided, the correct results are returned."
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "search_schedule_on_Google_Calendar",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "create_schedule_on_Google_Calendar",
    schema: {
      description: "Use to create a new schedule (event) on Google Calendar.",
      inputSchema: {
        calendarId: z.string().describe("Calendar ID.").optional(),
        startDatetime: z
          .string()
          .describe(
            `Start datetime of the schedule (event). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`
          ),
        endDatetime: z
          .string()
          .describe(
            `End datetime of the schedule (event). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`
          ),
        title: z.string().describe(`Title of schedule (event).`),
        description: z.string().describe(`Description of schedule (event).`),
        location: z
          .string()
          .describe(`Location of the schedule (event).`)
          .optional(),
        guests: z
          .array(z.string().describe("Guest email."))
          .describe(`Email addresses that should be added as guests.`)
          .optional(),
        googleMeet: z
          .boolean()
          .describe(
            `The default is false. When Google Meet is used, set this as true.`
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "create_schedule_on_Google_Calendar",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "delete_schedules_on_Google_Calendar",
    schema: {
      description: "Use to delete schedules (events) from Google Calendar.",
      inputSchema: {
        calendarId: z.string().describe("Calendar ID.").optional(),
        eventIds: z
          .array(z.string().describe("Event ID on Google Calendar."))
          .describe("Event IDs on Google Calendar."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "delete_schedules_on_Google_Calendar",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "update_schedule_on_Google_Calendar",
    schema: {
      description: "Use to update the schedule (event) on Google Calendar.",
      inputSchema: {
        calendarId: z.string().describe("Calendar ID.").optional(),
        eventId: z.string().describe("Event ID of the schedule (event)."),
        startDatetime: z
          .string()
          .describe(
            `Start datetime of the schedule (event). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`
          )
          .optional(),
        endDatetime: z
          .string()
          .describe(
            `End datetime of the schedule (event). The format of the date should be ISO format ("yyyy-MM-dd HH:mm:ss").`
          )
          .optional(),
        title: z.string().describe(`Title of schedule (event).`).optional(),
        description: z
          .string()
          .describe(`Description of schedule (event).`)
          .optional(),
        location: z
          .string()
          .describe(`Location of the schedule (event).`)
          .optional(),
        guests: z
          .array(z.string().describe("Guest email."))
          .describe(`Email addresses that should be added as guests.`)
          .optional(),
        googleMeet: z
          .boolean()
          .describe(
            `The default is false. When Google Meet is used, set this as true.`
          )
          .optional(),
        removeGuests: z
          .array(z.string().describe("Guest email."))
          .describe(`Email addresses that should be removed from guests.`)
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "update_schedule_on_Google_Calendar",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_docs = [
  {
    name: "get_values_from_google_docs",
    schema: {
      description:
        "Use this to get text from Google Docs in a text format or a markdown format. The document ID is used for retrieving the values from the Google Docs. If you use the document URL, get the document ID from the URL and use the ID.",
      inputSchema: {
        documentId: z.string().describe("Document ID of Google Docs."),
        tabName: z
          .string()
          .describe(
            "Tab name of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used."
          )
          .optional(),
        tabId: z
          .string()
          .describe(
            "Tab ID of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used."
          )
          .optional(),
        tabIndex: z
          .number()
          .describe(
            "Tab index of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used."
          )
          .optional(),
        markdown: z
          .boolean()
          .describe(
            "The default is false. When this is true, the text is exported from Google Docs as a markdown format."
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_values_from_google_docs",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "put_values_into_google_docs",
    schema: {
      description:
        "Use this to append or insert text to Google Docs. The document ID is used for putting the values to the Google Docs. If you use the document URL, get the document ID from the URL and use the ID.",
      inputSchema: {
        documentId: z.string().describe("Document ID of Google Docs."),
        tabName: z
          .string()
          .describe(
            "Tab name of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used."
          )
          .optional(),
        tabId: z
          .string()
          .describe(
            "Tab ID of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used."
          )
          .optional(),
        tabIndex: z
          .number()
          .describe(
            "Tab index of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used."
          )
          .optional(),
        index: z
          .number()
          .describe(
            "The child index in Google Docs body. If the index is not used or the index is -1, the text is appended to Google Docs. If the index is more than 0, the text is inserted into the index of Google Docs body."
          )
          .optional(),
        text: z
          .string()
          .describe("Text for appending or inserting to Google Docs."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "put_values_into_google_docs",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "get_google_doc_object_using_docs_api",
    schema: {
      description:
        "Use this to get Google Docs Object using Docs API. When this tool is used, for example, the index of each content in the document body can be retrieved. This cannot be directly used for retrieving text of the document body.",
      inputSchema: {
        pathParameters: z.object({
          documentId: z
            .string()
            .describe("The document ID of the document to retrieve."),
        }),
        queryParameters: z
          .object({
            suggestionsViewMode: z
              .enum([
                "DEFAULT_FOR_CURRENT_ACCESS",
                "SUGGESTIONS_INLINE",
                "PREVIEW_SUGGESTIONS_ACCEPTED",
                "PREVIEW_WITHOUT_SUGGESTIONS",
              ])
              .describe(
                "The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, DEFAULT_FOR_CURRENT_ACCESS is used."
              )
              .optional(),
            excludeTablesInBandedRanges: z
              .boolean()
              .describe(
                [
                  `Whether to populate the Document.tabs field instead of the text content fields like body and documentStyle on Document.`,
                  `When True: Document content populates in the Document.tabs field instead of the text content fields in Document.`,
                  `When False: The content of the document's first tab populates the content fields in Document excluding Document.tabs. If a document has only one tab, then that tab is used to populate the document content. Document.tabs will be empty.`,
                ].join("\n")
              )
              .optional(),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_google_doc_object_using_docs_api",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "manage_google_docs_using_docs_api",
    schema: {
      title: "Updates Google Docs",
      description: `Use this to manage Google Docs using Docs API. Provide the request body for batchUpdate method. In order to retrieve the detailed information of the document, including the index and so on, it is required to use a tool "get_google_doc_object_using_docs_api".`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            `Create the request body for "Method: documents.batchUpdate" of Google Docs API. If you want to know how to create the request body, please check a tool "explanation_manage_google_docs_using_docs_api".`
          ),
        pathParameters: z.object({
          documentId: z
            .string()
            .describe("The document ID to apply the updates to."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "manage_google_docs_using_docs_api",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "create_document_body_in_google_docs",
    schema: {
      title: "Create document body in Google Docs",
      description: [
        `Use to create document body in Google Docs.`,
        `This tool puts a document text including paragraphs, tables, lists, images, horizontal rules, and page breaks using Google Apps Script.`,
      ].join("\n"),
      inputSchema: {
        documentId: z
          .string()
          .describe(
            "The file ID (Document ID) of the Google Docs. If you have no document ID, create a new Google Docs document and give the document ID of the created Google Docs."
          ),
        documentText: z
          .array(
            z.object({
              paragraph: z
                .object({
                  value: z
                    .string()
                    .describe(
                      `Text as a paragraph. When you use the escape sequence for representing a line break, it will be used as multiple paragraphs.`
                    ),
                  paragraphHeading: z
                    .enum([
                      "HEADING1",
                      "HEADING2",
                      "HEADING3",
                      "HEADING4",
                      "HEADING5",
                      "HEADING6",
                      "NORMAL",
                      "SUBTITLE",
                      "TITLE",
                    ])
                    .describe(
                      `You can manage the paragraph using this property. When this is not used, "NORMAL" is used as the default paragraph heading.`
                    )
                    .optional(),
                })
                .optional(),
              table: z
                .object({
                  value: z
                    .array(z.array(z.any()))
                    .describe(
                      "Table value. This is required to be a 2-dimensional array."
                    ),
                })
                .optional(),
              listItem: z
                .object({
                  value: z
                    .array(z.string())
                    .describe(
                      "Texts of list items of a list. This is required to be a 1-dimensional array. The items are added to Google Docs in order in the array."
                    ),
                })
                .optional(),
              image: z
                .object({
                  fileId: z
                    .string()
                    .describe(
                      `The file ID of the image file on Google Drive. When you use "fileId", don't use the property "url".`
                    )
                    .optional(),
                  url: z
                    .string()
                    .describe(
                      `The direct link of the image data or image file. When you use "url", don't use the property "fileId".`
                    )
                    .optional(),
                })
                .optional(),
              horizontalRule: z.object({}).optional(),
              pageBreak: z.object({}).optional(),
            })
          )
          .describe(
            `Each item in this array is added to Google Docs in order. You can create an array by selecting "paragraph", "table", "listItem", "image", "horizontalRule", and "pageBreak". Create an array by considering the whole document structure.`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "create_document_body_in_google_docs",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_drive = [
  {
    name: "search_file_in_google_drive",
    schema: {
      description:
        "Use this to search files in Google Drive by providing a search query. For example, the filename can be converted to the file ID. But, in the case of Google Drive, the file IDs are unique values. But, the same filenames can exist in the same folder. So, when a filename is searched, multiple file IDs might be returned. At that time, it is required to confirm which file the user wants to use.",
      inputSchema: {
        query: z
          .string()
          .describe(
            `Search query. In this case, the files are searched using "Method: files.list" of Drive API v3. The tool "explanation_search_file_in_google_drive" will help to generate the search query.`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "search_file_in_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "get_file_from_google_drive",
    schema: {
      description:
        "Use this to get and download a file from Google Drive by giving a filename. When you use this function, the returned data is base64 data. So, you are required to decode base64 data.",
      inputSchema: {
        filename: z.string().describe("Filename of the file on Google Drive."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_file_from_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "put_file_to_google_drive",
    schema: {
      description:
        "Use this to put and upload data to Google Drive as a file. When you use this function, please provide the file content converted to base64 data. So, you are required to encode the file content as base64 data.",
      inputSchema: {
        filename: z.string().describe("Filename of the file on Google Drive."),
        base64Data: z.string().describe("Base64 data of the file content."),
        mimeType: z.string().describe("MimeType of data of the file content."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "put_file_to_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "create_file_to_google_drive",
    schema: {
      description: "Use this to create an empty file to Google Drive.",
      inputSchema: {
        filename: z.string().describe("Filename of the file on Google Drive."),
        mimeType: z.string().describe("MimeType of data of the file content."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "create_file_to_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "rename_files_on_google_drive",
    schema: {
      description: "Use this to rename the files on Google Drive.",
      inputSchema: {
        fileList: z.array(
          z.object({
            fileId: z.string().describe("File ID of the file on Google Drive."),
            newName: z.string().describe("New filename by renaming the file."),
          })
        ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "rename_files_on_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "move_files_on_google_drive",
    schema: {
      description:
        "Use this to move the files and the folders into other folder on Google Drive.",
      inputSchema: {
        fileList: z.array(
          z.object({
            srcId: z
              .string()
              .describe("File ID or folder ID of the source file or folder."),
            dstId: z.string().describe("Destination folder ID."),
          })
        ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "move_files_on_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "convert_mimetype_of_file_on_google_drive",
    schema: {
      description: "Use this to convert the mimeType of files on Google Drive.",
      inputSchema: {
        fileIds: z
          .array(
            z
              .string()
              .describe(
                "File ID of the file on Google Drive. The mimeType of this file is converted."
              )
          )
          .describe(""),
        dstMimeType: z.string().describe("Destination mimeType."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "convert_mimetype_of_file_on_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "change_permission_of_file_on_google_drive",
    schema: {
      description:
        "Use to change the permission of a file or folder on Google Drive for a specific user by providing the item ID, user email, and desired role. As a sample situation, when URLs of the files are included in an email, it is required to add the permission to the recipient user to allow the user to read or write the file.",
      inputSchema: {
        fileId: z
          .string()
          .describe(
            "The ID of the file or folder on Google Drive whose permissions need to be changed."
          ),
        email: z
          .string()
          .describe(
            "The email address of the user to whom the permission will be granted."
          ),
        role: z
          .string()
          .describe(
            "The permission level to grant. Accepted values are 'viewer', 'commenter', or 'editor'."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "change_permission_of_file_on_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "create_google_docs_from_markdown_on_google_drive",
    schema: {
      description: "Use to create a Google Document from a markdown format.",
      inputSchema: {
        name: z.string().describe("Google Document name.").optional(),
        markdown: z.string().describe("Text as a markdown format.").optional(),
        html: z.string().describe("Text as a markdown format.").optional(),
        text: z.string().describe("Text as a markdown format.").optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "create_google_docs_from_markdown_on_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "remove_files_on_google_drive",
    schema: {
      description: "Use this to remove the files on Google Drive.",
      inputSchema: {
        fileList: z.array(
          z.string().describe("File ID of the file on Google Drive.")
        ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "remove_files_on_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "comments_drive_api_list",
    schema: {
      description: "Use to get a list of a file's comments on Google Drive.",
      inputSchema: {
        pathParameters: z.object({
          fileId: z.string().describe("The ID of the file on Google Drive."),
        }),
        queryParameters: z
          .object({
            includeDeleted: z
              .boolean()
              .describe(
                "Whether to include deleted comments. Deleted comments will not include their original content."
              )
              .optional(),
            startModifiedTime: z
              .string()
              .describe(
                "The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time)."
              )
              .optional(),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "comments_drive_api_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "comments_drive_api_remove",
    schema: {
      description: `Use to delete a comment using the "comments.delete" method of Google Drive API.`,
      inputSchema: {
        pathParameters: z.object({
          fileId: z.string().describe("The ID of the file on Google Drive."),
          commentId: z.string().describe("The ID of the comment."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "comments_drive_api_remove",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "revisions_drive_api_list",
    schema: {
      description: "Use to get a list of a file's revisions on Google Drive.",
      inputSchema: {
        pathParameters: z.object({
          fileId: z
            .string()
            .describe(
              "The ID of the file on Google Drive. The file ID is also the same as the Document ID, Spreadsheet ID, Presentation ID, Form ID, and so on.."
            ),
        }),
        count: z
          .number()
          .describe("Number of items. The default is 10.")
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "revisions_drive_api_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "drive_activity_api_query",
    schema: {
      description:
        "Use to query past activity in Google Drive. The activities of the files and folders in Google Drive are retrieved.",
      inputSchema: {
        requestBody: z
          .object({
            consolidationStrategy: z
              .object({
                legacy: z
                  .object({})
                  .describe(
                    "The individual activities are consolidated using the legacy strategy."
                  )
                  .optional(),
              })
              .describe(
                "Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated."
              )
              .optional(),
            filter: z
              .string()
              .describe(
                [
                  `The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional "AND", where each expression is of the form "field operator value".`,
                  `Supported fields:`,
                  ``,
                  `- time: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples:`,
                  `  time > 1452409200000 AND time <= 1492812924310`,
                  `  time >= "2016-01-10T01:02:03-05:00"`,
                  ``,
                  `- detail.action_detail_case: Uses the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To exclude a result from the response, prepend a hyphen (-) to the beginning of the filter string. Examples:`,
                  `  detail.action_detail_case:RENAME`,
                  `  detail.action_detail_case:(CREATE RESTORE)`,
                  `  -detail.action_detail_case:MOVE`,
                ].join("\n")
              )
              .optional(),
            itemName: z
              .string()
              .describe(
                "Return activities for this Drive item. The format is items/ITEM_ID. ITEM_ID is the file ID. The file ID is the same with Spreadsheet ID, Document ID, Preasentation ID, Form ID and so on."
              )
              .optional(),
            ancestorName: z
              .string()
              .describe(
                "Return activities for this Drive folder, plus all children and descendants. The format is items/ITEM_ID. ITEM_ID is the folder ID."
              )
              .optional(),
          })
          .describe("Either itemName or ancestorName must be provided."),
        count: z
          .number()
          .describe("Number of items. The default is 10.")
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "drive_activity_api_query",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_forms = [
  {
    name: "generate_survey_with_google_forms",
    schema: {
      description:
        "Use this to generate a survey with Google Forms. If the number of total questions is not provided, please create 5 questions as the default number of questions.",
      inputSchema: {
        title: z
          .string()
          .describe(
            "The title of the survey. If this is not provided, set the title by understanding the questions."
          ),
        itemList: z
          .array(z.record(z.any()))
          .describe(
            `Create "itemList" by understanding how to create "itemList" by calling a tool "explanation_generate_survey_with_google_forms".`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "generate_survey_with_google_forms",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "generate_quiz_with_google_forms",
    schema: {
      description:
        "Use this to generate a quiz with Google Forms. If the number of total questions is not provided, please create 5 questions as the default number of questions.",
      inputSchema: {
        title: z
          .string()
          .describe(
            "The title of the quiz. If this is not provided, set the title by understanding the questions."
          ),
        itemList: z
          .array(z.record(z.any()))
          .describe(
            `Create "itemList" by understanding how to create "itemList" by calling a tool "explanation_generate_quiz_with_google_forms".`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "generate_quiz_with_google_forms",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_gmail = [
  {
    name: "get_massages_by_time_from_Gmail",
    schema: {
      description: `Get messages (emails) from Gmail using the time. This function returns the messages from "after" to now.`,
      inputSchema: {
        after: z
          .string()
          .describe(
            `Time for retrieving the emails. The emails are retrieved from "after" to now. The date format is "yyyy-MM-dd'T'HH:mm:ss".`
          ),
        excludedMessageIds: z
          .array(z.string().describe(`Excluded message ID.`))
          .describe(`Excluded message IDs.`)
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_massages_by_time_from_Gmail",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "get_massages_by_search_from_Gmail",
    schema: {
      description: `Get messages (emails) from Gmail using the search query. This function returns the messages using the search query.`,
      inputSchema: {
        query: z
          .string()
          .describe(
            `Search query. The search query can be seen at the official document. https://support.google.com/mail/answer/7190`
          ),
        excludedMessageIds: z
          .array(z.string().describe(`Excluded message ID.`))
          .describe(`Excluded message IDs.`)
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_massages_by_search_from_Gmail",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "get_attachment_files_from_Gmail",
    schema: {
      description:
        "Use this to retrieve the attachment files of an email. The attachment files are returned as the file IDs on Google Drive.",
      inputSchema: {
        messageId: z.string().describe(`Message ID of the email.`),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_attachment_files_from_Gmail",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "add_label_to_Gmail",
    schema: {
      description:
        "Add labels to threads of Gmail. Don't use the invalid thread IDs.",
      inputSchema: {
        obj: z
          .array(
            z
              .object({
                threadId: z
                  .string()
                  .describe("The unique identifier for the email thread."),
                labels: z
                  .array(
                    z
                      .string()
                      .describe(
                        "The suitable labels for the thread of the thread ID."
                      )
                  )
                  .describe("Array including the labels."),
              })
              .describe(
                "Thread IDs and labels. The labels are added to each thread IDs."
              )
          )
          .describe(
            `Object array including thread IDs and labels. The labels are added to each thread IDs.`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "add_label_to_Gmail",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "auto_reply_draft_creation_Gmail",
    schema: {
      description:
        "Create automatically drafted reply emails in Gmail. Don't use the invalid message IDs. This function returns the value including the message ID, the draft ID, the URL of the mail.",
      inputSchema: {
        obj: z
          .array(
            z
              .object({
                messageId: z
                  .string()
                  .describe("The unique identifier for the email message."),
                replyMessage: z
                  .string()
                  .describe("Message for replying to the mail."),
                attachmentFiles: z
                  .array(
                    z.string().describe("File ID of the file on Google Drive")
                  )
                  .describe(
                    "Attachment files. If no attachment files are used, please set only the empty array like []."
                  ),
              })
              .describe(
                "Message IDs and reply messages. Each reply message is used as a reply to each message with the message ID."
              )
          )
          .describe(
            `Object array including message IDs and reply messages. Each reply message is used as a reply to each message with the message ID.`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "auto_reply_draft_creation_Gmail",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "auto_new_draft_creation_Gmail",
    schema: {
      description:
        "Create automatically drafted emails in Gmail. This function returns the value, including the message ID and the draft ID. When creating the draft email, confirm the owner's name and insert the sender's name into the footer. Don't use '[Your Name]'. If you have no information about the sender's email, don't include the footer of sender's name in the email.",
      inputSchema: {
        obj: z
          .array(
            z
              .object({
                to: z.string().describe("Recipient mail address."),
                title: z.string().describe("Mail title."),
                body: z.string().describe("Mail body."),
                attachmentFiles: z
                  .array(
                    z.string().describe("File ID of the file on Google Drive")
                  )
                  .describe(
                    "Attachment files. If no attachment files are used, please set only the empty array like []."
                  ),
              })
              .describe(
                "The recipient mail address, the mail title, and the mail body. And, the attachment files."
              )
          )
          .describe(
            `Object array including the recipient mail address, the mail title, and the mail body.`
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "auto_new_draft_creation_Gmail",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "send_mails_Gmail",
    schema: {
      description:
        "Use this to send the draft emails which have already been created. If you want to send an email, first, it is required to create a draft email. By this, the draft email can be sent.",
      inputSchema: {
        draftIds: z
          .array(z.string().describe("Draft ID."))
          .describe(
            `Array including the message IDs. The messages will be sent using the send method of Class GmailApp.GmailDraft.`
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "send_mails_Gmail",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "remove_mails_Gmail",
    schema: {
      description: "Use this to remove the messages.",
      inputSchema: {
        messageIds: z
          .array(z.string().describe("Message ID."))
          .describe(
            `Array including the draft IDs. The draft mails of the draft IDs will be removed using the moveMessageToTrash method of Class GmailApp.`
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "remove_mails_Gmail",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_sheets = [
  {
    name: "get_values_from_google_sheets",
    schema: {
      description:
        "Use this to get cell values from Google Sheets. The spreadsheet ID is used for retrieving the values from the Google Sheets. If you use the spreadsheet URL, get the spreadsheet ID from the URL and use the ID.",
      inputSchema: {
        spreadsheetId: z.string().describe("Spreadsheet ID of Google Sheets."),
        sheetName: z
          .string()
          .describe(
            "Sheet name in the Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets."
          )
          .optional(),
        sheetId: z
          .string()
          .describe(
            "Sheet ID of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets."
          )
          .optional(),
        sheetIndex: z
          .number()
          .describe(
            "Sheet index (The 1st sheet is 0.) of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets."
          )
          .optional(),
        range: z
          .string()
          .describe(
            "Range as A1Notation. The values are retrieved from this range. If this is not used, the data range is automatically used."
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_values_from_google_sheets",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "put_values_to_google_sheets",
    schema: {
      description:
        "Use this to put values into Google Sheets. The spreadsheet ID is used for putting the values to the Google Sheets. If you use the spreadsheet URL, get the spreadsheet ID from the URL and use the ID.",
      inputSchema: {
        spreadsheetId: z.string().describe("Spreadsheet ID of Google Sheets."),
        sheetName: z
          .string()
          .describe(
            "Sheet name in the Google Sheets. If both sheetName and sheetId are not provided, the values are put into the 1st sheet on Google Sheets."
          )
          .optional(),
        sheetId: z
          .string()
          .describe(
            "Sheet ID of the sheet in Google Sheets. If both sheetName and sheetId are not provided, the values are put into the 1st sheet on Google Sheets."
          )
          .optional(),
        sheetIndex: z
          .number()
          .describe(
            "Sheet index (The 1st sheet is 0.) of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are put into the 1st sheet on Google Sheets."
          )
          .optional(),
        values: z
          .array(z.array(z.union([z.string(), z.number()])))
          .describe(
            "Values for putting into Google Sheets. This is required to be a 2-dimensional array."
          ),
        range: z
          .string()
          .describe(
            "Range as A1Notation. The values are retrieved from this range. If this is not used, the values are put into the last row."
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "put_values_to_google_sheets",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "search_values_from_google_sheets",
    schema: {
      description:
        "Use this to search all cells in Google Sheets using a regex. The spreadsheet ID is used for searching a text from the Google Sheets. If you use the spreadsheet URL, get the spreadsheet ID from the URL and use the ID. In this case, the search text is searched to see whether it is the same as the entire cell value. So, if you want to search the cells including 'sample' text, please use a regex like '.*sample.*'.",
      inputSchema: {
        spreadsheetId: z.string().describe("Spreadsheet ID of Google Sheets."),
        searchText: z
          .string()
          .describe(
            "Search text. The search text is searched to see whether it is the same as the entire cell value. So, if you want to search the cells including 'sample' text, please use a regex like '.*sample.*'. You can search the cell coordinates using a regex."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "search_values_from_google_sheets",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "get_google_sheet_object_using_sheets_api",
    schema: {
      description:
        "Use this to get Google Sheets Object using Sheets API. When this tool is used, for example, the sheet names can be converted to sheet IDs. This cannot be used for retrieving the cell values.",
      inputSchema: {
        pathParameters: z.object({
          spreadsheetId: z
            .string()
            .describe("Spreadsheet ID of Google Sheets."),
        }),
        queryParameters: z
          .object({
            ranges: z
              .array(
                z
                  .string()
                  .describe(
                    "The ranges to retrieve from the spreadsheet. It's A1Notation."
                  )
              )
              .optional(),
            includeGridData: z
              .boolean()
              .describe(
                "True if grid data should be returned. This parameter is ignored if a field mask was set in the request."
              )
              .optional(),
            excludeTablesInBandedRanges: z
              .boolean()
              .describe(
                "True if tables should be excluded in the banded ranges. False if not set."
              )
              .optional(),
            fields: z
              .string()
              .describe(
                "Field masks are a way for API callers to list the fields that a request should return or update. Using a FieldMask allows the API to avoid unnecessary work and improves performance. If you want more information about 'fields', please search https://developers.google.com/workspace/sheets/api/guides/field-masks"
              )
              .optional(),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_google_sheet_object_using_sheets_api",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "manage_google_sheets_using_sheets_api",
    schema: {
      description: `Use this to update Google Sheets using the Sheets API. Provide the request body for the batchUpdate method. In order to retrieve the detailed information of the spreadsheet, including the sheet ID and so on, it is required to use a tool "get_google_sheet_object_using_sheets_api".`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            `Create the request body for "Method: spreadsheets.batchUpdate" of Google Sheets API. If you want to know how to create the request body, please check a tool "explanation_manage_google_sheets_using_sheets_api".`
          ),
        pathParameters: z.object({
          spreadsheetId: z
            .string()
            .describe("The spreadsheet ID to apply the updates to."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "manage_google_sheets_using_sheets_api",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_slides = [
  {
    name: "generate_presentation_with_google_slides",
    schema: {
      description:
        "Use this to create and generate a presentation using Google Slides.",
      inputSchema: {
        title: z.string().describe("Title of the presentation."),
        name: z
          .string()
          .describe(
            "Your name. This name is used as the speaker name of the presentation."
          ),
        presentationTime: z
          .number()
          .describe("Presentation time. The unit is minute."),
        text: z.string().describe("Description of the presentation."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "generate_presentation_with_google_slides",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "get_google_slides_object_using_slides_api",
    schema: {
      description:
        "Use this to get Google Slides Object using Slides API. When this tool is used, for example, the object IDs on the slides can be retrieved.",
      inputSchema: {
        pathParameters: z.object({
          presentationId: z
            .string()
            .describe("The presentation ID of the presentation to retrieve."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_google_slides_object_using_slides_api",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "manage_google_slides_using_slides_api",
    schema: {
      description: `Use this to manage Google Slides using Slides API. Provide the request body for batchUpdate method. In order to retrieve the detailed information of the spreadsheet, including the object ID and so on, it is required to use a tool "get_google_slides_object_using_slides_api".`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            `Create the request body for "Method: documents.batchUpdate" of Google Docs API. If you want to know how to create the request body, please check a tool "explanation_manage_google_slides_using_slides_api".`
          ),
        pathParameters: z.object({
          presentationId: z
            .string()
            .describe("The presentation ID to apply the updates to."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "manage_google_slides_using_slides_api",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_classroom = [
  {
    name: "classroom_courses_list",
    schema: {
      description: [
        `Use to retrieve courses of Google Classroom using a method "courses.list" of Google Classroom API.`,
        `Unless otherwise specified, run this tool without parameters of "studentId", "teacherId", and "courseStates".`,
      ].join("\n"),
      inputSchema: {
        queryParameters: z.object({
          studentId: z
            .string()
            .describe(
              [
                `Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            )
            .optional(),
          teacherId: z
            .string()
            .describe(
              [
                `Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            )
            .optional(),
          courseStates: z
            .array(
              z
                .string()
                .describe(
                  "Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED."
                )
            )
            .describe(
              "Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED."
            )
            .optional(),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_create",
    schema: {
      description: [
        `Use to create a course using the "courses.create" method of Google Classroom API.`,
        `The user specified in ownerId is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain.`,
      ].join("\n"),
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A Course resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_update",
    schema: {
      description: `Use to update a course using the "courses.update" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A Course resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          id: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_update",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_patch",
    schema: {
      description: `Use to update one or more fields in a course using the "courses.patch" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A Course resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          id: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
        queryParameters: z.object({
          updateMask: z
            .string()
            .describe(
              [
                `Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid:`,
                ``,
                `name`,
                `section`,
                `descriptionHeading`,
                `description`,
                `room`,
                `courseState`,
                `ownerId`,
                ``,
                `Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete.`,
                `When set in a query parameter, this field should be specified as`,
                `updateMask=<field1>,<field2>,...`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_patch",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_remove",
    schema: {
      description: `Use to deletes a course using the "courses.delete" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          id: z
            .string()
            .describe(
              "Course ID. Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_remove",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_get",
    schema: {
      description: `Use to return metadata of a course.`,
      inputSchema: {
        pathParameters: z.object({
          id: z
            .string()
            .describe(
              "Course ID. Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_getGradingPeriodSettings",
    schema: {
      description: `Use to return the grading period settings in a course.`,
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_getGradingPeriodSettings",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_updateGradingPeriodSettings",
    schema: {
      description: `Use to update grading period settings of a course using the "courses.updateGradingPeriodSettings" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z
          .object({
            gradingPeriods: z
              .array(
                z.object({
                  title: z
                    .string()
                    .describe(
                      "Title of the grading period. For example, “Semester 1”."
                    )
                    .optional(),
                  startDate: z
                    .string()
                    .describe(
                      "Start date, in UTC, of the grading period. Inclusive. This object contains three properties: `year` (integer, from 1 to 9999), `month` (integer, from 1 to 12), and `day` (integer, from 1 to 31). The `day` must be valid for the given year and month."
                    ),
                  endDate: z
                    .string()
                    .describe(
                      "End date, in UTC, of the grading period. Inclusive. This object contains three properties: `year` (integer, from 1 to 9999), `month` (integer, from 1 to 12), and `day` (integer, from 1 to 31). The `day` must be valid for the given year and month."
                    ),
                })
              )
              .describe("The list of grading periods."),
            applyToExistingCoursework: z
              .boolean()
              .describe(
                "Supports toggling the application of grading periods on existing stream items. Once set, this value is persisted meaning that it does not need to be set in every request to update GradingPeriodSettings. If not previously set, the default is False."
              )
              .optional(),
          })
          .describe("Settings for grading periods in Google Classroom."),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
        queryParameters: z
          .object({
            updateMask: z
              .string()
              .describe(
                'Mask that identifies which fields in the GradingPeriodSettings to update.\n\nThe GradingPeriodSettings gradingPeriods list will be fully replaced by the grading periods specified in the update request. For example:\n- Grading periods included in the list without an ID are considered additions, and a new ID will be assigned when the request is made.\n- Grading periods that currently exist, but are missing from the request will be considered deletions.\n- Grading periods with an existing ID and modified data are considered edits. Unmodified data will be left as is.\n- Grading periods included with an unknown ID will result in an error.\n\nThe following fields may be specified:\n- gradingPeriods\n- applyToExistingCoursework\n\nThis is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".'
              ),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_updateGradingPeriodSettings",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_aliases_list",
    schema: {
      description: "Use to get a list of aliases.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_aliases_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_aliases_create",
    schema: {
      description: "Use to create an alias for a course.",
      inputSchema: {
        requestBody: z.object({
          alias: z
            .string()
            .describe(
              [
                `Alias string. The format of the string indicates the desired alias scoping.`,
                ``,
                `"d:<name>" indicates a domain-scoped alias. Example: "d:math_101"`,
                `"p:<name>" indicates a project-scoped alias. Example: "p:abc123"`,
                `This field has a maximum length of 256 characters.`,
              ].join("\n")
            ),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_aliases_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_aliases_delete",
    schema: {
      description: "Use to delete an alias of a course.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          alias: z
            .string()
            .describe(
              "Alias to delete. This may not be the Classroom-assigned identifier."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_aliases_delete",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_list",
    schema: {
      description:
        "Use to return a list of course work that the requester is permitted to view.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
        queryParameters: z
          .object({
            courseWorkStates: z
              .array(
                z.enum([
                  "COURSE_WORK_STATE_UNSPECIFIED",
                  "PUBLISHED",
                  "DRAFT",
                  "DELETED",
                ])
              )
              .describe(
                "Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of PUBLISHED is returned. [1]"
              )
              .optional(),
            orderBy: z
              .string()
              .describe(
                "Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are updateTime and dueDate. Supported direction keywords are asc and desc. If not specified, updateTime desc is the default behavior. [1]"
              )
              .optional(),
            previewVersion: z
              .enum(["V1_PREVIEW"])
              .describe(
                "Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program. [1]"
              )
              .optional(),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_create",
    schema: {
      description: `Use to create course work using the "courses.courseWork.create" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A CourseWork resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_patch",
    schema: {
      description: `Use to update one or more fields of a course work using the "courses.courseWork.patch" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A CourseWork resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z
            .string()
            .describe("Course work ID. Identifier of the course work."),
        }),
        queryParameters: z.object({
          updateMask: z
            .string()
            .describe(
              [
                `Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the CourseWork object. If a field that does not support empty values is included in the update mask and not set in the CourseWork object, an INVALID_ARGUMENT error is returned.`,
                ``,
                `The following fields may be specified by teachers:`,
                ``,
                `title`,
                `description`,
                `state`,
                `dueDate`,
                `dueTime`,
                `maxPoints`,
                `scheduledTime`,
                `submissionModificationMode`,
                `topicId`,
                `gradingPeriodId`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_patch",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_delete",
    schema: {
      description: "Use to delete a course work.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z
            .string()
            .describe(
              "Course work ID. Identifier of the course work to delete. This identifier is a Classroom-assigned identifier."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_delete",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_get",
    schema: {
      description: "Use to return metadata of course work.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z
            .string()
            .describe(
              "Course work ID. Identifier of the course work to delete. This identifier is a Classroom-assigned identifier."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_modifyAssignees",
    schema: {
      description: "Use to modify assignee mode and options of a coursework.",
      inputSchema: {
        requestBody: z.object({
          assigneeMode: z
            .enum(["ALL_STUDENTS", "INDIVIDUAL_STUDENTS"])
            .describe(
              "Mode of the coursework describing whether it will be assigned to all students or specified individual students. ALL_STUDENTS: All students can see the item. This is the default state., INDIVIDUAL_STUDENTS: A subset of the students can see the item."
            ),
          modifyIndividualStudents: z
            .object({
              addStudentIds: z
                .array(
                  z
                    .string()
                    .describe(
                      "IDs of students to be added as having access to this coursework/announcement."
                    )
                )
                .optional(),
              removeStudentIds: z
                .array(
                  z
                    .string()
                    .describe(
                      "IDs of students to be removed from having access to this coursework/announcement."
                    )
                )
                .optional(),
            })
            .describe(
              "Set which students are assigned or not assigned to the coursework. Must be specified only when assigneeMode is INDIVIDUAL_STUDENTS."
            )
            .optional(),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z
            .string()
            .describe(
              "Course work ID. Identifier of the course work to delete. This identifier is a Classroom-assigned identifier."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_modifyAssignees",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_students_list",
    schema: {
      description:
        "Use to return a list of students of this course that the requester is permitted to view.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_students_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_students_create",
    schema: {
      description: `Use to add a user as a student of a course. using the "courses.students.create" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z.object({
          userId: z
            .string()
            .describe(
              [
                `Identifier of the user.`,
                `When specified as a parameter of a request, this identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            ),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
        queryParameters: z
          .object({
            enrollmentCode: z
              .string()
              .describe(
                "Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user."
              )
              .optional(),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_students_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_students_delete",
    schema: {
      description: "Use to delete a student of a course.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          userId: z
            .string()
            .describe(
              [
                `Identifier of the student to delete. The identifier can be one of the following:`,
                `the numeric identifier for the user`,
                `the email address of the user`,
                `the string literal "me", indicating the requesting user`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_students_delete",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_students_get",
    schema: {
      description: "Use to return a student of a course.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          userId: z
            .string()
            .describe(
              [
                `Identifier of the student to delete. The identifier can be one of the following:`,
                `the numeric identifier for the user`,
                `the email address of the user`,
                `the string literal "me", indicating the requesting user`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_students_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_teachers_list",
    schema: {
      description:
        "Use to return a list of teachers of this course that the requester is permitted to view.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_teachers_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_teachers_create",
    schema: {
      description: `Use to add a user as a teacher of a course using the "courses.teachers.create" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z.object({
          userId: z
            .string()
            .describe(
              [
                `Identifier of the user.`,
                `When specified as a parameter of a request, this identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            ),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_teachers_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_teachers_delete",
    schema: {
      description: "Use to delete a teacher of a course.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          userId: z
            .string()
            .describe(
              [
                `Identifier of the teacher to delete. The identifier can be one of the following:`,
                `the numeric identifier for the user`,
                `the email address of the user`,
                `the string literal "me", indicating the requesting user`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_teachers_delete",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_teachers_get",
    schema: {
      description: "Use to return a teacher of a course.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          userId: z
            .string()
            .describe(
              [
                `Identifier of the teacher to delete. The identifier can be one of the following:`,
                `the numeric identifier for the user`,
                `the email address of the user`,
                `the string literal "me", indicating the requesting user`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_teachers_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWorkMaterials_list",
    schema: {
      description:
        "Returns a list of course work material that the requester is permitted to view.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
        queryParameters: z
          .object({
            courseWorkMaterialStates: z
              .array(
                z.enum([
                  "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
                  "PUBLISHED",
                  "DRAFT",
                  "DELETED",
                ])
              )
              .describe(
                "Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of PUBLISHED is returned."
              )
              .optional(),
            orderBy: z
              .string()
              .describe(
                "Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is updateTime. Supported direction keywords are asc and desc. If not specified, updateTime desc is the default behavior. Examples: updateTime asc, updateTime"
              )
              .optional(),
            materialLink: z
              .string()
              .describe(
                "Optional filtering for course work material with at least one link material whose URL partially matches the provided string."
              )
              .optional(),
            materialDriveId: z
              .string()
              .describe(
                "Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If materialLink is also specified, course work material must have materials matching both filters."
              )
              .optional(),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWorkMaterials_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWorkMaterials_create",
    schema: {
      description: `Use to creates a course work material using the "courses.courseWorkMaterials.create" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z.object({
          title: z
            .string()
            .describe(
              "Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters."
            ),
          description: z
            .string()
            .describe(
              "Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters."
            )
            .optional(),
          materials: z
            .array(
              z
                .record(z.any())
                .describe(
                  "Material attached to course work. This can be a drive file, a YouTube video, a link, or a form."
                )
            )
            .describe(
              "Additional materials. A course work material must have no more than 20 material items. [1]"
            )
            .optional(),
          state: z
            .enum([
              "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
              "PUBLISHED",
              "DRAFT",
              "DELETED",
            ])
            .describe(
              "Status of this course work material. If unspecified, the default state is DRAFT."
            )
            .optional(),
          scheduledTime: z
            .string()
            .datetime()
            .describe(
              "Optional timestamp when this course work material is scheduled to be published."
            )
            .optional(),
          assigneeMode: z
            .enum([
              "ASSIGNEE_MODE_UNSPECIFIED",
              "ALL_STUDENTS",
              "INDIVIDUAL_STUDENTS",
            ])
            .describe(
              "Assignee mode of the course work material. If unspecified, the default value is ALL_STUDENTS."
            )
            .optional(),
          individualStudentsOptions: z
            .object({
              studentIds: z.array(z.string()).optional(),
            })
            .describe(
              "Assignee details about a coursework/announcement. This field is set if and only if assigneeMode is INDIVIDUAL_STUDENTS."
            )
            .optional(),
          topicId: z
            .string()
            .describe(
              "Identifier for the topic that this course work material is associated with. Must match an existing topic in the course."
            )
            .optional(),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWorkMaterials_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWorkMaterials_patch",
    schema: {
      description: `Use to update one or more fields of a course work material using the "courses.courseWorkMaterials.patch" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z.object({
          title: z
            .string()
            .describe(
              "Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters."
            ),
          description: z
            .string()
            .describe(
              "Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters."
            )
            .optional(),
          materials: z
            .array(
              z
                .record(z.any())
                .describe(
                  "Material attached to course work. This can be a drive file, a YouTube video, a link, or a form."
                )
            )
            .describe(
              "Additional materials. A course work material must have no more than 20 material items. [1]"
            )
            .optional(),
          state: z
            .enum([
              "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
              "PUBLISHED",
              "DRAFT",
              "DELETED",
            ])
            .describe(
              "Status of this course work material. If unspecified, the default state is DRAFT."
            )
            .optional(),
          scheduledTime: z
            .string()
            .datetime()
            .describe(
              "Optional timestamp when this course work material is scheduled to be published."
            )
            .optional(),
          assigneeMode: z
            .enum([
              "ASSIGNEE_MODE_UNSPECIFIED",
              "ALL_STUDENTS",
              "INDIVIDUAL_STUDENTS",
            ])
            .describe(
              "Assignee mode of the course work material. If unspecified, the default value is ALL_STUDENTS."
            )
            .optional(),
          individualStudentsOptions: z
            .object({
              studentIds: z.array(z.string()).optional(),
            })
            .describe(
              "Assignee details about a coursework/announcement. This field is set if and only if assigneeMode is INDIVIDUAL_STUDENTS."
            )
            .optional(),
          topicId: z
            .string()
            .describe(
              "Identifier for the topic that this course work material is associated with. Must match an existing topic in the course."
            )
            .optional(),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z.string().describe("Identifier of the course work material."),
        }),
        queryParameters: z.object({
          updateMask: z
            .string()
            .describe(
              'Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an INVALID_ARGUMENT error is returned.\n\nThe following fields may be specified by teachers:\n\ntitle\ndescription\nstate\nscheduledTime\ntopicId\n\nThis is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".'
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWorkMaterials_patch",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWorkMaterials_delete",
    schema: {
      description: "Use to delete a course work material.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z
            .string()
            .describe(
              "Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWorkMaterials_delete",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWorkMaterials_get",
    schema: {
      description: "Use to return a course work material.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z.string().describe("Identifier of the course work material."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWorkMaterials_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_studentSubmissions_list",
    schema: {
      description:
        "Returns a list of student submissions that the requester is permitted to view.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z
            .string()
            .describe(
              'Identifier of the student work to request. This may be set to the string literal "-" to request student work for all course work in the specified course.'
            ),
        }),
        queryParameters: z
          .object({
            userId: z
              .string()
              .describe(
                "Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: the numeric identifier for the user, the email address of the user, or the string literal 'me', indicating the requesting user."
              )
              .optional(),
            states: z
              .array(
                z.enum([
                  "SUBMISSION_STATE_UNSPECIFIED",
                  "NEW",
                  "CREATED",
                  "TURNED_IN",
                  "RETURNED",
                  "RECLAIMED_BY_STUDENT",
                ])
              )
              .describe(
                "Requested submission states. If specified, returned student submissions match one of the specified submission states."
              )
              .optional(),
            late: z
              .enum(["LATE_VALUES_UNSPECIFIED", "LATE_ONLY", "NOT_LATE_ONLY"])
              .describe(
                "Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of late value."
              )
              .optional(),
            previewVersion: z
              .string()
              .describe(
                "Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program."
              )
              .optional(),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_studentSubmissions_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_studentSubmissions_patch",
    schema: {
      description: `Use to update one or more fields of a student submission using the "courses.courseWork.studentSubmissions.patch" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z.object({
          draftGrade: z
            .number()
            .describe(
              "Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers."
            )
            .optional(),
          assignedGrade: z
            .number()
            .describe(
              "Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers."
            )
            .optional(),
          assignmentSubmission: z
            .object({
              attachments: z
                .array(
                  z
                    .record(z.any())
                    .describe(
                      "The file can be one of the following types: driveFile, youTubeVideo, link, or form."
                    )
                )
                .optional(),
            })
            .optional(),
          shortAnswerSubmission: z
            .object({
              answer: z
                .string()
                .describe("Student response to a short-answer question.")
                .optional(),
            })
            .optional(),
          multipleChoiceSubmission: z
            .object({
              answer: z
                .string()
                .describe("Student's select choice.")
                .optional(),
            })
            .optional(),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z.string().describe("Identifier of the course work."),
          id: z.string().describe("Identifier of the student submission."),
        }),
        queryParameters: z.object({
          updateMask: z
            .string()
            .describe(
              'Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified.\nThe following fields may be specified by teachers:\n\ndraftGrade\nassignedGrade\nThis is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".'
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_studentSubmissions_patch",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_studentSubmissions_reclaim",
    schema: {
      description: `Use to reclaim a student submission on behalf of the student that owns it using the "courses.courseWork.studentSubmissions.reclaim" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z.string().describe("Identifier of the course work."),
          id: z.string().describe("Identifier of the student submission."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_studentSubmissions_reclaim",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_studentSubmissions_return",
    schema: {
      description: `Use to returns a student submission using the "courses.courseWork.studentSubmissions.return" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z.string().describe("Identifier of the course work."),
          id: z.string().describe("Identifier of the student submission."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_studentSubmissions_return",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_studentSubmissions_turnIn",
    schema: {
      description: `Use to turn in a student submission using the "courses.courseWork.studentSubmissions.turnIn" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z.string().describe("Identifier of the course work."),
          id: z.string().describe("Identifier of the student submission."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_studentSubmissions_turnIn",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_studentSubmissions_get",
    schema: {
      description: `Use to return the metadata of a student submission using the "courses.courseWork.studentSubmissions.get" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z.string().describe("Identifier of the course work."),
          id: z.string().describe("Identifier of the student submission."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_studentSubmissions_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_announcements_list",
    schema: {
      description:
        "Use to return a list of announcements that the requester is permitted to view.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
        queryParameters: z
          .object({
            announcementStates: z
              .array(z.enum(["PUBLISHED", "DRAFT", "DELETED"]))
              .describe(
                "Restriction on the state of announcements returned. If this argument is left unspecified, the default value is PUBLISHED."
              )
              .optional(),
            orderBy: z
              .string()
              .describe(
                "Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is updateTime. Supported direction keywords are asc and desc. If not specified, updateTime desc is the default behavior. Examples: updateTime asc, updateTime"
              )
              .optional(),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_announcements_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_announcements_create",
    schema: {
      description: `Use to creates an announcement using the "courses.announcements.create" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "An Announcement resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_announcements_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_announcements_patch",
    schema: {
      description: `Use to update one or more fields of an announcement using the "courses.announcements.patch" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "An Announcement resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z.string().describe("Identifier of the announcement."),
        }),
        queryParameters: z.object({
          updateMask: z
            .string()
            .describe(
              [
                `Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an INVALID_ARGUMENT error is returned.`,
                `The following fields may be specified by teachers:`,
                ``,
                `text`,
                `state`,
                `scheduledTime`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_announcements_patch",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_announcements_delete",
    schema: {
      description: "Use to delete an announcement.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z
            .string()
            .describe(
              "Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_announcements_delete",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_announcements_get",
    schema: {
      description: "Use to return an announcement.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z.string().describe("Identifier of the announcement."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_announcements_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_announcements_modifyAssignees",
    schema: {
      description: `Use to modify assignee mode and options of an announcement using the "courses.announcements.modifyAssignees" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z.object({
          assigneeMode: z
            .enum(["ALL_STUDENTS", "INDIVIDUAL_STUDENTS"])
            .describe(
              "Mode of the announcement describing whether it is accessible by all students or specified individual students."
            ),
          modifyIndividualStudentsOptions: z
            .object({
              addStudentIds: z
                .string()
                .describe(
                  "IDs of students to be added as having access to this coursework/announcement."
                )
                .optional(),
              removeStudentIds: z
                .string()
                .describe(
                  "IDs of students to be removed from having access to this coursework/announcement."
                )
                .optional(),
            })
            .describe(
              "Set which students can view or cannot view the announcement. Must be specified only when assigneeMode is INDIVIDUAL_STUDENTS."
            ),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z.string().describe("Identifier of the announcement."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_announcements_modifyAssignees",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_rubrics_list",
    schema: {
      description:
        "Returns a list of rubrics that the requester is permitted to view.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z
            .string()
            .describe(
              'Identifier of the student work to request. This may be set to the string literal "-" to request student work for all course work in the specified course.'
            ),
        }),
        queryParameters: z
          .object({
            previewVersion: z
              .enum([
                "PREVIEW_VERSION_UNSPECIFIED",
                "V1_20231110_PREVIEW",
                "V1_20240401_PREVIEW",
                "V1_20240930_PREVIEW",
              ])
              .describe(
                "Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program."
              )
              .optional(),
          })
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_rubrics_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_rubrics_create",
    schema: {
      description: `Use to creates a rubric using the "courses.courseWork.rubrics.create" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z.object({
          criteria: z.array(
            z.object({
              id: z
                .string()
                .describe("The criterion ID. On creation, an ID is assigned.")
                .optional(),
              title: z
                .string()
                .describe("The title of the criterion.")
                .optional(),
              description: z
                .string()
                .describe("The description of the criterion.")
                .optional(),
              levels: z
                .array(
                  z
                    .record(z.any())
                    .describe(
                      "A level of performance within a criterion. It has an ID, a title, a description, and optional points. The ID is assigned on creation. The title must be set if points are not. Points, if set, must be distinct across all levels within a single criterion, and 0 is considered distinct from no points."
                    )
                )
                .describe("The list of levels within this criterion.")
                .optional(),
            })
          ),
          sourceSpreadsheetId: z
            .string()
            .describe(
              "Input only. Immutable. Google Sheets ID of the spreadsheet. This spreadsheet must contain formatted rubric settings."
            )
            .optional(),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z.string().describe("Identifier of the course work."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_rubrics_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_rubrics_patch",
    schema: {
      description: `Use to update a rubric using the "courses.courseWork.rubrics.patch" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z.object({
          criteria: z.array(
            z.object({
              id: z
                .string()
                .describe("The criterion ID. On creation, an ID is assigned.")
                .optional(),
              title: z
                .string()
                .describe("The title of the criterion.")
                .optional(),
              description: z
                .string()
                .describe("The description of the criterion.")
                .optional(),
              levels: z
                .array(
                  z
                    .record(z.any())
                    .describe(
                      "A level of performance within a criterion. It has an ID, a title, a description, and optional points. The ID is assigned on creation. The title must be set if points are not. Points, if set, must be distinct across all levels within a single criterion, and 0 is considered distinct from no points."
                    )
                )
                .describe("The list of levels within this criterion.")
                .optional(),
            })
          ),
          sourceSpreadsheetId: z
            .string()
            .describe(
              "Input only. Immutable. Google Sheets ID of the spreadsheet. This spreadsheet must contain formatted rubric settings."
            )
            .optional(),
        }),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z.string().describe("Identifier of the course work."),
          id: z.string().describe("Identifier of the rubric."),
        }),
        queryParameters: z.object({
          updateMask: z
            .string()
            .describe(
              'Mask that identifies which fields on the rubric to update. This field is required to do an update. The update fails if invalid fields are specified. There are multiple options to define the criteria of a rubric: the sourceSpreadsheetId and the criteria list. Only one of these can be used at a time to define a rubric.\n\nThe rubric criteria list is fully replaced by the rubric criteria specified in the update request. For example, if a criterion or level is missing from the request, it is deleted. New criteria and levels are added and an ID is assigned. Existing criteria and levels retain the previously assigned ID if the ID is specified in the request.\n\nThe following fields can be specified by teachers:\n\ncriteria\nsourceSpreadsheetId\n\nThis is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".'
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_rubrics_patch",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_rubrics_delete",
    schema: {
      description: `Use to delete a rubric using the "courses.courseWork.rubrics.delete" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z.string().describe("Identifier of the course work."),
          id: z.string().describe("Identifier of the rubric."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_rubrics_delete",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_courseWork_rubrics_get",
    schema: {
      description: `Use to return a rubric using the "courses.courseWork.rubrics.get" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          courseWorkId: z.string().describe("Identifier of the course work."),
          id: z.string().describe("Identifier of the rubric."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_courseWork_rubrics_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_topics_list",
    schema: {
      description:
        "Use to return a list of topics that the requester is permitted to view.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_topics_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_topics_create",
    schema: {
      description: `Use to creates a topic using the "courses.topics.create" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A Topic resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_topics_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_topics_patch",
    schema: {
      description: `Use to update one or more fields of a topic using the "courses.topics.patch" method of Google Classroom API.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A Topic resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z.string().describe("Identifier of the topic."),
        }),
        queryParameters: z.object({
          updateMask: z
            .string()
            .describe(
              [
                `Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an INVALID_ARGUMENT error is returned.`,
                `The following fields may be specified:`,
                ``,
                `name`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_topics_patch",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_topics_delete",
    schema: {
      description: "Use to delete a topic.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z.string().describe("Identifier of the topic to delete."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_topics_delete",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_courses_topics_get",
    schema: {
      description: "Use to return a topic.",
      inputSchema: {
        pathParameters: z.object({
          courseId: z
            .string()
            .describe(
              "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            ),
          id: z.string().describe("Identifier of the topic."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_courses_topics_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_invitations_list",
    schema: {
      description: [
        `Use to retrieve a list of invitations that the requesting user is permitted to view, restricted to those that match the list request of Google Classroom using a method "invitations.list" of Google Classroom API.`,
        `At least one of userId or courseId must be supplied. Both fields can be supplied.`,
      ].join("\n"),
      inputSchema: {
        queryParameters: z.object({
          userId: z
            .string()
            .describe(
              [
                `Restricts returned invitations to those for a specific user. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            )
            .optional(),
          courseId: z
            .string()
            .describe(
              "Restricts returned invitations to those for a course with the specified identifier."
            )
            .optional(),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_invitations_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_invitations_create",
    schema: {
      description: [
        `Use to create an invitation using the "invitations.create" method of Google Classroom API.`,
        `Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes.`,
      ].join("\n"),
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "An Invitation resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_invitations_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_invitations_remove",
    schema: {
      description: `Use to deletes an invitation using the "invitations.delete" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          id: z.string().describe("Identifier of the invitation to delete."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_invitations_remove",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_invitations_get",
    schema: {
      description: `Use to return an invitation using the "invitations.get" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          id: z.string().describe("Identifier of the invitation to return."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_invitations_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_invitations_accept",
    schema: {
      description: `Use to accept an invitation using the "invitations.accept" method of Google Classroom API. Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation.`,
      inputSchema: {
        pathParameters: z.object({
          id: z.string().describe("Identifier of the invitation to accept."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_invitations_accept",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_registrations_create",
    schema: {
      description: [
        `Use to create a Registration using the "registrations.create" method of Google Classroom API.`,
        `Creates a Registration, causing Classroom to start sending notifications from the provided feed to the destination provided in cloudPubSubTopic.`,
        `Returns the created Registration. Currently, this will be the same as the argument, but with server-assigned fields such as expiryTime and id filled in.`,
        `Note that any value specified for the expiryTime or id fields will be ignored.`,
        `While Classroom may validate the cloudPubSubTopic and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it.`,
      ].join("\n"),
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A Registration resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_registrations_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_registrations_delete",
    schema: {
      description: `Use to deletes a Registration using the "registrations.delete" method of Google Classroom API. Deletes a Registration, causing Classroom to stop sending notifications for that Registration.`,
      inputSchema: {
        pathParameters: z.object({
          registrationId: z
            .string()
            .describe("The registrationId of the Registration to be deleted."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_registrations_delete",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_userProfiles_get",
    schema: {
      description: `Use to return a user profile using the "userProfiles.get" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          userId: z
            .string()
            .describe(
              [
                `Identifier of the profile to return. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_userProfiles_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_userProfiles_guardianInvitations_list",
    schema: {
      description: `Use to retrieve a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided using a method "userProfiles.guardianInvitations.list" of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          studentId: z
            .string()
            .describe(
              [
                `The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
                `- the string literal "-", indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.`,
              ].join("\n")
            ),
        }),
        queryParameters: z.object({
          invitedEmailAddress: z
            .string()
            .describe(
              "If specified, only results with the specified invitedEmailAddress are returned."
            )
            .optional(),
          states: z
            .array(z.enum(["PENDING", "COMPLETE"]))
            .describe(
              "If specified, only results with the specified state values are returned. Otherwise, results with a state of PENDING are returned."
            )
            .optional(),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_userProfiles_guardianInvitations_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_userProfiles_guardianInvitations_create",
    schema: {
      description: `Use to creates a guardian invitation using the "courses.topics.create" method of Google Classroom API. Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A GuardianInvitation resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          studentId: z
            .string()
            .describe("ID of the student (in standard format)"),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_userProfiles_guardianInvitations_create",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_userProfiles_guardianInvitations_patch",
    schema: {
      description: `Use to modify a guardian invitation using the "userProfiles.guardianInvitations.patch" method of Google Classroom API. Currently, the only valid modification is to change the state from PENDING to COMPLETE. This has the effect of withdrawing the invitation.`,
      inputSchema: {
        requestBody: z
          .record(z.any())
          .describe(
            "A GuardianInvitation resource. Refer to the Google Classroom API documentation for the object's structure."
          ),
        pathParameters: z.object({
          studentId: z
            .string()
            .describe(
              "The ID of the student whose guardian invitation is to be modified."
            ),
          invitationId: z
            .string()
            .describe("The id field of the GuardianInvitation to be modified."),
        }),
        queryParameters: z.object({
          updateMask: z
            .string()
            .describe(
              [
                `Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid:`,
                ``,
                `state`,
                `When set in a query parameter, this field should be specified as`,
                `updateMask=<field1>,<field2>,...`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_userProfiles_guardianInvitations_patch",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_userProfiles_guardianInvitations_get",
    schema: {
      description: `Use to return a specific guardian invitation using the "userProfiles.guardianInvitations.get" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          studentId: z
            .string()
            .describe(
              "The ID of the student whose guardian invitation is being requested."
            ),
          invitationId: z
            .string()
            .describe(
              "The id field of the GuardianInvitation being requested."
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_userProfiles_guardianInvitations_get",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_userProfiles_guardians_list",
    schema: {
      description: [
        `Use to retrieve a list of guardians that the requesting user is permitted to view, restricted to those that match the request using a method "userProfiles.guardianInvitations.list" of Google Classroom API.`,
        `To list guardians for any student that the requesting user may view guardians for, use the literal character - for the student ID.`,
      ].join("\n"),
      inputSchema: {
        pathParameters: z.object({
          studentId: z
            .string()
            .describe(
              [
                `Filter results by the student who the guardian is linked to. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
                `- the string literal "-", indicating that results should be returned for all students that the requesting user has access to view.`,
              ].join("\n")
            ),
        }),
        queryParameters: z.object({
          invitedEmailAddress: z
            .string()
            .describe(
              "Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators."
            )
            .optional(),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_userProfiles_guardians_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_userProfiles_guardians_remove",
    schema: {
      description: `Use to delete a guardian using the "userProfiles.guardians.delete" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          studentId: z
            .string()
            .describe(
              [
                `The student whose guardian is to be deleted. One of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            ),
          guardianId: z.string().describe("The id field from a Guardian."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_userProfiles_guardians_remove",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "classroom_userProfiles_guardians_get",
    schema: {
      description: `Use to return a specific guardian using the "userProfiles.guardians.get" method of Google Classroom API.`,
      inputSchema: {
        pathParameters: z.object({
          studentId: z
            .string()
            .describe(
              [
                `The student whose guardian is to be deleted. One of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            ),
          guardianId: z.string().describe("The id field from a Guardian."),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "classroom_userProfiles_guardians_get",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_people = [
  {
    name: "people_contactGroups_list",
    schema: {
      description:
        "List all contact groups owned by the authenticated user. Members of the contact groups are not populated.",
      inputSchema: {
        queryParameters: z
          .object({
            syncToken: z
              .string()
              .describe(
                "Optional. A sync token, returned by a previous call to contactgroups.list . Only resources changed since the sync token was created will be returned."
              )
              .optional(),
            groupFields: z
              .string()
              .describe(
                "Optional. A field mask to restrict which fields on the group are returned. Defaults to metadata, groupType, memberCount, and name if not set or set to empty. Valid fields are: clientData, groupType, memberCount, metadata, name"
              )
              .optional(),
          })
          .describe("Parameters that are appended to the URL.")
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "people_contactGroups_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "people_otherContacts_list",
    schema: {
      description:
        'List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions.',
      inputSchema: {
        queryParameters: z
          .object({
            readMask: z
              .string()
              .describe(
                [
                  "Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. You can select some masks from the following masks.",
                  "<masks>",
                  [
                    "addresses",
                    "ageRanges",
                    "biographies",
                    "birthdays",
                    "calendarUrls",
                    "clientData",
                    "coverPhotos",
                    "emailAddresses",
                    "events",
                    "externalIds",
                    "genders",
                    "imClients",
                    "interests",
                    "locales",
                    "locations",
                    "memberships",
                    "metadata",
                    "miscKeywords",
                    "names",
                    "nicknames",
                    "occupations",
                    "organizations",
                    "phoneNumbers",
                    "photos",
                    "relations",
                    "sipAddresses",
                    "skills",
                    "urls",
                    "userDefined",
                  ].join(","),
                  "</masks>",
                ].join("\n")
              ),
            requestSyncToken: z
              .boolean()
              .describe(
                "Optional. Whether the response should return nextSyncToken on the last page of results."
              )
              .optional(),
            sources: z
              .enum(["READ_SOURCE_TYPE_CONTACT", "READ_SOURCE_TYPE_PROFILE"])
              .describe(
                "Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT if not set."
              )
              .optional(),
            syncToken: z
              .string()
              .describe(
                "Optional. A sync token, received from a previous response nextSyncToken."
              )
              .optional(),
          })
          .describe(
            "JSON schema for the query parameters of the Google People API's otherContacts.list method."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "people_otherContacts_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "people_connections_list",
    schema: {
      description: "Provides a list of the authenticated user's contacts.",
      inputSchema: {
        pathParameters: z.object({
          resourceName: z
            .string()
            .describe(
              'Required. The resource name to return connections for. Only "people/me" is valid. [1]'
            ),
        }),
        queryParameters: z.object({
          personFields: z
            .string()
            .describe(
              [
                "Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas.  You can select some masks from the following masks.",
                "<masks>",
                [
                  "addresses",
                  "ageRanges",
                  "biographies",
                  "birthdays",
                  "calendarUrls",
                  "clientData",
                  "coverPhotos",
                  "emailAddresses",
                  "events",
                  "externalIds",
                  "genders",
                  "imClients",
                  "interests",
                  "locales",
                  "locations",
                  "memberships",
                  "metadata",
                  "miscKeywords",
                  "names",
                  "nicknames",
                  "occupations",
                  "organizations",
                  "phoneNumbers",
                  "photos",
                  "relations",
                  "sipAddresses",
                  "skills",
                  "urls",
                  "userDefined",
                ].join(","),
                "</masks>",
              ].join("\n")
            ),
          "requestMask.includeField": z
            .string()
            .describe(
              "DEPRECATED (Please use personFields instead) A mask to restrict results to a subset of person fields. [1]"
            )
            .optional(),
          requestSyncToken: z
            .boolean()
            .describe(
              "Optional. Whether the response should return `nextSyncToken` on the last page of results. [1]"
            )
            .optional(),
          sortOrder: z
            .enum([
              "LAST_MODIFIED_ASCENDING",
              "FIRST_NAME_ASCENDING",
              "LAST_NAME_ASCENDING",
            ])
            .describe(
              "Optional. The order in which the connections should be sorted. Defaults to LAST_MODIFIED_ASCENDING. [1]"
            )
            .optional(),
          sources: z
            .enum([
              "READ_SOURCE_TYPE_UNSPECIFIED",
              "READ_SOURCE_TYPE_PROFILE",
              "READ_SOURCE_TYPE_CONTACT",
              "READ_SOURCE_TYPE_DOMAIN_CONTACT",
            ])
            .describe(
              "Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set. [1]"
            )
            .optional(),
          syncToken: z
            .string()
            .describe(
              "Optional. A sync token, received from a previous response `nextSyncToken`. [1]"
            )
            .optional(),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "people_connections_list",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "people_people_getBatchGet",
    schema: {
      description:
        "Use to provide information about a list of specific people by specifying a list of requested resource names. Use people/me to indicate the authenticated user.",
      inputSchema: {
        queryParameters: z.object({
          resourceNames: z
            .array(z.string())
            .describe(
              [
                `Required. The resource names of the people to provide information about. It's repeatable. The URL query parameter should be an array.`,
                `- To get information about the authenticated user, specify people/me.`,
                `- To get information about a google account, specify people/{account_id}.`,
                `- To get information about a contact, specify the resource name that identifies the contact as returned by people.connections.list.`,
                `There is a maximum of 200 resource names.`,
              ].join("\n")
            ),
          personFields: z
            .string()
            .describe(
              `Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are "addresses","ageRanges","biographies","birthdays","calendarUrls","clientData","coverPhotos","emailAddresses","events","externalIds","genders","imClients","interests","locales","locations","memberships","metadata","miscKeywords","names","nicknames","occupations","organizations","phoneNumbers","photos","relations","sipAddresses","skills","urls","userDefined".`
            ),
          sources: z
            .array(z.string())
            .describe(
              `Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.`
            )
            .optional(),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "people_people_getBatchGet",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "people_otherContacts_search",
    schema: {
      description:
        "Use to provide a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's names, emailAddresses, and phoneNumbers fields that are from the OTHER_CONTACT source.",
      inputSchema: {
        queryParameters: z.object({
          query: z
            .string()
            .describe(
              `Required. The plain-text query for the request. The query is used to match prefix phrases of the fields on a person. For example, a person with name "foo name" matches queries such as "f", "fo", "foo", "foo n", "nam", etc., but not "oo n".`
            ),
          readMask: z
            .string()
            .describe(
              [
                `Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are:`,
                `- emailAddresses`,
                `- metadata`,
                `- names`,
                `- phoneNumbers`,
              ].join("\n")
            ),
        }),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "people_otherContacts_search",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_maps = [
  {
    name: "maps_get_route",
    schema: {
      description: [
        "Use this to allow for the retrieval of directions between locations.",
        `The date is required to be included. The date format is "yyyy-MM-dd HH:mm"`,
        `If you cannot know the location, decide the location using the timezone.`,
      ].join("\n"),
      inputSchema: {
        language: z
          .string()
          .describe(
            "Language of the response. The default is 'en'. A BCP-47 language identifier."
          )
          .optional(),
        originText: z.string().describe("The starting address.").optional(),
        destinationText: z.string().describe("The ending address.").optional(),
        originLatLon: z
          .object({
            latitude: z
              .number()
              .describe("The latitude of the starting location"),
            longitude: z
              .number()
              .describe("The longitude of the starting location"),
          })
          .describe(
            `If you want to use latitude and longitude as the starting address. Use this instead of "originText".`
          )
          .optional(),
        destinationLatLon: z
          .object({
            latitude: z
              .number()
              .describe("The latitude of the ending location"),
            longitude: z
              .number()
              .describe("The longitude of the ending location"),
          })
          .describe(
            `If you want to use latitude and longitude as the starting address. Use this instead of "destinationText".`
          )
          .optional(),
        mode: z
          .enum(["DRIVING", "WALKING", "BICYCLING", "TRANSIT"])
          .describe(
            `A constant value from Mode. The default is "TRANSIT". The available values are as follows. DRIVING": Driving directions via roads., "WALKING": Walking directions via pedestrian paths and sidewalks (where available)., "BICYCLING": Bicycling directions via bicycle paths and preferred streets (where available)., "TRANSIT": Transit directions via public transit routes (where available). This mode requires that you set either the departure or arrival time.`
          )
          .optional(),
        arrivalTime: z
          .string()
          .describe(
            `The time of arrival. The date format is "yyyy-MM-dd HH:mm". But, in this case, "mm" is required to be "00". If you want to set the current time. Set "current".. In this case, the current time is used.`
          )
          .optional(),
        departureTime: z
          .string()
          .describe(
            `The time of departure. The date format is "yyyy-MM-dd HH:mm". But, in this case, "mm" is required to be "00". If you want to set the current time. Set "current".. In this case, the current time is used.`
          )
          .optional(),
        timezone: z
          .string()
          .describe(
            `The timezone. In the case of Japan, "Asia/Tokyo" is used. The default is the timezone of the Google Apps Script project.`
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "maps_get_route",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "maps_convert_location_to_lat_lon",
    schema: {
      description:
        "Use this to convert the location name and address and the location name to an approximate geographic point (latitude and longitude).",
      inputSchema: {
        language: z
          .string()
          .describe(
            "Language of the response. The default is 'en'. A BCP-47 language identifier."
          )
          .optional(),
        address: z
          .string()
          .describe("An address. Name of the location and place."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "maps_convert_location_to_lat_lon",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "maps_convert_lat_lon_to_location",
    schema: {
      description:
        "Use this to convert a given geographic point (latitude and longitude) to an approximate location name and address.",
      inputSchema: {
        language: z
          .string()
          .describe(
            "Language of the response. The default is 'en'. A BCP-47 language identifier."
          )
          .optional(),
        latitude: z.number().describe("The latitude of the point"),
        longitude: z.number().describe("The longitude of the point"),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "maps_convert_lat_lon_to_location",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "maps_create_map",
    schema: {
      description:
        "Use this to create a static map as an image file on Google Drive.",
      inputSchema: {
        language: z
          .string()
          .describe(
            "Language of the response. The default is 'en'. A BCP-47 language identifier."
          )
          .optional(),
        name: z
          .string()
          .describe("Filename of created static map image.")
          .optional(),
        format: z
          .enum(["PNG", "GIF", "JPG"])
          .describe("Format of the ceated image. The default is 'PNG'.")
          .optional(),
        centerText: z
          .string()
          .describe(
            "Address (Location name, location address) of the center of the map."
          )
          .optional(),
        centerLatLon: z
          .object({
            latitude: z
              .number()
              .describe("The latitude of the center of the map"),
            longitude: z
              .number()
              .describe("The longitude of the center of the map"),
          })
          .optional(),
        addressText: z
          .string()
          .describe("Address (Location name, location address).")
          .optional(),
        addressLatLon: z
          .object({
            latitude: z.number().describe("The latitude of the location"),
            longitude: z.number().describe("The longitude of the location"),
          })
          .optional(),
        routeStartText: z
          .string()
          .describe(
            "Address (Location name, location address) of the route start."
          )
          .optional(),
        routeEndText: z
          .string()
          .describe(
            "Address (Location name, location address) of the route end."
          )
          .optional(),
        routeStartLatLon: z
          .object({
            latitude: z.number().describe("The latitude of the route start."),
            longitude: z.number().describe("The longitude of the route start."),
          })
          .optional(),
        routeEndLatLon: z
          .object({
            latitude: z.number().describe("The latitude of the route end."),
            longitude: z.number().describe("The longitude of the route end."),
          })
          .optional(),
        points: z
          .array(z.number())
          .describe("An array of latitude/longitude pairs to encode.")
          .optional(),
        polyline: z
          .string()
          .describe(
            `When you have already got the response from a tool "maps_get_route", you have already got the value of "polyline".`
          )
          .optional(),
        markerAddresses: z
          .array(z.string())
          .describe("Address (Location name, location address)")
          .optional(),
        markerLatLons: z
          .array(
            z.object({
              latitude: z
                .number()
                .describe("The latitude of the location and the place."),
              longitude: z
                .number()
                .describe("The longitude of the location and the place."),
            })
          )
          .optional(),
        zoom: z
          .number()
          .describe(
            "A value from zero to 21, inclusive. It is required to be an integer. Set zoom by considering that the size of the map is always 1000 pixels x 1000 pixels, and the requirement to display the area."
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "maps_create_map",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_use_gemini = [
  {
    name: "generate_description_on_google_drive",
    schema: {
      description:
        "Set a description to the file on Google Drive. Use this to generate the description of the file and set it to the file on Google Drive.",
      inputSchema: {
        fileId: z.string().describe("File ID of the file on Google Drive."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "generate_description_on_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "generate_image_on_google_drive",
    schema: {
      description:
        "Use this to generate an image from an inputted prompt. The generated image is saved as a file on Google Drive.",
      inputSchema: {
        prompt: z
          .string()
          .describe(
            "Prompt (description) for generating an image using Gemini."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "generate_image_on_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "summarize_file_on_google_drive",
    schema: {
      description: "Use this to describe and summaize a file on Google Drive.",
      inputSchema: {
        fileId: z.string().describe("File ID of the file on Google Drive."),
        prompt: z.string().describe("Prompt (description) for summarizing."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "summarize_file_on_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "generate_roadmap_to_google_sheets",
    schema: {
      description:
        "This generates a roadmap in Google Sheets. Use this to generate a roadmap to Google Sheets. Spreadsheet ID and your goal of the roadmap are required to be provided.",
      inputSchema: {
        spreadsheetId: z.string().describe("Spreadsheet ID of Google Sheets."),
        sheetName: z
          .string()
          .describe(
            "Sheet name in the Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets."
          )
          .optional(),
        sheetId: z
          .string()
          .describe(
            "Sheet ID of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets."
          )
          .optional(),
        sheetIndex: z
          .number()
          .describe(
            "Sheet index (The 1st sheet is 0.) of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets."
          )
          .optional(),
        goal: z.string().describe("Goal of the roadmap."),
        description: z
          .string()
          .describe("Description of the roadmap.")
          .optional(),
        exportPDF: z
          .boolean()
          .describe(
            "The default is false. When this is true, the PDF file converted from the Google Sheets is created and the file ID of the PDF file is returned. You can download the created PDF file using this file ID."
          )
          .optional(),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "generate_roadmap_to_google_sheets",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "description_web_site",
    schema: {
      description: "Use this to describe sites using URLs.",
      inputSchema: {
        urls: z
          .array(z.string().describe("URL of the site."))
          .describe("URLs of the sites. This function describes the sites."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "description_web_site",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "description_video_on_youtube",
    schema: {
      description:
        "Use this to describe and summarize a video on YouTube using the YouTube URL.",
      inputSchema: {
        url: z
          .string()
          .describe(
            "URL of YouTube. It will be like 'https://www.youtube.com/watch?v=[videoId]'."
          ),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "description_video_on_youtube",
        method: "tools/call",
        body: object,
      }),
  },
];

const tools_management_rag = [
  {
    name: "explanation_create_maps_url",
    schema: {
      description: [
        `Use to generate a Google Maps URL of a dynamic map, including various parameters.`,
        `The Google Maps URL can show the specific location as a map, show the route between the origin and the target as a map, show the nearby shops, restaurants, and so on as a map, and so on.`,
        `This tool returns the explanation of how to create a Google Maps URL.`,
        `Generate a Google Maps URL by understanding this returned explanation.`,
        `After you read it, you are not required to call this tool again while you continue to remember this explanation in your history.`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_create_maps_url",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_reference_generate_google_apps_script",
    schema: {
      description: [
        `Use to help generate a Google Apps Script effectively.`,
        `This tool returns the markdown including the titles and the hyperlinks for taking advantage of Google Apps Script.`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. Select several titles related to the goal for achieving by Google Apps Script from the returned markdown.`,
        `2. Access the hyperlinks of your selected titles and retrieve the content from each link.`,
        `3. Generate a Google Apps Script by understanding those contents.`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
        `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_reference_generate_google_apps_script",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_reference_export_google_sheets_as_pdf",
    schema: {
      description: [
        `Use to help generate a Google Sheets URL including the query parameters for exporting as PDF.`,
        `This tool returns the markdown including how to create a Google Sheets URL for exporting as PDF.`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. By understanding the user's prompt and this markdown, generate a Google Sheets URL for exporting as PDF.`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_reference_export_google_sheets_as_pdf",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_analytics_data_properties_runReport",
    schema: {
      description: [
        `Use to help generate a request body for "Method: properties.runReport" of Google Analytics Data API.`,
        `This tool returns the markdown including how to create a request body for "Method: properties.runReport" of Google Analytics Data API.`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. By understanding the user's prompt and this markdown, generate a request body for "Method: properties.runReport" of Google Analytics Data API.`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
        `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_analytics_data_properties_runReport",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_analytics_data_properties_runRealtimeReport",
    schema: {
      description: [
        `Use to help generate a request body for "Method: properties.runRealtimeReport" of Google Analytics Data API.`,
        `This tool returns the markdown including how to create a request body for "Method: properties.runRealtimeReport" of Google Analytics Data API.`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. By understanding the user's prompt and this markdown, generate a request body for "Method: properties.runRealtimeReport" of Google Analytics Data API.`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
        `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_analytics_data_properties_runRealtimeReport",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_manage_google_sheets_using_sheets_api",
    schema: {
      description: [
        `Use to help generate a request body for "Method: spreadsheets.batchUpdate" of Google Sheets API.`,
        `This tool returns the markdown including how to create a request body for "Method: spreadsheets.batchUpdate" of Google Sheets API.`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. By understanding the user's prompt and this markdown, generate a request body for "Method: spreadsheets.batchUpdate" of Google Sheets API.`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
        `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_manage_google_sheets_using_sheets_api",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_manage_google_docs_using_docs_api",
    schema: {
      description: [
        `Use to help generate a request body for "Method: documents.batchUpdate" of Google Docs API.`,
        `This tool returns the markdown including how to create a request body for "Method: documents.batchUpdate" of Google Docs API.`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. By understanding the user's prompt and this markdown, generate a request body for "Method: documents.batchUpdate" of Google Docs API.`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
        `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_manage_google_docs_using_docs_api",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_manage_google_slides_using_slides_api",
    schema: {
      description: [
        `Use to help generate a request body for "Method: presentations.batchUpdate" of Google Slides API.`,
        `This tool returns the markdown including how to create a request body for "Method: presentations.batchUpdate" of Google Slides API.`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. By understanding the user's prompt and this markdown, generate a request body for "Method: presentations.batchUpdate" of Google Slides API.`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
        `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_manage_google_slides_using_slides_api",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_generate_survey_with_google_forms",
    schema: {
      description: [
        `Use to help generate itemList for the tool "generate_survey_with_google_forms".`,
        `This tool returns the markdown including how to create itemList for the tool "generate_survey_with_google_forms".`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. By understanding the user's prompt and this markdown, generate itemList for the tool "generate_survey_with_google_forms".`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_generate_survey_with_google_forms",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_generate_quiz_with_google_forms",
    schema: {
      description: [
        `Use to help generate itemList for the tool "generate_quiz_with_google_forms".`,
        `This tool returns the markdown including how to create itemList for the tool "generate_quiz_with_google_forms".`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. By understanding the user's prompt and this markdown, generate itemList for the tool "generate_quiz_with_google_forms".`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_generate_quiz_with_google_forms",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_search_file_in_google_drive",
    schema: {
      description: [
        `Use to help generate search query for "Method: files.list" of Drive API v3. This is used for the tool "search_file_in_google_drive".`,
        `This tool returns the markdown including how to search query for "Method: files.list" of Drive API v3. This is used for the tool "search_file_in_google_drive".`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. By understanding the user's prompt and this markdown, generate itemList for the tool "generate_quiz_with_google_forms".`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
        `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_search_file_in_google_drive",
        method: "tools/call",
        body: object,
      }),
  },
  {
    name: "explanation_google_apps_script_library_list",
    schema: {
      description: [
        `Use to get the Google Apps Script library list.`,
        `This tool returns the markdown including the titles and the hyperlinks for retrieving the suitable libraries.`,
        `Your mission is as follows.`,
        `### Mission`,
        `1. Understand the prompt.`,
        `2. By following the prompt, retrieve the library titles, descriptions, and links as a list from the returned markdown.`,
        `3. Access the hyperlinks of your selected titles and retrieve the content from each link.`,
        `4. Summarize the library list.`,
        `### Supplement`,
        `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      ].join("\n"),
      inputSchema: {},
    },
    func: async (object = {}) =>
      await request_({
        name: "explanation_google_apps_script_library_list",
        method: "tools/call",
        body: object,
      }),
  },
];

const prompts_sample = [
  {
    name: "search_files_on_google_drive",
    config: {
      title: "Search files on Google Drive",
      description: "Search files on Google Drive.",
      argsSchema: {
        filename: z
          .string({
            required_error: "Filename is required",
            invalid_type_error: "Filename must be a string",
          })
          .describe("Filename of the search file."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "search_files_on_google_drive",
        method: "prompts/get",
        body: object,
      }),
  },
  {
    name: "get_weather",
    config: {
      title: "Get weather",
      description: "Search the current weather.",
      argsSchema: {
        location: z
          .string({
            required_error: "Location is required",
            invalid_type_error: "Location must be a string",
          })
          .describe("Location of the weather."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "get_weather",
        method: "prompts/get",
        body: object,
      }),
  },
  {
    name: "generate_roadmap",
    config: {
      title: "Generate a roadmap",
      description: "Generate a roadmap in Google Sheets.",
      argsSchema: {
        goal: z
          .string({
            required_error: "Goal is required",
            invalid_type_error: "Goal must be a string",
          })
          .describe("Goal of the roadmap."),
      },
    },
    func: async (object = {}) =>
      await request_({
        name: "generate_roadmap",
        method: "prompts/get",
        body: object,
      }),
  },
];

export const tools = [
  ...tools_management_APIs,
  ...tools_management_analytics,
  ...tools_management_calendar,
  ...tools_management_docs,
  ...tools_management_drive,
  ...tools_management_forms,
  ...tools_management_gmail,
  ...tools_management_sheets,
  ...tools_management_slides,
  ...tools_management_classroom,
  ...tools_management_people,
  ...tools_management_maps,
  ...tools_use_gemini,
  ...tools_management_rag,
];

export const prompts = [...prompts_sample];
