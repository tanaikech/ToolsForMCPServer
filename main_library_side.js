/**
 * Tools for MCP server built by MCPApp.
 * Author: Kanshi Tanaike
 * https://github.com/tanaikech/ToolsForMCPServer
 * 
 * Updated on 20250726 12:13
 * version 1.0.10
 */

/**
 * This is an API key for using Gemini API.
 * When the tools of `use_gemini` are used, this API key is required to be used.
 */
var apiKey = "";

/**
 * This is an access token and key for using StackExchange API.
 * When the `get_questions_on_stackoverflow` tool is used, these values are required to be used.
 */
var accessToken_stackoverflow = "";
var key_stackoverflow = "";

/**
 * This function returns tool objects as an array.
 * @private
 */
function functions_() {
  const descriptions = [
    descriptions_management_apis,
    descriptions_management_calendar,
    descriptions_management_docs,
    descriptions_management_drive,
    descriptions_management_forms,
    descriptions_management_gmail,
    descriptions_management_sheets,
    descriptions_management_slides,
    descriptions_use_gemini,

    // descriptions_dev,
  ];
  const descriptionObj = descriptions.reduce((o, e) => (o = { ...o, ...e }, o), {});
  /**
   * By the way, the format of "functions" is the same with GeminiWithFiles.
   * So, you can test the functions by directly using it with GeminiWithFiles.
   * ref: https://github.com/tanaikech/GeminiWithFiles?tab=readme-ov-file#use-function-calling
   */
  const functions = Object.entries(descriptionObj).reduce((o, [k, v]) => {
    o.params_[k] = v;
    o[k] = this[k];
    return o;
  }, { params_: {} });

  const tools = Object.keys(functions.params_).sort((a, b) => a > b ? 1 : -1);
  functions.params_ = tools.reduce((o, f) => {
    if (functions.params_[f]) {
      o[f] = functions.params_[f];
    }
    return o;
  }, {});

  return functions;
}

/**
 * This function filteres tools.
 * @private
 */
function filterTools_(object) {
  const { enables = [], disables = [] } = object;
  let functions = functions_();
  if (enables.length > 0) {
    functions.params_ = enables.reduce((o, f) => {
      if (functions.params_[f]) {
        o[f] = functions.params_[f];
      }
      return o;
    }, {});
  } else if (disables.length > 0) {
    disables.forEach(f => {
      if (functions.params_[f]) {
        delete functions.params_[f];
      }
    });
  }
  return functions;
}

/**
 * Main method.
 * @return {Array} Tools for MCP server.
 */
function getTools(object = {}) {
  const functions = filterTools_(object);

  // for MCP
  const itemsForMCP = [
    {
      "type": "initialize",
      "value": {
        "protocolVersion": "2024-11-05", // or "2025-06-18"
        "capabilities": { "tools": { "listChanged": false } },
        "serverInfo": { "name": "gas_web_apps", "version": "1.0.10" }
      }
    },

    ...Object.keys(functions.params_).map(f => (
      {
        "type": "tools/list",
        "function": functions[f],
        "value": {
          name: f,
          description: functions.params_[f].description,
          inputSchema: functions.params_[f].parameters,
        }
      }))
  ];

  return itemsForMCP;
}

/**
 * This function returns all tools as an object.
 * The key and value are the tool name and the description of the tool, respectively.
 * @return {Object}
 */
function getToolList() {
  const functions = functions_();
  return Object.keys(functions.params_).sort((a, b) => a > b ? 1 : -1).reduce((o, f) => (o[f] = functions.params_[f].description, o), {});
}

/**
 * The method name was changed from "getServer" to "getTools".
 * This is an old method name. But, this can also be used.
 * The same result with getTools will be returned.
 * @return {Array} Tools for MCP server.
 */
function getServer(object = {}) {
  return getTools(object);
}
