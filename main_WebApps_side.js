/**
 * This is a sample script for the Web Apps side.
 * This script is used in a Google Apps Script project deployed Web Apps.
 */

const apiKey = "###"; // API key for Gemini API

/**
 * This function is automatically run when the MCP client accesses Web Apps.
 */
const doPost = e => main(e);

function main(eventObject) {
  const m = ToolsForMCPServer;

  m.apiKey = apiKey; // This is an API key for using Gemini API.
  // m.defaultCalendarId = "###"; // If you want to use the specific calendar, please use this.
  // m.enableBaseTools = false; // Disable base tools
  // m.enableClassroomTools = false; // Disable tools for managing Google Classroom
  // m.enablePeopleTools = false; // Disable tools for managing Google People

  const object = { eventObject, items: m.getTools() };
  return new MCPApp
    .mcpApp({ accessKey: "sample" })
    .setServices({ lock: LockService.getScriptLock() })
    .server(object);
}
