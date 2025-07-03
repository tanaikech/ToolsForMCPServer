/**
 * Management of Google Docs
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

// Descriptions of the functions.
const descriptions_management_docs = {
  get_values_from_google_docs: {
    description: "Use this to get text from Google Docs in a text format or a markdown format.",
    parameters: {
      type: "object",
      properties: {
        documentId: { type: "string", description: "Document ID of Google Docs." },
        documentUrl: { type: "string", description: "Document URL of Google Docs." },
        tabName: { type: "string", description: "Tab name of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        tabId: { type: "string", description: "Tab ID of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        tabIndex: { type: "number", description: "Tab index of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        markdown: { type: "boolean", description: "The default is false. When this is true, the text is exported from Google Docs as a markdown format." },
      },
      oneOf: [{ required: ["documentId"] }, { required: ["documentUrl"] }]
    }
  },

  put_values_into_google_docs: {
    description: "Use this to append or insert text to Google Docs.",
    parameters: {
      type: "object",
      properties: {
        documentId: { type: "string", description: "Document ID of Google Docs." },
        documentUrl: { type: "string", description: "Document URL of Google Docs." },
        tabName: { type: "string", description: "Tab name of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        tabId: { type: "string", description: "Tab ID of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        tabIndex: { type: "number", description: "Tab index of Google Docs. If both tabName, tabId, and tabIndex are not used, the 1st tab is automatically used." },
        index: { type: "number", description: "The child index in Google Docs body. If the index is not used or the index is -1, the text is appended to Google Docs. If the index is more than 0, the text is inserted into the index of Google Docs body." },
        text: { type: "string", description: "Text for appending or inserting to Google Docs." },
      },
      oneOf: [{ required: ["documentId", "text"] }, { required: ["documentUrl", "text"] }]
    }
  },

};
