/**
 * Management of Rag
 * Updated on 20250917 15:11
 */

function download_data_(url) {
  const text = UrlFetchApp.fetch(url).getContentText();
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_create_maps_url(object = {}) {
  const _ = object;
  const text = `# Generate a Google Maps URL

To generate a Google Maps URL, you can use one of the following four basic structures, depending on the desired action. In all cases, \`api=1\` is a required parameter.

## 1. Search: Use this to find a specific place or to perform a general search.

*   **Structure:** \`https://www.google.com/maps/search/?api=1&parameters\`
*   **Required Parameter:**
    *   \`query\`: The search term, which can be a place name, address, or latitude/longitude coordinates.
*   **Optional Parameter:**
    *   \`query_place_id\`: A unique identifier for a place, which provides a more accurate link to a specific location.

## 2. Directions: Use this to get directions between two or more points.

*   **Structure:** \`https://www.google.com/maps/dir/?api=1&parameters\`
*   **Key Parameters:**
    *   \`origin\`: The starting point of the directions.
    *   \`destination\`: The endpoint of the directions.
    *   \`travelmode\`: Can be set to \`driving\`, \`walking\`, \`bicycling\`, \`two-wheeler\`, or \`transit\`.
    *   \`waypoints\`: A list of intermediate points, separated by a pipe character (\`|\`).

## 3. Display a Map: Use this to show a map without any markers or directions.

*   **Structure:** \`https://www.google.com/maps/@?api=1&map_action=map&parameters\`
*   **Key Parameters:**
    *   \`center\`: The latitude/longitude coordinates for the center of the map.
    *   \`zoom\`: Sets the initial zoom level of the map (from 0 to 21).
    *   \`basemap\`: Can be \`roadmap\`, \`satellite\`, or \`terrain\`.
    *   \`layer\`: An optional extra layer to display, such as \`transit\`, \`traffic\`, or \`bicycling\`.

## 4. Display a Street View Panorama: Use this to show an interactive 360-degree panorama.

*   **Structure:** \`https://www.google.com/maps/@?api=1&map_action=pano&parameters\`
*   **Required Parameter (one of the following):**
    *   \`viewpoint\`: Latitude/longitude coordinates of the desired panorama.
    *   \`pano\`: The specific panorama ID.
*   **Optional Parameters:**
    *   \`heading\`, \`pitch\`, \`fov\`: To control the camera's orientation and zoom.

## Important Considerations:

*   All parameter values in the URL must be properly URL-encoded. For example, spaces should be replaced with \`%20\` or \`+\`, and commas with \`%2C\`.
*   URLs have a character limit of 2,048 characters.`;
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_reference_generate_google_apps_script(object = {}) {
  const _ = object;

  // This is my repository. https://github.com/tanaikech/taking-advantage-of-google-apps-script
  const url = "https://raw.githubusercontent.com/tanaikech/taking-advantage-of-google-apps-script/refs/heads/master/README.md";
  return download_data_(url);
}

function explanation_reference_export_google_sheets_as_pdf(object = {}) {
  const _ = object;

  // ref: https://gist.github.com/andrewroberts/c37d45619d5661cab078be2a3f2fd2bb
  const url = "https://gist.githubusercontent.com/andrewroberts/c37d45619d5661cab078be2a3f2fd2bb/raw/45030c35193062013e85e2eec0eac9b2a0c71a4a/exportSpreadsheet.gs";
  return download_data_(url);
}

function explanation_analytics_data_properties_runReport(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: properties.runReport" of Google Analytics Data API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: properties.runReport" of Google Analytics Data API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaAnalyticsData.RunReport)}</JSONSchema>`
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_analytics_data_properties_runRealtimeReport(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: properties.runRealtimeReport" of Google Analytics Data API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: properties.runRealtimeReport" of Google Analytics Data API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaAnalyticsData.RunRealtimeReport)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_manage_google_sheets_using_sheets_api(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: spreadsheets.batchUpdate" of Google Sheets API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: spreadsheets.batchUpdate" of Google Sheets API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaForSheets.BatchUpdate)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_manage_google_docs_using_docs_api(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: documents.batchUpdate" of Google Docs API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: documents.batchUpdate" of Google Docs API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaForDocs.BatchUpdate)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_manage_google_slides_using_slides_api(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: presentations.batchUpdate" of Google Slides API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: presentations.batchUpdate" of Google Slides API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaForSlides.BatchUpdate)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_generate_survey_with_google_forms(object = {}) {
  const _ = object;
  const itemList = {
    type: "array",
    items: {
      type: "object",
      properties: {
        itemTitle: { type: "string", description: "Title of question." },
        helpText: { type: "string", description: "Description of the question." },
        required: { type: "boolean", description: "When the user has to answer, set to true. Please set false as the default value." },
        itemMethod: {
          type: "string",
          description: [
            `Select one of the following "Methods". These are the methods of the Class Form of Google Apps Script. The reference page is "https://developers.google.com/apps-script/reference/forms/form".`,
            `<Methods>addCheckboxItem,addDateItem,addDateTimeItem,addTimeItem,addListItem,addMultipleChoiceItem,addParagraphTextItem,addTextItem</Methods>`,
          ].join("\n")
        },
        params: {
          type: "array",
          description: `Only when you select one of the methods "addCheckboxItem", "addListItem", "addMultipleChoiceItem" for "itemMethod", set "setChoiceValues". When you select the methods except for "addCheckboxItem", "addListItem", "addMultipleChoiceItem" to "itemMethod", this value should be only [], which is an empty array.`,
          items: {
            type: "object",
            properties: {
              method: { type: "string", description: `Method name. This method is the method of the Class object selected at "itemMethod". Only when you select one of the methods "addCheckboxItem", "addListItem", "addMultipleChoiceItem" for "itemMethod", set "setChoiceValues". When you select the methods except for "addCheckboxItem", "addListItem", "addMultipleChoiceItem" to "itemMethod", this value should be only [], which is an empty array.` },
              choiceValues: {
                type: "array",
                items: {
                  type: "string",
                  description: `Only when you select one of the methods "addCheckboxItem","addListItem","addMultipleChoiceItem" for "itemMethod", "setChoiceValues" is required to be selected as "method". At that time, set the choice values.`,
                }
              }
            },
            required: ["method", "choiceValues"]
          }
        },
      },
      required: ["itemTitle", "helpText", "required", "itemMethod", "params"]
    }
  };
  const text = [
    `JSON schema for building the itemList for the tool "generate_survey_with_google_forms".`,
    `### JSONSchema`,
    `"itemList": Create the itemList for the tool "generate_survey_with_google_forms" using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(itemList)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_generate_quiz_with_google_forms(object = {}) {
  const _ = object;
  const itemList = {
    type: "array",
    items: {
      type: "object",
      properties: {
        itemTitle: { type: "string", description: "Title of question." },
        helpText: { type: "string", description: "Description of the question." },
        required: { type: "boolean", description: "When the user has to answer, set to true. Please set false as the default value." },
        itemMethod: {
          type: "string",
          description: [
            `Select one of the following "Methods". These are the methods of the Class Form of Google Apps Script. The reference page is "https://developers.google.com/apps-script/reference/forms/form".`,
            `<Methods>addCheckboxItem,addDateItem,addDateTimeItem,addTimeItem,addListItem,addMultipleChoiceItem,addParagraphTextItem,addTextItem</Methods>`,
          ].join("\n")
        },
        params: {
          type: "array",
          description: `Only when you select one of the methods "addCheckboxItem", "addListItem", "addMultipleChoiceItem" for "itemMethod", set "setChoiceValues". When you select the methods except for "addCheckboxItem", "addListItem", "addMultipleChoiceItem" to "itemMethod", this value should be only [], which is an empty array.`,
          items: {
            type: "object",
            properties: {
              method: { type: "string", description: `Method name. This method is the method of the Class object selected at "itemMethod". Only when you select one of the methods "addCheckboxItem", "addListItem", "addMultipleChoiceItem" for "itemMethod", set "setChoiceValues". When you select the methods except for "addCheckboxItem", "addListItem", "addMultipleChoiceItem" to "itemMethod", this value should be only [], which is an empty array.` },
              choiceValues: {
                type: "array",
                items: {
                  type: "string",
                  description: `Only when you select one of the methods "addCheckboxItem","addListItem","addMultipleChoiceItem" for "itemMethod", "setChoiceValues" is required to be selected as "method". At that time, set the choice values.`,
                }
              },
              correctIndex: { type: "number", description: `The index of the correct answer in "choiceValues" of the array.` }
            },
            required: ["method", "choiceValues", "correctIndex"]
          }
        },
      },
      required: ["itemTitle", "helpText", "required", "itemMethod", "params"]
    }
  };
  const text = [
    `JSON schema for building the itemList for the tool "generate_quiz_with_google_forms".`,
    `### JSONSchema`,
    `"itemList": Create the itemList for the tool "generate_quiz_with_google_forms" using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(itemList)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_search_file_in_google_drive(object = {}) {
  const _ = object;

  const text = `### Search Query Terms and Operators

The search query language for the Drive API consists of three parts: a query term, an operator, and values.

*   **Query Terms:** These are the fields you can search on, such as \`name\`, \`mimeType\`, \`modifiedTime\`, \`starred\`, \`trashed\`, \`owners\`, \`writers\`, and \`readers\`. For searching the content of a file, you can use the \`fullText\` term.
*   **Operators:** A variety of operators are available to specify the condition for the query term. These include \`contains\`, \`=\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`, \`in\`, \`and\`, \`or\`, and \`not\`.
*   **Values:** These are the specific values you want to use to filter your search results.

### Search for Files and Folders

You can search for files and folders using the \`files.list\` method. To filter the results, you use the \`q\` query string parameter, which combines one or more search terms and operators.

For example, to search for folders, you would use the query string \`mimeType = 'application/vnd.google-apps.folder'\`. You can also search for files with specific names, files modified after a certain date, or files shared with the current user. The \`corpora\` parameter allows you to search beyond the user's files to include files shared with a domain. The documentation also provides code examples in several programming languages to demonstrate how to perform searches.

### Search for Shared Drives

To search for shared drives, you use the \`drives.list\` method with the \`q\` query string. Many of the query terms for shared drives, such as \`createdTime\`, \`memberCount\`, and \`organizerCount\`, require the \`useDomainAdminAccess\` parameter to be set to \`true\`.

You can construct complex queries by grouping multiple terms with parentheses. For instance, you can search for shared drives created after a specific date that have either more than a certain number of organizers or members.

### References
- [Search query terms and operators](https://developers.google.com/workspace/drive/api/guides/ref-search-terms)
- [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files)
- [Search for shared drives](https://developers.google.com/workspace/drive/api/guides/search-shareddrives)`;
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_google_apps_script_library_list(object = {}) {
  return explanation_reference_generate_google_apps_script(object);
}

// Descriptions of the functions.
const descriptions_management_rag = {
  explanation_create_maps_url: {
    title: "Generate a Google Maps URL of a dynamic map.",
    description: [
      `Use to generate a Google Maps URL of a dynamic map, including various parameters.`,
      `The Google Maps URL can show the specific location as a map, show the route between the origin and the target as a map, show the nearby shops, restaurants, and so on as a map, and so on.`,
      `This tool returns the explanation of how to create a Google Maps URL.`,
      `Generate a Google Maps URL by understanding this returned explanation.`,
      `After you read it, you are not required to call this tool again while you continue to remember this explanation in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_reference_generate_google_apps_script: {
    title: "Generate a Google Apps Script",
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
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_reference_export_google_sheets_as_pdf: {
    title: "Generate a Google Sheets URL",
    description: [
      `Use to help generate a Google Sheets URL including the query parameters for exporting as PDF.`,
      `This tool returns the markdown including how to create a Google Sheets URL for exporting as PDF.`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate a Google Sheets URL for exporting as PDF.`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_analytics_data_properties_runReport: {
    title: `Generate a request body for "Method: properties.runReport" of Google Analytics Data API`,
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
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_analytics_data_properties_runRealtimeReport: {
    title: `Generate a request body for "Method: properties.runRealtimeReport" of Google Analytics Data API`,
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
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_manage_google_sheets_using_sheets_api: {
    title: `Generate a request body for "Method: spreadsheets.batchUpdate" of Google Sheets API`,
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
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_manage_google_docs_using_docs_api: {
    title: `Generate a request body for "Method: documents.batchUpdate" of Google Docs API`,
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
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_manage_google_slides_using_slides_api: {
    title: `Generate a request body for "Method: presentations.batchUpdate" of Google Slides API`,
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
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_generate_survey_with_google_forms: {
    title: `Generate itemList for the tool "generate_survey_with_google_forms"`,
    description: [
      `Use to help generate itemList for the tool "generate_survey_with_google_forms".`,
      `This tool returns the markdown including how to create itemList for the tool "generate_survey_with_google_forms".`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate itemList for the tool "generate_survey_with_google_forms".`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_generate_quiz_with_google_forms: {
    title: `Generate itemList for the tool "generate_quiz_with_google_forms"`,
    description: [
      `Use to help generate itemList for the tool "generate_quiz_with_google_forms".`,
      `This tool returns the markdown including how to create itemList for the tool "generate_quiz_with_google_forms".`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate itemList for the tool "generate_quiz_with_google_forms".`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_search_file_in_google_drive: {
    title: `Generate search query for "Method: files.list" of Drive API v3. This is used for the tool "search_file_in_google_drive"`,
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
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_google_apps_script_library_list: {
    title: "Get Google Apps Script library list",
    description: [
      `Use to get the Google Apps Script library list. Those libraries are created by Tanaike.`,
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
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

};
