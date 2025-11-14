/**
 * Management of File Search
 * Updated on 20251113
 */

function __init_file_search_(object) {
  const { geminiAPIKey = "", geminiAPIModel = "gemini-2.5-flash" } = object;
  if (geminiAPIKey) {
    apiKey = geminiAPIKey;
  }
  if (geminiAPIModel) {
    model = `models/${geminiAPIModel}`;
  }
}

function file_search_gas_create(object = {}) {
  __init_file_search_(object);
  const { displayName } = object;

  let result;
  try {
    if (displayName) {
      const options = { method: "create", apiKey, config: { displayName } };
      const res = fileSearchEntryPoint(options);
      const text = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide displayName." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_list(object = {}) {
  __init_file_search_(object);

  let result;
  try {
    const options = { method: "list", apiKey };
    const res = fileSearchEntryPoint(options);
    const text = typeof res == "object" ? JSON.stringify(res) : res;
    result = { content: [{ type: "text", text }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_get(object = {}) {
  __init_file_search_(object);
  const { fileSearchStoreName } = object;

  let result;
  try {
    if (fileSearchStoreName) {
      const options = { method: "get", apiKey, config: { fileSearchStoreName } };
      const res = fileSearchEntryPoint(options);
      const text = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide fileSearchStoreName." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_remove(object = {}) {
  __init_file_search_(object);
  const { fileSearchStoreName } = object;

  let result;
  try {
    if (fileSearchStoreName) {
      const options = { method: "remove", apiKey, config: { fileSearchStoreName } };
      const res = fileSearchEntryPoint(options);
      const text = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide fileSearchStoreName." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_media_upload(object = {}) {
  __init_file_search_(object);
  const { fileSearchStoreName, displayName, text, mimeType, fileIds = [], folderId, urls = [], customMetadata = [], chunkingConfig = [] } = object;

  let result;
  try {
    if (fileSearchStoreName) {
      const options = {
        method: "media_upload",
        apiKey,
        config: { fileSearchStoreName, displayName, text, mimeType, fileIds, folderId, urls, customMetadata, chunkingConfig }
      };
      const res = fileSearchEntryPoint(options);
      const t = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text: t }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide fileSearchStoreName." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_import_file(object = {}) {
  __init_file_search_(object);
  const { fileSearchStoreName, fileName, customMetadata = [], chunkingConfig = [] } = object;

  let result;
  try {
    if (fileSearchStoreName) {
      const options = {
        method: "import_file",
        apiKey,
        config: { fileSearchStoreName, fileName, customMetadata, chunkingConfig }
      };
      const res = fileSearchEntryPoint(options);
      const text = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide fileSearchStoreName." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_documents_list(object = {}) {
  __init_file_search_(object);
  const { fileSearchStoreName } = object;

  let result;
  try {
    if (fileSearchStoreName) {
      const options = {
        method: "documents_list",
        apiKey,
        config: { fileSearchStoreName }
      };
      const res = fileSearchEntryPoint(options);
      const text = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide fileSearchStoreName." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_documents_remove(object = {}) {
  __init_file_search_(object);
  const { documentName } = object;

  let result;
  try {
    if (documentName) {
      const options = {
        method: "documents_remove",
        apiKey,
        config: { documentName }
      };
      const res = fileSearchEntryPoint(options);
      const text = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide documentName." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_documents_get(object = {}) {
  __init_file_search_(object);
  const { documentName } = object;

  let result;
  try {
    if (documentName) {
      const options = {
        method: "documents_get",
        apiKey,
        config: { documentName }
      };
      const res = fileSearchEntryPoint(options);
      const text = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide documentName." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_documents_query(object = {}) {
  __init_file_search_(object);
  const { name, query, resultsCount, metadataFilters = [] } = object;

  let result;
  try {
    if (name && query) {
      const options = {
        method: 'documents_query',
        apiKey,
        config: { name, query, resultsCount, metadataFilters }
      };
      const res = fileSearchEntryPoint(options);
      const text = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide name and query." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

function file_search_gas_generate_content(object = {}) {
  __init_file_search_(object);
  const { fileSearchStoreNames = [], prompt } = object;

  let result;
  try {
    if (prompt) {
      const options = {
        method: 'generate_content',
        apiKey,
        model,
        config: { fileSearchStoreNames, prompt }
      };
      const res = fileSearchEntryPoint(options);
      const text = typeof res == "object" ? JSON.stringify(res) : res;
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "Provide prompt." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result }
}

const descriptions_management_filesearch = {
  file_search_gas_list: {
    description: [
      "Use this to get a list of file search stores.",
      `When the MCP server "file-search-store-extension" is installed, use the tool "file_search_store_list" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {}
    }
  },

  file_search_gas_create: {
    description: [
      "Use this to create a new File Search Store.",
      `When the MCP server "file-search-store-extension" is installed, use the tool "file_search_store_create" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        displayName: { type: "string", description: "The display name for the new store." },
      },
      required: ["displayName"]
    }
  },

  file_search_gas_get: {
    description: [
      "Use this to get information about a specific File Search Store.",
      `When the MCP server "file-search-store-extension" is installed, use the tool "file_search_store_get" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        fileSearchStoreName: { type: "string", description: "The name of the store to retrieve." },
      },
      required: ["fileSearchStoreName"]
    }
  },

  file_search_gas_remove: {
    description: [
      "Use this to delete a File Search Store.",
      `When the MCP server "file-search-store-extension" is installed, use the tool "file_search_store_delete" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        fileSearchStoreName: { type: "string", description: "The name of the store to delete." },
      },
      required: ["fileSearchStoreName"]
    }
  },

  file_search_gas_media_upload: {
    description: [
      "Use this to upload files from various sources on Google Drive and URLs to a File Search Store.",
      `The sources are file IDs on Google Drive, folder ID on Google Drive, and URLs.`,
      `When you want to upload a simple text, when "file-search-store-extension" is installed, use the tool "file_search_store_upload_media" of "file-search-store-extension" as a priority.`,
      `You are required to provide "fileSearchStoreName". And, you can provide one of "text","fileIds","folderId","urls".`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        fileSearchStoreName: { type: "string", description: `The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. The data will be uploaded to this file search store. **As an important point, in this tool, it is required to provide "text" or "filePath".**` },
        displayName: { type: "string", description: `The display name for the uploaded document. Use this when you provide "text".` },
        text: { type: "string", description: `The raw text data to upload. When you use this, you cannot use "fileIds", "folderId", and "urls".` },
        mimeType: { type: "string", description: `MIME type of the data. If not provided, "text/plain" is used. Use this when you provide "text". When you use this, you cannot use "fileIds", "folderId", and "urls".` },
        fileIds: { type: "array", description: `The file IDs of the files on Google Drive.", items: { type: "string", description: "The file ID of the file on Google Drive. When you use this, you cannot use "text", "folderId", and "urls".` },
        folderId: { type: "string", description: `The folder ID of the folder on Google Drive. The files in the folder are uploaded. When you use this, you cannot use "text", "fileIds", and "urls".` },
        urls: { type: "array", description: `URLs. When you use this, you cannot use "text", "folderId", and "fileIds".`, items: { type: "string", description: "URL" } },
        customMetadata: {
          "type": "array",
          "description": "This is used for all files for file IDs, folder ID, URLs, text.",
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": { "type": "string", "description": "The key of the metadata to store." },
                "stringValue": { "type": "string", "description": "The string value of the metadata to store." },
                "numericValue": { "type": "string", "description": "The numeric value of the metadata to store." }
              },
              "required": ["key"],
              "additionalProperties": false
            }
          }
        },
        chunkingConfig: {
          "type": "array",
          "description": "Config for telling the service how to chunk the data. If not provided, the service will use default parameters. This is used for all files for file IDs, folder ID, URLs, text.",
          "items": {
            "type": "object",
            "properties": {
              "whiteSpaceConfig": {
                "type": "object",
                "properties": {
                  "maxTokensPerChunk": { "type": "number", "description": "Maximum number of tokens per chunk." },
                  "maxOverlapTokens": { "type": "number", "description": "Maximum number of overlapping tokens between two adjacent chunks." }
                },
                "required": ["maxTokensPerChunk", "maxOverlapTokens"],
                "additionalProperties": false
              }
            },
            "required": ["whiteSpaceConfig"],
            "additionalProperties": false
          }
        }
      },
      required: ["fileSearchStoreName"]
    },
  },

  file_search_gas_import_file: {
    description: [
      "Use this to delete a File Search Store.",
      `When the MCP server "file-search-store-extension" is installed, use the tool "file_search_store_import_file" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        fileSearchStoreName: { type: "string", description: `Immutable. The name of the FileSearchStore to import the file into. Example: fileSearchStores/my-file-search-store-123 It takes the form fileSearchStores/{filesearchstore}.` },
        fileName: { type: "string", description: "The name of the File to import. Example: files/abc-123." },
        customMetadata: {
          "type": "array",
          "description": "This is used for all files for file IDs, folder ID, URLs, text.",
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": { "type": "string", "description": "The key of the metadata to store." },
                "stringValue": { "type": "string", "description": "The string value of the metadata to store." },
                "numericValue": { "type": "string", "description": "The numeric value of the metadata to store." }
              },
              "required": ["key"],
              "additionalProperties": false
            }
          }
        },
        chunkingConfig: {
          "type": "array",
          "description": "Config for telling the service how to chunk the data. If not provided, the service will use default parameters. This is used for all files for file IDs, folder ID, URLs, text.",
          "items": {
            "type": "object",
            "properties": {
              "whiteSpaceConfig": {
                "type": "object",
                "properties": {
                  "maxTokensPerChunk": { "type": "number", "description": "Maximum number of tokens per chunk." },
                  "maxOverlapTokens": { "type": "number", "description": "Maximum number of overlapping tokens between two adjacent chunks." }
                },
                "required": ["maxTokensPerChunk", "maxOverlapTokens"],
                "additionalProperties": false
              }
            },
            "required": ["whiteSpaceConfig"],
            "additionalProperties": false
          }
        }
      },
      required: ["fileSearchStoreName", "fileName"]
    }
  },

  file_search_gas_documents_list: {
    description: [
      "Use this to list all Documents in a file search store.",
      `When the MCP server "file-search-store-extension" is installed, use the tool "document_list" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        fileSearchStoreName: { type: "string", description: "The name of the FileSearchStore containing Documents. Example: fileSearchStores/my-file-search-store-123 It takes the form fileSearchStores/{filesearchstore}." },
      },
      required: ["fileSearchStoreName"]
    }
  },

  file_search_gas_documents_remove: {
    description: [
      "Use this to delete a document.",
      `When the MCP server "file-search-store-extension" is installed, use the tool "document_delete" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        documentName: { type: "string", description: "The resource name of the Document to delete. Example: fileSearchStores/my-file-search-store-123/documents/the-doc-abc It takes the form fileSearchStores/{filesearchstore}/documents/{document}." },
      },
      required: ["documentName"]
    }
  },

  file_search_gas_documents_get: {
    description: [
      "Use this to get information about a specific Document.",
      `When the MCP server "file-search-store-extension" is installed, use the tool "document_get" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        documentName: { type: "string", description: "The name of the Document to retrieve. Example: fileSearchStores/my-file-search-store-123/documents/the-doc-abc It takes the form fileSearchStores/{filesearchstore}/documents/{document}." },
      },
      required: ["documentName"]
    }
  },

  file_search_gas_documents_query: {
    description: [
      "Use this to prform semantic search over a Document.",
      // `When the MCP server "file-search-store-extension" is installed, use the tool "###" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        name: { type: "string", description: `The resource name of the document to search (e.g., 'fileSearchStores/my-store/documents/my-doc').` },
        query: { type: "string", description: "The query to search for." },
        resultsCount: { type: "number", description: "The number of results to return." },
        metadataFilters: {
          type: "array",
          description: [
            `Filters to apply to the search. `,
            `Filter for Chunk metadata. Each MetadataFilter object should correspond to a unique key. Multiple MetadataFilter objects are joined by logical "AND"s.`,
            ``,
            `Note: Document-level filtering is not supported for this request because a Document name is already specified.`,
            ``,
            `Example query: (year >= 2020 OR year < 2010) AND (genre = drama OR genre = action)`,
            ``,
            `MetadataFilter object list: metadataFilters = [ {key = "chunk.custom_metadata.year" conditions = [{int_value = 2020, operation = GREATER_EQUAL}, {int_value = 2010, operation = LESS}}, {key = "chunk.custom_metadata.genre" conditions = [{stringValue = "drama", operation = EQUAL}, {stringValue = "action", operation = EQUAL}}]`,
            ``,
            `Example query for a numeric range of values: (year > 2015 AND year <= 2020)`,
            ``,
            `MetadataFilter object list: metadataFilters = [ {key = "chunk.custom_metadata.year" conditions = [{int_value = 2015, operation = GREATER}]}, {key = "chunk.custom_metadata.year" conditions = [{int_value = 2020, operation = LESS_EQUAL}]}]`,
            ``,
            `Note: "AND"s for the same key are only supported for numeric values. String values only support "OR"s for the same key.`,
          ].join("\n"),
          items: { type: "object", properties: {} }
        },
      },
      required: ["name", "query"]
    }
  },

  file_search_gas_generate_content: {
    description: [
      "Use this to generate content using the file search stores with Gemini API.",
      `When the MCP server "file-search-store-extension" is installed, use the tool "generate_content" of "file-search-store-extension" as a priority.`,
    ].join("\n"),
    parameters: {
      "type": "object",
      "properties": {
        "fileSearchStoreNames": {
          "type": "array",
          "description": "An array including the names of the FileSearchStore containing Documents. When you want to generate content using the file search stores as Retrieval Augmented Generation (RAG), use this.",
          "items": {
            "type": "string",
            "description": "The names of the fileSearchStores to retrieve from. Example: fileSearchStores/my-file-search-store-123"
          }
        },
        "prompt": {
          "type": "string",
          "description": "The prompt for generating content using Gemini API."
        },
        "metadataFilter": {
          "type": "string",
          "description": `Metadata filter to apply to the semantic retrieval documents and chunks. Ex. 'author="Robert Graves"'`
        }
      },
      "required": ["prompt"]
    }
  },

};
