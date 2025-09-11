/**
 * Management of Google Docs
 * Updated on 20250910 16:20
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
    if (!documentId || !Array.isArray(requests) || requests.length == 0) {
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

/**
 * This function creats a document body in Google Docs.
 * @private
 */
function create_document_body_in_google_docs(object = {}) {
  const { documentId, documentText } = object;
  let result;
  try {
    if (documentText.length > 0) {
      if (!documentId) {
        object.documentId = DocumentApp.create("sample").getId();
      }
      const doc = DocumentApp.openById(object.documentId);
      const body = doc.getBody();
      const keys = ["paragraph", "table", "list", "image", "horizontalRule", "pageBreak"];
      documentText.forEach(o => {
        keys.forEach(k => {
          if (o[k]) {
            const s = k.charAt(0).toUpperCase() + k.slice(1);
            const func = o[k].hasOwnProperty("insertIndex") ? `insert${s}` : `append${s}`;
            if (k == "paragraph") {
              body[func](...[(o[k].insertIndex >= 0 ? o[k].insertIndex : []), o[k].value].flat()).setHeading(DocumentApp.ParagraphHeading[o[k].paragraphHeading || "NORMAL"]);
            } else if (k == "table") {
              body[func](...[(o[k].insertIndex >= 0 ? o[k].insertIndex : [])].flat(), o[k].value);
            } else if (k == "list") {
              o[k].value.forEach((l, i) => body[func](...[(o[k].insertIndex >= 0 ? o[k].insertIndex + i : null) || [], l].flat()));
            } else if (k == "image") {
              const blob = o[k].fileId ? DriveApp.getFileById(o[k].fileId).getBlob() : o[k].url ? UrlFetchApp.fetch(o[k].url).getBlob() : null;
              if (blob) {
                body[func](...[(o[k].insertIndex >= 0 ? o[k].insertIndex : []), blob].flat());
              }
            } else if (["horizontalRule", "pageBreak"].includes(k)) {
              body[func](...[(o[k].insertIndex >= 0 ? o[k].insertIndex : [])].flat());
            }
          }
        });
      });
      result = { content: [{ type: "text", text: `The document body was created to ${doc.getUrl()}.` }], isError: false };
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
    description: [
      "Use this to manage Google Docs using Docs API. Provide the request body for batchUpdate method. https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate",
      `In order to retrieve the detailed information of the document, including the index and so on, it is required to use a tool "get_google_doc_object_using_docs_api".`,
    ].join("\n"),
    parameters: jsonSchemaForDocs,
  },

  create_document_body_in_google_docs: {
    title: "Create document body in Google Docs",
    description: [
      `Use to create document body in Google Docs.`,
      `This tool puts a document text including paragraphs, tables, lists, images, horizontal rules, and page breaks using Google Apps Script.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        documentId: { type: "string", description: "The file ID (Document ID) of the Google Docs. If you have no document ID, create a new Google Docs document and give the document ID of the created Google Docs." },
        documentText: {
          description: `Each item in this array is added to Google Docs in order. You can create an array by selecting "paragraph", "table", "listItem", "image", "horizontalRule", and "pageBreak". Create an array by considering the whole document structure.`,
          type: "array",
          items: {
            type: "object",
            properties: {
              paragraph: {
                type: "object",
                properties: {
                  value: { type: "string", description: `Text as a paragraph. When you use the escape sequence for representing a line break, it will be used as multiple paragraphs.` },
                  // insertIndex: { type: "number", description: `The start value is 0. When this is used, the paragraph is inserted at the specific point. When this property is not used, the paragraph is appended to the document.` },
                  paragraphHeading: { type: "string", description: `You can manage the paragraph using this property. When this is not used, "NORMAL" is used as the default paragraph heading.`, enum: ["HEADING1", "HEADING2", "HEADING3", "HEADING4", "HEADING5", "HEADING6", "NORMAL", "SUBTITLE", "TITLE"] }
                }
              },
              table: {
                type: "object",
                properties: {
                  value: {
                    description: "Table value. This is required to be a 2-dimensional array.",
                    type: "array", items: { type: "array" }
                  },
                  // insertIndex: { type: "number", description: `The start value is 0. When this is used, the table is inserted at the specific point. When this property is not used, the table is appended to the document.` },
                }
              },

              // When the following property is used, an error related to the maximum nested level occurs.
              // table: {
              //   type: "object",
              //   properties: {
              //     value: {
              //       description: "Table value. This is required to be a 2-dimensional array.",
              //       type: "array", items: { type: "array", items: { type: "string" } }
              //     },
              //     insertIndex: { type: "number", description: `The start value is 0. When this is used, the table is inserted at the specific point. When this property is not used, the table is appended to the document.` },
              //   }
              // },

              listItem: {
                type: "object",
                properties: {
                  value: {
                    description: "Texts of list items of a list. This is required to be a 1-dimensional array. The items are added to Google Docs in order in the array.",
                    type: "array", items: { type: "string" }
                  },
                  // insertIndex: { type: "number", description: `The start value is 0. When this is used, the plistItem is inserted at the specific point. When this property is not used, the listItem is appended to the document.` },
                }
              },
              image: {
                type: "object",
                properties: {
                  fileId: { type: "string", description: `The file ID of the image file on Google Drive. When you use "fileId", don't use the property "url".` },
                  url: { type: "string", description: `The direct link of the image data or image file. When you use "url", don't use the property "fileId".` },
                  // insertIndex: { type: "number", description: `The start value is 0. When this is used, the image is inserted at the specific point. When this property is not used, the image is appended to the document.` },
                }
              },
              horizontalRule: {
                type: "object",
                properties: {
                  // insertIndex: { type: "number", description: `The start value is 0. When this is used, the horizontalRule is inserted at the specific point. When this property is not used, the horizontalRule is appended to the document.` },
                }
              },
              pageBreak: {
                type: "object",
                properties: {
                  // insertIndex: { type: "number", description: `The start value is 0. When this is used, the pageBreak is inserted at the specific point. When this property is not used, the pageBreak is appended to the document.` },
                }
              },
            }
          }
        }
      },
      required: ["documentId", "documentText"]
    }
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
