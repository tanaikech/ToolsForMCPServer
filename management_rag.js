/**
 * Management of Rag
 * Updated on 20250915 14:30
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

};
