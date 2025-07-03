/**
 * Management of Google Sheets
 */

/**
 * This function returns Sheet object.
 * @private
 */
function getSheet_(object) {
  const { spreadsheetId = null, spreadsheetUrl = null, sheetName = null, sheetId = null, sheetIndex = 0 } = object;
  let result;
  if (!spreadsheetId && !spreadsheetUrl) {
    result = { content: [{ type: "text", text: "Spreadsheet ID or spreadsheet URL was not found." }], isError: true };
  } else {
    let ss;
    if (spreadsheetId) {
      ss = SpreadsheetApp.openById(spreadsheetId);
    } else {
      ss = SpreadsheetApp.openByUrl(spreadsheetUrl);
    }
    if (sheetName) {
      result = ss.getSheetByName(sheetName);
    } else if (sheetId) {
      result = ss.getSheetById(sheetId);
    } else {
      if (ss.getNumSheets() >= sheetIndex + 1) {
        result = ss.getSheets()[sheetIndex];
      } else {
        result = { content: [{ type: "text", text: `"${sheetIndex}" didn't exist.` }], isError: true };
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

};
