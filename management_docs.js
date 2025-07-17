/**
 * Management of Google Docs
 * Updated on 20250717 15:50
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
    parameters: {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Google Docs API batchUpdate Request Body",
      "description": "A list of updates to apply to the document.",
      "type": "object",
      "properties": {
        "requests": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Request"
          }
        },
        "writeControl": {
          "$ref": "#/definitions/WriteControl"
        }
      },
      "required": [
        "requests"
      ],
      "definitions": {
        "Request": {
          "type": "object",
          "oneOf": [
            { "properties": { "replaceAllText": { "$ref": "#/definitions/ReplaceAllTextRequest" } } },
            { "properties": { "insertText": { "$ref": "#/definitions/InsertTextRequest" } } },
            { "properties": { "updateTextStyle": { "$ref": "#/definitions/UpdateTextStyleRequest" } } },
            { "properties": { "createParagraphBullets": { "$ref": "#/definitions/CreateParagraphBulletsRequest" } } },
            { "properties": { "deleteParagraphBullets": { "$ref": "#/definitions/DeleteParagraphBulletsRequest" } } },
            { "properties": { "createNamedRange": { "$ref": "#/definitions/CreateNamedRangeRequest" } } },
            { "properties": { "deleteNamedRange": { "$ref": "#/definitions/DeleteNamedRangeRequest" } } },
            { "properties": { "updateParagraphStyle": { "$ref": "#/definitions/UpdateParagraphStyleRequest" } } },
            { "properties": { "deleteContentRange": { "$ref": "#/definitions/DeleteContentRangeRequest" } } },
            { "properties": { "insertInlineImage": { "$ref": "#/definitions/InsertInlineImageRequest" } } },
            { "properties": { "insertTable": { "$ref": "#/definitions/InsertTableRequest" } } },
            { "properties": { "insertTableRow": { "$ref": "#/definitions/InsertTableRowRequest" } } },
            { "properties": { "insertTableColumn": { "$ref": "#/definitions/InsertTableColumnRequest" } } },
            { "properties": { "deleteTableRow": { "$ref": "#/definitions/DeleteTableRowRequest" } } },
            { "properties": { "deleteTableColumn": { "$ref": "#/definitions/DeleteTableColumnRequest" } } },
            { "properties": { "insertPageBreak": { "$ref": "#/definitions/InsertPageBreakRequest" } } },
            { "properties": { "deletePositionedObject": { "$ref": "#/definitions/DeletePositionedObjectRequest" } } },
            { "properties": { "updateTableColumnProperties": { "$ref": "#/definitions/UpdateTableColumnPropertiesRequest" } } },
            { "properties": { "updateTableCellStyle": { "$ref": "#/definitions/UpdateTableCellStyleRequest" } } },
            { "properties": { "updateTableRowStyle": { "$ref": "#/definitions/UpdateTableRowStyleRequest" } } },
            { "properties": { "replaceImage": { "$ref": "#/definitions/ReplaceImageRequest" } } },
            { "properties": { "updateDocumentStyle": { "$ref": "#/definitions/UpdateDocumentStyleRequest" } } },
            { "properties": { "mergeTableCells": { "$ref": "#/definitions/MergeTableCellsRequest" } } },
            { "properties": { "unmergeTableCells": { "$ref": "#/definitions/UnmergeTableCellsRequest" } } },
            { "properties": { "createHeader": { "$ref": "#/definitions/CreateHeaderRequest" } } },
            { "properties": { "createFooter": { "$ref": "#/definitions/CreateFooterRequest" } } },
            { "properties": { "createFootnote": { "$ref": "#/definitions/CreateFootnoteRequest" } } },
            { "properties": { "replaceNamedRangeContent": { "$ref": "#/definitions/ReplaceNamedRangeContentRequest" } } },
            { "properties": { "updateSectionStyle": { "$ref": "#/definitions/UpdateSectionStyleRequest" } } },
            { "properties": { "insertSectionBreak": { "$ref": "#/definitions/InsertSectionBreakRequest" } } },
            { "properties": { "deleteHeader": { "$ref": "#/definitions/DeleteHeaderRequest" } } },
            { "properties": { "deleteFooter": { "$ref": "#/definitions/DeleteFooterRequest" } } },
            { "properties": { "pinTableHeaderRows": { "$ref": "#/definitions/PinTableHeaderRowsRequest" } } }
          ]
        },
        "ReplaceAllTextRequest": {
          "type": "object",
          "properties": {
            "replaceText": { "type": "string" },
            "containsText": { "$ref": "#/definitions/SubstringMatchCriteria" },
            "tabsCriteria": { "$ref": "#/definitions/TabsCriteria" }
          }
        },
        "InsertTextRequest": {
          "type": "object",
          "properties": {
            "text": { "type": "string" },
            "location": { "$ref": "#/definitions/Location" },
            "endOfSegmentLocation": { "$ref": "#/definitions/EndOfSegmentLocation" }
          }
        },
        "UpdateTextStyleRequest": {
          "type": "object",
          "properties": {
            "textStyle": { "type": "object" },
            "fields": { "type": "string" },
            "range": { "$ref": "#/definitions/Range" }
          }
        },
        "CreateParagraphBulletsRequest": {
          "type": "object",
          "properties": {
            "range": { "$ref": "#/definitions/Range" },
            "bulletPreset": { "type": "string" }
          }
        },
        "DeleteParagraphBulletsRequest": {
          "type": "object",
          "properties": {
            "range": { "$ref": "#/definitions/Range" }
          }
        },
        "CreateNamedRangeRequest": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "range": { "$ref": "#/definitions/Range" }
          }
        },
        "DeleteNamedRangeRequest": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "namedRangeId": { "type": "string" },
            "tabsCriteria": { "$ref": "#/definitions/TabsCriteria" }
          }
        },
        "UpdateParagraphStyleRequest": {
          "type": "object",
          "properties": {
            "paragraphStyle": { "type": "object" },
            "fields": { "type": "string" },
            "range": { "$ref": "#/definitions/Range" }
          }
        },
        "DeleteContentRangeRequest": {
          "type": "object",
          "properties": {
            "range": { "$ref": "#/definitions/Range" }
          }
        },
        "InsertInlineImageRequest": {
          "type": "object",
          "properties": {
            "uri": { "type": "string" },
            "objectSize": { "$ref": "#/definitions/Size" },
            "location": { "$ref": "#/definitions/Location" },
            "endOfSegmentLocation": { "$ref": "#/definitions/EndOfSegmentLocation" }
          }
        },
        "InsertTableRequest": {
          "type": "object",
          "properties": {
            "rows": { "type": "integer" },
            "columns": { "type": "integer" },
            "location": { "$ref": "#/definitions/Location" },
            "endOfSegmentLocation": { "$ref": "#/definitions/EndOfSegmentLocation" }
          }
        },
        "InsertTableRowRequest": {
          "type": "object",
          "properties": {
            "tableCellLocation": { "$ref": "#/definitions/TableCellLocation" },
            "insertBelow": { "type": "boolean" }
          }
        },
        "InsertTableColumnRequest": {
          "type": "object",
          "properties": {
            "tableCellLocation": { "$ref": "#/definitions/TableCellLocation" },
            "insertRight": { "type": "boolean" }
          }
        },
        "DeleteTableRowRequest": {
          "type": "object",
          "properties": {
            "tableCellLocation": { "$ref": "#/definitions/TableCellLocation" }
          }
        },
        "DeleteTableColumnRequest": {
          "type": "object",
          "properties": {
            "tableCellLocation": { "$ref": "#/definitions/TableCellLocation" }
          }
        },
        "InsertPageBreakRequest": {
          "type": "object",
          "properties": {
            "location": { "$ref": "#/definitions/Location" },
            "endOfSegmentLocation": { "$ref": "#/definitions/EndOfSegmentLocation" }
          }
        },
        "DeletePositionedObjectRequest": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "tabId": { "type": "string" }
          }
        },
        "UpdateTableColumnPropertiesRequest": {
          "type": "object",
          "properties": {
            "tableStartLocation": { "$ref": "#/definitions/Location" },
            "columnIndices": { "type": "array", "items": { "type": "integer" } },
            "tableColumnProperties": { "type": "object" },
            "fields": { "type": "string" }
          }
        },
        "UpdateTableCellStyleRequest": {
          "type": "object",
          "properties": {
            "tableCellStyle": { "type": "object" },
            "fields": { "type": "string" },
            "tableRange": { "$ref": "#/definitions/TableRange" },
            "tableStartLocation": { "$ref": "#/definitions/Location" }
          }
        },
        "UpdateTableRowStyleRequest": {
          "type": "object",
          "properties": {
            "tableStartLocation": { "$ref": "#/definitions/Location" },
            "rowIndices": { "type": "array", "items": { "type": "integer" } },
            "tableRowStyle": { "type": "object" },
            "fields": { "type": "string" }
          }
        },
        "ReplaceImageRequest": {
          "type": "object",
          "properties": {
            "imageObjectId": { "type": "string" },
            "uri": { "type": "string" },
            "imageReplaceMethod": { "type": "string" },
            "tabId": { "type": "string" }
          }
        },
        "UpdateDocumentStyleRequest": {
          "type": "object",
          "properties": {
            "documentStyle": { "type": "object" },
            "fields": { "type": "string" },
            "tabId": { "type": "string" }
          }
        },
        "MergeTableCellsRequest": {
          "type": "object",
          "properties": {
            "tableRange": { "$ref": "#/definitions/TableRange" }
          }
        },
        "UnmergeTableCellsRequest": {
          "type": "object",
          "properties": {
            "tableRange": { "$ref": "#/definitions/TableRange" }
          }
        },
        "CreateHeaderRequest": {
          "type": "object",
          "properties": {
            "type": { "type": "string" },
            "sectionBreakLocation": { "$ref": "#/definitions/Location" }
          }
        },
        "CreateFooterRequest": {
          "type": "object",
          "properties": {
            "type": { "type": "string" },
            "sectionBreakLocation": { "$ref": "#/definitions/Location" }
          }
        },
        "CreateFootnoteRequest": {
          "type": "object",
          "properties": {
            "location": { "$ref": "#/definitions/Location" },
            "endOfSegmentLocation": { "$ref": "#/definitions/EndOfSegmentLocation" }
          }
        },
        "ReplaceNamedRangeContentRequest": {
          "type": "object",
          "properties": {
            "namedRangeName": { "type": "string" },
            "namedRangeId": { "type": "string" },
            "text": { "type": "string" },
            "tabsCriteria": { "$ref": "#/definitions/TabsCriteria" }
          }
        },
        "UpdateSectionStyleRequest": {
          "type": "object",
          "properties": {
            "range": { "$ref": "#/definitions/Range" },
            "sectionStyle": { "type": "object" },
            "fields": { "type": "string" }
          }
        },
        "InsertSectionBreakRequest": {
          "type": "object",
          "properties": {
            "sectionType": { "type": "string" },
            "location": { "$ref": "#/definitions/Location" },
            "endOfSegmentLocation": { "$ref": "#/definitions/EndOfSegmentLocation" }
          }
        },
        "DeleteHeaderRequest": {
          "type": "object",
          "properties": {
            "headerId": { "type": "string" },
            "tabId": { "type": "string" }
          }
        },
        "DeleteFooterRequest": {
          "type": "object",
          "properties": {
            "footerId": { "type": "string" },
            "tabId": { "type": "string" }
          }
        },
        "PinTableHeaderRowsRequest": {
          "type": "object",
          "properties": {
            "tableStartLocation": { "$ref": "#/definitions/Location" },
            "pinnedHeaderRowsCount": { "type": "integer" }
          }
        },
        "SubstringMatchCriteria": {
          "type": "object",
          "properties": {
            "text": { "type": "string" },
            "matchCase": { "type": "boolean" }
          },
          "required": ["text"]
        },
        "Location": {
          "type": "object",
          "properties": {
            "segmentId": { "type": "string" },
            "index": { "type": "integer" },
            "tabId": { "type": "string" }
          }
        },
        "EndOfSegmentLocation": {
          "type": "object",
          "properties": {
            "segmentId": { "type": "string" },
            "tabId": { "type": "string" }
          }
        },
        "Range": {
          "type": "object",
          "properties": {
            "segmentId": { "type": "string" },
            "startIndex": { "type": "integer" },
            "endIndex": { "type": "integer" },
            "tabId": { "type": "string" }
          }
        },
        "Size": {
          "type": "object",
          "properties": {
            "height": { "$ref": "#/definitions/Dimension" },
            "width": { "$ref": "#/definitions/Dimension" }
          }
        },
        "Dimension": {
          "type": "object",
          "properties": {
            "magnitude": { "type": "number" },
            "unit": { "type": "string" }
          }
        },
        "TableCellLocation": {
          "type": "object",
          "properties": {
            "tableStartLocation": { "$ref": "#/definitions/Location" },
            "rowIndex": { "type": "integer" },
            "columnIndex": { "type": "integer" }
          }
        },
        "TableRange": {
          "type": "object",
          "properties": {
            "tableCellLocation": { "$ref": "#/definitions/TableCellLocation" },
            "rowSpan": { "type": "integer" },
            "columnSpan": { "type": "integer" }
          }
        },
        "TabsCriteria": {
          "type": "object",
          "properties": {
            "tabIds": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        },
        "WriteControl": {
          "type": "object",
          "properties": {
            "requiredRevisionId": { "type": "string" },
            "targetRevisionId": { "type": "string" }
          }
        }
      }
    }
  }
};
