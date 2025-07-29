/**
 * Management of Google Docs
 * Updated on 20250729 12:10
 */

/**
 * This function returns Document object.
 * @private
 */
function getDoc_(object) {
  const { documentId = null, documentUrl = null, tabName = null, tabId = null, tabIndex = 0 } = object;
  let result;
  let doc;
  if (!documentId && !documentUrl) {
    result = { content: [{ type: "text", text: "Document ID or document URL was not found." }], isError: true };
  } else {
    if (documentId) {
      doc = DocumentApp.openById(documentId);
    } else {
      doc = DocumentApp.openByUrl(documentUrl);
    }
    const tabs = doc.getTabs();
    console.log(tabs.length)
    if (tabName) {
      const tab = tabs.find(t => t.getTitle() == tabName);
      if (tab) {
        result = tab.getId();
      } else {
        result = { content: [{ type: "text", text: `The tabName "${tabName}" was not found.` }], isError: true };
      }
    } else if (tabId) {
      const tab = tabs.find(t => t.getId() == tabId);
      if (tab) {
        result = tab.getId();
      } else {
        result = { content: [{ type: "text", text: `The tabId "${tabId}" was not found.` }], isError: true };
      }
    } else {
      console.log(tabs.length, tabIndex + 1)
      if (tabs.length >= tabIndex + 1) {
        result = tabs[tabIndex].getId();
      } else {
        result = { content: [{ type: "text", text: `The tabIndex "${tabIndex}" didn't exist.` }], isError: true };
      }
    }
  }
  if (result.isError) {
    return result;
  }
  return { documentId: doc.getId(), tabId: result };
}

/**
 * This function gets the document body as text or markdown.
 * @private
 */
function get_values_from_google_docs(object = {}) {
  const { markdown = false } = object;
  let result;
  try {
    result = getDoc_(object);
    if (result.documentId && result.tabId) {
      const format = markdown ? "markdown" : "txt";
      const url = `https://docs.google.com/feeds/download/documents/export/Export?exportFormat=${format}&id=${result.documentId}&tab=${result.tabId}`;
      const res = UrlFetchApp.fetch(url, {
        headers: { authorization: "Bearer " + ScriptApp.getOAuthToken(), muteHttpExceptions: true },
      });
      const text = res.getContentText();
      if (res.getResponseCode() == 200) {
        result = { content: [{ type: "text", text }], isError: false };
      } else {
        result = { content: [{ type: "text", text }], isError: true };
      }
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function puts a text into Google Docs.
 * @private
 */
function put_values_into_google_docs(object = {}) {
  const { index = -1, text = null } = object;
  let result;
  try {
    if (!text) {
      result = { content: [{ type: "text", text: "Text is not provided. Please provide it." }], isError: true };
    } else {
      result = getDoc_(object);
      if (result.documentId && result.tabId) {
        const doc = DocumentApp.openById(result.documentId);
        const body = doc.getBody();
        if (index == -1) {
          body.appendParagraph(text);
          result = { content: [{ type: "text", text: "Text is appended successfully to Google Docs." }], isError: false };
        } else {
          const c = body.getChild(index);
          if (c && c.getType() == DocumentApp.ElementType.PARAGRAPH) {
            c.asParagraph().insertText(0, text);
            result = { content: [{ type: "text", text: "Text is inserted successfully into Google Docs." }], isError: false };
          } else {
            result = { content: [{ type: "text", text: `The index ${index} is not a paragraph.` }], isError: false };
          }
        }
      }
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function gets Google Socs Objects using Docs API.
 * @private
 */
function get_google_doc_object_using_docs_api(object = {}) {
  const { documentId = null } = object;
  let result;

  /**
   * Check API.
   */
  const apiName = "Docs";
  if (isAPIAtAdvancedGoogleServices_(apiName).api == "disable") {
    result = { content: [{ type: "text", text: `${apiName} API is disabled. Please enable ${apiName} API in the Advanced Google services.` }], isError: true };
    return { jsonrpc: "2.0", result };
  }

  try {
    if (!documentId) {
      result = { content: [{ type: "text", text: "No document ID." }], isError: true };
    } else {
      const obj = Docs.Documents.get(documentId);
      result = { content: [{ type: "text", text: JSON.stringify(obj) }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function manages Google Docs using Docs API.
 * @private
 */
function manage_google_docs_using_docs_api(object = {}) {
  const { documentId = null, requests = [] } = object;
  let result;

  /**
   * Check API.
   */
  const apiName = "Docs";
  if (isAPIAtAdvancedGoogleServices_(apiName).api == "disable") {
    result = { content: [{ type: "text", text: `${apiName} API is disabled. Please enable ${apiName} API in the Advanced Google services.` }], isError: true };
    return { jsonrpc: "2.0", result };
  }

  try {
    if (!documentId || requests.length == 0) {
      result = { content: [{ type: "text", text: "No document ID or requests." }], isError: true };
    } else {
      const obj = Docs.Documents.batchUpdate({ requests }, documentId);
      result = { content: [{ type: "text", text: JSON.stringify(obj) }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// /**
//  * This function manages Google Docs using Docs API.
//  * This is for only @google/gemini-cli with v0.1.13. At v0.1.13, the specification of the schema for MCP was changed. So, I use this tool.
//  * At v0.1.14, I confirmed that the previous schema could be used. So, this tool was removed, and the above tool is reimplemented.
//  * @private
//  */
// function manage_google_docs_using_docs_api(object = {}) {
//   const { documentId = null, prompt = null, refUrls = [] } = object;
//   let result;
//   try {
//     if (documentId && prompt) {
//       const resourceIds = { documentId };
//       const res = new GenerateRequestBody().generateRequestBody({ apiKey, prompt, jsonSchema: jsonSchemaForDocs, resourceIds, refUrls });
//       result = { content: [{ type: "text", text: `The generated request body was correctly used, and your request in the prompt was successfully run. The generated request body is as follows.\n${JSON.stringify(res)}` }], isError: false };
//     }
//   } catch ({ stack }) {
//     result = { content: [{ type: "text", text: stack }], isError: true };
//   }
//   console.log(result); // Check response.
//   return { jsonrpc: "2.0", result };
// }

// Descriptions of the functions.
const descriptions_management_docs = {
  get_values_from_google_docs: {
    description: "Use this to get text from Google Docs in a text format or a markdown format. The document ID is used for retrieving the values from the Google Docs. If you use the document URL, get the document ID from the URL and use the ID.",
    parameters: {
      type: "object",
      properties: {
        documentId: { type: "string", description: "Document ID of Google Docs." },
        tabName: { type: "string", description: "Tab name of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        tabId: { type: "string", description: "Tab ID of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        tabIndex: { type: "number", description: "Tab index of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        markdown: { type: "boolean", description: "The default is false. When this is true, the text is exported from Google Docs as a markdown format." },
      },
      required: ["documentId"]
    }
  },

  put_values_into_google_docs: {
    description: "Use this to append or insert text to Google Docs. The document ID is used for putting the values to the Google Docs. If you use the document URL, get the document ID from the URL and use the ID.",
    parameters: {
      type: "object",
      properties: {
        documentId: { type: "string", description: "Document ID of Google Docs." },
        tabName: { type: "string", description: "Tab name of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        tabId: { type: "string", description: "Tab ID of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        tabIndex: { type: "number", description: "Tab index of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        index: { type: "number", description: "The child index in Google Docs body. If the index is not used or the index is -1, the text is appended to Google Docs. If the index is more than 0, the text is inserted into the index of Google Docs body." },
        text: { type: "string", description: "Text for appending or inserting to Google Docs." },
      },
      required: ["documentId", "text"]
    }
  },

  get_google_doc_object_using_docs_api: {
    description: "Use this to get Google Docs Object using Docs API. https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get When this tool is used, for example, the index of each content in the document body can be retrieved. This cannot be directly used for retrieving text of the document body.",
    parameters: {
      type: "object",
      properties: {
        documentId: { type: "string", description: "Document ID of Google Docs." },
      },
      required: ["documentId"]
    }
  },

  manage_google_docs_using_docs_api: {
    description: "Use this to manage Google Docs using Docs API. Provide the request body for batchUpdate method. https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate",
    parameters: jsonSchemaForDocs,
  },

  // /**
  //  * This is for only @google/gemini-cli with v0.1.13.
  //  */
  // manage_google_docs_using_docs_api: {
  //   description: `Use this to manage Google Docs using the batchUpdate method of the Docs API. The information of the index of each content can be retrieved by a tool "get_google_doc_object_using_docs_api". If the request cannot be achieved by the tool "put_values_into_google_docs", try it with this tool.`,
  //   parameters: {
  //     type: "object",
  //     properties: {
  //       documentId: { type: "string", description: "Document ID of Google Docs." },
  //       prompt: { type: "string", description: "Prompt. Provide the request for processing using the Docs API by natural language. In order to help generate the request body, if it is required to add more information and the modification points, please reflect them in the provided prompt and provide it as the new prompt." },
  //       refUrls: {
  //         type: "array",
  //         description: "URLs for helping to generate the request body. If the request is complicated, provide the URLs with the information for helping to help generate the request body.",
  //         items: { type: "string", description: "URL" }
  //       },
  //     },
  //     required: ["documentId", "prompt"]
  //   }
  // },

};
