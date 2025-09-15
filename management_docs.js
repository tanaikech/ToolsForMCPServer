/**
 * Management of Google Docs
 * Updated on 20250915 14:30
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
  /**
   * Check API
   */
  const check = checkAPI_("Docs");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Docs.Documents.get, args: [object.pathParameters?.documentId, object.queryParameters || {}], jsonSchema: jsonSchemaForDocs.Get });
}

/**
 * This function manages Google Docs using Docs API.
 * @private
 */
function manage_google_docs_using_docs_api(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Docs");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Docs.Documents.batchUpdate, args: [object.requestBody, object.pathParameters?.documentId] });
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
    description: "Use this to get Google Docs Object using Docs API. When this tool is used, for example, the index of each content in the document body can be retrieved. This cannot be directly used for retrieving text of the document body.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            documentId: { type: "string", description: "The document ID of the document to retrieve." }
          },
          required: ["documentId"]
        },
        queryParameters: {
          type: "object",
          properties: {
            suggestionsViewMode: {
              type: "string",
              description: "The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, DEFAULT_FOR_CURRENT_ACCESS is used.",
              enum: ["DEFAULT_FOR_CURRENT_ACCESS", "SUGGESTIONS_INLINE", "PREVIEW_SUGGESTIONS_ACCEPTED", "PREVIEW_WITHOUT_SUGGESTIONS"]
            },
            excludeTablesInBandedRanges: {
              type: "boolean", description: [
                `Whether to populate the Document.tabs field instead of the text content fields like body and documentStyle on Document.`,
                `When True: Document content populates in the Document.tabs field instead of the text content fields in Document.`,
                `When False: The content of the document's first tab populates the content fields in Document excluding Document.tabs. If a document has only one tab, then that tab is used to populate the document content. Document.tabs will be empty.`,
              ].join("\n")
            },
          }
        }
      },
      required: ["pathParameters"]
    }
  },

  manage_google_docs_using_docs_api: {
    title: "Updates Google Docs",
    description: `Use this to manage Google Docs using Docs API. Provide the request body for batchUpdate method. In order to retrieve the detailed information of the document, including the index and so on, it is required to use a tool "get_google_doc_object_using_docs_api".`,
    parameters: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          description: `Create the request body for "Method: documents.batchUpdate" of Google Docs API. If you want to know how to create the request body, please check a tool "explanation_manage_google_docs_using_docs_api".`,
        },
        pathParameters: {
          type: "object",
          properties: {
            documentId: {
              type: "string", description: "The document ID to apply the updates to."
            }
          },
          required: ["documentId"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
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

};
