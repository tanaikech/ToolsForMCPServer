/**
 * Management of Google Sheets
 * Updated on 2025102 09:55
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
 * This function returns cell values.
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
      const r = `'${sheet.getSheetname()}'!${range.getgA1Notation()}`;
      const text = [
        `Range of the cell data is ${r}`,
        `Retrieved cell data is as follows`,
        JSON.stringify(values)
      ].join("\n");
      result = { content: [{ type: "text", text }], isError: false };
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
        // result = { content: [{ type: "text", text: `${JSON.stringify(values)} were put into the range "${rangeObj.getA1Notation()}" of the "${sheet.getName()}" sheet on the Google Sheets of "${sheet.getParent().getName()}".` }], isError: false };
        const sheetName = sheet.getName();
        const sheetId = sheet.getSheetId();
        const ssName = sheet.getParent().getName();
        const dataRange = `'${sheetName}'!${rangeObj.getA1Notation()}`;
        result = { content: [{ type: "text", text: `${JSON.stringify(values)} were put into the range "${rangeObj.getA1Notation()}" of the "${sheetName}" sheet on the Google Sheets of "${ssName}". The sheet ID of "${sheetName}" is "${sheetId}". The range of inserted data is ${dataRange}.` }], isError: false };
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
  /**
   * Check API
   */
  const check = checkAPI_("Sheets");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Sheets.Spreadsheets.get, args: [object.pathParameters?.spreadsheetId, object.queryParameters || {}], jsonSchema: jsonSchemaForSheets.Get });
}

/**
 * This function manages Google Sheets using Sheets API.
 * @private
 */
function manage_google_sheets_using_sheets_api(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Sheets");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Sheets.Spreadsheets.batchUpdate, args: [object.requestBody, object.pathParameters?.spreadsheetId] });
}

/**
 * This function retrieves all charts in a Google Spreadsheet.
 * @private
 */
function get_charts_on_google_sheets(object = {}) {
  const { spreadsheetId = null } = object;
  let result;
  try {
    if (!spreadsheetId) {
      result = { content: [{ type: "text", text: "Set the spreadsheet ID." }], isError: true };
    } else {
      const ss = SpreadsheetApp.openById(spreadsheetId);
      const charts = ss.getSheets().reduce((ar, s) => {
        s.getCharts().forEach(c =>
          ar.push({ sheetName: s.getSheetName(), sheetId: s.getSheetId(), chartId: c.getChartId(), chartTitle: c.getOptions().get("title") || "No title" })
        );
        return ar;
      }, []);
      result = { content: [{ type: "text", text: JSON.stringify(charts) }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function creates a chart on Google Sheets.
 * @private
 */
function create_chart_on_google_sheets(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Sheets");
  if (check.result) {
    return check;
  }

  const requestBody = { requests: [{ addChart: { chart: object.requestBody.chart } }] };
  return for_google_apis.update({ func: Sheets.Spreadsheets.batchUpdate, args: [requestBody, object.pathParameters?.spreadsheetId] });
}

/**
 * This function updates a chart on Google Sheets.
 * @private
 */
function update_chart_on_google_sheets(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Sheets");
  if (check.result) {
    return check;
  }

  const requestBody = { requests: [{ updateChartSpec: object.requestBody.chart }] };
  return for_google_apis.update({ func: Sheets.Spreadsheets.batchUpdate, args: [requestBody, object.pathParameters?.spreadsheetId] });
}

/**
 * This function create charts as image files.
 * @private
 */
function create_charts_as_image_on_google_sheets(object = {}) {
  const { spreadsheetId = null, chartIds = [] } = object;
  let result;
  try {
    if (!spreadsheetId || chartIds.length == 0) {
      result = { content: [{ type: "text", text: "Set the spreadsheet ID and charts in an array." }], isError: true };
    } else {
      const temp = SlidesApp.create("temp slide");
      const slide = temp.getSlides()[0];
      const ss = SpreadsheetApp.openById(spreadsheetId);
      const charts = ss.getSheets().reduce((o, s) => {
        s.getCharts().forEach(cc => o[cc.getChartId()] = cc);
        return o;
      }, {});
      const fileIds = chartIds.reduce((ar, id) => {
        if (charts[id]) {
          const blob = slide.insertSheetsChart(charts[id]).asImage().getBlob().copyBlob();
          const fileId = DriveApp.createFile(blob.setName(id)).getId();
          ar.push({ chartId: id, imageFileId: fileId });
        }
        return ar;
      }, []);
      DriveApp.getFileById(temp.getId()).setTrashed(true);
      const text = [
        `The image file IDs for each chart ID are as follows.`,
        JSON.stringify(fileIds),
      ].join("\n");
      result = { content: [{ type: "text", text }], isError: false };
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
    description: "Use this to get cell values from Google Sheets. The spreadsheet ID is used for retrieving the values from the Google Sheets. If you use the spreadsheet URL, get the spreadsheet ID from the URL and use the ID.",
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." },
        sheetName: { type: "string", description: "Sheet name in the Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets." },
        sheetId: { type: "string", description: "Sheet ID of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets." },
        sheetIndex: { type: "number", description: "Sheet index (The 1st sheet is 0.) of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets." },
        range: { type: "string", description: "Range as A1Notation. The values are retrieved from this range. If this is not used, the data range is automatically used." },
      },
      required: ["spreadsheetId"]
    }
  },

  put_values_to_google_sheets: {
    description: "Use this to put values into Google Sheets. The spreadsheet ID is used for putting the values into the Google Sheets. If you use the spreadsheet URL, get the spreadsheet ID from the URL, and use the ID. The sheet name, the sheet ID, and the range of the inserted data are returned as the response value.",
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." },
        sheetName: { type: "string", description: "Sheet name in the Google Sheets. If both sheetName and sheetId are not provided, the values are put into the 1st sheet on Google Sheets." },
        sheetId: { type: "string", description: "Sheet ID of the sheet in Google Sheets. If both sheetName and sheetId are not provided, the values are put into the 1st sheet on Google Sheets." },
        sheetIndex: { type: "number", description: "Sheet index (The 1st sheet is 0.) of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are put into the 1st sheet on Google Sheets." },
        values: {
          type: "array",
          description: "Values for putting into Google Sheets. This is required to be a 2-dimensional array.",
          items: { type: "array", items: { oneOf: [{ type: "string" }, { type: "number" }] } },
        },
        range: { type: "string", description: "Range as A1Notation. The values are retrieved from this range. If this is not used, the values are put into the last row." },
      },
      required: ["spreadsheetId", "values"]
    }
  },

  search_values_from_google_sheets: {
    description: "Use this to search all cells in Google Sheets using a regex. The spreadsheet ID is used for searching a text from the Google Sheets. If you use the spreadsheet URL, get the spreadsheet ID from the URL and use the ID. In this case, the search text is searched to see whether it is the same as the entire cell value. So, if you want to search the cells including 'sample' text, please use a regex like '.*sample.*'.",
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." },
        searchText: {
          type: "string",
          description: "Search text. The search text is searched to see whether it is the same as the entire cell value. So, if you want to search the cells including 'sample' text, please use a regex like '.*sample.*'. You can search the cell coordinates using a regex.",
        },
      },
      required: ["spreadsheetId", "searchText"]
    }
  },

  get_google_sheet_object_using_sheets_api: {
    description: "Use this to get Google Sheets Object using Sheets API. When this tool is used, for example, the sheet names can be converted to sheet IDs. This cannot be used for retrieving the cell values. In order to retrieve the minimum necessary information, it is recommended to use 'fields' in queryParameters.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." }
          },
          required: ["spreadsheetId"]
        },
        queryParameters: {
          type: "object",
          properties: {
            ranges: { type: "array", items: { type: "string", description: "The ranges to retrieve from the spreadsheet. It's A1Notation." } },
            includeGridData: { type: "boolean", description: "True if grid data should be returned. This parameter is ignored if a field mask was set in the request." },
            excludeTablesInBandedRanges: { type: "boolean", description: "True if tables should be excluded in the banded ranges. False if not set." },
            fields: {
              type: "string", description: [
                "Field masks are a way for API callers to list the fields that a request should return or update. Using a FieldMask allows the API to avoid unnecessary work and improves performance. If you want more information about 'fields', please search https://developers.google.com/workspace/sheets/api/guides/field-masks",
                `The sample fields are as follows.`,
                `"sheets(charts)": Only the metadata of all charts is returned.`,
                `"sheets(properties)": Only the metadata of all sheets is returned.`,
                `"sheets(properties(sheetId))": All sheet IDs in a Google Spreadsheet are returned.`,
                `"properties": Only the metadata of spreadsheet is returned.`,
                `"sheets(data(rowData(values(textFormatRuns(format(link))))))": All links in all cells are returned.`,
              ].join("\n")
            },
          }
        }
      },
      required: ["pathParameters"]
    }
  },

  manage_google_sheets_using_sheets_api: {
    title: "Updates Google Sheets",
    description: `Use this to update Google Sheets using the Sheets API. Provide the request body for the batchUpdate method. In order to retrieve the detailed information of the spreadsheet, including the sheet ID and so on, it is required to use a tool "get_google_sheet_object_using_sheets_api".`,
    parameters: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          description: `Create the request body for "Method: spreadsheets.batchUpdate" of Google Sheets API. If you want to know how to create the request body, please check a tool "explanation_manage_google_sheets_using_sheets_api".`,
        },
        pathParameters: {
          type: "object",
          properties: {
            spreadsheetId: {
              type: "string", description: "The spreadsheet ID to apply the updates to."
            }
          },
          required: ["spreadsheetId"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  get_charts_on_google_sheets: {
    description: "Use this to get all charts in a Google Spreadsheet. The response value includes the chart ID and the chart title of each sheet.",
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." }
      },
      required: ["spreadsheetId"]
    }
  },

  create_chart_on_google_sheets: {
    title: "Create a chart on Google Sheets using Google Sheets API",
    description: `Use this to create a chart on Google Sheets using Google Sheets API. Provide the request body for creating a chart using Sheets API. Before you use this tool, understand how to build the request body for creating a chart using a tool "explanation_create_chart_by_google_sheets_api".`,
    parameters: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          properties: {
            chart: {
              type: "object",
              description: `The request body for creating a chart.`,
            }
          },
          required: ["chart"]
        },
        pathParameters: {
          type: "object",
          properties: {
            spreadsheetId: {
              type: "string", description: "The spreadsheet ID to apply the updates to."
            }
          },
          required: ["spreadsheetId"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  update_chart_on_google_sheets: {
    title: "Update a chart on Google Sheets using Google Sheets API",
    description: `Use this to update a chart on Google Sheets using Google Sheets API. Provide the request body for creating a chart using Sheets API. Before you use this tool, understand how to build the request body for creating a chart using a tool "explanation_create_chart_by_google_sheets_api". In this case, the chart ID is required to be known.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          properties: {
            chart: {
              type: "object",
              description: `The request body for updating a chart.`,
            }
          },
          required: ["chart"]
        },
        pathParameters: {
          type: "object",
          properties: {
            spreadsheetId: {
              type: "string", description: "The spreadsheet ID to apply the updates to."
            }
          },
          required: ["spreadsheetId"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  create_charts_as_image_on_google_sheets: {
    title: "Create charts as image files",
    description: `Use this to create charts on Google Sheets as the image files on Google Drive. Use this to convert charts on Google Sheets as the image files on Google Drive.`,
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." },
        chartIds: { type: "array", items: { type: "string", description: "Chart ID on Google Sheets." } },
      },
      required: ["spreadsheetId", "chartIds"]
    }
  },

};
