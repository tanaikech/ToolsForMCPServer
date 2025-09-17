import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { tools, prompts } from "./tools.js";

const server = new McpServer({
  name: "Wrapper for MCP server built by Google Apps Script Web Apps",
  version: "1.0.0",
});

if (tools.length > 0) {
  for (const { name, schema, func } of tools) {
    server.registerTool(name, schema, func);
  }
}

if (prompts.length > 0) {
  for (const { name, config, func } of prompts) {
    server.registerPrompt(name, config, func);
  }
}

const transport = new StdioServerTransport();
await server.connect(transport);
