/**
 * Management of Google Sheets
 * Updated on 20250717 15:50
 */

/**
 * This function returns Sheet object.
 * @private
 */
function getSheet_(object) {
  const { spreadsheetId = null, spreadsheetUrl = null, sheetName = null, sheetId = null, sheetIndex = 0 } = object;
  const { spreadsheet_id = null, spreadsheet_url = null, sheet_name = null, sheet_id = null, sheet_index = 0 } = object;

  let result;
  if (!spreadsheetId && !spreadsheetUrl && !spreadsheet_id && !spreadsheet_url) {
    result = { content: [{ type: "text", text: "Spreadsheet ID or spreadsheet URL was not found." }], isError: true };
  } else {
    let ss;
    if (spreadsheetId || spreadsheet_id) {
      ss = SpreadsheetApp.openById(spreadsheetId || spreadsheet_id);
    } else {
      ss = SpreadsheetApp.openByUrl(spreadsheetUrl || spreadsheet_url);
    }
    if (sheetName || sheet_name) {
      result = ss.getSheetByName(sheetName || sheet_name);
    } else if (sheetId || sheet_id) {
      result = ss.getSheetById(sheetId || sheet_id);
    } else {
      if (ss.getNumSheets() >= (sheetIndex || sheet_index) + 1) {
        result = ss.getSheets()[sheetIndex || sheet_index];
      } else {
        result = { content: [{ type: "text", text: `"${sheetIndex || sheet_index}" didn't exist.` }], isError: true };
      }
    }
  }
  return result;
}

/**
 * This function gets values from Google Sheets.
 * @private
 */
function get_values_from_google_sheets(object = {}) {
  const { range = "" } = object;
  let result;
  try {
    result = getSheet_(object);
    if (result.toString() == "Sheet") {
      const sheet = result;
      let values;
      if (range) {
        values = sheet.getRange(range).getDisplayValues();
      } else {
        values = sheet.getDataRange().getDisplayValues();
      }
      result = { content: [{ type: "text", text: JSON.stringify(values) }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function puts values into Google Sheets.
 * @private
 */
function put_values_to_google_sheets(object = {}) {
  const { values = null, range = null } = object;
  let result;
  try {
    if (!values || !Array.isArray(values) || !Array.isArray(values[0])) {
      result = { content: [{ type: "text", text: "Invalid values." }], isError: true };
    } else {
      result = getSheet_(object);
      if (result.toString() == "Sheet") {
        const sheet = result;
        let rangeObj;
        if (range) {
          rangeObj = sheet.getRange(range).offset(0, 0, values.length, values[0].length);
        } else {
          rangeObj = sheet.getRange(sheet.getLastRow() + 1, 1, values.length, values[0].length);
        }
        rangeObj.setValues(values);
        result = { content: [{ type: "text", text: `${JSON.stringify(values)} were put into the range "${rangeObj.getA1Notation()}" of the "${sheet.getName()}" sheet on the Google Sheets of "${sheet.getParent().getName()}".` }], isError: false };
      }
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function searches all cells in Google Sheets using a regex.
 * @private
 */
function search_values_from_google_sheets(object = {}) {
  const { searchText = null } = object;
  let result;
  try {
    if (!searchText) {
      result = { content: [{ type: "text", text: "Set the searh text as regex." }], isError: true };
    } else {
      result = getSheet_(object);
      if (result.toString() == "Sheet") {
        const sheet = result;
        const ss = sheet.getParent();
        const ranges = ss.createTextFinder(searchText).useRegularExpression(true).matchEntireCell(true).findAll();
        let text;
        if (ranges.length > 0) {
          text = `"${searchText}" was found at the cells ` + ranges.map(r => `'${r.getSheet().getSheetName()}'!${r.getA1Notation()}`).join(",");
        } else {
          text = `"${searchText}" was not found.`;
        }
        result = { content: [{ type: "text", text }], isError: false };
      }
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function gets Google Sheets Objects using Sheets API.
 * @private
 */
function get_google_sheet_object_using_sheets_api(object = {}) {
  const { spreadsheetId = null } = object;
  let result;
  try {
    if (!spreadsheetId) {
      result = { content: [{ type: "text", text: "No spreadsheet ID." }], isError: true };
    } else {
      const obj = Sheets.Spreadsheets.get(spreadsheetId);
      result = { content: [{ type: "text", text: JSON.stringify(obj) }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function manages Google Sheets using Sheets API.
 * @private
 */
function manage_google_sheets_using_sheets_api(object = {}) {
  const { spreadsheetId = null, requests = [] } = object;
  let result;
  try {
    if (!spreadsheetId || requests.length == 0) {
      result = { content: [{ type: "text", text: "No spreadsheet ID or requests." }], isError: true };
    } else {
      const obj = Sheets.Spreadsheets.batchUpdate({ requests }, spreadsheetId);
      result = { content: [{ type: "text", text: JSON.stringify(obj) }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}


// Descriptions of the functions.
const descriptions_management_sheets = {
  get_values_from_google_sheets: {
    description: "Use this to get values from Google Sheets.",
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." },
        spreadsheetUrl: { type: "string", description: "Spreadsheet URL of Google Sheets." },
        sheetName: { type: "string", description: "Sheet name in the Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets." },
        sheetId: { type: "string", description: "Sheet ID of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets." },
        sheetIndex: { type: "number", description: "Sheet index (The 1st sheet is 0.) of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets." },
        range: { type: "string", description: "Range as A1Notation. The values are retrieved from this range. If this is not used, the data range is automatically used." },
      },
      oneOf: [{ required: ["spreadsheetId"] }, { required: ["spreadsheetUrl"] }]
    }
  },

  put_values_to_google_sheets: {
    description: "Use this to put values into Google Sheets.",
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." },
        spreadsheetUrl: { type: "string", description: "Spreadsheet URL of Google Sheets." },
        sheetName: { type: "string", description: "Sheet name in the Google Sheets. If both sheetName and sheetId are not provided, the values are put into the 1st sheet on Google Sheets." },
        sheetId: { type: "string", description: "Sheet ID of the sheet in Google Sheets. If both sheetName and sheetId are not provided, the values are put into the 1st sheet on Google Sheets." },
        sheetIndex: { type: "number", description: "Sheet index (The 1st sheet is 0.) of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are put into the 1st sheet on Google Sheets." },
        values: {
          type: "array",
          description: "Values for putting into Google Sheets. This is required to be a 2-dimensional array.",
          items: { type: "array", items: { anyof: [{ type: "string" }, { type: "number" }] } },
        },
        range: { type: "string", description: "Range as A1Notation. The values are retrieved from this range. If this is not used, the values are put into the last row." },
      },
      oneOf: [{ required: ["spreadsheetId", "values"] }, { required: ["spreadsheetUrl", "values"] }]
    }
  },

  search_values_from_google_sheets: {
    description: "Use this to search all cells in Google Sheets using a regex. In this case, the search text is searched to see whether it is the same as the entire cell value. So, if you want to search the cells including 'sample' text, please use a regex like '.*sample.*'.",
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." },
        spreadsheetUrl: { type: "string", description: "Spreadsheet URL of Google Sheets." },
        searchText: {
          type: "string",
          description: "Search text. The search text is searched to see whether it is the same as the entire cell value. So, if you want to search the cells including 'sample' text, please use a regex like '.*sample.*'. You can search the cell coordinates using a regex.",
        },
      },
      oneOf: [{ required: ["spreadsheetId", "searchText"] }, { required: ["spreadsheetUrl", "searchText"] }]
    }
  },

  get_google_sheet_object_using_sheets_api: {
    description: "Use this to get Google Sheets Object using Sheets API. https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/get When this tool is used, for example, the sheet names can be converted to sheet IDs. This cannot be used for retrieving the cell values.",
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." },
      },
      required: ["spreadsheetId"]
    }
  },

  manage_google_sheets_using_sheets_api: {
    description: "Use this to manage Google Sheets using Sheets API. Provide the request body for batchUpdate method. https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate",
    parameters: {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Google Sheets API batchUpdate Request",
      "description": "A request to apply one or more updates to a spreadsheet.",
      "type": "object",
      "properties": {
        "requests": {
          "type": "array",
          "description": "A list of updates to apply to the spreadsheet.",
          "items": {
            "$ref": "#/definitions/Request"
          }
        },
        "includeSpreadsheetInResponse": {
          "type": "boolean",
          "description": "Determines if the updated spreadsheet should be returned in the response."
        },
        "responseRanges": {
          "type": "array",
          "description": "The ranges that should be returned in the response.",
          "items": {
            "type": "string"
          }
        },
        "responseIncludeGridData": {
          "type": "boolean",
          "description": "True if grid data should be returned. This parameter is ignored if a field mask was set in the request."
        }
      },
      "required": [
        "requests"
      ],
      "definitions": {
        "Request": {
          "type": "object",
          "description": "A single kind of update to apply to a spreadsheet.",
          "oneOf": [
            { "$ref": "#/definitions/UpdateSpreadsheetPropertiesRequest" },
            { "$ref": "#/definitions/UpdateSheetPropertiesRequest" },
            { "$ref": "#/definitions/UpdateDimensionPropertiesRequest" },
            { "$ref": "#/definitions/UpdateNamedRangeRequest" },
            { "$ref": "#/definitions/RepeatCellRequest" },
            { "$ref": "#/definitions/AddNamedRangeRequest" },
            { "$ref": "#/definitions/DeleteNamedRangeRequest" },
            { "$ref": "#/definitions/AddSheetRequest" },
            { "$ref": "#/definitions/DeleteSheetRequest" },
            { "$ref": "#/definitions/AutoFillRequest" },
            { "$ref": "#/definitions/CutPasteRequest" },
            { "$ref": "#/definitions/CopyPasteRequest" },
            { "$ref": "#/definitions/MergeCellsRequest" },
            { "$ref": "#/definitions/UnmergeCellsRequest" },
            { "$ref": "#/definitions/UpdateBordersRequest" },
            { "$ref": "#/definitions/UpdateCellsRequest" },
            { "$ref": "#/definitions/AddFilterViewRequest" },
            { "$ref": "#/definitions/AppendCellsRequest" },
            { "$ref": "#/definitions/ClearBasicFilterRequest" },
            { "$ref": "#/definitions/DeleteDimensionRequest" },
            { "$ref": "#/definitions/DeleteEmbeddedObjectRequest" },
            { "$ref": "#/definitions/DeleteFilterViewRequest" },
            { "$ref": "#/definitions/DuplicateFilterViewRequest" },
            { "$ref": "#/definitions/DuplicateSheetRequest" },
            { "$ref": "#/definitions/FindReplaceRequest" },
            { "$ref": "#/definitions/InsertDimensionRequest" },
            { "$ref": "#/definitions/InsertRangeRequest" },
            { "$ref": "#/definitions/MoveDimensionRequest" },
            { "$ref": "#/definitions/UpdateEmbeddedObjectPositionRequest" },
            { "$ref": "#/definitions/PasteDataRequest" },
            { "$ref": "#/definitions/TextToColumnsRequest" },
            { "$ref": "#/definitions/UpdateFilterViewRequest" },
            { "$ref": "#/definitions/DeleteRangeRequest" },
            { "$ref": "#/definitions/AppendDimensionRequest" },
            { "$ref": "#/definitions/AddConditionalFormatRuleRequest" },
            { "$ref": "#/definitions/UpdateConditionalFormatRuleRequest" },
            { "$ref": "#/definitions/DeleteConditionalFormatRuleRequest" },
            { "$ref": "#/definitions/SortRangeRequest" },
            { "$ref": "#/definitions/SetDataValidationRequest" },
            { "$ref": "#/definitions/SetBasicFilterRequest" },
            { "$ref": "#/definitions/AddProtectedRangeRequest" },
            { "$ref": "#/definitions/UpdateProtectedRangeRequest" },
            { "$ref": "#/definitions/DeleteProtectedRangeRequest" },
            { "$ref": "#/definitions/AutoResizeDimensionsRequest" },
            { "$ref": "#/definitions/AddChartRequest" },
            { "$ref": "#/definitions/UpdateChartSpecRequest" },
            { "$ref": "#/definitions/UpdateBandingRequest" },
            { "$ref": "#/definitions/AddBandingRequest" },
            { "$ref": "#/definitions/DeleteBandingRequest" },
            { "$ref": "#/definitions/CreateDeveloperMetadataRequest" },
            { "$ref": "#/definitions/UpdateDeveloperMetadataRequest" },
            { "$ref": "#/definitions/DeleteDeveloperMetadataRequest" },
            { "$ref": "#/definitions/RandomizeRangeRequest" },
            { "$ref": "#/definitions/AddDimensionGroupRequest" },
            { "$ref": "#/definitions/DeleteDimensionGroupRequest" },
            { "$ref": "#/definitions/UpdateDimensionGroupRequest" },
            { "$ref": "#/definitions/TrimWhitespaceRequest" },
            { "$ref": "#/definitions/DeleteDuplicatesRequest" },
            { "$ref": "#/definitions/UpdateEmbeddedObjectBorderRequest" },
            { "$ref": "#/definitions/AddSlicerRequest" },
            { "$ref": "#/definitions/UpdateSlicerSpecRequest" },
            { "$ref": "#/definitions/AddDataSourceRequest" },
            { "$ref": "#/definitions/UpdateDataSourceRequest" },
            { "$ref": "#/definitions/DeleteDataSourceRequest" },
            { "$ref": "#/definitions/RefreshDataSourceRequest" },
            { "$ref": "#/definitions/CancelDataSourceRefreshRequest" },
            { "$ref": "#/definitions/AddTableRequest" },
            { "$ref": "#/definitions/UpdateTableRequest" },
            { "$ref": "#/definitions/DeleteTableRequest" }
          ]
        },
        "AddTableRequest": {
          "type": "object",
          "properties": {
            "table": {
              "type": "object",
              "description": "The table to add."
            }
          }
        },
        "UpdateTableRequest": {
          "type": "object",
          "properties": {
            "table": {
              "type": "object",
              "description": "The table to update."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated. At least one field must be specified."
            }
          }
        },
        "DeleteTableRequest": {
          "type": "object",
          "properties": {
            "tableId": {
              "type": "string",
              "description": "The ID of the table to delete."
            }
          }
        },
        "UpdateSpreadsheetPropertiesRequest": {
          "type": "object",
          "properties": {
            "properties": {
              "type": "object",
              "description": "The properties to update."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated. At least one field must be specified."
            }
          }
        },
        "UpdateSheetPropertiesRequest": {
          "type": "object",
          "properties": {
            "properties": {
              "type": "object",
              "description": "The properties to update."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated. At least one field must be specified."
            }
          }
        },
        "UpdateDimensionPropertiesRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range of the dimensions to update."
            },
            "properties": {
              "type": "object",
              "description": "The properties to update."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated. At least one field must be specified."
            }
          }
        },
        "UpdateNamedRangeRequest": {
          "type": "object",
          "properties": {
            "namedRange": {
              "type": "object",
              "description": "The named range to update."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated. At least one field must be specified."
            }
          }
        },
        "RepeatCellRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range to repeat the cell in."
            },
            "cell": {
              "type": "object",
              "description": "The data to write."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated. At least one field must be specified."
            }
          }
        },
        "AddNamedRangeRequest": {
          "type": "object",
          "properties": {
            "namedRange": {
              "type": "object",
              "description": "The named range to add."
            }
          }
        },
        "DeleteNamedRangeRequest": {
          "type": "object",
          "properties": {
            "namedRangeId": {
              "type": "string",
              "description": "The ID of the named range to delete."
            }
          }
        },
        "AddSheetRequest": {
          "type": "object",
          "properties": {
            "properties": {
              "type": "object",
              "description": "The properties the new sheet should have."
            }
          }
        },
        "DeleteSheetRequest": {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "integer",
              "description": "The ID of the sheet to delete."
            }
          }
        },
        "AutoFillRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range to autofill."
            },
            "sourceAndDestination": {
              "type": "object",
              "description": "The source and destination areas to autofill."
            },
            "useAlternateSeries": {
              "type": "boolean",
              "description": "True if we should generate data with the 'alternate' series."
            }
          }
        },
        "CutPasteRequest": {
          "type": "object",
          "properties": {
            "source": {
              "type": "object",
              "description": "The source data to cut."
            },
            "destination": {
              "type": "object",
              "description": "The top-left coordinate where the data should be pasted."
            },
            "pasteType": {
              "type": "string",
              "enum": [
                "PASTE_NORMAL",
                "PASTE_VALUES",
                "PASTE_FORMAT",
                "PASTE_NO_BORDERS",
                "PASTE_FORMULA",
                "PASTE_DATA_VALIDATION",
                "PASTE_CONDITIONAL_FORMATTING"
              ],
              "description": "What kind of data to paste."
            }
          }
        },
        "CopyPasteRequest": {
          "type": "object",
          "properties": {
            "source": {
              "type": "object",
              "description": "The source range to copy."
            },
            "destination": {
              "type": "object",
              "description": "The location to paste to."
            },
            "pasteType": {
              "type": "string",
              "enum": [
                "PASTE_NORMAL",
                "PASTE_VALUES",
                "PASTE_FORMAT",
                "PASTE_NO_BORDERS",
                "PASTE_FORMULA",
                "PASTE_DATA_VALIDATION",
                "PASTE_CONDITIONAL_FORMATTING"
              ],
              "description": "What kind of data to paste."
            },
            "pasteOrientation": {
              "type": "string",
              "enum": [
                "NORMAL",
                "TRANSPOSE"
              ],
              "description": "How that data should be oriented when pasting."
            }
          }
        },
        "MergeCellsRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range of cells to merge."
            },
            "mergeType": {
              "type": "string",
              "enum": [
                "MERGE_ALL",
                "MERGE_COLUMNS",
                "MERGE_ROWS"
              ],
              "description": "How the cells should be merged."
            }
          }
        },
        "UnmergeCellsRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range within which all cells should be unmerged."
            }
          }
        },
        "UpdateBordersRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range whose borders should be updated."
            },
            "top": {
              "type": "object"
            },
            "bottom": {
              "type": "object"
            },
            "left": {
              "type": "object"
            },
            "right": {
              "type": "object"
            },
            "innerHorizontal": {
              "type": "object"
            },
            "innerVertical": {
              "type": "object"
            }
          }
        },
        "UpdateCellsRequest": {
          "type": "object",
          "properties": {
            "start": {
              "type": "object",
              "description": "The coordinate to start writing data at."
            },
            "rows": {
              "type": "array",
              "items": {
                "type": "object"
              }
            },
            "fields": {
              "type": "string",
              "description": "The fields of CellData that should be updated."
            }
          }
        },
        "AddFilterViewRequest": {
          "type": "object",
          "properties": {
            "filter": {
              "type": "object",
              "description": "The filter to add."
            }
          }
        },
        "AppendCellsRequest": {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "integer",
              "description": "The sheet ID to append the data to."
            },
            "rows": {
              "type": "array",
              "items": {
                "type": "object"
              }
            },
            "fields": {
              "type": "string",
              "description": "The fields of CellData that should be updated."
            }
          }
        },
        "ClearBasicFilterRequest": {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "integer",
              "description": "The sheet ID on which the basic filter should be cleared."
            }
          }
        },
        "DeleteDimensionRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The dimensions to delete from the sheet."
            }
          }
        },
        "DeleteEmbeddedObjectRequest": {
          "type": "object",
          "properties": {
            "objectId": {
              "type": "integer",
              "description": "The ID of the embedded object to delete."
            }
          }
        },
        "DeleteFilterViewRequest": {
          "type": "object",
          "properties": {
            "filterId": {
              "type": "integer",
              "description": "The ID of the filter to delete."
            }
          }
        },
        "DuplicateFilterViewRequest": {
          "type": "object",
          "properties": {
            "filterId": {
              "type": "integer",
              "description": "The ID of the filter being duplicated."
            }
          }
        },
        "DuplicateSheetRequest": {
          "type": "object",
          "properties": {
            "sourceSheetId": {
              "type": "integer",
              "description": "The sheet to duplicate."
            },
            "insertSheetIndex": {
              "type": "integer",
              "description": "The zero-based index where the new sheet should be inserted."
            },
            "newSheetId": {
              "type": "integer",
              "description": "If set, the ID of the new sheet."
            },
            "newSheetName": {
              "type": "string",
              "description": "The name of the new sheet."
            }
          }
        },
        "FindReplaceRequest": {
          "type": "object",
          "properties": {
            "find": {
              "type": "string",
              "description": "The value to search."
            },
            "replacement": {
              "type": "string",
              "description": "The value to use as the replacement."
            },
            "matchCase": {
              "type": "boolean",
              "description": "True if the search is case sensitive."
            },
            "matchEntireCell": {
              "type": "boolean",
              "description": "True if the find value should match the entire cell."
            },
            "searchByRegex": {
              "type": "boolean",
              "description": "True if the find value is a regex."
            },
            "includeFormulas": {
              "type": "boolean",
              "description": "True if the search should include cells with formulas."
            },
            "range": {
              "type": "object"
            },
            "sheetId": {
              "type": "integer"
            },
            "allSheets": {
              "type": "boolean"
            }
          }
        },
        "InsertDimensionRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The dimensions to insert."
            },
            "inheritFromBefore": {
              "type": "boolean",
              "description": "Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions."
            }
          }
        },
        "InsertRangeRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range to insert new cells into."
            },
            "shiftDimension": {
              "type": "string",
              "enum": [
                "ROWS",
                "COLUMNS"
              ],
              "description": "The dimension which will be shifted when inserting cells."
            }
          }
        },
        "MoveDimensionRequest": {
          "type": "object",
          "properties": {
            "source": {
              "type": "object",
              "description": "The source dimensions to move."
            },
            "destinationIndex": {
              "type": "integer",
              "description": "The zero-based start index of where to move the source data to."
            }
          }
        },
        "UpdateEmbeddedObjectPositionRequest": {
          "type": "object",
          "properties": {
            "objectId": {
              "type": "integer",
              "description": "The ID of the object to be moved."
            },
            "newPosition": {
              "type": "object",
              "description": "An explicit position to move the embedded object to."
            },
            "fields": {
              "type": "string",
              "description": "The fields of OverlayPosition that should be updated."
            }
          }
        },
        "PasteDataRequest": {
          "type": "object",
          "properties": {
            "coordinate": {
              "type": "object",
              "description": "The coordinate at which the data should start being inserted."
            },
            "data": {
              "type": "string",
              "description": "The data to insert."
            },
            "type": {
              "type": "string",
              "enum": [
                "PASTE_NORMAL",
                "PASTE_VALUES",
                "PASTE_FORMAT",
                "PASTE_NO_BORDERS",
                "PASTE_FORMULA",
                "PASTE_DATA_VALIDATION",
                "PASTE_CONDITIONAL_FORMATTING"
              ],
              "description": "How the data should be pasted."
            },
            "delimiter": {
              "type": "string",
              "description": "The delimiter in the data."
            }
          }
        },
        "TextToColumnsRequest": {
          "type": "object",
          "properties": {
            "source": {
              "type": "object",
              "description": "The source data range."
            },
            "delimiter": {
              "type": "string",
              "description": "The delimiter to use."
            },
            "delimiterType": {
              "type": "string",
              "enum": [
                "COMMA",
                "SEMICOLON",
                "PERIOD",
                "SPACE",
                "CUSTOM",
                "AUTODETECT"
              ],
              "description": "The delimiter type to use."
            }
          }
        },
        "UpdateFilterViewRequest": {
          "type": "object",
          "properties": {
            "filter": {
              "type": "object",
              "description": "The new properties of the filter view."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated."
            }
          }
        },
        "DeleteRangeRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range of cells to delete."
            },
            "shiftDimension": {
              "type": "string",
              "enum": [
                "ROWS",
                "COLUMNS"
              ],
              "description": "The dimension from which deleted cells will be replaced with."
            }
          }
        },
        "AppendDimensionRequest": {
          "type": "object",
          "properties": {
            "sheetId": {
              "type": "integer",
              "description": "The sheet to append rows or columns to."
            },
            "dimension": {
              "type": "string",
              "enum": [
                "ROWS",
                "COLUMNS"
              ],
              "description": "Whether rows or columns should be appended."
            },
            "length": {
              "type": "integer",
              "description": "The number of rows or columns to append."
            }
          }
        },
        "AddConditionalFormatRuleRequest": {
          "type": "object",
          "properties": {
            "rule": {
              "type": "object",
              "description": "The rule to add."
            },
            "index": {
              "type": "integer",
              "description": "The zero-based index where the rule should be inserted."
            }
          }
        },
        "UpdateConditionalFormatRuleRequest": {
          "type": "object",
          "properties": {
            "index": {
              "type": "integer",
              "description": "The zero-based index of the rule that should be replaced or moved."
            },
            "rule": {
              "type": "object",
              "description": "The rule that should replace the rule at the given index."
            },
            "newIndex": {
              "type": "integer",
              "description": "The zero-based new index the rule should end up at."
            }
          }
        },
        "DeleteConditionalFormatRuleRequest": {
          "type": "object",
          "properties": {
            "index": {
              "type": "integer",
              "description": "The zero-based index of the rule to be deleted."
            },
            "sheetId": {
              "type": "integer",
              "description": "The sheet the rule is being deleted from."
            }
          }
        },
        "SortRangeRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range to sort."
            },
            "sortSpecs": {
              "type": "array",
              "items": {
                "type": "object"
              }
            }
          }
        },
        "SetDataValidationRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range the data validation rule should apply to."
            },
            "rule": {
              "type": "object",
              "description": "The data validation rule to set on each cell in the range."
            }
          }
        },
        "SetBasicFilterRequest": {
          "type": "object",
          "properties": {
            "filter": {
              "type": "object",
              "description": "The filter to set."
            }
          }
        },
        "AddProtectedRangeRequest": {
          "type": "object",
          "properties": {
            "protectedRange": {
              "type": "object",
              "description": "The protected range to be added."
            }
          }
        },
        "UpdateProtectedRangeRequest": {
          "type": "object",
          "properties": {
            "protectedRange": {
              "type": "object",
              "description": "The protected range to update with the new properties."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated."
            }
          }
        },
        "DeleteProtectedRangeRequest": {
          "type": "object",
          "properties": {
            "protectedRangeId": {
              "type": "integer",
              "description": "The ID of the protected range to delete."
            }
          }
        },
        "AutoResizeDimensionsRequest": {
          "type": "object",
          "properties": {
            "dimensions": {
              "type": "object",
              "description": "The dimensions to automatically resize."
            }
          }
        },
        "AddChartRequest": {
          "type": "object",
          "properties": {
            "chart": {
              "type": "object",
              "description": "The chart that should be added to the spreadsheet."
            }
          }
        },
        "UpdateChartSpecRequest": {
          "type": "object",
          "properties": {
            "chartId": {
              "type": "integer",
              "description": "The ID of the chart to update."
            },
            "spec": {
              "type": "object",
              "description": "The specification to apply to the chart."
            }
          }
        },
        "UpdateBandingRequest": {
          "type": "object",
          "properties": {
            "bandedRange": {
              "type": "object",
              "description": "The banded range to update with the new properties."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated."
            }
          }
        },
        "AddBandingRequest": {
          "type": "object",
          "properties": {
            "bandedRange": {
              "type": "object",
              "description": "The banded range to add."
            }
          }
        },
        "DeleteBandingRequest": {
          "type": "object",
          "properties": {
            "bandedRangeId": {
              "type": "integer",
              "description": "The ID of the banded range to delete."
            }
          }
        },
        "CreateDeveloperMetadataRequest": {
          "type": "object",
          "properties": {
            "developerMetadata": {
              "type": "object",
              "description": "The developer metadata to create."
            }
          }
        },
        "UpdateDeveloperMetadataRequest": {
          "type": "object",
          "properties": {
            "dataFilters": {
              "type": "array",
              "items": {
                "type": "object"
              }
            },
            "developerMetadata": {
              "type": "object"
            },
            "fields": {
              "type": "string"
            }
          }
        },
        "DeleteDeveloperMetadataRequest": {
          "type": "object",
          "properties": {
            "dataFilter": {
              "type": "object",
              "description": "The data filter describing the criteria used to select which developer metadata entry to delete."
            }
          }
        },
        "RandomizeRangeRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range to randomize."
            }
          }
        },
        "AddDimensionGroupRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range over which to create a group."
            }
          }
        },
        "DeleteDimensionGroupRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range of the group to be deleted."
            }
          }
        },
        "UpdateDimensionGroupRequest": {
          "type": "object",
          "properties": {
            "dimensionGroup": {
              "type": "object",
              "description": "The group whose state should be updated."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated."
            }
          }
        },
        "TrimWhitespaceRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range whose cells to trim."
            }
          }
        },
        "DeleteDuplicatesRequest": {
          "type": "object",
          "properties": {
            "range": {
              "type": "object",
              "description": "The range to remove duplicates rows from."
            },
            "comparisonColumns": {
              "type": "array",
              "items": {
                "type": "object"
              }
            }
          }
        },
        "UpdateEmbeddedObjectBorderRequest": {
          "type": "object",
          "properties": {
            "objectId": {
              "type": "integer",
              "description": "The ID of the embedded object to update."
            },
            "border": {
              "type": "object",
              "description": "The border that applies to the embedded object."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated."
            }
          }
        },
        "AddSlicerRequest": {
          "type": "object",
          "properties": {
            "slicer": {
              "type": "object",
              "description": "The slicer that should be added to the spreadsheet."
            }
          }
        },
        "UpdateSlicerSpecRequest": {
          "type": "object",
          "properties": {
            "slicerId": {
              "type": "integer",
              "description": "The id of the slicer to update."
            },
            "spec": {
              "type": "object",
              "description": "The specification to apply to the slicer."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated."
            }
          }
        },
        "AddDataSourceRequest": {
          "type": "object",
          "properties": {
            "dataSource": {
              "type": "object",
              "description": "The data source to add."
            }
          }
        },
        "UpdateDataSourceRequest": {
          "type": "object",
          "properties": {
            "dataSource": {
              "type": "object",
              "description": "The data source to update."
            },
            "fields": {
              "type": "string",
              "description": "The fields that should be updated."
            }
          }
        },
        "DeleteDataSourceRequest": {
          "type": "object",
          "properties": {
            "dataSourceId": {
              "type": "string",
              "description": "The ID of the data source to delete."
            }
          }
        },
        "RefreshDataSourceRequest": {
          "type": "object",
          "properties": {
            "dataSourceId": {
              "type": "string",
              "description": "Reference to a DataSource."
            },
            "isAll": {
              "type": "boolean",
              "description": "Refreshes all existing data source objects in the spreadsheet."
            },
            "force": {
              "type": "boolean",
              "description": "Refreshes the data source objects regardless of the current state."
            }
          }
        },
        "CancelDataSourceRefreshRequest": {
          "type": "object",
          "properties": {
            "dataSourceId": {
              "type": "string",
              "description": "Reference to a DataSource."
            },
            "isAll": {
              "type": "boolean",
              "description": "Cancels all existing data source object refreshes for all data sources in the spreadsheet."
            }
          }
        }
      }
    }
  },

};
