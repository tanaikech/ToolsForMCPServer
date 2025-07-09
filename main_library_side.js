/**
 * This is a main script for the library of ToolsForMCPServer.
 * This script is used in the library of ToolsForMCPServer.
 */

/**
 * Tools for MCP server built by MCPApp.
 * Author: Kanshi Tanaike
 * 
 * 20250706 14:37
 * version 1.0.2
 */

/**
 * This is an API key for using Gemini API.
 * When the `generate_presentation_with_google_slides` tool is used, this API key is required to be used.
 */
var apiKey = "";

/**
 * Main method.
 * @return {Array} Tools for MCP server.
 */
function getTools() {
  /**
   * Please set descriptions of each package.
   * If you don't want to use, please comment out.
   */
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

  // for MCP
  const itemsForMCP = [
    {
      "type": "initialize",
      "value": {
        "protocolVersion": "2024-11-05", // or "2025-03-26"
        "capabilities": { "tools": { "listChanged": false } },
        "serverInfo": { "name": "gas_web_apps", "version": "1.0.0" }
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
 * The method name was changed from "getServer" to "getTools".
 * This is an old method name. But, this can also be used.
 * The same result with getTools will be returned.
 * @return {Array} Tools for MCP server.
 */
function getServer() {
  return getTools();
}
