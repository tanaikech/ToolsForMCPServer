Now, implement the Node.js wrapper to accelerate the startup.

1.  Create a new workspace directory and navigate into it.
2.  Install the necessary libraries: `npm install @modelcontextprotocol/sdk zod@3`.
3.  Download the two required script files `wrapped_gas_web_apps.js` and `tools.js` from [my repository](https://github.com/tanaikech/ToolsForMCPServer/tree/master/Wrapper_for_reduce_load_time_of_MCP).
4.  Modify `settings.json` to use the Node.js wrapper. Replace `{your path}` with the absolute path to `wrapped_gas_web_apps.js`.

```json
{
  "theme": "Default",
  "selectedAuthType": "### your setting ###",
  "mcpServers": {
    "wrapped_gas_web_apps": {
      "command": "node",
      "args": [
        "{your path}/wrapped_gas_web_apps.js"
      ]
    }
  }
}
```

Run `$ gemini` again. You should observe a significantly faster startup. In my tests, the startup time was reduced by approximately 15 times. While the performance of individual tool execution remains the same, the improved startup time makes the CLI much more practical and user-friendly.
