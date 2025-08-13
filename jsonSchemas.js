/**
 * JSON schemas for the request body of the batchUpdate method of Google Docs API, Sheets API, and Slides API.
 * Author: Kanshi Tanaike
 * GitHub: https://github.com/tanaikech/Generating-Request-Body-for-APIs-using-Gemini
 * 
 * version 1.0.2
 */

const jsonSchemaForSheets = {
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
};

const jsonSchemaForDocs = {
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
};

const jsonSchemaForSlides = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Google Slides API batchUpdate Request",
  "description": "A list of requests to be applied to the presentation.",
  "type": "object",
  "properties": {
    "requests": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Request"
      }
    },
    "writeControl": {
      "type": "object",
      "properties": {
        "requiredRevisionId": {
          "type": "string"
        }
      }
    }
  },
  "required": [
    "requests"
  ],
  "definitions": {
    "Request": {
      "oneOf": [
        { "$ref": "#/definitions/CreateSlideRequest" },
        { "$ref": "#/definitions/CreateShapeRequest" },
        { "$ref": "#/definitions/CreateTableRequest" },
        { "$ref": "#/definitions/InsertTextRequest" },
        { "$ref": "#/definitions/InsertTableRowsRequest" },
        { "$ref": "#/definitions/InsertTableColumnsRequest" },
        { "$ref": "#/definitions/DeleteTableRowRequest" },
        { "$ref": "#/definitions/DeleteTableColumnRequest" },
        { "$ref": "#/definitions/ReplaceAllTextRequest" },
        { "$ref": "#/definitions/DeleteObjectRequest" },
        { "$ref": "#/definitions/UpdatePageElementTransformRequest" },
        { "$ref": "#/definitions/UpdateSlidesPositionRequest" },
        { "$ref": "#/definitions/DeleteTextRequest" },
        { "$ref": "#/definitions/CreateImageRequest" },
        { "$ref": "#/definitions/CreateVideoRequest" },
        { "$ref": "#/definitions/CreateSheetsChartRequest" },
        { "$ref": "#/definitions/CreateLineRequest" },
        { "$ref": "#/definitions/RefreshSheetsChartRequest" },
        { "$ref": "#/definitions/UpdateShapePropertiesRequest" },
        { "$ref": "#/definitions/UpdateImagePropertiesRequest" },
        { "$ref": "#/definitions/UpdateVideoPropertiesRequest" },
        { "$ref": "#/definitions/UpdatePagePropertiesRequest" },
        { "$ref": "#/definitions/UpdateTableCellPropertiesRequest" },
        { "$ref": "#/definitions/UpdateLinePropertiesRequest" },
        { "$ref": "#/definitions/CreateParagraphBulletsRequest" },
        { "$ref": "#/definitions/ReplaceAllShapesWithImageRequest" },
        { "$ref": "#/definitions/DuplicateObjectRequest" },
        { "$ref": "#/definitions/UpdateTextStyleRequest" },
        { "$ref": "#/definitions/ReplaceAllShapesWithSheetsChartRequest" },
        { "$ref": "#/definitions/DeleteParagraphBulletsRequest" },
        { "$ref": "#/definitions/UpdateParagraphStyleRequest" },
        { "$ref": "#/definitions/UpdateTableBorderPropertiesRequest" },
        { "$ref": "#/definitions/UpdateTableColumnPropertiesRequest" },
        { "$ref": "#/definitions/UpdateTableRowPropertiesRequest" },
        { "$ref": "#/definitions/MergeTableCellsRequest" },
        { "$ref": "#/definitions/UnmergeTableCellsRequest" },
        { "$ref": "#/definitions/GroupObjectsRequest" },
        { "$ref": "#/definitions/UngroupObjectsRequest" },
        { "$ref": "#/definitions/UpdatePageElementAltTextRequest" },
        { "$ref": "#/definitions/ReplaceImageRequest" },
        { "$ref": "#/definitions/UpdateSlidePropertiesRequest" },
        { "$ref": "#/definitions/UpdatePageElementsZOrderRequest" },
        { "$ref": "#/definitions/UpdateLineCategoryRequest" },
        { "$ref": "#/definitions/RerouteLineRequest" }
      ]
    },
    "CreateSlideRequest": {
      "type": "object",
      "properties": {
        "createSlide": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "insertionIndex": { "type": "integer" },
            "slideLayoutReference": { "type": "object" },
            "placeholderIdMappings": { "type": "array", "items": { "type": "object" } }
          }
        }
      }
    },
    "CreateShapeRequest": {
      "type": "object",
      "properties": {
        "createShape": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "shapeType": { "type": "string", "enum": ["TYPE_UNSPECIFIED", "TEXT_BOX", "RECTANGLE", "ROUND_RECTANGLE", "ELLIPSE", "ARC", "BENT_ARROW", "BENT_UP_ARROW", "BEVEL", "BLOCK_ARC", "BRACE_PAIR", "BRACKET_PAIR", "CAN", "CHEVRON", "CHORD", "CLOUD", "CORNER", "CUBE", "CURVED_DOWN_ARROW", "CURVED_LEFT_ARROW", "CURVED_RIGHT_ARROW", "CURVED_UP_ARROW", "DECAGON", "DIAMOND", "DODECAGON", "DONUT", "DOUBLE_WAVE", "DOWN_ARROW", "DOWN_ARROW_CALLOUT", "FOLDED_CORNER", "FRAME", "HALF_FRAME", "HEART", "HEPTAGON", "HEXAGON", "HOME_PLATE", "HORIZONTAL_SCROLL", "IRREGULAR_SEAL_1", "IRREGULAR_SEAL_2", "LEFT_ARROW", "LEFT_ARROW_CALLOUT", "LEFT_BRACE", "LEFT_BRACKET", "LEFT_RIGHT_ARROW", "LEFT_RIGHT_ARROW_CALLOUT", "LEFT_RIGHT_UP_ARROW", "LEFT_UP_ARROW", "LIGHTNING_BOLT", "MATH_DIVIDE", "MATH_EQUAL", "MATH_MINUS", "MATH_MULTIPLY", "MATH_NOT_EQUAL", "MATH_PLUS", "MOON", "NO_SMOKING", "NOTCHED_RIGHT_ARROW", "OCTAGON", "PARALLELOGRAM", "PENTAGON", "PIE", "PLAQUE", "PLUS", "QUAD_ARROW", "QUAD_ARROW_CALLOUT", "RIBBON", "RIBBON_2", "RIGHT_ARROW", "RIGHT_ARROW_CALLOUT", "RIGHT_BRACE", "RIGHT_BRACKET", "ROUND_1_RECTANGLE", "ROUND_2_DIAG_RECTANGLE", "ROUND_2_SAME_RECTANGLE", "RIGHT_TRIANGLE", "SMILEY_FACE", "SNIP_1_RECTANGLE", "SNIP_2_DIAG_RECTANGLE", "SNIP_2_SAME_RECTANGLE", "SNIP_ROUND_RECTANGLE", "STAR_10", "STAR_12", "STAR_16", "STAR_24", "STAR_32", "STAR_4", "STAR_5", "STAR_6", "STAR_7", "STAR_8", "STRIPED_RIGHT_ARROW", "SUN", "TRAPEZOID", "TRIANGLE", "UP_ARROW", "UP_ARROW_CALLOUT", "UP_DOWN_ARROW", "UTURN_ARROW", "VERTICAL_SCROLL", "WAVE", "WEDGE_ELLIPSE_CALLOUT", "WEDGE_RECTANGLE_CALLOUT", "WEDGE_ROUND_RECTANGLE_CALLOUT", "WITH_OUT_SHAPE_TYPE"] },
            "elementProperties": { "type": "object" }
          },
          "required": ["shapeType"]
        }
      }
    },
    "CreateTableRequest": {
      "type": "object",
      "properties": {
        "createTable": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "elementProperties": { "type": "object" },
            "rows": { "type": "integer" },
            "columns": { "type": "integer" }
          },
          "required": ["rows", "columns"]
        }
      }
    },
    "InsertTextRequest": {
      "type": "object",
      "properties": {
        "insertText": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "cellLocation": { "type": "object" },
            "text": { "type": "string" },
            "insertionIndex": { "type": "integer" }
          },
          "required": ["objectId", "text"]
        }
      }
    },
    "DeleteObjectRequest": {
      "type": "object",
      "properties": {
        "deleteObject": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" }
          },
          "required": ["objectId"]
        }
      }
    },
    "DeleteTextRequest": {
      "type": "object",
      "properties": {
        "deleteText": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "cellLocation": { "type": "object" },
            "textRange": { "type": "object" }
          },
          "required": ["objectId"]
        }
      }
    },
    "InsertTableRowsRequest": {
      "type": "object",
      "properties": {
        "insertTableRows": {
          "type": "object",
          "properties": {
            "tableObjectId": { "type": "string" },
            "cellLocation": { "type": "object" },
            "insertBelow": { "type": "boolean" },
            "number": { "type": "integer" }
          },
          "required": ["tableObjectId"]
        }
      }
    },
    "InsertTableColumnsRequest": {
      "type": "object",
      "properties": {
        "insertTableColumns": {
          "type": "object",
          "properties": {
            "tableObjectId": { "type": "string" },
            "cellLocation": { "type": "object" },
            "insertRight": { "type": "boolean" },
            "number": { "type": "integer" }
          },
          "required": ["tableObjectId"]
        }
      }
    },
    "DeleteTableRowRequest": {
      "type": "object",
      "properties": {
        "deleteTableRow": {
          "type": "object",
          "properties": {
            "tableObjectId": { "type": "string" },
            "cellLocation": { "type": "object" }
          },
          "required": ["tableObjectId"]
        }
      }
    },
    "DeleteTableColumnRequest": {
      "type": "object",
      "properties": {
        "deleteTableColumn": {
          "type": "object",
          "properties": {
            "tableObjectId": { "type": "string" },
            "cellLocation": { "type": "object" }
          },
          "required": ["tableObjectId"]
        }
      }
    },
    "ReplaceAllTextRequest": {
      "type": "object",
      "properties": {
        "replaceAllText": {
          "type": "object",
          "properties": {
            "replaceText": { "type": "string" },
            "pageObjectIds": { "type": "array", "items": { "type": "string" } },
            "containsText": { "type": "object" }
          },
          "required": ["replaceText", "containsText"]
        }
      }
    },
    "UpdatePageElementTransformRequest": {
      "type": "object",
      "properties": {
        "updatePageElementTransform": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "transform": { "type": "object" },
            "applyMode": { "type": "string", "enum": ["APPLY_MODE_UNSPECIFIED", "RELATIVE", "ABSOLUTE"] }
          },
          "required": ["objectId", "transform"]
        }
      }
    },
    "UpdateSlidesPositionRequest": {
      "type": "object",
      "properties": {
        "updateSlidesPosition": {
          "type": "object",
          "properties": {
            "slideObjectIds": { "type": "array", "items": { "type": "string" } },
            "insertionIndex": { "type": "integer" }
          },
          "required": ["slideObjectIds"]
        }
      }
    },
    "CreateImageRequest": {
      "type": "object",
      "properties": {
        "createImage": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "url": { "type": "string" },
            "elementProperties": { "type": "object" }
          }
        }
      }
    },
    "CreateVideoRequest": {
      "type": "object",
      "properties": {
        "createVideo": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "id": { "type": "string" },
            "source": { "type": "string", "enum": ["SOURCE_UNSPECIFIED", "YOUTUBE", "DRIVE"] },
            "elementProperties": { "type": "object" }
          },
          "required": ["id", "source"]
        }
      }
    },
    "CreateSheetsChartRequest": {
      "type": "object",
      "properties": {
        "createSheetsChart": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "spreadsheetId": { "type": "string" },
            "chartId": { "type": "integer" },
            "linkingMode": { "type": "string", "enum": ["NOT_LINKED_IMAGE", "LINKED"] },
            "elementProperties": { "type": "object" }
          },
          "required": ["spreadsheetId", "chartId"]
        }
      }
    },
    "CreateLineRequest": {
      "type": "object",
      "properties": {
        "createLine": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "elementProperties": { "type": "object" },
            "lineCategory": { "type": "string", "enum": ["STRAIGHT", "BENT", "CURVED"] }
          }
        }
      }
    },
    "RefreshSheetsChartRequest": {
      "type": "object",
      "properties": {
        "refreshSheetsChart": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" }
          },
          "required": ["objectId"]
        }
      }
    },
    "UpdateShapePropertiesRequest": {
      "type": "object",
      "properties": {
        "updateShapeProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "shapeProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "shapeProperties", "fields"]
        }
      }
    },
    "UpdateImagePropertiesRequest": {
      "type": "object",
      "properties": {
        "updateImageProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "imageProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "imageProperties", "fields"]
        }
      }
    },
    "UpdateVideoPropertiesRequest": {
      "type": "object",
      "properties": {
        "updateVideoProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "videoProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "videoProperties", "fields"]
        }
      }
    },
    "UpdatePagePropertiesRequest": {
      "type": "object",
      "properties": {
        "updatePageProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "pageProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "pageProperties", "fields"]
        }
      }
    },
    "UpdateTableCellPropertiesRequest": {
      "type": "object",
      "properties": {
        "updateTableCellProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "tableRange": { "type": "object" },
            "tableCellProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "fields"]
        }
      }
    },
    "UpdateLinePropertiesRequest": {
      "type": "object",
      "properties": {
        "updateLineProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "lineProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "fields"]
        }
      }
    },
    "CreateParagraphBulletsRequest": {
      "type": "object",
      "properties": {
        "createParagraphBullets": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "cellLocation": { "type": "object" },
            "textRange": { "type": "object" },
            "bulletPreset": { "type": "string" }
          },
          "required": ["objectId"]
        }
      }
    },
    "ReplaceAllShapesWithImageRequest": {
      "type": "object",
      "properties": {
        "replaceAllShapesWithImage": {
          "type": "object",
          "properties": {
            "imageUrl": { "type": "string" },
            "replaceMethod": { "type": "string", "enum": ["CENTER_INSIDE", "CENTER_CROP"] },
            "containsText": { "type": "object" },
            "pageObjectIds": { "type": "array", "items": { "type": "string" } }
          },
          "required": ["imageUrl"]
        }
      }
    },
    "DuplicateObjectRequest": {
      "type": "object",
      "properties": {
        "duplicateObject": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "objectIds": { "type": "object" }
          },
          "required": ["objectId"]
        }
      }
    },
    "UpdateTextStyleRequest": {
      "type": "object",
      "properties": {
        "updateTextStyle": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "cellLocation": { "type": "object" },
            "style": { "type": "object" },
            "textRange": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "style", "fields"]
        }
      }
    },
    "ReplaceAllShapesWithSheetsChartRequest": {
      "type": "object",
      "properties": {
        "replaceAllShapesWithSheetsChart": {
          "type": "object",
          "properties": {
            "spreadsheetId": { "type": "string" },
            "chartId": { "type": "integer" },
            "linkingMode": { "type": "string", "enum": ["NOT_LINKED_IMAGE", "LINKED"] },
            "containsText": { "type": "object" },
            "pageObjectIds": { "type": "array", "items": { "type": "string" } }
          },
          "required": ["spreadsheetId", "chartId", "containsText"]
        }
      }
    },
    "DeleteParagraphBulletsRequest": {
      "type": "object",
      "properties": {
        "deleteParagraphBullets": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "cellLocation": { "type": "object" },
            "textRange": { "type": "object" }
          },
          "required": ["objectId"]
        }
      }
    },
    "UpdateParagraphStyleRequest": {
      "type": "object",
      "properties": {
        "updateParagraphStyle": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "cellLocation": { "type": "object" },
            "style": { "type": "object" },
            "textRange": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "style", "fields"]
        }
      }
    },
    "UpdateTableBorderPropertiesRequest": {
      "type": "object",
      "properties": {
        "updateTableBorderProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "tableRange": { "type": "object" },
            "borderPosition": { "type": "string" },
            "tableBorderProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "fields"]
        }
      }
    },
    "UpdateTableColumnPropertiesRequest": {
      "type": "object",
      "properties": {
        "updateTableColumnProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "columnIndices": { "type": "array", "items": { "type": "integer" } },
            "tableColumnProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "fields"]
        }
      }
    },
    "UpdateTableRowPropertiesRequest": {
      "type": "object",
      "properties": {
        "updateTableRowProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "rowIndices": { "type": "array", "items": { "type": "integer" } },
            "tableRowProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "fields"]
        }
      }
    },
    "MergeTableCellsRequest": {
      "type": "object",
      "properties": {
        "mergeTableCells": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "tableRange": { "type": "object" }
          },
          "required": ["objectId"]
        }
      }
    },
    "UnmergeTableCellsRequest": {
      "type": "object",
      "properties": {
        "unmergeTableCells": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "tableRange": { "type": "object" }
          },
          "required": ["objectId"]
        }
      }
    },
    "GroupObjectsRequest": {
      "type": "object",
      "properties": {
        "groupObjects": {
          "type": "object",
          "properties": {
            "groupObjectId": { "type": "string" },
            "childrenObjectIds": { "type": "array", "items": { "type": "string" } }
          },
          "required": ["childrenObjectIds"]
        }
      }
    },
    "UngroupObjectsRequest": {
      "type": "object",
      "properties": {
        "ungroupObjects": {
          "type": "object",
          "properties": {
            "objectIds": { "type": "array", "items": { "type": "string" } }
          },
          "required": ["objectIds"]
        }
      }
    },
    "UpdatePageElementAltTextRequest": {
      "type": "object",
      "properties": {
        "updatePageElementAltText": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "title": { "type": "string" },
            "description": { "type": "string" }
          },
          "required": ["objectId"]
        }
      }
    },
    "ReplaceImageRequest": {
      "type": "object",
      "properties": {
        "replaceImage": {
          "type": "object",
          "properties": {
            "imageObjectId": { "type": "string" },
            "url": { "type": "string" },
            "imageReplaceMethod": { "type": "string", "enum": ["IMAGE_REPLACE_METHOD_UNSPECIFIED", "CENTER_INSIDE", "CENTER_CROP"] }
          },
          "required": ["imageObjectId", "url"]
        }
      }
    },
    "UpdateSlidePropertiesRequest": {
      "type": "object",
      "properties": {
        "updateSlideProperties": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "slideProperties": { "type": "object" },
            "fields": { "type": "string" }
          },
          "required": ["objectId", "slideProperties", "fields"]
        }
      }
    },
    "UpdatePageElementsZOrderRequest": {
      "type": "object",
      "properties": {
        "updatePageElementsZOrder": {
          "type": "object",
          "properties": {
            "pageElementObjectIds": { "type": "array", "items": { "type": "string" } },
            "operation": { "type": "string", "enum": ["Z_ORDER_OPERATION_UNSPECIFIED", "BRING_TO_FRONT", "BRING_FORWARD", "SEND_BACKWARD", "SEND_TO_BACK"] }
          },
          "required": ["pageElementObjectIds"]
        }
      }
    },
    "UpdateLineCategoryRequest": {
      "type": "object",
      "properties": {
        "updateLineCategory": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" },
            "lineCategory": { "type": "string", "enum": ["STRAIGHT", "BENT", "CURVED"] }
          },
          "required": ["objectId", "lineCategory"]
        }
      }
    },
    "RerouteLineRequest": {
      "type": "object",
      "properties": {
        "rerouteLine": {
          "type": "object",
          "properties": {
            "objectId": { "type": "string" }
          },
          "required": ["objectId"]
        }
      }
    }
  }
};


const jsonSchemaForClassroom = {
  Course: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Classroom Course",
    "description": "A course in Google Classroom.",
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "description": "Identifier for this course assigned by Classroom. Read-only."
      },
      "name": {
        "type": "string",
        "description": "Name of the course. For example, '10th Grade Biology'. It must be between 1 and 750 characters."
      },
      "section": {
        "type": "string",
        "description": "Section of the course. For example, 'Period 2'. It must be no longer than 2800 characters."
      },
      "descriptionHeading": {
        "type": "string",
        "description": "Optional heading for the description. For example, 'Welcome to 10th Grade Biology.' It must be no longer than 3600 characters."
      },
      "description": {
        "type": "string",
        "description": "Optional description. For example, 'We'll be learning about the structure of living creatures...'. It must be no longer than 30,000 characters."
      },
      "room": {
        "type": "string",
        "description": "Optional room location. For example, '301'. It must be no longer than 650 characters."
      },
      "ownerId": {
        "type": "string",
        "description": "The identifier of the owner of a course. This is required when creating a course."
      },
      "creationTime": {
        "type": "string",
        "format": "date-time",
        "description": "Creation time of the course. Read-only."
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "Time of the most recent update to this course. Read-only."
      },
      "enrollmentCode": {
        "type": "string",
        "description": "Enrollment code to use when joining this course. Read-only."
      },
      "courseState": {
        "type": "string",
        "enum": [
          "COURSE_STATE_UNSPECIFIED",
          "ACTIVE",
          "ARCHIVED",
          "PROVISIONED",
          "DECLINED",
          "SUSPENDED"
        ],
        "description": "State of the course. If unspecified, the default state is PROVISIONED."
      },
      "alternateLink": {
        "type": "string",
        "format": "uri",
        "description": "Absolute link to this course in the Classroom web UI. Read-only."
      },
      "teacherGroupEmail": {
        "type": "string",
        "format": "email",
        "description": "The email address of a Google group containing all teachers of the course. Read-only."
      },
      "courseGroupEmail": {
        "type": "string",
        "format": "email",
        "description": "The email address of a Google group containing all members of the course. Read-only."
      },
      "teacherFolder": {
        "type": "object",
        "description": "Information about a Drive Folder that is shared with all teachers of the course. Read-only."
      },
      "courseMaterialSets": {
        "type": "array",
        "items": { "type": "object" },
        "description": "Sets of materials that appear on the 'about' page of this course. Read-only."
      },
      "guardiansEnabled": {
        "type": "boolean",
        "description": "Whether or not guardian notifications are enabled for this course. Read-only."
      },
      "calendarId": {
        "type": "string",
        "description": "The Calendar ID for a calendar that all course members can see. Read-only."
      },
      "gradebookSettings": {
        "type": "object",
        "description": "The gradebook settings for the course. Read-only."
      }
    }
  },

  GradingPeriodSettings: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "GradingPeriodSettings",
    "description": "Settings for grading periods in Google Classroom.",
    "type": "object",
    "properties": {
      "gradingPeriods": {
        "type": "array",
        "description": "The list of grading periods.",
        "items": {
          "type": "object",
          "title": "GradingPeriod",
          "description": "Represents a specific grading period.",
          "properties": {
            "id": {
              "type": "string",
              "description": "The unique identifier for the grading period.",
              "readOnly": true
            },
            "displayName": {
              "type": "string",
              "description": "The name of the grading period, e.g., 'Q1', 'Semester 1'."
            },
            "startDate": {
              "type": "object",
              "title": "Date",
              "description": "The start date of the grading period.",
              "properties": {
                "year": {
                  "type": "integer",
                  "description": "Year of the date. Must be from 1 to 9999."
                },
                "month": {
                  "type": "integer",
                  "description": "Month of a year. Must be from 1 to 12."
                },
                "day": {
                  "type": "integer",
                  "description": "Day of a month. Must be from 1 to 31 and valid for the year and month."
                }
              },
              "required": [
                "year",
                "month",
                "day"
              ]
            },
            "endDate": {
              "type": "object",
              "title": "Date",
              "description": "The end date of the grading period.",
              "properties": {
                "year": {
                  "type": "integer",
                  "description": "Year of the date. Must be from 1 to 9999."
                },
                "month": {
                  "type": "integer",
                  "description": "Month of a year. Must be from 1 to 12."
                },
                "day": {
                  "type": "integer",
                  "description": "Day of a month. Must be from 1 to 31 and valid for the year and month."
                }
              },
              "required": [
                "year",
                "month",
                "day"
              ]
            }
          },
          "required": [
            "startDate",
            "endDate"
          ]
        }
      }
    },
    "required": [
      "calculationType",
      "gradingPeriods"
    ]
  },

  CourseAlias: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Resource: courses.aliases",
    "description": "Schema for a Google Classroom CourseAlias resource.",
    "type": "object",
    "properties": {
      "alias": {
        "type": "string",
        "description": [
          `Alias string. The format of the string indicates the desired alias scoping.`,
          `- d:<name> indicates a domain-scoped alias. Example: d:math_101`,
          `- p:<name> indicates a project-scoped alias. Example: p:abc123`,
          `This field has a maximum length of 256 characters.`,
        ].join("\n")
      },
    },
    "required": ["alias"]
  },

  CourseWork: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Classroom CourseWork",
    "description": "Schema for a Google Classroom CourseWork resource.",
    "type": "object",
    "properties": {
      "courseId": {
        "type": "string",
        "description": "Identifier of the course. Read-only."
      },
      "id": {
        "type": "string",
        "description": "Classroom-assigned identifier of this course work, unique per course. Read-only."
      },
      "title": {
        "type": "string",
        "description": "Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters."
      },
      "description": {
        "type": "string",
        "description": "Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters."
      },
      "materials": {
        "type": "array",
        "items": {
          "type": "object"
        },
        "description": "Additional materials."
      },
      "state": {
        "type": "string",
        "enum": [
          "COURSE_WORK_STATE_UNSPECIFIED",
          "PUBLISHED",
          "DRAFT",
          "DELETED"
        ],
        "description": "Status of this course work. If unspecified, the default state is DRAFT."
      },
      "alternateLink": {
        "type": "string",
        "description": "Absolute link to this course work in the Classroom web UI. This is only populated if state is PUBLISHED. Read-only."
      },
      "creationTime": {
        "type": "string",
        "format": "date-time",
        "description": "Timestamp when this course work was created. Read-only."
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "Timestamp of the most recent change to this course work. Read-only."
      },
      "dueDate": {
        "type": "object",
        "properties": {
          "year": {
            "type": "integer"
          },
          "month": {
            "type": "integer"
          },
          "day": {
            "type": "integer"
          }
        },
        "description": "Optional date, in UTC, that submissions for this course work are due. This must be specified if dueTime is specified."
      },
      "dueTime": {
        "type": "object",
        "properties": {
          "hours": {
            "type": "integer"
          },
          "minutes": {
            "type": "integer"
          },
          "seconds": {
            "type": "integer"
          },
          "nanos": {
            "type": "integer"
          }
        },
        "description": "Optional time of day, in UTC, that submissions for this course work are due. This must be specified if dueDate is specified."
      },
      "scheduledTime": {
        "type": "string",
        "format": "date-time",
        "description": "Optional timestamp when this course work is scheduled to be published."
      },
      "maxPoints": {
        "type": "number",
        "description": "Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded."
      },
      "workType": {
        "type": "string",
        "enum": [
          "COURSE_WORK_TYPE_UNSPECIFIED",
          "ASSIGNMENT",
          "SHORT_ANSWER_QUESTION",
          "MULTIPLE_CHOICE_QUESTION"
        ],
        "description": "Type of this course work."
      },
      "associatedWithDeveloper": {
        "type": "boolean",
        "description": "Whether this course work item is associated with the Developer Console project making the request. Read-only."
      },
      "assigneeMode": {
        "type": "string",
        "enum": [
          "ASSIGNEE_MODE_UNSPECIFIED",
          "ALL_STUDENTS",
          "INDIVIDUAL_STUDENTS"
        ],
        "description": "Assignee mode of the coursework."
      },
      "individualStudentsOptions": {
        "type": "object",
        "properties": {
          "studentIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "description": "Identifiers of students with access to the coursework."
      },
      "submissionModificationMode": {
        "type": "string",
        "enum": [
          "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
          "MODIFIABLE_UNTIL_TURNED_IN",
          "MODIFIABLE"
        ],
        "description": "Setting to determine when students are allowed to modify submissions."
      },
      "creatorUserId": {
        "type": "string",
        "description": "Identifier for the user that created the coursework. Read-only."
      },
      "topicId": {
        "type": "string",
        "description": "Identifier for the topic that this coursework is associated with."
      },
      "gradeCategory": {
        "type": "object",
        "description": "The category that this coursework's grade contributes to. Read-only."
      },
      "previewVersion": {
        "type": "string",
        "description": "The preview version of the API used to retrieve this resource. Read-only."
      },
      "assignment": {
        "type": "object",
        "properties": {
          "studentWorkFolder": {
            "type": "object"
          }
        },
        "description": "Assignment details."
      },
      "multipleChoiceQuestion": {
        "type": "object",
        "properties": {
          "choices": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "description": "Multiple choice question details."
      },
      "gradingPeriodId": {
        "type": "string",
        "description": "Identifier of the grading period associated with the coursework."
      }
    },
    "required": [
      "courseId",
      "id",
      "title"
    ]
  },

  Student: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Student",
    "description": "A student in a course.",
    "type": "object",
    "properties": {
      "courseId": {
        "type": "string",
        "description": "Identifier of the course. [1]"
      },
      "userId": {
        "type": "string",
        "description": "Identifier of the user. [1]"
      },
      "profile": {
        "type": "object",
        "description": "Global user information for the student. [1]",
        "properties": {
          "id": {
            "type": "string",
            "description": "Identifier of the user. [2]"
          },
          "name": {
            "type": "object",
            "description": "Name of the user. [2]",
            "properties": {
              "givenName": {
                "type": "string",
                "description": "The user's first name. [2]"
              },
              "familyName": {
                "type": "string",
                "description": "The user's last name. [2]"
              },
              "fullName": {
                "type": "string",
                "description": "The user's full name. [2]"
              }
            },
            "required": [
              "givenName",
              "familyName",
              "fullName"
            ]
          },
          "emailAddress": {
            "type": "string",
            "description": "Email address of the user. [2]"
          },
          "photoUrl": {
            "type": "string",
            "description": "URL of user's profile photo. [2]"
          },
          "permissions": {
            "type": "array",
            "description": "Global permissions of the user. [2]",
            "items": {
              "type": "object",
              "properties": {
                "permission": {
                  "type": "string",
                  "enum": [
                    "PERMISSION_UNSPECIFIED",
                    "CREATE_COURSE"
                  ]
                }
              }
            }
          },
          "verifiedTeacher": {
            "type": "boolean",
            "description": "Whether the user is a verified teacher. [2]"
          }
        },
        "required": [
          "id",
          "name",
          "emailAddress",
          "photoUrl",
          "permissions",
          "verifiedTeacher"
        ]
      },
      "studentWorkFolder": {
        "type": "object",
        "description": "A Drive Folder for this student's work in this course. [1]",
        "properties": {
          "id": {
            "type": "string",
            "description": "Drive API resource ID. [3]"
          },
          "title": {
            "type": "string",
            "description": "Title of the Drive folder. [3]"
          },
          "alternateLink": {
            "type": "string",
            "description": "URL that can be used to access the Drive folder. [3]"
          }
        },
        "required": [
          "id",
          "title",
          "alternateLink"
        ]
      }
    },
    "required": [
      "courseId",
      "userId",
      "profile",
      "studentWorkFolder"
    ]
  },

  Teacher: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Teacher",
    "description": "Teacher of a course.",
    "type": "object",
    "properties": {
      "courseId": {
        "type": "string",
        "description": "Identifier of the course. Read-only."
      },
      "userId": {
        "type": "string",
        "description": "Identifier of the user."
      },
      "profile": {
        "type": "object",
        "description": "Global user information for the teacher. Read-only.",
        "properties": {
          "id": {
            "type": "string",
            "description": "Identifier of the user. Read-only."
          },
          "name": {
            "type": "object",
            "description": "Name of the user. Read-only.",
            "properties": {
              "givenName": {
                "type": "string",
                "description": "The user's first name. Read-only."
              },
              "familyName": {
                "type": "string",
                "description": "The user's last name. Read-only."
              },
              "fullName": {
                "type": "string",
                "description": "The user's full name formed by concatenating the first and last name values. Read-only."
              }
            },
            "required": [
              "givenName",
              "familyName",
              "fullName"
            ]
          },
          "emailAddress": {
            "type": "string",
            "description": "Email address of the user. Read-only."
          },
          "photoUrl": {
            "type": "string",
            "description": "URL of user's profile photo. Read-only."
          },
          "permissions": {
            "type": "array",
            "description": "Global permissions of the user. Read-only.",
            "items": {
              "type": "object",
              "properties": {
                "permission": {
                  "type": "string",
                  "enum": [
                    "PERMISSION_UNSPECIFIED",
                    "CREATE_COURSE"
                  ]
                }
              }
            }
          },
          "verifiedTeacher": {
            "type": "boolean",
            "description": "Represents whether a Google Workspace for Education user's domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain. Read-only"
          }
        },
        "required": [
          "id",
          "name",
          "emailAddress",
          "photoUrl",
          "permissions",
          "verifiedTeacher"
        ]
      }
    },
    "required": [
      "courseId",
      "userId",
      "profile"
    ]
  },

  CourseWorkMaterial: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "CourseWorkMaterial",
    "description": "Course work material created by a teacher for students of the course",
    "type": "object",
    "properties": {
      "courseId": {
        "type": "string",
        "description": "Identifier of the course. [1]",
        "readOnly": true
      },
      "id": {
        "type": "string",
        "description": "Classroom-assigned identifier of this course work material, unique per course. [1]",
        "readOnly": true
      },
      "title": {
        "type": "string",
        "description": "Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters. [1]"
      },
      "description": {
        "type": "string",
        "description": "Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters. [1]"
      },
      "materials": {
        "type": "array",
        "description": "Additional materials. A course work material must have no more than 20 material items. [1]",
        "items": {
          "type": "object",
          "description": "Material attached to course work. [1]",
          "oneOf": [
            {
              "properties": {
                "driveFile": {
                  "type": "object",
                  "properties": {
                    "driveFile": {
                      "type": "object"
                    },
                    "shareMode": {
                      "type": "string",
                      "enum": [
                        "UNKNOWN_SHARE_MODE",
                        "VIEW",
                        "EDIT",
                        "STUDENT_COPY"
                      ]
                    }
                  }
                }
              }
            },
            {
              "properties": {
                "youtubeVideo": {
                  "type": "object"
                }
              }
            },
            {
              "properties": {
                "link": {
                  "type": "object"
                }
              }
            },
            {
              "properties": {
                "form": {
                  "type": "object"
                }
              }
            }
          ]
        }
      },
      "state": {
        "type": "string",
        "description": "Status of this course work material. If unspecified, the default state is DRAFT. [2]",
        "enum": [
          "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
          "PUBLISHED",
          "DRAFT",
          "DELETED"
        ]
      },
      "alternateLink": {
        "type": "string",
        "description": "Absolute link to this course work material in the Classroom web UI. This is only populated if state is PUBLISHED. [1]",
        "readOnly": true
      },
      "creationTime": {
        "type": "string",
        "format": "date-time",
        "description": "Timestamp when this course work material was created. [1]",
        "readOnly": true
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "Timestamp of the most recent change to this course work material. [1]",
        "readOnly": true
      },
      "scheduledTime": {
        "type": "string",
        "format": "date-time",
        "description": "Optional timestamp when this course work material is scheduled to be published. [1]"
      },
      "assigneeMode": {
        "type": "string",
        "description": "Assignee mode of the course work material. If unspecified, the default value is ALL_STUDENTS. [3]",
        "enum": [
          "ASSIGNEE_MODE_UNSPECIFIED",
          "ALL_STUDENTS",
          "INDIVIDUAL_STUDENTS"
        ]
      },
      "individualStudentsOptions": {
        "type": "object",
        "description": "Assignee details about a coursework/announcement. This field is set if and only if assigneeMode is INDIVIDUAL_STUDENTS. [4]",
        "properties": {
          "studentIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "creatorUserId": {
        "type": "string",
        "description": "Identifier for the user that created the course work material. [1]",
        "readOnly": true
      },
      "topicId": {
        "type": "string",
        "description": "Identifier for the topic that this course work material is associated with. Must match an existing topic in the course. [1]"
      }
    },
    "required": [
      "courseId",
      "id",
      "title",
      "materials",
      "state",
      "alternateLink",
      "creationTime",
      "updateTime",
      "assigneeMode",
      "creatorUserId"
    ]
  },

  StudentSubmission: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "StudentSubmission",
    "description": "Student submission for course work. StudentSubmission items are generated when a CourseWork item is created.",
    "type": "object",
    "properties": {
      "courseId": {
        "type": "string",
        "description": "Identifier of the course. Read-only."
      },
      "courseWorkId": {
        "type": "string",
        "description": "Identifier for the course work this corresponds to. Read-only."
      },
      "id": {
        "type": "string",
        "description": "Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only."
      },
      "userId": {
        "type": "string",
        "description": "Identifier for the student that owns this submission. Read-only."
      },
      "creationTime": {
        "type": "string",
        "format": "date-time",
        "description": "Creation time of this submission. This may be unset if the student has not accessed this item. Read-only."
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "Last update time of this submission. This may be unset if the student has not accessed this item. Read-only."
      },
      "state": {
        "type": "string",
        "description": "State of this submission. Read-only.",
        "enum": [
          "STATE_UNSPECIFIED",
          "CREATED",
          "TURNED_IN",
          "RETURNED",
          "RECLAIMED_BY_STUDENT",
          "STUDENT_EDITED_AFTER_TURN_IN"
        ]
      },
      "late": {
        "type": "boolean",
        "description": "Whether this submission is late. Read-only."
      },
      "draftGrade": {
        "type": "number",
        "description": "Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers."
      },
      "assignedGrade": {
        "type": "number",
        "description": "Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers."
      },
      "rubricId": {
        "type": "string",
        "description": "Output only. Identifier of the rubric currently attached to this course work and used for grading this student submission. This ID is empty if there is no rubric. This ID reflects the currently active rubric; it changes if teachers delete and recreate the rubric. Read-only."
      },
      "draftRubricGrades": {
        "type": "object",
        "description": "Pending rubric grades based on the rubric's criteria. This map is empty if there is no rubric attached to this course work or if a rubric is attached, but no grades have been set on any criteria. Entries are only populated for grades that have been set. Key: The rubric's criterion ID. Read-only.",
        "additionalProperties": {
          "type": "object",
          "properties": {
            "criterionId": {
              "type": "string",
              "description": "Optional. Criterion ID."
            },
            "levelId": {
              "type": "string",
              "description": "Optional. Optional level ID of the selected level. If empty, no level was selected."
            },
            "points": {
              "type": "number",
              "description": "Optional. Optional points assigned for this criterion, typically based on the level. Levels might or might not have points. If unset, no points were set for this criterion."
            }
          }
        }
      },
      "assignedRubricGrades": {
        "type": "object",
        "description": "Assigned rubric grades based on the rubric's Criteria. This map is empty if there is no rubric attached to this course work or if a rubric is attached, but no grades have been set on any Criteria. Entries are only populated for grades that have been set. Key: The rubric's criterion ID. Read-only.",
        "additionalProperties": {
          "type": "object",
          "properties": {
            "criterionId": {
              "type": "string",
              "description": "Optional. Criterion ID."
            },
            "levelId": {
              "type": "string",
              "description": "Optional. Optional level ID of the selected level. If empty, no level was selected."
            },
            "points": {
              "type": "number",
              "description": "Optional. Optional points assigned for this criterion, typically based on the level. Levels might or might not have points. If unset, no points were set for this criterion."
            }
          }
        }
      },
      "alternateLink": {
        "type": "string",
        "description": "Absolute link to the submission in the Classroom web UI. Read-only."
      },
      "courseWorkType": {
        "type": "string",
        "description": "Type of course work this submission is for. Read-only.",
        "enum": [
          "COURSE_WORK_TYPE_UNSPECIFIED",
          "ASSIGNMENT",
          "SHORT_ANSWER_QUESTION",
          "MULTIPLE_CHOICE_QUESTION"
        ]
      },
      "associatedWithDeveloper": {
        "type": "boolean",
        "description": "Whether this student submission is associated with the Developer Console project making the request. Read-only."
      },
      "submissionHistory": {
        "type": "array",
        "description": "The history of the submission (includes state and grade histories). Read-only.",
        "items": {
          "type": "object",
          "oneOf": [
            {
              "properties": {
                "stateHistory": {
                  "type": "object",
                  "properties": {
                    "state": {
                      "type": "string",
                      "enum": [
                        "STATE_UNSPECIFIED",
                        "CREATED",
                        "TURNED_IN",
                        "RETURNED",
                        "RECLAIMED_BY_STUDENT",
                        "STUDENT_EDITED_AFTER_TURN_IN"
                      ]
                    },
                    "stateTimestamp": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "actorUserId": {
                      "type": "string"
                    }
                  }
                }
              }
            },
            {
              "properties": {
                "gradeHistory": {
                  "type": "object",
                  "properties": {
                    "pointsEarned": {
                      "type": "number"
                    },
                    "maxPoints": {
                      "type": "number"
                    },
                    "gradeTimestamp": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "actorUserId": {
                      "type": "string"
                    },
                    "gradeChangeType": {
                      "type": "string",
                      "enum": [
                        "UNKNOWN_GRADE_CHANGE_TYPE",
                        "DRAFT_GRADE_POINTS_EARNED_CHANGE",
                        "ASSIGNED_GRADE_POINTS_EARNED_CHANGE",
                        "MAX_POINTS_CHANGE"
                      ]
                    }
                  }
                }
              }
            }
          ]
        }
      },
      "previewVersion": {
        "type": "string",
        "description": "Output only. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.",
        "enum": [
          "V1_20231110_PREVIEW"
        ]
      },
      "assignmentSubmission": {
        "type": "object",
        "properties": {
          "attachments": {
            "type": "array",
            "items": {
              "type": "object",
              "oneOf": [
                {
                  "properties": {
                    "driveFile": {
                      "type": "object"
                    }
                  }
                },
                {
                  "properties": {
                    "youTubeVideo": {
                      "type": "object"
                    }
                  }
                },
                {
                  "properties": {
                    "link": {
                      "type": "object"
                    }
                  }
                },
                {
                  "properties": {
                    "form": {
                      "type": "object"
                    }
                  }
                }
              ]
            }
          }
        }
      },
      "shortAnswerSubmission": {
        "type": "object",
        "properties": {
          "answer": {
            "type": "string",
            "description": "Student response to a short-answer question."
          }
        }
      },
      "multipleChoiceSubmission": {
        "type": "object",
        "properties": {
          "answer": {
            "type": "string",
            "description": "Student's select choice."
          }
        }
      }
    }
  },

  Announcement: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Announcement",
    "description": "An announcement created by a teacher for students of the course.",
    "type": "object",
    "properties": {
      "courseId": {
        "type": "string",
        "description": "Identifier of the course. Read-only."
      },
      "id": {
        "type": "string",
        "description": "Classroom-assigned identifier of this announcement, unique per course. Read-only."
      },
      "text": {
        "type": "string",
        "description": "Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters."
      },
      "materials": {
        "type": "array",
        "description": "Additional materials. Announcements must have no more than 20 material items.",
        "items": {
          "type": "object",
          "description": "Material attached to course work. This can be a drive file, a YouTube video, a link, or a form.",

          /**
           * Modified the following part to the above by an error of "FunctionDeclaration in the request exceeds the maximum allowed nesting depth.".
           */
          // "description": "Material attached to course work.",
          // "oneOf": [
          //   { "properties": { "driveFile": { "type": "object" } } },
          //   { "properties": { "youtubeVideo": { "type": "object" } } },
          //   { "properties": { "link": { "type": "object" } } },
          //   { "properties": { "form": { "type": "object" } } }
          // ]

        }
      },
      "state": {
        "type": "string",
        "description": "Status of this announcement. If unspecified, the default state is DRAFT.",
        "enum": [
          "ANNOUNCEMENT_STATE_UNSPECIFIED",
          "PUBLISHED",
          "DRAFT",
          "DELETED"
        ]
      },
      "alternateLink": {
        "type": "string",
        "description": "Absolute link to this announcement in the Classroom web UI. This is only populated if state is PUBLISHED. Read-only."
      },
      "creationTime": {
        "type": "string",
        "format": "date-time",
        "description": "Timestamp when this announcement was created. Read-only."
      },
      "updateTime": {
        "type": "string",
        "format": "date-time",
        "description": "Timestamp of the most recent change to this announcement. Read-only."
      },
      "scheduledTime": {
        "type": "string",
        "format": "date-time",
        "description": "Optional timestamp when this announcement is scheduled to be published."
      },
      "assigneeMode": {
        "type": "string",
        "description": "Assignee mode of the announcement. If unspecified, the default value is ALL_STUDENTS.",
        "enum": [
          "ASSIGNEE_MODE_UNSPECIFIED",
          "ALL_STUDENTS",
          "INDIVIDUAL_STUDENTS"
        ]
      },
      "individualStudentsOptions": {
        "type": "object",
        "description": "Assignee details about a coursework/announcement. This field is set if and only if assigneeMode is INDIVIDUAL_STUDENTS.",
        "properties": {
          "studentIds": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Identifiers for the students that have access to the coursework/announcement."
          }
        }
      },
      "creatorUserId": {
        "type": "string",
        "description": "Identifier for the user that created the announcement. Read-only."
      }
    },
    "required": [
      "courseId",
      "id",
      "text"
    ]
  },

  Rubric: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Rubric",
    "description": "The rubric of the course work. A rubric is a scoring guide used to evaluate student work and give feedback.",
    "type": "object",
    "properties": {
      "courseId": {
        "description": "Identifier of the course. Read-only.",
        "type": "string"
      },
      "courseWorkId": {
        "description": "Identifier for the course work this corresponds to. Read-only.",
        "type": "string"
      },
      "id": {
        "description": "Classroom-assigned identifier for the rubric. This is unique among rubrics for the relevant course work. Read-only.",
        "type": "string"
      },
      "creationTime": {
        "description": "Output only. Timestamp when this rubric was created. Read-only.",
        "type": "string",
        "format": "date-time"
      },
      "updateTime": {
        "description": "Output only. Timestamp of the most recent change to this rubric. Read-only.",
        "type": "string",
        "format": "date-time"
      },
      "criteria": {
        "description": "List of criteria. Each criterion is a dimension on which performance is rated.",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "description": "The criterion ID. On creation, an ID is assigned.",
              "type": "string"
            },
            "title": {
              "description": "The title of the criterion.",
              "type": "string"
            },
            "description": {
              "description": "The description of the criterion.",
              "type": "string"
            },
            "levels": {
              "description": "The list of levels within this criterion.",
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "description": "The level ID. On creation, an ID is assigned.",
                    "type": "string"
                  },
                  "title": {
                    "description": "The title of the level. If the level has no points set, title must be set.",
                    "type": "string"
                  },
                  "description": {
                    "description": "The description of the level.",
                    "type": "string"
                  },
                  "points": {
                    "description": "Optional points associated with this level. If set, all levels within the rubric must specify points and the value must be distinct across all levels within a single criterion. 0 is distinct from no points.",
                    "type": "number"
                  }
                }
              }
            }
          }
        }
      },
      "previewVersion": {
        "description": "Output only. The preview version of the API used to retrieve this resource.",
        "type": "string",
        "enum": [
          "PREVIEW_VERSION_UNSPECIFIED",
          "V1_20231110_PREVIEW",
          "V1_20240401_PREVIEW",
          "V1_20240930_PREVIEW"
        ]
      },
      "sourceSpreadsheetId": {
        "description": "Input only. Immutable. Google Sheets ID of the spreadsheet. This spreadsheet must contain formatted rubric settings.",
        "type": "string"
      }
    }
  },

  Topic: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Topic",
    "description": "Topic created by a teacher for a course in Google Classroom. [1]",
    "type": "object",
    "properties": {
      "courseId": {
        "type": "string",
        "description": "Identifier of the course. Read-only. [1]",
        "readOnly": true
      },
      "topicId": {
        "type": "string",
        "description": "Unique identifier for the topic. Read-only. [1]",
        "readOnly": true
      },
      "name": {
        "type": "string",
        "description": "The name of the topic, generated by the user. Must be a non-empty string no longer than 100 characters. [1]",
        "maxLength": 100
      },
      "updateTime": {
        "type": "string",
        "description": "The time the topic was last updated by the system. Read-only. [1]",
        "format": "date-time",
        "readOnly": true
      }
    },
    "required": [
      "name"
    ]
  },

  Invitation: {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "description": "Identifier assigned by Classroom. Read-only."
      },
      "userId": {
        "type": "string",
        "description": "Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: the numeric identifier for the user, the email address of the user, or the string literal 'me', indicating the requesting user."
      },
      "courseId": {
        "type": "string",
        "description": "Identifier of the course to invite the user to."
      },
      "role": {
        "type": "string",
        "description": "Role to invite the user to have. Must not be COURSE_ROLE_UNSPECIFIED.",
        "enum": [
          "STUDENT",
          "TEACHER",
          "OWNER"
        ]
      }
    },
    "required": [
      "id",
      "userId",
      "courseId",
      "role"
    ]
  },

  Registration: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Registration",
    "description": "An instruction to Classroom to send notifications from the feed to the provided destination.",
    "type": "object",
    "properties": {
      "registrationId": {
        "type": "string",
        "description": "A server-generated unique identifier for this Registration. Read-only."
      },
      "feed": {
        "type": "object",
        "description": "Specification for the class of notifications that Classroom should deliver to the destination.",
        "properties": {
          "feedType": {
            "type": "string",
            "description": "The type of feed.",
            "enum": [
              "FEED_TYPE_UNSPECIFIED",
              "DOMAIN_ROSTER_CHANGES",
              "COURSE_ROSTER_CHANGES",
              "COURSE_WORK_CHANGES"
            ]
          },
          "courseRosterChangesInfo": {
            "type": "object",
            "description": "Information about a Feed with a feedType of COURSE_ROSTER_CHANGES. This field must be specified if feedType is COURSE_ROSTER_CHANGES.",
            "properties": {
              "courseId": {
                "type": "string",
                "description": "The courseId of the course to subscribe to roster changes for."
              }
            }
          },
          "courseWorkChangesInfo": {
            "type": "object",
            "description": "Information about a Feed with a feedType of COURSE_WORK_CHANGES. This field must be specified if feedType is COURSE_WORK_CHANGES.",
            "properties": {
              "courseId": {
                "type": "string",
                "description": "The courseId of the course to subscribe to work changes for."
              }
            }
          }
        }
      },
      "expiryTime": {
        "type": "string",
        "description": "The time until which the Registration is effective. This is a read-only field assigned by the server.",
        "format": "date-time"
      },
      "cloudPubsubTopic": {
        "type": "object",
        "description": "The Cloud Pub/Sub topic that notifications are to be sent to.",
        "properties": {
          "topicName": {
            "type": "string",
            "description": "The name field of a Cloud Pub/Sub Topic."
          }
        }
      }
    },
    "required": [
      "feed",
      "cloudPubsubTopic"
    ]
  },

  UserProfile: {
    "type": "object",
    "title": "UserProfile",
    "description": "Global information for a user.",
    "properties": {
      "id": {
        "type": "string",
        "description": "Identifier of the user. Read-only."
      },
      "name": {
        "type": "object",
        "description": "Name of the user. Read-only.",
        "properties": {
          "givenName": {
            "type": "string",
            "description": "The user's first name. Read-only."
          },
          "familyName": {
            "type": "string",
            "description": "The user's last name. Read-only."
          },
          "fullName": {
            "type": "string",
            "description": "The user's full name formed by concatenating the first and last name values. Read-only."
          }
        }
      },
      "emailAddress": {
        "type": "string",
        "description": "Email address of the user. Must request https://www.googleapis.com/auth/classroom.profile.emails scope for this field to be populated in a response body. Read-only."
      },
      "photoUrl": {
        "type": "string",
        "description": "URL of user's profile photo. Must request https://www.googleapis.com/auth/classroom.profile.photos scope for this field to be populated in a response body. Read-only."
      },
      "permissions": {
        "type": "array",
        "description": "Global permissions of the user. Read-only.",
        "items": {
          "type": "object",
          "properties": {
            "permission": {
              "type": "string",
              "enum": [
                "PERMISSION_UNSPECIFIED",
                "CREATE_COURSE"
              ],
              "description": "Permission value."
            }
          }
        }
      },
      "verifiedTeacher": {
        "type": "boolean",
        "description": "Represents whether a Google Workspace for Education user's domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain. Read-only."
      }
    }
  },

  GuardianInvitation: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "GuardianInvitation",
    "description": "An invitation to become the guardian of a specified user, sent to a specified email address.",
    "type": "object",
    "properties": {
      "studentId": {
        "description": "ID of the student (in standard format).",
        "type": "string"
      },
      "invitationId": {
        "description": "Unique identifier for this invitation. Read-only.",
        "type": "string",
        "readOnly": true
      },
      "invitedEmailAddress": {
        "description": "Email address that the invitation was sent to. This field is only visible to domain administrators.",
        "type": "string"
      },
      "state": {
        "description": "The state that this invitation is in.",
        "type": "string",
        "enum": [
          "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
          "PENDING",
          "COMPLETE"
        ]
      },
      "creationTime": {
        "description": "The time that this invitation was created. Read-only.",
        "type": "string",
        "format": "date-time",
        "readOnly": true
      }
    },
    "required": [
      "studentId",
      "invitedEmailAddress"
    ]
  },

  Guardian: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Guardian",
    "description": "Association between a student and a guardian of that student. The guardian may receive information about the student's course work.",
    "type": "object",
    "properties": {
      "studentId": {
        "description": "Identifier for the student to whom the guardian relationship applies.",
        "type": "string"
      },
      "guardianId": {
        "description": "Identifier for the guardian.",
        "type": "string"
      },
      "guardianProfile": {
        "description": "User profile for the guardian.",
        "type": "object",
        "properties": {
          "id": {
            "description": "Identifier of the user.",
            "type": "string"
          },
          "name": {
            "description": "Name of the user.",
            "type": "object",
            "properties": {
              "givenName": {
                "description": "The user's first name.",
                "type": "string"
              },
              "familyName": {
                "description": "The user's last name.",
                "type": "string"
              },
              "fullName": {
                "description": "The user's full name formed by concatenating the first and last name values.",
                "type": "string"
              }
            }
          },
          "emailAddress": {
            "description": "Email address of the user.",
            "type": "string"
          },
          "photoUrl": {
            "description": "URL of user's profile photo.",
            "type": "string"
          },
          "permissions": {
            "description": "Global permissions of the user.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "permission": {
                  "description": "Permission value.",
                  "type": "string",
                  "enum": [
                    "PERMISSION_UNSPECIFIED",
                    "CREATE_COURSE"
                  ]
                }
              }
            }
          },
          "verifiedTeacher": {
            "description": "Represents whether a Google Workspace for Education user's domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain.",
            "type": "boolean"
          }
        }
      },
      "invitedEmailAddress": {
        "description": "The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators.",
        "type": "string"
      }
    }
  },

  // This has not been released on August 7, 2025, yet.
  StudentGroup: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "StudentGroup",
    "description": "A student group in a course.",
    "type": "object",
    "properties": {
      "courseId": {
        "type": "string",
        "description": "The identifier of the course. [1]"
      },
      "id": {
        "type": "string",
        "description": "The identifier of the student group. [1]"
      },
      "title": {
        "type": "string",
        "description": "The name of the student group. [1]"
      }
    },
    "required": [
      "courseId",
      "id",
      "title"
    ]
  },

};

const jsonSchemaForPeople = {
  ContactGroup: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "ContactGroup",
    "description": "A contact group. [1, 2, 3, 4]",
    "type": "object",
    "properties": {
      "resourceName": {
        "type": "string",
        "description": "The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/{contactGroupId}`. [1, 2, 3, 4]"
      },
      "etag": {
        "type": "string",
        "description": "The HTTP entity tag of the resource. Used for web cache validation. [1, 2, 3, 4]"
      },
      "metadata": {
        "type": "object",
        "description": "Output only. Metadata about the contact group. [1, 2, 3, 4]",
        "properties": {
          "updateTime": {
            "type": "string",
            "format": "date-time",
            "description": "Output only. The time the group was last updated. [1, 2, 3, 4]"
          },
          "deleted": {
            "type": "boolean",
            "description": "Output only. True if the contact group resource has been deleted. Populated only for contactGroups.list requests that include a sync token. [1, 2, 3, 4]"
          }
        }
      },
      "groupType": {
        "type": "string",
        "description": "Output only. The contact group type. [1, 2, 3, 4]",
        "enum": [
          "GROUP_TYPE_UNSPECIFIED",
          "USER_CONTACT_GROUP",
          "SYSTEM_CONTACT_GROUP"
        ]
      },
      "name": {
        "type": "string",
        "description": "The contact group name set by the group owner or a system provided name for system groups. For contactGroups.create or contactGroups.update the name must be unique to the users contact groups. [1, 2, 3, 4]"
      },
      "formattedName": {
        "type": "string",
        "description": "Output only. The name translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale for system groups names. Group names set by the owner are the same as name. [1, 2, 3, 4]"
      },
      "memberResourceNames": {
        "type": "array",
        "description": "Output only. The list of contact person resource names that are members of the contact group. The field is only populated for GET requests and will only return as many members as maxMembers in the get request. [1, 2, 3, 4]",
        "items": {
          "type": "string"
        }
      },
      "memberCount": {
        "type": "integer",
        "description": "Output only. The total number of contacts in the group irrespective of max members in specified in the request. [1, 2, 3, 4]"
      },
      "clientData": {
        "type": "array",
        "description": "The group's client data. [1, 2, 3, 4]",
        "items": {
          "type": "object",
          "properties": {
            "key": {
              "type": "string",
              "description": "The client specified key of the client data. [1, 2, 3, 4]"
            },
            "value": {
              "type": "string",
              "description": "The client specified value of the client data. [1, 2, 3, 4]"
            }
          }
        }
      }
    }
  },

  Person: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google People API - REST Resource: people",
    "description": "Information about a person merged from various data sources such as the authenticated user's contacts and profile data.",
    "type": "object",
    "properties": {
      "resourceName": {
        "type": "string",
        "description": "The resource name for the person, assigned by the server. An ASCII string in the form of people/{person_id}."
      },
      "etag": {
        "type": "string",
        "description": "The HTTP entity tag of the resource. Used for web cache validation."
      },
      "metadata": {
        "description": "Output only. Metadata about the person.",
        "$ref": "#/definitions/PersonMetadata"
      },
      "addresses": {
        "type": "array",
        "description": "The person's street addresses.",
        "items": {
          "$ref": "#/definitions/Address"
        }
      },
      "ageRange": {
        "type": "string",
        "description": "Output only. DEPRECATED (Please use person.ageRanges instead). The person's age range.",
        "enum": [
          "AGE_RANGE_UNSPECIFIED",
          "LESS_THAN_EIGHTEEN",
          "EIGHTEEN_TO_TWENTY",
          "TWENTY_ONE_OR_OLDER"
        ]
      },
      "ageRanges": {
        "type": "array",
        "description": "Output only. The person's age ranges.",
        "items": {
          "$ref": "#/definitions/AgeRangeType"
        }
      },
      "biographies": {
        "type": "array",
        "description": "The person's biographies. This field is a singleton for contact sources.",
        "items": {
          "$ref": "#/definitions/Biography"
        }
      },
      "birthdays": {
        "type": "array",
        "description": "The person's birthdays. This field is a singleton for contact sources.",
        "items": {
          "$ref": "#/definitions/Birthday"
        }
      },
      "braggingRights": {
        "type": "array",
        "description": "DEPRECATED: No data will be returned The person's bragging rights.",
        "items": {
          "$ref": "#/definitions/BraggingRights"
        }
      },
      "calendarUrls": {
        "type": "array",
        "description": "The person's calendar URLs.",
        "items": {
          "$ref": "#/definitions/CalendarUrl"
        }
      },
      "clientData": {
        "type": "array",
        "description": "The person's client data.",
        "items": {
          "$ref": "#/definitions/ClientData"
        }
      },
      "coverPhotos": {
        "type": "array",
        "description": "Output only. The person's cover photos.",
        "items": {
          "$ref": "#/definitions/CoverPhoto"
        }
      },
      "emailAddresses": {
        "type": "array",
        "description": "The person's email addresses.",
        "items": {
          "$ref": "#/definitions/EmailAddress"
        }
      },
      "events": {
        "type": "array",
        "description": "The person's events.",
        "items": {
          "$ref": "#/definitions/Event"
        }
      },
      "externalIds": {
        "type": "array",
        "description": "The person's external IDs.",
        "items": {
          "$ref": "#/definitions/ExternalId"
        }
      },
      "fileAses": {
        "type": "array",
        "description": "The person's file-ases.",
        "items": {
          "$ref": "#/definitions/FileAs"
        }
      },
      "genders": {
        "type": "array",
        "description": "The person's genders. This field is a singleton for contact sources.",
        "items": {
          "$ref": "#/definitions/Gender"
        }
      },
      "imClients": {
        "type": "array",
        "description": "The person's instant messaging clients.",
        "items": {
          "$ref": "#/definitions/ImClient"
        }
      },
      "interests": {
        "type": "array",
        "description": "The person's interests.",
        "items": {
          "$ref": "#/definitions/Interest"
        }
      },
      "locales": {
        "type": "array",
        "description": "The person's locale preferences.",
        "items": {
          "$ref": "#/definitions/Locale"
        }
      },
      "locations": {
        "type": "array",
        "description": "The person's locations.",
        "items": {
          "$ref": "#/definitions/Location"
        }
      },
      "memberships": {
        "type": "array",
        "description": "The person's group memberships.",
        "items": {
          "$ref": "#/definitions/Membership"
        }
      },
      "miscKeywords": {
        "type": "array",
        "description": "The person's miscellaneous keywords.",
        "items": {
          "$ref": "#/definitions/MiscKeyword"
        }
      },
      "names": {
        "type": "array",
        "description": "The person's names. This field is a singleton for contact sources.",
        "items": {
          "$ref": "#/definitions/Name"
        }
      },
      "nicknames": {
        "type": "array",
        "description": "The person's nicknames.",
        "items": {
          "$ref": "#/definitions/Nickname"
        }
      },
      "occupations": {
        "type": "array",
        "description": "The person's occupations.",
        "items": {
          "$ref": "#/definitions/Occupation"
        }
      },
      "organizations": {
        "type": "array",
        "description": "The person's past or current organizations.",
        "items": {
          "$ref": "#/definitions/Organization"
        }
      },
      "phoneNumbers": {
        "type": "array",
        "description": "The person's phone numbers.",
        "items": {
          "$ref": "#/definitions/PhoneNumber"
        }
      },
      "photos": {
        "type": "array",
        "description": "Output only. The person's photos.",
        "items": {
          "$ref": "#/definitions/Photo"
        }
      },
      "relations": {
        "type": "array",
        "description": "The person's relations.",
        "items": {
          "$ref": "#/definitions/Relation"
        }
      },
      "relationshipInterests": {
        "type": "array",
        "description": "DEPRECATED: No data will be returned. The person's relationship interests.",
        "items": {
          "$ref": "#/definitions/RelationshipInterest"
        }
      },
      "relationshipStatuses": {
        "type": "array",
        "description": "DEPRECATED: No data will be returned. The person's relationship statuses.",
        "items": {
          "$ref": "#/definitions/RelationshipStatus"
        }
      },
      "residences": {
        "type": "array",
        "description": "DEPRECATED: (Please use person.locations instead) The person's residences.",
        "items": {
          "$ref": "#/definitions/Residence"
        }
      },
      "sipAddresses": {
        "type": "array",
        "description": "The person's SIP addresses.",
        "items": {
          "$ref": "#/definitions/SipAddress"
        }
      },
      "skills": {
        "type": "array",
        "description": "The person's skills.",
        "items": {
          "$ref": "#/definitions/Skill"
        }
      },
      "taglines": {
        "type": "array",
        "description": "DEPRECATED: No data will be returned. The person's taglines.",
        "items": {
          "$ref": "#/definitions/Tagline"
        }
      },
      "urls": {
        "type": "array",
        "description": "The person's associated URLs.",
        "items": {
          "$ref": "#/definitions/Url"
        }
      },
      "userDefined": {
        "type": "array",
        "description": "The person's user defined data.",
        "items": {
          "$ref": "#/definitions/UserDefined"
        }
      }
    },
    "definitions": {
      "PersonMetadata": {
        "type": "object",
        "properties": {
          "sources": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Source"
            }
          },
          "previousResourceNames": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "linkedPeopleResourceNames": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "deleted": {
            "type": "boolean"
          },
          "objectType": {
            "type": "string",
            "enum": [
              "OBJECT_TYPE_UNSPECIFIED",
              "PERSON",
              "PAGE"
            ]
          }
        }
      },
      "Source": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "SOURCE_TYPE_UNSPECIFIED",
              "ACCOUNT",
              "PROFILE",
              "DOMAIN_PROFILE",
              "CONTACT",
              "OTHER_CONTACT",
              "DOMAIN_CONTACT"
            ]
          },
          "id": {
            "type": "string"
          },
          "etag": {
            "type": "string"
          },
          "updateTime": {
            "type": "string",
            "format": "date-time"
          },
          "profileMetadata": {
            "$ref": "#/definitions/ProfileMetadata"
          }
        }
      },
      "ProfileMetadata": {
        "type": "object",
        "properties": {
          "objectType": {
            "type": "string",
            "enum": [
              "OBJECT_TYPE_UNSPECIFIED",
              "PERSON",
              "PAGE"
            ]
          },
          "userTypes": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "USER_TYPE_UNKNOWN",
                "GOOGLE_USER",
                "GPLUS_USER",
                "GOOGLE_APPS_USER"
              ]
            }
          }
        }
      },
      "Address": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "formattedValue": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          },
          "poBox": {
            "type": "string"
          },
          "streetAddress": {
            "type": "string"
          },
          "extendedAddress": {
            "type": "string"
          },
          "city": {
            "type": "string"
          },
          "region": {
            "type": "string"
          },
          "postalCode": {
            "type": "string"
          },
          "country": {
            "type": "string"
          },
          "countryCode": {
            "type": "string"
          }
        }
      },
      "AgeRangeType": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "ageRange": {
            "type": "string",
            "enum": [
              "AGE_RANGE_UNSPECIFIED",
              "LESS_THAN_EIGHTEEN",
              "EIGHTEEN_TO_TWENTY",
              "TWENTY_ONE_OR_OLDER"
            ]
          }
        }
      },
      "Biography": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "contentType": {
            "type": "string",
            "enum": [
              "CONTENT_TYPE_UNSPECIFIED",
              "TEXT_PLAIN",
              "TEXT_HTML"
            ]
          }
        }
      },
      "Birthday": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "date": {
            "$ref": "#/definitions/Date"
          },
          "text": {
            "type": "string"
          }
        }
      },
      "Date": {
        "type": "object",
        "properties": {
          "year": {
            "type": "integer"
          },
          "month": {
            "type": "integer"
          },
          "day": {
            "type": "integer"
          }
        }
      },
      "BraggingRights": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "CalendarUrl": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          }
        }
      },
      "ClientData": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "CoverPhoto": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "url": {
            "type": "string"
          },
          "default": {
            "type": "boolean"
          }
        }
      },
      "EmailAddress": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          },
          "displayName": {
            "type": "string"
          }
        }
      },
      "Event": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "date": {
            "$ref": "#/definitions/Date"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          }
        }
      },
      "ExternalId": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          }
        }
      },
      "FileAs": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "Gender": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "formattedValue": {
            "type": "string"
          },
          "addressMeAs": {
            "type": "string"
          }
        }
      },
      "ImClient": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "username": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          },
          "protocol": {
            "type": "string"
          },
          "formattedProtocol": {
            "type": "string"
          }
        }
      },
      "Interest": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "Locale": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "Location": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "current": {
            "type": "boolean"
          },
          "buildingId": {
            "type": "string"
          },
          "floor": {
            "type": "string"
          },
          "floorSection": {
            "type": "string"
          },
          "deskCode": {
            "type": "string"
          }
        }
      },
      "Membership": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "contactGroupMembership": {
            "$ref": "#/definitions/ContactGroupMembership"
          },
          "domainMembership": {
            "$ref": "#/definitions/DomainMembership"
          }
        }
      },
      "ContactGroupMembership": {
        "type": "object",
        "properties": {
          "contactGroupId": {
            "type": "string"
          },
          "contactGroupResourceName": {
            "type": "string"
          }
        }
      },
      "DomainMembership": {
        "type": "object",
        "properties": {
          "inViewerDomain": {
            "type": "boolean"
          }
        }
      },
      "MiscKeyword": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "TYPE_UNSPECIFIED",
              "OUTLOOK_BILLING_INFORMATION",
              "OUTLOOK_DIRECTORY_SERVER",
              "OUTLOOK_KEYWORD",
              "OUTLOOK_MILEAGE",
              "OUTLOOK_PRIORITY",
              "OUTLOOK_SENSITIVITY",
              "OUTLOOK_SUBJECT",
              "OUTLOOK_USER",
              "HOME",
              "WORK",
              "OTHER"
            ]
          },
          "formattedType": {
            "type": "string"
          }
        }
      },
      "Name": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "displayName": {
            "type": "string"
          },
          "displayNameLastFirst": {
            "type": "string"
          },
          "unstructuredName": {
            "type": "string"
          },
          "familyName": {
            "type": "string"
          },
          "givenName": {
            "type": "string"
          },
          "middleName": {
            "type": "string"
          },
          "honorificPrefix": {
            "type": "string"
          },
          "honorificSuffix": {
            "type": "string"
          },
          "phoneticFullName": {
            "type": "string"
          },
          "phoneticFamilyName": {
            "type": "string"
          },
          "phoneticGivenName": {
            "type": "string"
          },
          "phoneticMiddleName": {
            "type": "string"
          },
          "phoneticHonorificPrefix": {
            "type": "string"
          },
          "phoneticHonorificSuffix": {
            "type": "string"
          }
        }
      },
      "Nickname": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "DEFAULT",
              "MAIDEN_NAME",
              "INITIALS",
              "GPLUS",
              "OTHER_NAME",
              "ALTERNATE_NAME",
              "SHORT_NAME"
            ]
          }
        }
      },
      "Occupation": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "Organization": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          },
          "startDate": {
            "$ref": "#/definitions/Date"
          },
          "endDate": {
            "$ref": "#/definitions/Date"
          },
          "current": {
            "type": "boolean"
          },
          "name": {
            "type": "string"
          },
          "phoneticName": {
            "type": "string"
          },
          "department": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "jobDescription": {
            "type": "string"
          },
          "symbol": {
            "type": "string"
          },
          "domain": {
            "type": "string"
          },
          "location": {
            "type": "string"
          },
          "costCenter": {
            "type": "string"
          },
          "fullTimeEquivalentMillipercent": {
            "type": "integer"
          }
        }
      },
      "PhoneNumber": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "canonicalForm": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          }
        }
      },
      "Photo": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "url": {
            "type": "string"
          },
          "default": {
            "type": "boolean"
          }
        }
      },
      "Relation": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "person": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          }
        }
      },
      "RelationshipInterest": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "formattedValue": {
            "type": "string"
          }
        }
      },
      "RelationshipStatus": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "formattedValue": {
            "type": "string"
          }
        }
      },
      "Residence": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "current": {
            "type": "boolean"
          }
        }
      },
      "SipAddress": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          }
        }
      },
      "Skill": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "Tagline": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "Url": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "formattedType": {
            "type": "string"
          }
        }
      },
      "UserDefined": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/definitions/FieldMetadata"
          },
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "FieldMetadata": {
        "type": "object",
        "properties": {
          "primary": {
            "type": "boolean"
          },
          "sourcePrimary": {
            "type": "boolean"
          },
          "verified": {
            "type": "boolean"
          },
          "source": {
            "$ref": "#/definitions/Source"
          }
        }
      }
    }
  },

};
