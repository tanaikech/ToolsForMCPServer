/**
 * Management of Rag
 * Updated on 20250924 10:50
 */

function download_data_(url) {
  const text = UrlFetchApp.fetch(url).getContentText();
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_create_maps_url(object = {}) {
  const _ = object;
  const text = `# Generate a Google Maps URL

To generate a Google Maps URL, you can use one of the following four basic structures, depending on the desired action. In all cases, \`api=1\` is a required parameter.

## 1. Search: Use this to find a specific place or to perform a general search.

*   **Structure:** \`https://www.google.com/maps/search/?api=1&parameters\`
*   **Required Parameter:**
    *   \`query\`: The search term, which can be a place name, address, or latitude/longitude coordinates.
*   **Optional Parameter:**
    *   \`query_place_id\`: A unique identifier for a place, which provides a more accurate link to a specific location.

## 2. Directions: Use this to get directions between two or more points.

*   **Structure:** \`https://www.google.com/maps/dir/?api=1&parameters\`
*   **Key Parameters:**
    *   \`origin\`: The starting point of the directions.
    *   \`destination\`: The endpoint of the directions.
    *   \`travelmode\`: Can be set to \`driving\`, \`walking\`, \`bicycling\`, \`two-wheeler\`, or \`transit\`.
    *   \`waypoints\`: A list of intermediate points, separated by a pipe character (\`|\`).

## 3. Display a Map: Use this to show a map without any markers or directions.

*   **Structure:** \`https://www.google.com/maps/@?api=1&map_action=map&parameters\`
*   **Key Parameters:**
    *   \`center\`: The latitude/longitude coordinates for the center of the map.
    *   \`zoom\`: Sets the initial zoom level of the map (from 0 to 21).
    *   \`basemap\`: Can be \`roadmap\`, \`satellite\`, or \`terrain\`.
    *   \`layer\`: An optional extra layer to display, such as \`transit\`, \`traffic\`, or \`bicycling\`.

## 4. Display a Street View Panorama: Use this to show an interactive 360-degree panorama.

*   **Structure:** \`https://www.google.com/maps/@?api=1&map_action=pano&parameters\`
*   **Required Parameter (one of the following):**
    *   \`viewpoint\`: Latitude/longitude coordinates of the desired panorama.
    *   \`pano\`: The specific panorama ID.
*   **Optional Parameters:**
    *   \`heading\`, \`pitch\`, \`fov\`: To control the camera's orientation and zoom.

## Important Considerations:

*   All parameter values in the URL must be properly URL-encoded. For example, spaces should be replaced with \`%20\` or \`+\`, and commas with \`%2C\`.
*   URLs have a character limit of 2,048 characters.`;
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_reference_generate_google_apps_script(object = {}) {
  const _ = object;

  // This is my repository. https://github.com/tanaikech/taking-advantage-of-google-apps-script
  const url = "https://raw.githubusercontent.com/tanaikech/taking-advantage-of-google-apps-script/refs/heads/master/README.md";
  return download_data_(url);
}

function explanation_reference_export_google_sheets_as_pdf(object = {}) {
  const _ = object;

  // ref: https://gist.github.com/andrewroberts/c37d45619d5661cab078be2a3f2fd2bb
  const url = "https://gist.githubusercontent.com/andrewroberts/c37d45619d5661cab078be2a3f2fd2bb/raw/45030c35193062013e85e2eec0eac9b2a0c71a4a/exportSpreadsheet.gs";
  return download_data_(url);
}

function explanation_analytics_data_properties_runReport(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: properties.runReport" of Google Analytics Data API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: properties.runReport" of Google Analytics Data API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaAnalyticsData.RunReport)}</JSONSchema>`
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_analytics_data_properties_runRealtimeReport(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: properties.runRealtimeReport" of Google Analytics Data API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: properties.runRealtimeReport" of Google Analytics Data API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaAnalyticsData.RunRealtimeReport)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_manage_google_sheets_using_sheets_api(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: spreadsheets.batchUpdate" of Google Sheets API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: spreadsheets.batchUpdate" of Google Sheets API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaForSheets.BatchUpdate)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_manage_google_docs_using_docs_api(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: documents.batchUpdate" of Google Docs API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: documents.batchUpdate" of Google Docs API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaForDocs.BatchUpdate)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_manage_google_slides_using_slides_api(object = {}) {
  const _ = object;
  const text = [
    `JSON schema for building the request body ("requestBody") for "Method: presentations.batchUpdate" of Google Slides API.`,
    `### JSONSchema`,
    `"requestBody": Create the request body for "Method: presentations.batchUpdate" of Google Slides API using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(jsonSchemaForSlides.BatchUpdate)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_generate_survey_with_google_forms(object = {}) {
  const _ = object;
  const itemList = {
    type: "array",
    items: {
      type: "object",
      properties: {
        itemTitle: { type: "string", description: "Title of question." },
        helpText: { type: "string", description: "Description of the question." },
        required: { type: "boolean", description: "When the user has to answer, set to true. Please set false as the default value." },
        itemMethod: {
          type: "string",
          description: [
            `Select one of the following "Methods". These are the methods of the Class Form of Google Apps Script. The reference page is "https://developers.google.com/apps-script/reference/forms/form".`,
            `<Methods>addCheckboxItem,addDateItem,addDateTimeItem,addTimeItem,addListItem,addMultipleChoiceItem,addParagraphTextItem,addTextItem</Methods>`,
          ].join("\n")
        },
        params: {
          type: "array",
          description: `Only when you select one of the methods "addCheckboxItem", "addListItem", "addMultipleChoiceItem" for "itemMethod", set "setChoiceValues". When you select the methods except for "addCheckboxItem", "addListItem", "addMultipleChoiceItem" to "itemMethod", this value should be only [], which is an empty array.`,
          items: {
            type: "object",
            properties: {
              method: { type: "string", description: `Method name. This method is the method of the Class object selected at "itemMethod". Only when you select one of the methods "addCheckboxItem", "addListItem", "addMultipleChoiceItem" for "itemMethod", set "setChoiceValues". When you select the methods except for "addCheckboxItem", "addListItem", "addMultipleChoiceItem" to "itemMethod", this value should be only [], which is an empty array.` },
              choiceValues: {
                type: "array",
                items: {
                  type: "string",
                  description: `Only when you select one of the methods "addCheckboxItem","addListItem","addMultipleChoiceItem" for "itemMethod", "setChoiceValues" is required to be selected as "method". At that time, set the choice values.`,
                }
              }
            },
            required: ["method", "choiceValues"]
          }
        },
      },
      required: ["itemTitle", "helpText", "required", "itemMethod", "params"]
    }
  };
  const text = [
    `JSON schema for building the itemList for the tool "generate_survey_with_google_forms".`,
    `### JSONSchema`,
    `"itemList": Create the itemList for the tool "generate_survey_with_google_forms" using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(itemList)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_generate_quiz_with_google_forms(object = {}) {
  const _ = object;
  const itemList = {
    type: "array",
    items: {
      type: "object",
      properties: {
        itemTitle: { type: "string", description: "Title of question." },
        helpText: { type: "string", description: "Description of the question." },
        required: { type: "boolean", description: "When the user has to answer, set to true. Please set false as the default value." },
        itemMethod: {
          type: "string",
          description: [
            `Select one of the following "Methods". These are the methods of the Class Form of Google Apps Script. The reference page is "https://developers.google.com/apps-script/reference/forms/form".`,
            `<Methods>addCheckboxItem,addDateItem,addDateTimeItem,addTimeItem,addListItem,addMultipleChoiceItem,addParagraphTextItem,addTextItem</Methods>`,
          ].join("\n")
        },
        params: {
          type: "array",
          description: `Only when you select one of the methods "addCheckboxItem", "addListItem", "addMultipleChoiceItem" for "itemMethod", set "setChoiceValues". When you select the methods except for "addCheckboxItem", "addListItem", "addMultipleChoiceItem" to "itemMethod", this value should be only [], which is an empty array.`,
          items: {
            type: "object",
            properties: {
              method: { type: "string", description: `Method name. This method is the method of the Class object selected at "itemMethod". Only when you select one of the methods "addCheckboxItem", "addListItem", "addMultipleChoiceItem" for "itemMethod", set "setChoiceValues". When you select the methods except for "addCheckboxItem", "addListItem", "addMultipleChoiceItem" to "itemMethod", this value should be only [], which is an empty array.` },
              choiceValues: {
                type: "array",
                items: {
                  type: "string",
                  description: `Only when you select one of the methods "addCheckboxItem","addListItem","addMultipleChoiceItem" for "itemMethod", "setChoiceValues" is required to be selected as "method". At that time, set the choice values.`,
                }
              },
              correctIndex: { type: "number", description: `The index of the correct answer in "choiceValues" of the array.` }
            },
            required: ["method", "choiceValues", "correctIndex"]
          }
        },
      },
      required: ["itemTitle", "helpText", "required", "itemMethod", "params"]
    }
  };
  const text = [
    `JSON schema for building the itemList for the tool "generate_quiz_with_google_forms".`,
    `### JSONSchema`,
    `"itemList": Create the itemList for the tool "generate_quiz_with_google_forms" using the following JSON schema.`,
    `<JSONSchema>${JSON.stringify(itemList)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_search_file_in_google_drive(object = {}) {
  const _ = object;

  const text = `### Search Query Terms and Operators

The search query language for the Drive API consists of three parts: a query term, an operator, and values.

*   **Query Terms:** These are the fields you can search on, such as \`name\`, \`mimeType\`, \`modifiedTime\`, \`starred\`, \`trashed\`, \`owners\`, \`writers\`, and \`readers\`. For searching the content of a file, you can use the \`fullText\` term.
*   **Operators:** A variety of operators are available to specify the condition for the query term. These include \`contains\`, \`=\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`, \`in\`, \`and\`, \`or\`, and \`not\`.
*   **Values:** These are the specific values you want to use to filter your search results.

### Search for Files and Folders

You can search for files and folders using the \`files.list\` method. To filter the results, you use the \`q\` query string parameter, which combines one or more search terms and operators.

For example, to search for folders, you would use the query string \`mimeType = 'application/vnd.google-apps.folder'\`. You can also search for files with specific names, files modified after a certain date, or files shared with the current user. The \`corpora\` parameter allows you to search beyond the user's files to include files shared with a domain. The documentation also provides code examples in several programming languages to demonstrate how to perform searches.

### Search for Shared Drives

To search for shared drives, you use the \`drives.list\` method with the \`q\` query string. Many of the query terms for shared drives, such as \`createdTime\`, \`memberCount\`, and \`organizerCount\`, require the \`useDomainAdminAccess\` parameter to be set to \`true\`.

You can construct complex queries by grouping multiple terms with parentheses. For instance, you can search for shared drives created after a specific date that have either more than a certain number of organizers or members.

### References
- [Search query terms and operators](https://developers.google.com/workspace/drive/api/guides/ref-search-terms)
- [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files)
- [Search for shared drives](https://developers.google.com/workspace/drive/api/guides/search-shareddrives)`;
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}

function explanation_google_apps_script_library_list(object = {}) {
  return explanation_reference_generate_google_apps_script(object);
}

function explanation_create_chart_by_google_sheets_api(object = {}) {
  const _ = object;
  const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Sheets API - addChart Request",
    "description": "JSON schema for the addChart request in the Google Sheets API.",
    "type": "object",
    "properties": {
      "chart": {
        "$ref": "#/definitions/EmbeddedChart"
      }
    },
    "required": [
      "chart"
    ],
    "definitions": {
      "EmbeddedChart": {
        "type": "object",
        "properties": {
          "chartId": {
            "type": "integer"
          },
          "spec": {
            "$ref": "#/definitions/ChartSpec"
          },
          "position": {
            "type": "object"
          },
          "border": {
            "$ref": "#/definitions/EmbeddedObjectBorder"
          }
        }
      },
      "ChartSpec": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "altText": {
            "type": "string"
          },
          "titleTextFormat": {
            "type": "object"
          },
          "titleTextPosition": {
            "$ref": "#/definitions/TextPosition"
          },
          "subtitle": {
            "type": "string"
          },
          "subtitleTextFormat": {
            "type": "object"
          },
          "subtitleTextPosition": {
            "$ref": "#/definitions/TextPosition"
          },
          "fontName": {
            "type": "string"
          },
          "maximized": {
            "type": "boolean"
          },
          "backgroundColor": {
            "type": "object"
          },
          "backgroundColorStyle": {
            "type": "object"
          },
          "dataSourceChartProperties": {
            "$ref": "#/definitions/DataSourceChartProperties"
          },
          "filterSpecs": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "sortSpecs": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "hiddenDimensionStrategy": {
            "type": "string",
            "enum": [
              "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED",
              "SKIP_HIDDEN_ROWS_AND_COLUMNS",
              "SKIP_HIDDEN_ROWS",
              "SKIP_HIDDEN_COLUMNS",
              "SHOW_ALL"
            ]
          },
          "basicChart": {
            "$ref": "#/definitions/BasicChartSpec"
          },
          "pieChart": {
            "$ref": "#/definitions/PieChartSpec"
          },
          "bubbleChart": {
            "$ref": "#/definitions/BubbleChartSpec"
          },
          "candlestickChart": {
            "$ref": "#/definitions/CandlestickChartSpec"
          },
          "orgChart": {
            "$ref": "#/definitions/OrgChartSpec"
          },
          "histogramChart": {
            "$ref": "#/definitions/HistogramChartSpec"
          },
          "waterfallChart": {
            "$ref": "#/definitions/WaterfallChartSpec"
          },
          "treemapChart": {
            "$ref": "#/definitions/TreemapChartSpec"
          },
          "scorecardChart": {
            "$ref": "#/definitions/ScorecardChartSpec"
          }
        }
      },
      "TextPosition": {
        "type": "object",
        "properties": {
          "horizontalAlignment": {
            "type": "string",
            "enum": [
              "HORIZONTAL_ALIGN_UNSPECIFIED",
              "LEFT",
              "CENTER",
              "RIGHT"
            ]
          }
        }
      },
      "DataSourceChartProperties": {
        "type": "object",
        "properties": {
          "dataSourceId": {
            "type": "string"
          },
          "dataExecutionStatus": {
            "type": "object"
          }
        }
      },
      "BasicChartSpec": {
        "type": "object",
        "properties": {
          "chartType": {
            "type": "string",
            "enum": [
              "BASIC_CHART_TYPE_UNSPECIFIED",
              "BAR",
              "LINE",
              "AREA",
              "COLUMN",
              "SCATTER",
              "COMBO",
              "STEPPED_AREA"
            ]
          },
          "legendPosition": {
            "type": "string",
            "enum": [
              "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED",
              "BOTTOM_LEGEND",
              "LEFT_LEGEND",
              "RIGHT_LEGEND",
              "TOP_LEGEND",
              "NO_LEGEND"
            ]
          },
          "axis": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/BasicChartAxis"
            }
          },
          "domains": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/BasicChartDomain"
            }
          },
          "series": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/BasicChartSeries"
            }
          },
          "headerCount": {
            "type": "integer"
          },
          "threeDimensional": {
            "type": "boolean"
          },
          "interpolateNulls": {
            "type": "boolean"
          },
          "stackedType": {
            "type": "string",
            "enum": [
              "BASIC_CHART_STACKED_TYPE_UNSPECIFIED",
              "NOT_STACKED",
              "STACKED",
              "PERCENT_STACKED"
            ]
          },
          "lineSmoothing": {
            "type": "boolean"
          },
          "compareMode": {
            "type": "string",
            "enum": [
              "BASIC_CHART_COMPARE_MODE_UNSPECIFIED",
              "DATUM",
              "CATEGORY"
            ]
          },
          "totalDataLabel": {
            "$ref": "#/definitions/DataLabel"
          }
        }
      },
      "BasicChartAxis": {
        "type": "object",
        "properties": {
          "position": {
            "type": "string",
            "enum": [
              "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
              "BOTTOM_AXIS",
              "LEFT_AXIS",
              "RIGHT_AXIS"
            ]
          },
          "title": {
            "type": "string"
          },
          "format": {
            "type": "object"
          },
          "titleTextPosition": {
            "$ref": "#/definitions/TextPosition"
          },
          "viewWindowOptions": {
            "$ref": "#/definitions/ChartAxisViewWindowOptions"
          }
        }
      },
      "ChartAxisViewWindowOptions": {
        "type": "object",
        "properties": {
          "viewWindowMin": {
            "type": "number"
          },
          "viewWindowMax": {
            "type": "number"
          },
          "viewWindowMode": {
            "type": "string",
            "enum": [
              "DEFAULT_VIEW_WINDOW_MODE",
              "VIEW_WINDOW_MODE_UNSUPPORTED",
              "EXPLICIT",
              "PRETTY"
            ]
          }
        }
      },
      "BasicChartDomain": {
        "type": "object",
        "properties": {
          "domain": {
            "$ref": "#/definitions/ChartData"
          },
          "reversed": {
            "type": "boolean"
          }
        }
      },
      "ChartData": {
        "type": "object",
        "properties": {
          "sourceRange": {
            "$ref": "#/definitions/ChartSourceRange"
          },
          "groupRule": {
            "$ref": "#/definitions/ChartGroupRule"
          },
          "columnReference": {
            "type": "object"
          },
          "aggregateType": {
            "type": "string",
            "enum": [
              "CHART_AGGREGATE_TYPE_UNSPECIFIED",
              "AVERAGE",
              "COUNT",
              "MAX",
              "MEDIAN",
              "MIN",
              "SUM"
            ]
          }
        }
      },
      "ChartSourceRange": {
        "type": "object",
        "properties": {
          "sources": {
            "type": "array",
            "items": {
              "type": "object"
            }
          }
        }
      },
      "ChartGroupRule": {
        "type": "object",
        "properties": {
          "dateTimeRule": {
            "$ref": "#/definitions/ChartDateTimeRule"
          },
          "histogramRule": {
            "$ref": "#/definitions/ChartHistogramRule"
          }
        }
      },
      "ChartDateTimeRule": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
              "SECOND",
              "MINUTE",
              "HOUR",
              "HOUR_MINUTE",
              "HOUR_MINUTE_AMPM",
              "DAY_OF_WEEK",
              "DAY_OF_YEAR",
              "DAY_OF_MONTH",
              "DAY_MONTH",
              "MONTH",
              "QUARTER",
              "YEAR",
              "YEAR_MONTH",
              "YEAR_QUARTER",
              "YEAR_MONTH_DAY"
            ]
          }
        }
      },
      "ChartHistogramRule": {
        "type": "object",
        "properties": {
          "minValue": {
            "type": "number"
          },
          "maxValue": {
            "type": "number"
          },
          "intervalSize": {
            "type": "number"
          }
        }
      },
      "BasicChartSeries": {
        "type": "object",
        "properties": {
          "series": {
            "$ref": "#/definitions/ChartData"
          },
          "targetAxis": {
            "type": "string",
            "enum": [
              "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
              "BOTTOM_AXIS",
              "LEFT_AXIS",
              "RIGHT_AXIS"
            ]
          },
          "type": {
            "type": "string",
            "enum": [
              "BASIC_CHART_TYPE_UNSPECIFIED",
              "BAR",
              "LINE",
              "AREA",
              "COLUMN",
              "SCATTER",
              "COMBO",
              "STEPPED_AREA"
            ]
          },
          "lineStyle": {
            "$ref": "#/definitions/LineStyle"
          },
          "dataLabel": {
            "$ref": "#/definitions/DataLabel"
          },
          "color": {
            "type": "object"
          },
          "colorStyle": {
            "type": "object"
          },
          "pointStyle": {
            "$ref": "#/definitions/PointStyle"
          },
          "styleOverrides": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/BasicSeriesDataPointStyleOverride"
            }
          }
        }
      },
      "LineStyle": {
        "type": "object",
        "properties": {
          "width": {
            "type": "integer"
          },
          "type": {
            "type": "string",
            "enum": [
              "LINE_DASH_TYPE_UNSPECIFIED",
              "INVISIBLE",
              "CUSTOM",
              "SOLID",
              "DOTTED",
              "MEDIUM_DASHED",
              "MEDIUM_DASHED_DOTTED",
              "LONG_DASHED",
              "LONG_DASHED_DOTTED"
            ]
          }
        }
      },
      "DataLabel": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "DATA_LABEL_TYPE_UNSPECIFIED",
              "NONE",
              "DATA",
              "CUSTOM"
            ]
          },
          "textFormat": {
            "type": "object"
          },
          "placement": {
            "type": "string",
            "enum": [
              "DATA_LABEL_PLACEMENT_UNSPECIFIED",
              "CENTER",
              "LEFT",
              "RIGHT",
              "ABOVE",
              "BELOW",
              "INSIDE_END",
              "INSIDE_BASE",
              "OUTSIDE_END"
            ]
          },
          "customLabelData": {
            "$ref": "#/definitions/ChartData"
          }
        }
      },
      "PointStyle": {
        "type": "object",
        "properties": {
          "size": {
            "type": "number"
          },
          "shape": {
            "type": "string",
            "enum": [
              "POINT_SHAPE_UNSPECIFIED",
              "CIRCLE",
              "DIAMOND",
              "HEXAGON",
              "PENTAGON",
              "SQUARE",
              "STAR",
              "TRIANGLE",
              "X_MARK"
            ]
          }
        }
      },
      "BasicSeriesDataPointStyleOverride": {
        "type": "object",
        "properties": {
          "index": {
            "type": "integer"
          },
          "color": {
            "type": "object"
          },
          "colorStyle": {
            "type": "object"
          },
          "pointStyle": {
            "$ref": "#/definitions/PointStyle"
          }
        }
      },
      "PieChartSpec": {
        "type": "object",
        "properties": {
          "legendPosition": {
            "type": "string",
            "enum": [
              "PIE_CHART_LEGEND_POSITION_UNSPECIFIED",
              "BOTTOM_LEGEND",
              "LEFT_LEGEND",
              "RIGHT_LEGEND",
              "TOP_LEGEND",
              "NO_LEGEND",
              "LABELED_LEGEND"
            ]
          },
          "domain": {
            "$ref": "#/definitions/ChartData"
          },
          "series": {
            "$ref": "#/definitions/ChartData"
          },
          "threeDimensional": {
            "type": "boolean"
          },
          "pieHole": {
            "type": "number"
          }
        }
      },
      "BubbleChartSpec": {
        "type": "object",
        "properties": {
          "legendPosition": {
            "type": "string",
            "enum": [
              "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED",
              "BOTTOM_LEGEND",
              "LEFT_LEGEND",
              "RIGHT_LEGEND",
              "TOP_LEGEND",
              "NO_LEGEND",
              "INSIDE_LEGEND"
            ]
          },
          "bubbleLabels": {
            "$ref": "#/definitions/ChartData"
          },
          "domain": {
            "$ref": "#/definitions/ChartData"
          },
          "series": {
            "$ref": "#/definitions/ChartData"
          },
          "groupIds": {
            "$ref": "#/definitions/ChartData"
          },
          "bubbleSizes": {
            "$ref": "#/definitions/ChartData"
          },
          "bubbleOpacity": {
            "type": "number"
          },
          "bubbleBorderColor": {
            "type": "object"
          },
          "bubbleBorderColorStyle": {
            "type": "object"
          },
          "bubbleMaxRadiusSize": {
            "type": "integer"
          },
          "bubbleMinRadiusSize": {
            "type": "integer"
          },
          "bubbleTextStyle": {
            "type": "object"
          }
        }
      },
      "CandlestickChartSpec": {
        "type": "object",
        "properties": {
          "domain": {
            "$ref": "#/definitions/CandlestickDomain"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/CandlestickData"
            }
          }
        }
      },
      "CandlestickDomain": {
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/definitions/ChartData"
          },
          "reversed": {
            "type": "boolean"
          }
        }
      },
      "CandlestickData": {
        "type": "object",
        "properties": {
          "lowSeries": {
            "$ref": "#/definitions/CandlestickSeries"
          },
          "openSeries": {
            "$ref": "#/definitions/CandlestickSeries"
          },
          "closeSeries": {
            "$ref": "#/definitions/CandlestickSeries"
          },
          "highSeries": {
            "$ref": "#/definitions/CandlestickSeries"
          }
        }
      },
      "CandlestickSeries": {
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/definitions/ChartData"
          }
        }
      },
      "OrgChartSpec": {
        "type": "object",
        "properties": {
          "nodeSize": {
            "type": "string",
            "enum": [
              "ORG_CHART_LABEL_SIZE_UNSPECIFIED",
              "SMALL",
              "MEDIUM",
              "LARGE"
            ]
          },
          "nodeColor": {
            "type": "object"
          },
          "nodeColorStyle": {
            "type": "object"
          },
          "selectedNodeColor": {
            "type": "object"
          },
          "selectedNodeColorStyle": {
            "type": "object"
          },
          "labels": {
            "$ref": "#/definitions/ChartData"
          },
          "parentLabels": {
            "$ref": "#/definitions/ChartData"
          },
          "tooltips": {
            "$ref": "#/definitions/ChartData"
          }
        }
      },
      "HistogramChartSpec": {
        "type": "object",
        "properties": {
          "series": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/HistogramSeries"
            }
          },
          "legendPosition": {
            "type": "string",
            "enum": [
              "HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED",
              "BOTTOM_LEGEND",
              "LEFT_LEGEND",
              "RIGHT_LEGEND",
              "TOP_LEGEND",
              "NO_LEGEND",
              "INSIDE_LEGEND"
            ]
          },
          "showItemDividers": {
            "type": "boolean"
          },
          "bucketSize": {
            "type": "number"
          },
          "outlierPercentile": {
            "type": "number"
          }
        }
      },
      "HistogramSeries": {
        "type": "object",
        "properties": {
          "barColor": {
            "type": "object"
          },
          "barColorStyle": {
            "type": "object"
          },
          "data": {
            "$ref": "#/definitions/ChartData"
          }
        }
      },
      "WaterfallChartSpec": {
        "type": "object",
        "properties": {
          "domain": {
            "$ref": "#/definitions/WaterfallChartDomain"
          },
          "series": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/WaterfallChartSeries"
            }
          },
          "stackedType": {
            "type": "string",
            "enum": [
              "WATERFALL_STACKED_TYPE_UNSPECIFIED",
              "STACKED",
              "SEQUENTIAL"
            ]
          },
          "firstValueIsTotal": {
            "type": "boolean"
          },
          "hideConnectorLines": {
            "type": "boolean"
          },
          "connectorLineStyle": {
            "$ref": "#/definitions/LineStyle"
          },
          "totalDataLabel": {
            "$ref": "#/definitions/DataLabel"
          }
        }
      },
      "WaterfallChartDomain": {
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/definitions/ChartData"
          },
          "reversed": {
            "type": "boolean"
          }
        }
      },
      "WaterfallChartSeries": {
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/definitions/ChartData"
          },
          "positiveColumnsStyle": {
            "$ref": "#/definitions/WaterfallChartColumnStyle"
          },
          "negativeColumnsStyle": {
            "$ref": "#/definitions/WaterfallChartColumnStyle"
          },
          "subtotalColumnsStyle": {
            "$ref": "#/definitions/WaterfallChartColumnStyle"
          },
          "hideTrailingSubtotal": {
            "type": "boolean"
          },
          "customSubtotals": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/WaterfallChartCustomSubtotal"
            }
          },
          "dataLabel": {
            "$ref": "#/definitions/DataLabel"
          }
        }
      },
      "WaterfallChartColumnStyle": {
        "type": "object",
        "properties": {
          "label": {
            "type": "string"
          },
          "color": {
            "type": "object"
          },
          "colorStyle": {
            "type": "object"
          }
        }
      },
      "WaterfallChartCustomSubtotal": {
        "type": "object",
        "properties": {
          "subtotalIndex": {
            "type": "integer"
          },
          "label": {
            "type": "string"
          },
          "dataIsSubtotal": {
            "type": "boolean"
          }
        }
      },
      "TreemapChartSpec": {
        "type": "object",
        "properties": {
          "labels": {
            "$ref": "#/definitions/ChartData"
          },
          "parentLabels": {
            "$ref": "#/definitions/ChartData"
          },
          "sizeData": {
            "$ref": "#/definitions/ChartData"
          },
          "colorData": {
            "$ref": "#/definitions/ChartData"
          },
          "textFormat": {
            "type": "object"
          },
          "levels": {
            "type": "integer"
          },
          "hintedLevels": {
            "type": "integer"
          },
          "minValue": {
            "type": "number"
          },
          "maxValue": {
            "type": "number"
          },
          "headerColor": {
            "type": "object"
          },
          "headerColorStyle": {
            "type": "object"
          },
          "colorScale": {
            "$ref": "#/definitions/TreemapChartColorScale"
          },
          "hideTooltips": {
            "type": "boolean"
          }
        }
      },
      "TreemapChartColorScale": {
        "type": "object",
        "properties": {
          "minValueColor": {
            "type": "object"
          },
          "minValueColorStyle": {
            "type": "object"
          },
          "midValueColor": {
            "type": "object"
          },
          "midValueColorStyle": {
            "type": "object"
          },
          "maxValueColor": {
            "type": "object"
          },
          "maxValueColorStyle": {
            "type": "object"
          },
          "noDataColor": {
            "type": "object"
          },
          "noDataColorStyle": {
            "type": "object"
          }
        }
      },
      "ScorecardChartSpec": {
        "type": "object",
        "properties": {
          "keyValueData": {
            "$ref": "#/definitions/ChartData"
          },
          "baselineValueData": {
            "$ref": "#/definitions/ChartData"
          },
          "aggregateType": {
            "type": "string",
            "enum": [
              "CHART_AGGREGATE_TYPE_UNSPECIFIED",
              "AVERAGE",
              "COUNT",
              "MAX",
              "MEDIAN",
              "MIN",
              "SUM"
            ]
          },
          "keyValueFormat": {
            "$ref": "#/definitions/KeyValueFormat"
          },
          "baselineValueFormat": {
            "$ref": "#/definitions/BaselineValueFormat"
          },
          "scaleFactor": {
            "type": "number"
          },
          "numberFormatSource": {
            "type": "string",
            "enum": [
              "CHART_NUMBER_FORMAT_SOURCE_UNDEFINED",
              "FROM_DATA",
              "CUSTOM"
            ]
          },
          "customFormatOptions": {
            "$ref": "#/definitions/ChartCustomNumberFormatOptions"
          }
        }
      },
      "KeyValueFormat": {
        "type": "object",
        "properties": {
          "textFormat": {
            "type": "object"
          },
          "position": {
            "$ref": "#/definitions/TextPosition"
          }
        }
      },
      "BaselineValueFormat": {
        "type": "object",
        "properties": {
          "comparisonType": {
            "type": "string",
            "enum": [
              "COMPARISON_TYPE_UNDEFINED",
              "ABSOLUTE_DIFFERENCE",
              "PERCENTAGE_DIFFERENCE"
            ]
          },
          "textFormat": {
            "type": "object"
          },
          "position": {
            "$ref": "#/definitions/TextPosition"
          },
          "description": {
            "type": "string"
          },
          "positiveColor": {
            "type": "object"
          },
          "positiveColorStyle": {
            "type": "object"
          },
          "negativeColor": {
            "type": "object"
          },
          "negativeColorStyle": {
            "type": "object"
          }
        }
      },
      "ChartCustomNumberFormatOptions": {
        "type": "object",
        "properties": {
          "prefix": {
            "type": "string"
          },
          "suffix": {
            "type": "string"
          }
        }
      },
      "EmbeddedObjectBorder": {
        "type": "object",
        "properties": {
          "color": {
            "type": "object"
          },
          "colorStyle": {
            "type": "object"
          }
        }
      }
    }
  };
  const text = [
    `JSON schema for building the request body for creating and updating a chart using Google Sheets API.`,
    `This is for the tools "create_chart_on_google_sheets" and "update_chart_on_google_sheets".`,
    `### JSONSchema`,
    `<JSONSchema>${JSON.stringify(schema)}</JSONSchema>`,
  ].join("\n");
  const result = { content: [{ type: "text", text }], isError: false };
  return { jsonrpc: "2.0", result };
}


// Descriptions of the functions.
const descriptions_management_rag = {
  explanation_create_maps_url: {
    title: "Generate a Google Maps URL of a dynamic map.",
    description: [
      `Use to generate a Google Maps URL of a dynamic map, including various parameters.`,
      `The Google Maps URL can show the specific location as a map, show the route between the origin and the target as a map, show the nearby shops, restaurants, and so on as a map, and so on.`,
      `This tool returns the explanation of how to create a Google Maps URL.`,
      `Generate a Google Maps URL by understanding this returned explanation.`,
      `After you read it, you are not required to call this tool again while you continue to remember this explanation in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_reference_generate_google_apps_script: {
    title: "Generate a Google Apps Script",
    description: [
      `Use to help generate a Google Apps Script effectively.`,
      `This tool returns the markdown including the titles and the hyperlinks for taking advantage of Google Apps Script.`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. Select several titles related to the goal for achieving by Google Apps Script from the returned markdown.`,
      `2. Access the hyperlinks of your selected titles and retrieve the content from each link.`,
      `3. Generate a Google Apps Script by understanding those contents.`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_reference_export_google_sheets_as_pdf: {
    title: "Generate a Google Sheets URL",
    description: [
      `Use to help generate a Google Sheets URL including the query parameters for exporting as PDF.`,
      `This tool returns the markdown including how to create a Google Sheets URL for exporting as PDF.`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate a Google Sheets URL for exporting as PDF.`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_analytics_data_properties_runReport: {
    title: `Generate a request body for "Method: properties.runReport" of Google Analytics Data API`,
    description: [
      `Use to help generate a request body for "Method: properties.runReport" of Google Analytics Data API.`,
      `This tool returns the markdown including how to create a request body for "Method: properties.runReport" of Google Analytics Data API.`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate a request body for "Method: properties.runReport" of Google Analytics Data API.`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_analytics_data_properties_runRealtimeReport: {
    title: `Generate a request body for "Method: properties.runRealtimeReport" of Google Analytics Data API`,
    description: [
      `Use to help generate a request body for "Method: properties.runRealtimeReport" of Google Analytics Data API.`,
      `This tool returns the markdown including how to create a request body for "Method: properties.runRealtimeReport" of Google Analytics Data API.`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate a request body for "Method: properties.runRealtimeReport" of Google Analytics Data API.`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_manage_google_sheets_using_sheets_api: {
    title: `Generate a request body for "Method: spreadsheets.batchUpdate" of Google Sheets API`,
    description: [
      `Use to help generate a request body for "Method: spreadsheets.batchUpdate" of Google Sheets API.`,
      `This tool returns the markdown including how to create a request body for "Method: spreadsheets.batchUpdate" of Google Sheets API.`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate a request body for "Method: spreadsheets.batchUpdate" of Google Sheets API.`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_manage_google_docs_using_docs_api: {
    title: `Generate a request body for "Method: documents.batchUpdate" of Google Docs API`,
    description: [
      `Use to help generate a request body for "Method: documents.batchUpdate" of Google Docs API.`,
      `This tool returns the markdown including how to create a request body for "Method: documents.batchUpdate" of Google Docs API.`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate a request body for "Method: documents.batchUpdate" of Google Docs API.`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_manage_google_slides_using_slides_api: {
    title: `Generate a request body for "Method: presentations.batchUpdate" of Google Slides API`,
    description: [
      `Use to help generate a request body for "Method: presentations.batchUpdate" of Google Slides API.`,
      `This tool returns the markdown including how to create a request body for "Method: presentations.batchUpdate" of Google Slides API.`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate a request body for "Method: presentations.batchUpdate" of Google Slides API.`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_generate_survey_with_google_forms: {
    title: `Generate itemList for the tool "generate_survey_with_google_forms"`,
    description: [
      `Use to help generate itemList for the tool "generate_survey_with_google_forms".`,
      `This tool returns the markdown including how to create itemList for the tool "generate_survey_with_google_forms".`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate itemList for the tool "generate_survey_with_google_forms".`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_generate_quiz_with_google_forms: {
    title: `Generate itemList for the tool "generate_quiz_with_google_forms"`,
    description: [
      `Use to help generate itemList for the tool "generate_quiz_with_google_forms".`,
      `This tool returns the markdown including how to create itemList for the tool "generate_quiz_with_google_forms".`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate itemList for the tool "generate_quiz_with_google_forms".`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_search_file_in_google_drive: {
    title: `Generate search query for "Method: files.list" of Drive API v3. This is used for the tool "search_file_in_google_drive"`,
    description: [
      `Use to help generate search query for "Method: files.list" of Drive API v3. This is used for the tool "search_file_in_google_drive".`,
      `This tool returns the markdown including how to search query for "Method: files.list" of Drive API v3. This is used for the tool "search_file_in_google_drive".`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. By understanding the user's prompt and this markdown, generate itemList for the tool "generate_quiz_with_google_forms".`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
      `- If those contents were not useful, retrieve the useful contents by searching on StackOverflow. The search keywords are like "stackoverflow Google Apps Script {the special words related to the goal for achieving by Google Apps Script}"`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_google_apps_script_library_list: {
    title: "Get Google Apps Script library list",
    description: [
      `Use to get the Google Apps Script library list. Those libraries are created by Tanaike.`,
      `This tool returns the markdown including the titles and the hyperlinks for retrieving the suitable libraries.`,
      `Your mission is as follows.`,
      `### Mission`,
      `1. Understand the prompt.`,
      `2. By following the prompt, retrieve the library titles, descriptions, and links as a list from the returned markdown.`,
      `3. Access the hyperlinks of your selected titles and retrieve the content from each link.`,
      `4. Summarize the library list.`,
      `### Supplement`,
      `- After you read it, you are not required to call this tool again while you continue to remember this markdown in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

  explanation_create_chart_by_google_sheets_api: {
    title: "Generate a request body for creating and updating a chart on Google Sheets using Sheets API",
    description: [
      `Use to generate a request body for creating and updating a chart on Google Sheets using Sheets API.`,
      `When you use a JSON schema, you are required to have the Spreadsheet ID, sheet ID, and the data range as the grid range.`,
      `This tool returns the explanation of how to create a Google Maps URL.`,
      `Generate a request body by understanding this returned explanation.`,
      `After you read it, you are not required to call this tool again while you continue to remember this explanation in your history.`,
    ].join("\n"),
    parameters: { description: "No properties.", type: "object", properties: {} }
  },

};
