/**
 * Management of Google Sheets
 * Updated on 20250716 15:10
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

};
