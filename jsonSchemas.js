/**
 * JSON schemas for the request body of the batchUpdate method of Google Docs API, Sheets API, and Slides API.
 * Author: Kanshi Tanaike
 * GitHub: https://github.com/tanaikech/Generating-Request-Body-for-APIs-using-Gemini
 * 
 * version 1.0.7  
 */

const jsonSchemaForSheets = {
  BatchUpdate: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Sheets API spreadsheets.batchUpdate Request Body",
    "description": "JSON schema for the request body of the spreadsheets.batchUpdate method in the Google Sheets API.",
    "type": "object",
    "properties": {
      "requests": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/Request"
        },
        "description": "A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied."
      },
      "includeSpreadsheetInResponse": {
        "type": "boolean",
        "description": "Determines if the update response should include the spreadsheet resource."
      },
      "responseRanges": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "description": "Limits the ranges included in the response spreadsheet. Meaningful only if includeSpreadsheetInResponse is 'true'."
      },
      "responseIncludeGridData": {
        "type": "boolean",
        "description": "True if grid data should be returned. Meaningful only if includeSpreadsheetInResponse is 'true'. This parameter is ignored if a field mask was set in the request."
      }
    },
    "required": [
      "requests"
    ],
    "$defs": {
      "Request": {
        "type": "object",
        "oneOf": [
          { "properties": { "updateSpreadsheetProperties": { "$ref": "#/$defs/UpdateSpreadsheetPropertiesRequest" } } },
          { "properties": { "updateSheetProperties": { "$ref": "#/$defs/UpdateSheetPropertiesRequest" } } },
          { "properties": { "updateDimensionProperties": { "$ref": "#/$defs/UpdateDimensionPropertiesRequest" } } },
          { "properties": { "updateNamedRange": { "$ref": "#/$defs/UpdateNamedRangeRequest" } } },
          { "properties": { "repeatCell": { "$ref": "#/$defs/RepeatCellRequest" } } },
          { "properties": { "addNamedRange": { "$ref": "#/$defs/AddNamedRangeRequest" } } },
          { "properties": { "deleteNamedRange": { "$ref": "#/$defs/DeleteNamedRangeRequest" } } },
          { "properties": { "addSheet": { "$ref": "#/$defs/AddSheetRequest" } } },
          { "properties": { "deleteSheet": { "$ref": "#/$defs/DeleteSheetRequest" } } },
          { "properties": { "autoFill": { "$ref": "#/$defs/AutoFillRequest" } } },
          { "properties": { "cutPaste": { "$ref": "#/$defs/CutPasteRequest" } } },
          { "properties": { "copyPaste": { "$ref": "#/$defs/CopyPasteRequest" } } },
          { "properties": { "mergeCells": { "$ref": "#/$defs/MergeCellsRequest" } } },
          { "properties": { "unmergeCells": { "$ref": "#/$defs/UnmergeCellsRequest" } } },
          { "properties": { "updateBorders": { "$ref": "#/$defs/UpdateBordersRequest" } } },
          { "properties": { "updateCells": { "$ref": "#/$defs/UpdateCellsRequest" } } },
          { "properties": { "addFilterView": { "$ref": "#/$defs/AddFilterViewRequest" } } },
          { "properties": { "appendCells": { "$ref": "#/$defs/AppendCellsRequest" } } },
          { "properties": { "clearBasicFilter": { "$ref": "#/$defs/ClearBasicFilterRequest" } } },
          { "properties": { "deleteDimension": { "$ref": "#/$defs/DeleteDimensionRequest" } } },
          { "properties": { "deleteEmbeddedObject": { "$ref": "#/$defs/DeleteEmbeddedObjectRequest" } } },
          { "properties": { "deleteFilterView": { "$ref": "#/$defs/DeleteFilterViewRequest" } } },
          { "properties": { "duplicateFilterView": { "$ref": "#/$defs/DuplicateFilterViewRequest" } } },
          { "properties": { "duplicateSheet": { "$ref": "#/$defs/DuplicateSheetRequest" } } },
          { "properties": { "findReplace": { "$ref": "#/$defs/FindReplaceRequest" } } },
          { "properties": { "insertDimension": { "$ref": "#/$defs/InsertDimensionRequest" } } },
          { "properties": { "insertRange": { "$ref": "#/$defs/InsertRangeRequest" } } },
          { "properties": { "moveDimension": { "$ref": "#/$defs/MoveDimensionRequest" } } },
          { "properties": { "updateEmbeddedObjectPosition": { "$ref": "#/$defs/UpdateEmbeddedObjectPositionRequest" } } },
          { "properties": { "pasteData": { "$ref": "#/$defs/PasteDataRequest" } } },
          { "properties": { "textToColumns": { "$ref": "#/$defs/TextToColumnsRequest" } } },
          { "properties": { "updateFilterView": { "$ref": "#/$defs/UpdateFilterViewRequest" } } },
          { "properties": { "deleteRange": { "$ref": "#/$defs/DeleteRangeRequest" } } },
          { "properties": { "appendDimension": { "$ref": "#/$defs/AppendDimensionRequest" } } },
          { "properties": { "addConditionalFormatRule": { "$ref": "#/$defs/AddConditionalFormatRuleRequest" } } },
          { "properties": { "updateConditionalFormatRule": { "$ref": "#/$defs/UpdateConditionalFormatRuleRequest" } } },
          { "properties": { "deleteConditionalFormatRule": { "$ref": "#/$defs/DeleteConditionalFormatRuleRequest" } } },
          { "properties": { "sortRange": { "$ref": "#/$defs/SortRangeRequest" } } },
          { "properties": { "setDataValidation": { "$ref": "#/$defs/SetDataValidationRequest" } } },
          { "properties": { "setBasicFilter": { "$ref": "#/$defs/SetBasicFilterRequest" } } },
          { "properties": { "addProtectedRange": { "$ref": "#/$defs/AddProtectedRangeRequest" } } },
          { "properties": { "updateProtectedRange": { "$ref": "#/$defs/UpdateProtectedRangeRequest" } } },
          { "properties": { "deleteProtectedRange": { "$ref": "#/$defs/DeleteProtectedRangeRequest" } } },
          { "properties": { "autoResizeDimensions": { "$ref": "#/$defs/AutoResizeDimensionsRequest" } } },
          { "properties": { "addChart": { "$ref": "#/$defs/AddChartRequest" } } },
          { "properties": { "updateChartSpec": { "$ref": "#/$defs/UpdateChartSpecRequest" } } },
          { "properties": { "updateBanding": { "$ref": "#/$defs/UpdateBandingRequest" } } },
          { "properties": { "addBanding": { "$ref": "#/$defs/AddBandingRequest" } } },
          { "properties": { "deleteBanding": { "$ref": "#/$defs/DeleteBandingRequest" } } },
          { "properties": { "createDeveloperMetadata": { "$ref": "#/$defs/CreateDeveloperMetadataRequest" } } },
          { "properties": { "updateDeveloperMetadata": { "$ref": "#/$defs/UpdateDeveloperMetadataRequest" } } },
          { "properties": { "deleteDeveloperMetadata": { "$ref": "#/$defs/DeleteDeveloperMetadataRequest" } } },
          { "properties": { "randomizeRange": { "$ref": "#/$defs/RandomizeRangeRequest" } } },
          { "properties": { "addDimensionGroup": { "$ref": "#/$defs/AddDimensionGroupRequest" } } },
          { "properties": { "deleteDimensionGroup": { "$ref": "#/$defs/DeleteDimensionGroupRequest" } } },
          { "properties": { "updateDimensionGroup": { "$ref": "#/$defs/UpdateDimensionGroupRequest" } } },
          { "properties": { "trimWhitespace": { "$ref": "#/$defs/TrimWhitespaceRequest" } } },
          { "properties": { "deleteDuplicates": { "$ref": "#/$defs/DeleteDuplicatesRequest" } } },
          { "properties": { "updateEmbeddedObjectBorder": { "$ref": "#/$defs/UpdateEmbeddedObjectBorderRequest" } } },
          { "properties": { "addSlicer": { "$ref": "#/$defs/AddSlicerRequest" } } },
          { "properties": { "updateSlicerSpec": { "$ref": "#/$defs/UpdateSlicerSpecRequest" } } },
          { "properties": { "addDataSource": { "$ref": "#/$defs/AddDataSourceRequest" } } },
          { "properties": { "updateDataSource": { "$ref": "#/$defs/UpdateDataSourceRequest" } } },
          { "properties": { "deleteDataSource": { "$ref": "#/$defs/DeleteDataSourceRequest" } } },
          { "properties": { "refreshDataSource": { "$ref": "#/$defs/RefreshDataSourceRequest" } } },
          { "properties": { "cancelDataSourceRefresh": { "$ref": "#/$defs/CancelDataSourceRefreshRequest" } } },
          { "properties": { "addTable": { "$ref": "#/$defs/AddTableRequest" } } },
          { "properties": { "updateTable": { "$ref": "#/$defs/UpdateTableRequest" } } },
          { "properties": { "deleteTable": { "$ref": "#/$defs/DeleteTableRequest" } } }
        ]
      },
      "UpdateSpreadsheetPropertiesRequest": {
        "type": "object",
        "properties": {
          "properties": { "$ref": "#/$defs/SpreadsheetProperties" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "UpdateSheetPropertiesRequest": {
        "type": "object",
        "properties": {
          "properties": { "$ref": "#/$defs/SheetProperties" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "UpdateDimensionPropertiesRequest": {
        "type": "object",
        "properties": {
          "properties": { "$ref": "#/$defs/DimensionProperties" },
          "fields": { "type": "string", "format": "google-fieldmask" },
          "range": { "$ref": "#/$defs/DimensionRange" },
          "dataSourceSheetRange": { "$ref": "#/$defs/DataSourceSheetDimensionRange" }
        }
      },
      "UpdateNamedRangeRequest": {
        "type": "object",
        "properties": {
          "namedRange": { "$ref": "#/$defs/NamedRange" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "RepeatCellRequest": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/GridRange" },
          "cell": { "$ref": "#/$defs/CellData" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "AddNamedRangeRequest": {
        "type": "object",
        "properties": { "namedRange": { "$ref": "#/$defs/NamedRange" } }
      },
      "DeleteNamedRangeRequest": {
        "type": "object",
        "properties": { "namedRangeId": { "type": "string" } }
      },
      "AddSheetRequest": {
        "type": "object",
        "properties": { "properties": { "$ref": "#/$defs/SheetProperties" } }
      },
      "DeleteSheetRequest": {
        "type": "object",
        "properties": { "sheetId": { "type": "integer" } }
      },
      "AutoFillRequest": {
        "type": "object",
        "properties": {
          "useAlternateSeries": { "type": "boolean" },
          "range": { "$ref": "#/$defs/GridRange" },
          "sourceAndDestination": { "$ref": "#/$defs/SourceAndDestination" }
        }
      },
      "CutPasteRequest": {
        "type": "object",
        "properties": {
          "source": { "$ref": "#/$defs/GridRange" },
          "destination": { "$ref": "#/$defs/GridCoordinate" },
          "pasteType": { "$ref": "#/$defs/PasteType" }
        }
      },
      "CopyPasteRequest": {
        "type": "object",
        "properties": {
          "source": { "$ref": "#/$defs/GridRange" },
          "destination": { "$ref": "#/$defs/GridRange" },
          "pasteType": { "$ref": "#/$defs/PasteType" },
          "pasteOrientation": { "$ref": "#/$defs/PasteOrientation" }
        }
      },
      "MergeCellsRequest": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/GridRange" },
          "mergeType": { "$ref": "#/$defs/MergeType" }
        }
      },
      "UnmergeCellsRequest": {
        "type": "object",
        "properties": { "range": { "$ref": "#/$defs/GridRange" } }
      },
      "UpdateBordersRequest": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/GridRange" },
          "top": { "$ref": "#/$defs/Border" },
          "bottom": { "$ref": "#/$defs/Border" },
          "left": { "$ref": "#/$defs/Border" },
          "right": { "$ref": "#/$defs/Border" },
          "innerHorizontal": { "$ref": "#/$defs/Border" },
          "innerVertical": { "$ref": "#/$defs/Border" }
        }
      },
      "UpdateCellsRequest": {
        "type": "object",
        "properties": {
          "rows": { "type": "array", "items": { "$ref": "#/$defs/RowData" } },
          "fields": { "type": "string", "format": "google-fieldmask" },
          "start": { "$ref": "#/$defs/GridCoordinate" },
          "range": { "$ref": "#/$defs/GridRange" }
        }
      },
      "AddFilterViewRequest": {
        "type": "object",
        "properties": { "filter": { "$ref": "#/$defs/FilterView" } }
      },
      "AppendCellsRequest": {
        "type": "object",
        "properties": {
          "sheetId": { "type": "integer" },
          "rows": { "type": "array", "items": { "$ref": "#/$defs/RowData" } },
          "fields": { "type": "string", "format": "google-fieldmask" },
          "tableId": { "type": "string" }
        }
      },
      "ClearBasicFilterRequest": {
        "type": "object",
        "properties": { "sheetId": { "type": "integer" } }
      },
      "DeleteDimensionRequest": {
        "type": "object",
        "properties": { "range": { "$ref": "#/$defs/DimensionRange" } }
      },
      "DeleteEmbeddedObjectRequest": {
        "type": "object",
        "properties": { "objectId": { "type": "integer" } }
      },
      "DeleteFilterViewRequest": {
        "type": "object",
        "properties": { "filterId": { "type": "integer" } }
      },
      "DuplicateFilterViewRequest": {
        "type": "object",
        "properties": { "filterId": { "type": "integer" } }
      },
      "DuplicateSheetRequest": {
        "type": "object",
        "properties": {
          "sourceSheetId": { "type": "integer" },
          "insertSheetIndex": { "type": "integer" },
          "newSheetId": { "type": "integer" },
          "newSheetName": { "type": "string" }
        }
      },
      "FindReplaceRequest": {
        "type": "object",
        "properties": {
          "find": { "type": "string" },
          "replacement": { "type": "string" },
          "matchCase": { "type": "boolean" },
          "matchEntireCell": { "type": "boolean" },
          "searchByRegex": { "type": "boolean" },
          "includeFormulas": { "type": "boolean" },
          "range": { "$ref": "#/$defs/GridRange" },
          "sheetId": { "type": "integer" },
          "allSheets": { "type": "boolean" }
        }
      },
      "InsertDimensionRequest": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/DimensionRange" },
          "inheritFromBefore": { "type": "boolean" }
        }
      },
      "InsertRangeRequest": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/GridRange" },
          "shiftDimension": { "$ref": "#/$defs/Dimension" }
        }
      },
      "MoveDimensionRequest": {
        "type": "object",
        "properties": {
          "source": { "$ref": "#/$defs/DimensionRange" },
          "destinationIndex": { "type": "integer" }
        }
      },
      "UpdateEmbeddedObjectPositionRequest": {
        "type": "object",
        "properties": {
          "objectId": { "type": "integer" },
          "newPosition": { "$ref": "#/$defs/EmbeddedObjectPosition" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "PasteDataRequest": {
        "type": "object",
        "properties": {
          "coordinate": { "$ref": "#/$defs/GridCoordinate" },
          "data": { "type": "string" },
          "type": { "$ref": "#/$defs/PasteType" },
          "delimiter": { "type": "string" },
          "html": { "type": "boolean" }
        }
      },
      "TextToColumnsRequest": {
        "type": "object",
        "properties": {
          "source": { "$ref": "#/$defs/GridRange" },
          "delimiter": { "type": "string" },
          "delimiterType": { "$ref": "#/$defs/DelimiterType" }
        }
      },
      "UpdateFilterViewRequest": {
        "type": "object",
        "properties": {
          "filter": { "$ref": "#/$defs/FilterView" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "DeleteRangeRequest": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/GridRange" },
          "shiftDimension": { "$ref": "#/$defs/Dimension" }
        }
      },
      "AppendDimensionRequest": {
        "type": "object",
        "properties": {
          "sheetId": { "type": "integer" },
          "dimension": { "$ref": "#/$defs/Dimension" },
          "length": { "type": "integer" }
        }
      },
      "AddConditionalFormatRuleRequest": {
        "type": "object",
        "properties": {
          "rule": { "$ref": "#/$defs/ConditionalFormatRule" },
          "index": { "type": "integer" }
        }
      },
      "UpdateConditionalFormatRuleRequest": {
        "type": "object",
        "properties": {
          "index": { "type": "integer" },
          "sheetId": { "type": "integer" },
          "rule": { "$ref": "#/$defs/ConditionalFormatRule" },
          "newIndex": { "type": "integer" }
        }
      },
      "DeleteConditionalFormatRuleRequest": {
        "type": "object",
        "properties": {
          "index": { "type": "integer" },
          "sheetId": { "type": "integer" }
        }
      },
      "SortRangeRequest": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/GridRange" },
          "sortSpecs": { "type": "array", "items": { "$ref": "#/$defs/SortSpec" } }
        }
      },
      "SetDataValidationRequest": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/GridRange" },
          "rule": { "$ref": "#/$defs/DataValidationRule" },
          "filteredRowsIncluded": { "type": "boolean" }
        }
      },
      "SetBasicFilterRequest": {
        "type": "object",
        "properties": { "filter": { "$ref": "#/$defs/BasicFilter" } }
      },
      "AddProtectedRangeRequest": {
        "type": "object",
        "properties": { "protectedRange": { "$ref": "#/$defs/ProtectedRange" } }
      },
      "UpdateProtectedRangeRequest": {
        "type": "object",
        "properties": {
          "protectedRange": { "$ref": "#/$defs/ProtectedRange" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "DeleteProtectedRangeRequest": {
        "type": "object",
        "properties": { "protectedRangeId": { "type": "integer" } }
      },
      "AutoResizeDimensionsRequest": {
        "type": "object",
        "properties": {
          "dimensions": { "$ref": "#/$defs/DimensionRange" },
          "dataSourceSheetDimensions": { "$ref": "#/$defs/DataSourceSheetDimensionRange" }
        }
      },
      "AddChartRequest": {
        "type": "object",
        "properties": { "chart": { "$ref": "#/$defs/EmbeddedChart" } }
      },
      "UpdateChartSpecRequest": {
        "type": "object",
        "properties": {
          "chartId": { "type": "integer" },
          "spec": { "$ref": "#/$defs/ChartSpec" }
        }
      },
      "UpdateBandingRequest": {
        "type": "object",
        "properties": {
          "bandedRange": { "$ref": "#/$defs/BandedRange" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "AddBandingRequest": {
        "type": "object",
        "properties": { "bandedRange": { "$ref": "#/$defs/BandedRange" } }
      },
      "DeleteBandingRequest": {
        "type": "object",
        "properties": { "bandedRangeId": { "type": "integer" } }
      },
      "CreateDeveloperMetadataRequest": {
        "type": "object",
        "properties": { "developerMetadata": { "$ref": "#/$defs/DeveloperMetadata" } }
      },
      "UpdateDeveloperMetadataRequest": {
        "type": "object",
        "properties": {
          "dataFilters": { "type": "array", "items": { "$ref": "#/$defs/DataFilter" } },
          "developerMetadata": { "$ref": "#/$defs/DeveloperMetadata" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "DeleteDeveloperMetadataRequest": {
        "type": "object",
        "properties": { "dataFilter": { "$ref": "#/$defs/DataFilter" } }
      },
      "RandomizeRangeRequest": {
        "type": "object",
        "properties": { "range": { "$ref": "#/$defs/GridRange" } }
      },
      "AddDimensionGroupRequest": {
        "type": "object",
        "properties": { "range": { "$ref": "#/$defs/DimensionRange" } }
      },
      "DeleteDimensionGroupRequest": {
        "type": "object",
        "properties": { "range": { "$ref": "#/$defs/DimensionRange" } }
      },
      "UpdateDimensionGroupRequest": {
        "type": "object",
        "properties": {
          "dimensionGroup": { "$ref": "#/$defs/DimensionGroup" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "TrimWhitespaceRequest": {
        "type": "object",
        "properties": { "range": { "$ref": "#/$defs/GridRange" } }
      },
      "DeleteDuplicatesRequest": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/GridRange" },
          "comparisonColumns": { "type": "array", "items": { "$ref": "#/$defs/DimensionRange" } }
        }
      },
      "UpdateEmbeddedObjectBorderRequest": {
        "type": "object",
        "properties": {
          "objectId": { "type": "integer" },
          "border": { "$ref": "#/$defs/EmbeddedObjectBorder" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "AddSlicerRequest": {
        "type": "object",
        "properties": { "slicer": { "$ref": "#/$defs/Slicer" } }
      },
      "UpdateSlicerSpecRequest": {
        "type": "object",
        "properties": {
          "slicerId": { "type": "integer" },
          "spec": { "$ref": "#/$defs/SlicerSpec" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "AddDataSourceRequest": {
        "type": "object",
        "properties": { "dataSource": { "$ref": "#/$defs/DataSource" } }
      },
      "UpdateDataSourceRequest": {
        "type": "object",
        "properties": {
          "dataSource": { "$ref": "#/$defs/DataSource" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "DeleteDataSourceRequest": {
        "type": "object",
        "properties": { "dataSourceId": { "type": "string" } }
      },
      "RefreshDataSourceRequest": {
        "type": "object",
        "properties": {
          "force": { "type": "boolean" },
          "references": { "$ref": "#/$defs/DataSourceObjectReferences" },
          "dataSourceId": { "type": "string" },
          "isAll": { "type": "boolean" }
        }
      },
      "CancelDataSourceRefreshRequest": {
        "type": "object",
        "properties": {
          "references": { "$ref": "#/$defs/DataSourceObjectReferences" },
          "dataSourceId": { "type": "string" },
          "isAll": { "type": "boolean" }
        }
      },
      "AddTableRequest": {
        "type": "object",
        "properties": { "table": { "$ref": "#/$defs/Table" } }
      },
      "UpdateTableRequest": {
        "type": "object",
        "properties": {
          "table": { "$ref": "#/$defs/Table" },
          "fields": { "type": "string", "format": "google-fieldmask" }
        }
      },
      "DeleteTableRequest": {
        "type": "object",
        "properties": { "tableId": { "type": "string" } }
      },
      "SpreadsheetProperties": {
        "type": "object",
        "properties": {
          "title": { "type": "string" },
          "locale": { "type": "string" },
          "autoRecalc": { "type": "string", "enum": ["RECALCULATION_INTERVAL_UNSPECIFIED", "ON_CHANGE", "MINUTE", "HOUR"] },
          "timeZone": { "type": "string" },
          "defaultFormat": { "$ref": "#/$defs/CellFormat" },
          "iterativeCalculationSettings": { "$ref": "#/$defs/IterativeCalculationSettings" },
          "spreadsheetTheme": { "$ref": "#/$defs/SpreadsheetTheme" },
          "importFunctionsExternalUrlAccessAllowed": { "type": "boolean" }
        }
      },
      "SheetProperties": {
        "type": "object",
        "properties": {
          "sheetId": { "type": "integer" },
          "title": { "type": "string" },
          "index": { "type": "integer" },
          "sheetType": { "type": "string", "enum": ["SHEET_TYPE_UNSPECIFIED", "GRID", "OBJECT", "DATA_SOURCE"] },
          "gridProperties": { "$ref": "#/$defs/GridProperties" },
          "hidden": { "type": "boolean" },
          "tabColor": { "$ref": "#/$defs/Color" },
          "tabColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "rightToLeft": { "type": "boolean" },
          "dataSourceSheetProperties": { "$ref": "#/$defs/DataSourceSheetProperties" }
        }
      },
      "DimensionProperties": {
        "type": "object",
        "properties": {
          "hiddenByFilter": { "type": "boolean" },
          "hiddenByUser": { "type": "boolean" },
          "pixelSize": { "type": "integer" },
          "developerMetadata": { "type": "array", "items": { "$ref": "#/$defs/DeveloperMetadata" } },
          "dataSourceColumnReference": { "$ref": "#/$defs/DataSourceColumnReference" }
        }
      },
      "NamedRange": {
        "type": "object",
        "properties": {
          "namedRangeId": { "type": "string" },
          "name": { "type": "string" },
          "range": { "$ref": "#/$defs/GridRange" }
        }
      },
      "GridRange": {
        "type": "object",
        "properties": {
          "sheetId": { "type": "integer" },
          "startRowIndex": { "type": "integer" },
          "endRowIndex": { "type": "integer" },
          "startColumnIndex": { "type": "integer" },
          "endColumnIndex": { "type": "integer" }
        }
      },
      "CellData": {
        "type": "object",
        "properties": {
          "userEnteredValue": { "$ref": "#/$defs/ExtendedValue" },
          "effectiveValue": { "$ref": "#/$defs/ExtendedValue" },
          "formattedValue": { "type": "string" },
          "userEnteredFormat": { "$ref": "#/$defs/CellFormat" },
          "effectiveFormat": { "$ref": "#/$defs/CellFormat" },
          "hyperlink": { "type": "string" },
          "note": { "type": "string" },
          "textFormatRuns": { "type": "array", "items": { "$ref": "#/$defs/TextFormatRun" } },
          "dataValidation": { "$ref": "#/$defs/DataValidationRule" },
          "pivotTable": { "$ref": "#/$defs/PivotTable" },
          "dataSourceTable": { "$ref": "#/$defs/DataSourceTable" },
          "dataSourceFormula": { "$ref": "#/$defs/DataSourceFormula" },
          "chipRuns": { "type": "array", "items": { "$ref": "#/$defs/ChipRun" } }
        }
      },
      "RowData": {
        "type": "object",
        "properties": {
          "values": { "type": "array", "items": { "$ref": "#/$defs/CellData" } }
        }
      },
      "DimensionRange": {
        "type": "object",
        "properties": {
          "sheetId": { "type": "integer" },
          "dimension": { "$ref": "#/$defs/Dimension" },
          "startIndex": { "type": "integer" },
          "endIndex": { "type": "integer" }
        }
      },
      "DataSourceSheetDimensionRange": {
        "type": "object",
        "properties": {
          "sheetId": { "type": "integer" },
          "columnReferences": { "type": "array", "items": { "$ref": "#/$defs/DataSourceColumnReference" } }
        }
      },
      "SourceAndDestination": {
        "type": "object",
        "properties": {
          "source": { "$ref": "#/$defs/GridRange" },
          "dimension": { "$ref": "#/$defs/Dimension" },
          "fillLength": { "type": "integer" }
        }
      },
      "GridCoordinate": {
        "type": "object",
        "properties": {
          "sheetId": { "type": "integer" },
          "rowIndex": { "type": "integer" },
          "columnIndex": { "type": "integer" }
        }
      },
      "PasteType": {
        "type": "string",
        "enum": ["PASTE_NORMAL", "PASTE_VALUES", "PASTE_FORMAT", "PASTE_NO_BORDERS", "PASTE_FORMULA", "PASTE_DATA_VALIDATION", "PASTE_CONDITIONAL_FORMATTING"]
      },
      "PasteOrientation": {
        "type": "string",
        "enum": ["NORMAL", "TRANSPOSE"]
      },
      "MergeType": {
        "type": "string",
        "enum": ["MERGE_ALL", "MERGE_COLUMNS", "MERGE_ROWS"]
      },
      "Border": {
        "type": "object",
        "properties": {
          "style": { "type": "string", "enum": ["STYLE_UNSPECIFIED", "DOTTED", "DASHED", "SOLID", "SOLID_MEDIUM", "SOLID_THICK", "NONE", "DOUBLE"] },
          "width": { "type": "integer" },
          "color": { "$ref": "#/$defs/Color" },
          "colorStyle": { "$ref": "#/$defs/ColorStyle" }
        }
      },
      "FilterView": {
        "type": "object",
        "properties": {
          "filterViewId": { "type": "integer" },
          "title": { "type": "string" },
          "range": { "$ref": "#/$defs/GridRange" },
          "namedRangeId": { "type": "string" },
          "tableId": { "type": "string" },
          "sortSpecs": { "type": "array", "items": { "$ref": "#/$defs/SortSpec" } },
          "criteria": { "type": "object", "additionalProperties": { "$ref": "#/$defs/FilterCriteria" } },
          "filterSpecs": { "type": "array", "items": { "$ref": "#/$defs/FilterSpec" } }
        }
      },
      "Dimension": {
        "type": "string",
        "enum": ["DIMENSION_UNSPECIFIED", "ROWS", "COLUMNS"]
      },
      "EmbeddedObjectPosition": {
        "type": "object",
        "properties": {
          "sheetId": { "type": "integer" },
          "overlayPosition": { "$ref": "#/$defs/OverlayPosition" },
          "newSheet": { "type": "boolean" }
        }
      },
      "DelimiterType": {
        "type": "string",
        "enum": ["DELIMITER_TYPE_UNSPECIFIED", "COMMA", "SEMICOLON", "PERIOD", "SPACE", "CUSTOM", "AUTODETECT"]
      },
      "ConditionalFormatRule": {
        "type": "object",
        "properties": {
          "ranges": { "type": "array", "items": { "$ref": "#/$defs/GridRange" } },
          "booleanRule": { "$ref": "#/$defs/BooleanRule" },
          "gradientRule": { "$ref": "#/$defs/GradientRule" }
        }
      },
      "SortSpec": {
        "type": "object",
        "properties": {
          "sortOrder": { "type": "string", "enum": ["SORT_ORDER_UNSPECIFIED", "ASCENDING", "DESCENDING"] },
          "foregroundColor": { "$ref": "#/$defs/Color" },
          "foregroundColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "backgroundColor": { "$ref": "#/$defs/Color" },
          "backgroundColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "dimensionIndex": { "type": "integer" },
          "dataSourceColumnReference": { "$ref": "#/$defs/DataSourceColumnReference" }
        }
      },
      "DataValidationRule": {
        "type": "object",
        "properties": {
          "condition": { "$ref": "#/$defs/BooleanCondition" },
          "inputMessage": { "type": "string" },
          "strict": { "type": "boolean" },
          "showCustomUi": { "type": "boolean" }
        }
      },
      "BasicFilter": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/GridRange" },
          "tableId": { "type": "string" },
          "sortSpecs": { "type": "array", "items": { "$ref": "#/$defs/SortSpec" } },
          "criteria": { "type": "object", "additionalProperties": { "$ref": "#/$defs/FilterCriteria" } },
          "filterSpecs": { "type": "array", "items": { "$ref": "#/$defs/FilterSpec" } }
        }
      },
      "ProtectedRange": {
        "type": "object",
        "properties": {
          "protectedRangeId": { "type": "integer" },
          "range": { "$ref": "#/$defs/GridRange" },
          "namedRangeId": { "type": "string" },
          "tableId": { "type": "string" },
          "description": { "type": "string" },
          "warningOnly": { "type": "boolean" },
          "requestingUserCanEdit": { "type": "boolean" },
          "unprotectedRanges": { "type": "array", "items": { "$ref": "#/$defs/GridRange" } },
          "editors": { "$ref": "#/$defs/Editors" }
        }
      },
      "EmbeddedChart": {
        "type": "object",
        "properties": {
          "chartId": { "type": "integer" },
          "spec": { "$ref": "#/$defs/ChartSpec" },
          "position": { "$ref": "#/$defs/EmbeddedObjectPosition" },
          "border": { "$ref": "#/$defs/EmbeddedObjectBorder" }
        }
      },
      "ChartSpec": {
        "type": "object",
        "properties": {
          "title": { "type": "string" },
          "altText": { "type": "string" },
          "titleTextFormat": { "$ref": "#/$defs/TextFormat" },
          "titleTextPosition": { "$ref": "#/$defs/TextPosition" },
          "subtitle": { "type": "string" },
          "subtitleTextFormat": { "$ref": "#/$defs/TextFormat" },
          "subtitleTextPosition": { "$ref": "#/$defs/TextPosition" },
          "fontName": { "type": "string" },
          "maximized": { "type": "boolean" },
          "backgroundColor": { "$ref": "#/$defs/Color" },
          "backgroundColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "dataSourceChartProperties": { "$ref": "#/$defs/DataSourceChartProperties" },
          "filterSpecs": { "type": "array", "items": { "$ref": "#/$defs/FilterSpec" } },
          "sortSpecs": { "type": "array", "items": { "$ref": "#/$defs/SortSpec" } },
          "hiddenDimensionStrategy": { "type": "string", "enum": ["CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED", "SKIP_HIDDEN_ROWS_AND_COLUMNS", "SKIP_HIDDEN_ROWS", "SKIP_HIDDEN_COLUMNS", "SHOW_ALL"] },
          "basicChart": { "$ref": "#/$defs/BasicChartSpec" },
          "pieChart": { "$ref": "#/$defs/PieChartSpec" },
          "bubbleChart": { "$ref": "#/$defs/BubbleChartSpec" },
          "candlestickChart": { "$ref": "#/$defs/CandlestickChartSpec" },
          "orgChart": { "$ref": "#/$defs/OrgChartSpec" },
          "histogramChart": { "$ref": "#/$defs/HistogramChartSpec" },
          "waterfallChart": { "$ref": "#/$defs/WaterfallChartSpec" },
          "treemapChart": { "$ref": "#/$defs/TreemapChartSpec" },
          "scorecardChart": { "$ref": "#/$defs/ScorecardChartSpec" }
        }
      },
      "BandedRange": {
        "type": "object",
        "properties": {
          "bandedRangeId": { "type": "integer" },
          "bandedRangeReference": { "type": "string" },
          "range": { "$ref": "#/$defs/GridRange" },
          "rowProperties": { "$ref": "#/$defs/BandingProperties" },
          "columnProperties": { "$ref": "#/$defs/BandingProperties" }
        }
      },
      "DeveloperMetadata": {
        "type": "object",
        "properties": {
          "metadataId": { "type": "integer" },
          "metadataKey": { "type": "string" },
          "metadataValue": { "type": "string" },
          "location": { "$ref": "#/$defs/DeveloperMetadataLocation" },
          "visibility": { "$ref": "#/$defs/DeveloperMetadataVisibility" }
        }
      },
      "DataFilter": {
        "type": "object",
        "properties": {
          "developerMetadataLookup": { "$ref": "#/$defs/DeveloperMetadataLookup" },
          "a1Range": { "type": "string" },
          "gridRange": { "$ref": "#/$defs/GridRange" }
        }
      },
      "DimensionGroup": {
        "type": "object",
        "properties": {
          "range": { "$ref": "#/$defs/DimensionRange" },
          "depth": { "type": "integer" },
          "collapsed": { "type": "boolean" }
        }
      },
      "EmbeddedObjectBorder": {
        "type": "object",
        "properties": {
          "color": { "$ref": "#/$defs/Color" },
          "colorStyle": { "$ref": "#/$defs/ColorStyle" }
        }
      },
      "Slicer": {
        "type": "object",
        "properties": {
          "slicerId": { "type": "integer" },
          "spec": { "$ref": "#/$defs/SlicerSpec" },
          "position": { "$ref": "#/$defs/EmbeddedObjectPosition" }
        }
      },
      "DataSource": {
        "type": "object",
        "properties": {
          "dataSourceId": { "type": "string" },
          "spec": { "$ref": "#/$defs/DataSourceSpec" },
          "calculatedColumns": { "type": "array", "items": { "$ref": "#/$defs/DataSourceColumn" } },
          "sheetId": { "type": "integer" }
        }
      },
      "DataSourceObjectReferences": {
        "type": "object",
        "properties": {
          "references": { "type": "array", "items": { "$ref": "#/$defs/DataSourceObjectReference" } }
        }
      },
      "Table": {
        "type": "object",
        "properties": {
          "tableId": { "type": "string" },
          "name": { "type": "string" },
          "range": { "$ref": "#/$defs/GridRange" },
          "rowsProperties": { "$ref": "#/$defs/TableRowsProperties" },
          "columnProperties": { "type": "array", "items": { "$ref": "#/$defs/TableColumnProperties" } }
        }
      },
      "CellFormat": {
        "type": "object",
        "properties": {
          "numberFormat": { "$ref": "#/$defs/NumberFormat" },
          "backgroundColor": { "$ref": "#/$defs/Color" },
          "backgroundColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "borders": { "$ref": "#/$defs/Borders" },
          "padding": { "$ref": "#/$defs/Padding" },
          "horizontalAlignment": { "$ref": "#/$defs/HorizontalAlign" },
          "verticalAlignment": { "$ref": "#/$defs/VerticalAlign" },
          "wrapStrategy": { "$ref": "#/$defs/WrapStrategy" },
          "textDirection": { "$ref": "#/$defs/TextDirection" },
          "textFormat": { "$ref": "#/$defs/TextFormat" },
          "hyperlinkDisplayType": { "$ref": "#/$defs/HyperlinkDisplayType" },
          "textRotation": { "$ref": "#/$defs/TextRotation" }
        }
      },
      "IterativeCalculationSettings": {
        "type": "object",
        "properties": {
          "maxIterations": { "type": "integer" },
          "convergenceThreshold": { "type": "number" }
        }
      },
      "SpreadsheetTheme": {
        "type": "object",
        "properties": {
          "primaryFontFamily": { "type": "string" },
          "themeColors": { "type": "array", "items": { "$ref": "#/$defs/ThemeColorPair" } }
        }
      },
      "GridProperties": {
        "type": "object",
        "properties": {
          "rowCount": { "type": "integer" },
          "columnCount": { "type": "integer" },
          "frozenRowCount": { "type": "integer" },
          "frozenColumnCount": { "type": "integer" },
          "hideGridlines": { "type": "boolean" },
          "rowGroupControlAfter": { "type": "boolean" },
          "columnGroupControlAfter": { "type": "boolean" }
        }
      },
      "DataSourceSheetProperties": {
        "type": "object",
        "properties": {
          "dataSourceId": { "type": "string" },
          "columns": { "type": "array", "items": { "$ref": "#/$defs/DataSourceColumn" } },
          "dataExecutionStatus": { "$ref": "#/$defs/DataExecutionStatus" }
        }
      },
      "ExtendedValue": {
        "type": "object",
        "properties": {
          "numberValue": { "type": "number" },
          "stringValue": { "type": "string" },
          "boolValue": { "type": "boolean" },
          "formulaValue": { "type": "string" },
          "errorValue": { "$ref": "#/$defs/ErrorValue" }
        }
      },
      "TextFormatRun": {
        "type": "object",
        "properties": {
          "startIndex": { "type": "integer" },
          "format": { "$ref": "#/$defs/TextFormat" }
        }
      },
      "PivotTable": {
        "type": "object",
        "properties": {
          "rows": { "type": "array", "items": { "$ref": "#/$defs/PivotGroup" } },
          "columns": { "type": "array", "items": { "$ref": "#/$defs/PivotGroup" } },
          "criteria": { "type": "object", "additionalProperties": { "$ref": "#/$defs/PivotFilterCriteria" } },
          "filterSpecs": { "type": "array", "items": { "$ref": "#/$defs/PivotFilterSpec" } },
          "values": { "type": "array", "items": { "$ref": "#/$defs/PivotValue" } },
          "valueLayout": { "type": "string", "enum": ["HORIZONTAL", "VERTICAL"] },
          "dataExecutionStatus": { "$ref": "#/$defs/DataExecutionStatus" },
          "source": { "$ref": "#/$defs/GridRange" },
          "dataSourceId": { "type": "string" }
        }
      },
      "DataSourceTable": {
        "type": "object",
        "properties": {
          "dataSourceId": { "type": "string" },
          "columnSelectionType": { "type": "string", "enum": ["DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED", "SELECTED", "SYNC_ALL"] },
          "columns": { "type": "array", "items": { "$ref": "#/$defs/DataSourceColumnReference" } },
          "filterSpecs": { "type": "array", "items": { "$ref": "#/$defs/FilterSpec" } },
          "sortSpecs": { "type": "array", "items": { "$ref": "#/$defs/SortSpec" } },
          "rowLimit": { "type": "integer" },
          "dataExecutionStatus": { "$ref": "#/$defs/DataExecutionStatus" }
        }
      },
      "DataSourceFormula": {
        "type": "object",
        "properties": {
          "dataSourceId": { "type": "string" },
          "dataExecutionStatus": { "$ref": "#/$defs/DataExecutionStatus" }
        }
      },
      "ChipRun": {
        "type": "object",
        "properties": {
          "startIndex": { "type": "integer" },
          "chip": { "$ref": "#/$defs/Chip" }
        }
      },
      "DataSourceColumnReference": {
        "type": "object",
        "properties": {
          "name": { "type": "string" }
        }
      },
      "BooleanCondition": {
        "type": "object",
        "properties": {
          "type": { "$ref": "#/$defs/ConditionType" },
          "values": { "type": "array", "items": { "$ref": "#/$defs/ConditionValue" } }
        }
      },
      "FilterCriteria": {
        "type": "object",
        "properties": {
          "hiddenValues": { "type": "array", "items": { "type": "string" } },
          "condition": { "$ref": "#/$defs/BooleanCondition" },
          "visibleBackgroundColor": { "$ref": "#/$defs/Color" },
          "visibleBackgroundColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "visibleForegroundColor": { "$ref": "#/$defs/Color" },
          "visibleForegroundColorStyle": { "$ref": "#/$defs/ColorStyle" }
        }
      },
      "Editors": {
        "type": "object",
        "properties": {
          "users": { "type": "array", "items": { "type": "string" } },
          "groups": { "type": "array", "items": { "type": "string" } },
          "domainUsersCanEdit": { "type": "boolean" }
        }
      },
      "OverlayPosition": {
        "type": "object",
        "properties": {
          "anchorCell": { "$ref": "#/$defs/GridCoordinate" },
          "offsetXPixels": { "type": "integer" },
          "offsetYPixels": { "type": "integer" },
          "widthPixels": { "type": "integer" },
          "heightPixels": { "type": "integer" }
        }
      },
      "TextFormat": {
        "type": "object",
        "properties": {
          "foregroundColor": { "$ref": "#/$defs/Color" },
          "foregroundColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "fontFamily": { "type": "string" },
          "fontSize": { "type": "integer" },
          "bold": { "type": "boolean" },
          "italic": { "type": "boolean" },
          "strikethrough": { "type": "boolean" },
          "underline": { "type": "boolean" },
          "link": { "$ref": "#/$defs/Link" }
        }
      },
      "TextPosition": {
        "type": "object",
        "properties": {
          "horizontalAlignment": { "$ref": "#/$defs/HorizontalAlign" }
        }
      },
      "DataSourceChartProperties": {
        "type": "object",
        "properties": {
          "dataSourceId": { "type": "string" },
          "dataExecutionStatus": { "$ref": "#/$defs/DataExecutionStatus" }
        }
      },
      "BasicChartSpec": {
        "type": "object",
        "properties": {
          "chartType": { "type": "string", "enum": ["BASIC_CHART_TYPE_UNSPECIFIED", "BAR", "LINE", "AREA", "COLUMN", "SCATTER", "COMBO", "STEPPED_AREA"] },
          "legendPosition": { "type": "string", "enum": ["BASIC_CHART_LEGEND_POSITION_UNSPECIFIED", "BOTTOM_LEGEND", "LEFT_LEGEND", "RIGHT_LEGEND", "TOP_LEGEND", "NO_LEGEND"] },
          "axis": { "type": "array", "items": { "$ref": "#/$defs/BasicChartAxis" } },
          "domains": { "type": "array", "items": { "$ref": "#/$defs/BasicChartDomain" } },
          "series": { "type": "array", "items": { "$ref": "#/$defs/BasicChartSeries" } },
          "headerCount": { "type": "integer" },
          "threeDimensional": { "type": "boolean" },
          "interpolateNulls": { "type": "boolean" },
          "stackedType": { "type": "string", "enum": ["BASIC_CHART_STACKED_TYPE_UNSPECIFIED", "NOT_STACKED", "STACKED", "PERCENT_STACKED"] },
          "lineSmoothing": { "type": "boolean" },
          "compareMode": { "type": "string", "enum": ["BASIC_CHART_COMPARE_MODE_UNSPECIFIED", "DATUM", "CATEGORY"] },
          "totalDataLabel": { "$ref": "#/$defs/DataLabel" }
        }
      },
      "PieChartSpec": {
        "type": "object",
        "properties": {
          "legendPosition": { "type": "string", "enum": ["PIE_CHART_LEGEND_POSITION_UNSPECIFIED", "BOTTOM_LEGEND", "LEFT_LEGEND", "RIGHT_LEGEND", "TOP_LEGEND", "NO_LEGEND", "LABELED_LEGEND"] },
          "domain": { "$ref": "#/$defs/ChartData" },
          "series": { "$ref": "#/$defs/ChartData" },
          "threeDimensional": { "type": "boolean" },
          "pieHole": { "type": "number" }
        }
      },
      "BubbleChartSpec": {
        "type": "object",
        "properties": {
          "legendPosition": { "type": "string", "enum": ["BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED", "BOTTOM_LEGEND", "LEFT_LEGEND", "RIGHT_LEGEND", "TOP_LEGEND", "NO_LEGEND", "INSIDE_LEGEND"] },
          "bubbleLabels": { "$ref": "#/$defs/ChartData" },
          "domain": { "$ref": "#/$defs/ChartData" },
          "series": { "$ref": "#/$defs/ChartData" },
          "groupIds": { "$ref": "#/$defs/ChartData" },
          "bubbleSizes": { "$ref": "#/$defs/ChartData" },
          "bubbleOpacity": { "type": "number" },
          "bubbleBorderColor": { "$ref": "#/$defs/Color" },
          "bubbleBorderColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "bubbleMaxRadiusSize": { "type": "integer" },
          "bubbleMinRadiusSize": { "type": "integer" },
          "bubbleTextStyle": { "$ref": "#/$defs/TextFormat" }
        }
      },
      "CandlestickChartSpec": {
        "type": "object",
        "properties": {
          "domain": { "$ref": "#/$defs/CandlestickDomain" },
          "data": { "type": "array", "items": { "$ref": "#/$defs/CandlestickData" } }
        }
      },
      "OrgChartSpec": {
        "type": "object",
        "properties": {
          "nodeSize": { "type": "string", "enum": ["ORG_CHART_LABEL_SIZE_UNSPECIFIED", "SMALL", "MEDIUM", "LARGE"] },
          "nodeColor": { "$ref": "#/$defs/Color" },
          "nodeColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "selectedNodeColor": { "$ref": "#/$defs/Color" },
          "selectedNodeColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "labels": { "$ref": "#/$defs/ChartData" },
          "parentLabels": { "$ref": "#/$defs/ChartData" },
          "tooltips": { "$ref": "#/$defs/ChartData" }
        }
      },
      "HistogramChartSpec": {
        "type": "object",
        "properties": {
          "series": { "type": "array", "items": { "$ref": "#/$defs/HistogramSeries" } },
          "legendPosition": { "type": "string", "enum": ["HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED", "BOTTOM_LEGEND", "LEFT_LEGEND", "RIGHT_LEGEND", "TOP_LEGEND", "NO_LEGEND", "INSIDE_LEGEND"] },
          "showItemDividers": { "type": "boolean" },
          "bucketSize": { "type": "number" },
          "outlierPercentile": { "type": "number" }
        }
      },
      "WaterfallChartSpec": {
        "type": "object",
        "properties": {
          "domain": { "$ref": "#/$defs/WaterfallChartDomain" },
          "series": { "type": "array", "items": { "$ref": "#/$defs/WaterfallChartSeries" } },
          "stackedType": { "type": "string", "enum": ["WATERFALL_STACKED_TYPE_UNSPECIFIED", "STACKED", "SEQUENTIAL"] },
          "firstValueIsTotal": { "type": "boolean" },
          "hideConnectorLines": { "type": "boolean" },
          "connectorLineStyle": { "$ref": "#/$defs/LineStyle" },
          "totalDataLabel": { "$ref": "#/$defs/DataLabel" }
        }
      },
      "TreemapChartSpec": {
        "type": "object",
        "properties": {
          "labels": { "$ref": "#/$defs/ChartData" },
          "parentLabels": { "$ref": "#/$defs/ChartData" },
          "sizeData": { "$ref": "#/$defs/ChartData" },
          "colorData": { "$ref": "#/$defs/ChartData" },
          "textFormat": { "$ref": "#/$defs/TextFormat" },
          "levels": { "type": "integer" },
          "hintedLevels": { "type": "integer" },
          "minValue": { "type": "number" },
          "maxValue": { "type": "number" },
          "headerColor": { "$ref": "#/$defs/Color" },
          "headerColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "colorScale": { "$ref": "#/$defs/TreemapChartColorScale" },
          "hideTooltips": { "type": "boolean" }
        }
      },
      "ScorecardChartSpec": {
        "type": "object",
        "properties": {
          "keyValueData": { "$ref": "#/$defs/ChartData" },
          "baselineValueData": { "$ref": "#/$defs/ChartData" },
          "aggregateType": { "type": "string", "enum": ["CHART_AGGREGATE_TYPE_UNSPECIFIED", "AVERAGE", "COUNT", "MAX", "MEDIAN", "MIN", "SUM"] },
          "keyValueFormat": { "$ref": "#/$defs/KeyValueFormat" },
          "baselineValueFormat": { "$ref": "#/$defs/BaselineValueFormat" },
          "scaleFactor": { "type": "number" },
          "numberFormatSource": { "type": "string", "enum": ["CHART_NUMBER_FORMAT_SOURCE_UNDEFINED", "FROM_DATA", "CUSTOM"] },
          "customFormatOptions": { "$ref": "#/$defs/ChartCustomNumberFormatOptions" }
        }
      },
      "BandingProperties": {
        "type": "object",
        "properties": {
          "headerColor": { "$ref": "#/$defs/Color" },
          "headerColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "firstBandColor": { "$ref": "#/$defs/Color" },
          "firstBandColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "secondBandColor": { "$ref": "#/$defs/Color" },
          "secondBandColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "footerColor": { "$ref": "#/$defs/Color" },
          "footerColorStyle": { "$ref": "#/$defs/ColorStyle" }
        }
      },
      "SlicerSpec": {
        "type": "object",
        "properties": {
          "dataRange": { "$ref": "#/$defs/GridRange" },
          "filterCriteria": { "$ref": "#/$defs/FilterCriteria" },
          "columnIndex": { "type": "integer" },
          "applyToPivotTables": { "type": "boolean" },
          "title": { "type": "string" },
          "textFormat": { "$ref": "#/$defs/TextFormat" },
          "backgroundColor": { "$ref": "#/$defs/Color" },
          "backgroundColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "horizontalAlignment": { "$ref": "#/$defs/HorizontalAlign" }
        }
      },
      "DataSourceSpec": {
        "type": "object",
        "properties": {
          "parameters": { "type": "array", "items": { "$ref": "#/$defs/DataSourceParameter" } },
          "bigQuery": { "$ref": "#/$defs/BigQueryDataSourceSpec" },
          "looker": { "$ref": "#/$defs/LookerDataSourceSpec" }
        }
      },
      "DataSourceObjectReference": {
        "type": "object",
        "properties": {
          "sheetId": { "type": "string" },
          "chartId": { "type": "integer" },
          "dataSourceTableAnchorCell": { "$ref": "#/$defs/GridCoordinate" },
          "dataSourcePivotTableAnchorCell": { "$ref": "#/$defs/GridCoordinate" },
          "dataSourceFormulaCell": { "$ref": "#/$defs/GridCoordinate" }
        }
      },
      "TableRowsProperties": {
        "type": "object",
        "properties": {
          "headerColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "firstBandColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "secondBandColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "footerColorStyle": { "$ref": "#/$defs/ColorStyle" }
        }
      },
      "TableColumnProperties": {
        "type": "object",
        "properties": {
          "columnIndex": { "type": "integer" },
          "columnName": { "type": "string" },
          "columnType": { "type": "string", "enum": ["COLUMN_TYPE_UNSPECIFIED", "DOUBLE", "CURRENCY", "PERCENT", "DATE", "TIME", "DATE_TIME", "TEXT", "BOOLEAN", "DROPDOWN", "FILES_CHIP", "PEOPLE_CHIP", "FINANCE_CHIP", "PLACE_CHIP", "RATINGS_CHIP"] },
          "dataValidationRule": { "$ref": "#/$defs/TableColumnDataValidationRule" }
        }
      },
      "NumberFormat": {
        "type": "object",
        "properties": {
          "type": { "type": "string", "enum": ["NUMBER_FORMAT_TYPE_UNSPECIFIED", "TEXT", "NUMBER", "PERCENT", "CURRENCY", "DATE", "TIME", "DATE_TIME", "SCIENTIFIC"] },
          "pattern": { "type": "string" }
        }
      },
      "Color": {
        "type": "object",
        "properties": {
          "red": { "type": "number" },
          "green": { "type": "number" },
          "blue": { "type": "number" },
          "alpha": { "type": "number" }
        }
      },
      "ColorStyle": {
        "type": "object",
        "properties": {
          "rgbColor": { "$ref": "#/$defs/Color" },
          "themeColor": { "type": "string", "enum": ["THEME_COLOR_TYPE_UNSPECIFIED", "TEXT", "BACKGROUND", "ACCENT1", "ACCENT2", "ACCENT3", "ACCENT4", "ACCENT5", "ACCENT6", "LINK"] }
        }
      },
      "Borders": {
        "type": "object",
        "properties": {
          "top": { "$ref": "#/$defs/Border" },
          "bottom": { "$ref": "#/$defs/Border" },
          "left": { "$ref": "#/$defs/Border" },
          "right": { "$ref": "#/$defs/Border" }
        }
      },
      "Padding": {
        "type": "object",
        "properties": {
          "top": { "type": "integer" },
          "right": { "type": "integer" },
          "bottom": { "type": "integer" },
          "left": { "type": "integer" }
        }
      },
      "HorizontalAlign": {
        "type": "string",
        "enum": ["HORIZONTAL_ALIGN_UNSPECIFIED", "LEFT", "CENTER", "RIGHT"]
      },
      "VerticalAlign": {
        "type": "string",
        "enum": ["VERTICAL_ALIGN_UNSPECIFIED", "TOP", "MIDDLE", "BOTTOM"]
      },
      "WrapStrategy": {
        "type": "string",
        "enum": ["WRAP_STRATEGY_UNSPECIFIED", "OVERFLOW_CELL", "LEGACY_WRAP", "CLIP", "WRAP"]
      },
      "TextDirection": {
        "type": "string",
        "enum": ["TEXT_DIRECTION_UNSPECIFIED", "LEFT_TO_RIGHT", "RIGHT_TO_LEFT"]
      },
      "HyperlinkDisplayType": {
        "type": "string",
        "enum": ["HYPERLINK_DISPLAY_TYPE_UNSPECIFIED", "LINKED", "PLAIN_TEXT"]
      },
      "TextRotation": {
        "type": "object",
        "properties": {
          "angle": { "type": "integer" },
          "vertical": { "type": "boolean" }
        }
      },
      "ThemeColorPair": {
        "type": "object",
        "properties": {
          "colorType": { "type": "string", "enum": ["THEME_COLOR_TYPE_UNSPECIFIED", "TEXT", "BACKGROUND", "ACCENT1", "ACCENT2", "ACCENT3", "ACCENT4", "ACCENT5", "ACCENT6", "LINK"] },
          "color": { "$ref": "#/$defs/ColorStyle" }
        }
      },
      "DataSourceColumn": {
        "type": "object",
        "properties": {
          "reference": { "$ref": "#/$defs/DataSourceColumnReference" },
          "formula": { "type": "string" }
        }
      },
      "DataExecutionStatus": {
        "type": "object",
        "properties": {
          "state": { "type": "string", "enum": ["DATA_EXECUTION_STATE_UNSPECIFIED", "NOT_STARTED", "RUNNING", "CANCELLING", "SUCCEEDED", "FAILED"] },
          "errorCode": { "type": "string", "enum": ["DATA_EXECUTION_ERROR_CODE_UNSPECIFIED", "TIMED_OUT", "TOO_MANY_ROWS", "TOO_MANY_COLUMNS", "TOO_MANY_CELLS", "ENGINE", "PARAMETER_INVALID", "UNSUPPORTED_DATA_TYPE", "DUPLICATE_COLUMN_NAMES", "INTERRUPTED", "CONCURRENT_QUERY", "OTHER", "TOO_MANY_CHARS_PER_CELL", "DATA_NOT_FOUND", "PERMISSION_DENIED", "MISSING_COLUMN_ALIAS", "OBJECT_NOT_FOUND", "OBJECT_IN_ERROR_STATE", "OBJECT_SPEC_INVALID", "DATA_EXECUTION_CANCELLED"] },
          "errorMessage": { "type": "string" },
          "lastRefreshTime": { "type": "string", "format": "google-datetime" }
        }
      },
      "ErrorValue": {
        "type": "object",
        "properties": {
          "type": { "type": "string", "enum": ["ERROR_TYPE_UNSPECIFIED", "ERROR", "NULL_VALUE", "DIVIDE_BY_ZERO", "VALUE", "REF", "NAME", "NUM", "N_A", "LOADING"] },
          "message": { "type": "string" }
        }
      },
      "PivotGroup": {
        "type": "object",
        "properties": {
          "showTotals": { "type": "boolean" },
          "valueMetadata": { "type": "array", "items": { "$ref": "#/$defs/PivotGroupValueMetadata" } },
          "sortOrder": { "type": "string", "enum": ["SORT_ORDER_UNSPECIFIED", "ASCENDING", "DESCENDING"] },
          "valueBucket": { "$ref": "#/$defs/PivotGroupSortValueBucket" },
          "repeatHeadings": { "type": "boolean" },
          "label": { "type": "string" },
          "groupRule": { "$ref": "#/$defs/PivotGroupRule" },
          "groupLimit": { "$ref": "#/$defs/PivotGroupLimit" },
          "sourceColumnOffset": { "type": "integer" },
          "dataSourceColumnReference": { "$ref": "#/$defs/DataSourceColumnReference" }
        }
      },
      "PivotFilterCriteria": {
        "type": "object",
        "properties": {
          "visibleValues": { "type": "array", "items": { "type": "string" } },
          "condition": { "$ref": "#/$defs/BooleanCondition" },
          "visibleByDefault": { "type": "boolean" }
        }
      },
      "PivotFilterSpec": {
        "type": "object",
        "properties": {
          "filterCriteria": { "$ref": "#/$defs/PivotFilterCriteria" },
          "columnOffsetIndex": { "type": "integer" },
          "dataSourceColumnReference": { "$ref": "#/$defs/DataSourceColumnReference" }
        }
      },
      "PivotValue": {
        "type": "object",
        "properties": {
          "summarizeFunction": { "type": "string", "enum": ["PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED", "SUM", "COUNTA", "COUNT", "COUNTUNIQUE", "AVERAGE", "MAX", "MIN", "MEDIAN", "PRODUCT", "STDEV", "STDEVP", "VAR", "VARP", "CUSTOM", "NONE"] },
          "name": { "type": "string" },
          "calculatedDisplayType": { "type": "string", "enum": ["PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED", "PERCENT_OF_ROW_TOTAL", "PERCENT_OF_COLUMN_TOTAL", "PERCENT_OF_GRAND_TOTAL"] },
          "sourceColumnOffset": { "type": "integer" },
          "formula": { "type": "string" },
          "dataSourceColumnReference": { "$ref": "#/$defs/DataSourceColumnReference" }
        }
      },
      "Chip": {
        "type": "object",
        "properties": {
          "personProperties": { "$ref": "#/$defs/PersonProperties" },
          "richLinkProperties": { "$ref": "#/$defs/RichLinkProperties" }
        }
      },
      "ConditionType": {
        "type": "string",
        "enum": ["CONDITION_TYPE_UNSPECIFIED", "NUMBER_GREATER", "NUMBER_GREATER_THAN_EQ", "NUMBER_LESS", "NUMBER_LESS_THAN_EQ", "NUMBER_EQ", "NUMBER_NOT_EQ", "NUMBER_BETWEEN", "NUMBER_NOT_BETWEEN", "TEXT_CONTAINS", "TEXT_NOT_CONTAINS", "TEXT_STARTS_WITH", "TEXT_ENDS_WITH", "TEXT_EQ", "TEXT_IS_EMAIL", "TEXT_IS_URL", "DATE_EQ", "DATE_BEFORE", "DATE_AFTER", "DATE_ON_OR_BEFORE", "DATE_ON_OR_AFTER", "DATE_BETWEEN", "DATE_NOT_BETWEEN", "DATE_IS_VALID", "ONE_OF_RANGE", "ONE_OF_LIST", "BLANK", "NOT_BLANK", "CUSTOM_FORMULA", "BOOLEAN", "TEXT_NOT_EQ", "DATE_NOT_EQ", "FILTER_EXPRESSION"]
      },
      "ConditionValue": {
        "type": "object",
        "properties": {
          "relativeDate": { "type": "string", "enum": ["RELATIVE_DATE_UNSPECIFIED", "PAST_YEAR", "PAST_MONTH", "PAST_WEEK", "YESTERDAY", "TODAY", "TOMORROW"] },
          "userEnteredValue": { "type": "string" }
        }
      },
      "BooleanRule": {
        "type": "object",
        "properties": {
          "condition": { "$ref": "#/$defs/BooleanCondition" },
          "format": { "$ref": "#/$defs/CellFormat" }
        }
      },
      "GradientRule": {
        "type": "object",
        "properties": {
          "minpoint": { "$ref": "#/$defs/InterpolationPoint" },
          "midpoint": { "$ref": "#/$defs/InterpolationPoint" },
          "maxpoint": { "$ref": "#/$defs/InterpolationPoint" }
        }
      },
      "Link": {
        "type": "object",
        "properties": {
          "uri": { "type": "string" }
        }
      },
      "BasicChartAxis": {
        "type": "object",
        "properties": {
          "position": { "type": "string", "enum": ["BASIC_CHART_AXIS_POSITION_UNSPECIFIED", "BOTTOM_AXIS", "LEFT_AXIS", "RIGHT_AXIS"] },
          "title": { "type": "string" },
          "format": { "$ref": "#/$defs/TextFormat" },
          "titleTextPosition": { "$ref": "#/$defs/TextPosition" },
          "viewWindowOptions": { "$ref": "#/$defs/ChartAxisViewWindowOptions" }
        }
      },
      "BasicChartDomain": {
        "type": "object",
        "properties": {
          "domain": { "$ref": "#/$defs/ChartData" },
          "reversed": { "type": "boolean" }
        }
      },
      "BasicChartSeries": {
        "type": "object",
        "properties": {
          "series": { "$ref": "#/$defs/ChartData" },
          "targetAxis": { "type": "string", "enum": ["BASIC_CHART_AXIS_POSITION_UNSPECIFIED", "BOTTOM_AXIS", "LEFT_AXIS", "RIGHT_AXIS"] },
          "type": { "type": "string", "enum": ["BASIC_CHART_TYPE_UNSPECIFIED", "BAR", "LINE", "AREA", "COLUMN", "SCATTER", "COMBO", "STEPPED_AREA"] },
          "lineStyle": { "$ref": "#/$defs/LineStyle" },
          "dataLabel": { "$ref": "#/$defs/DataLabel" },
          "color": { "$ref": "#/$defs/Color" },
          "colorStyle": { "$ref": "#/$defs/ColorStyle" },
          "pointStyle": { "$ref": "#/$defs/PointStyle" },
          "styleOverrides": { "type": "array", "items": { "$ref": "#/$defs/BasicSeriesDataPointStyleOverride" } }
        }
      },
      "DataLabel": {
        "type": "object",
        "properties": {
          "type": { "type": "string", "enum": ["DATA_LABEL_TYPE_UNSPECIFIED", "NONE", "DATA", "CUSTOM"] },
          "textFormat": { "$ref": "#/$defs/TextFormat" },
          "placement": { "type": "string", "enum": ["DATA_LABEL_PLACEMENT_UNSPECIFIED", "CENTER", "LEFT", "RIGHT", "ABOVE", "BELOW", "INSIDE_END", "INSIDE_BASE", "OUTSIDE_END"] },
          "customLabelData": { "$ref": "#/$defs/ChartData" }
        }
      },
      "ChartData": {
        "type": "object",
        "properties": {
          "groupRule": { "$ref": "#/$defs/ChartGroupRule" },
          "aggregateType": { "type": "string", "enum": ["CHART_AGGREGATE_TYPE_UNSPECIFIED", "AVERAGE", "COUNT", "MAX", "MEDIAN", "MIN", "SUM"] },
          "sourceRange": { "$ref": "#/$defs/ChartSourceRange" },
          "columnReference": { "$ref": "#/$defs/DataSourceColumnReference" }
        }
      },
      "CandlestickDomain": {
        "type": "object",
        "properties": {
          "data": { "$ref": "#/$defs/ChartData" },
          "reversed": { "type": "boolean" }
        }
      },
      "CandlestickData": {
        "type": "object",
        "properties": {
          "lowSeries": { "$ref": "#/$defs/CandlestickSeries" },
          "openSeries": { "$ref": "#/$defs/CandlestickSeries" },
          "closeSeries": { "$ref": "#/$defs/CandlestickSeries" },
          "highSeries": { "$ref": "#/$defs/CandlestickSeries" }
        }
      },
      "HistogramSeries": {
        "type": "object",
        "properties": {
          "barColor": { "$ref": "#/$defs/Color" },
          "barColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "data": { "$ref": "#/$defs/ChartData" }
        }
      },
      "WaterfallChartDomain": {
        "type": "object",
        "properties": {
          "data": { "$ref": "#/$defs/ChartData" },
          "reversed": { "type": "boolean" }
        }
      },
      "WaterfallChartSeries": {
        "type": "object",
        "properties": {
          "data": { "$ref": "#/$defs/ChartData" },
          "positiveColumnsStyle": { "$ref": "#/$defs/WaterfallChartColumnStyle" },
          "negativeColumnsStyle": { "$ref": "#/$defs/WaterfallChartColumnStyle" },
          "subtotalColumnsStyle": { "$ref": "#/$defs/WaterfallChartColumnStyle" },
          "hideTrailingSubtotal": { "type": "boolean" },
          "customSubtotals": { "type": "array", "items": { "$ref": "#/$defs/WaterfallChartCustomSubtotal" } },
          "dataLabel": { "$ref": "#/$defs/DataLabel" }
        }
      },
      "LineStyle": {
        "type": "object",
        "properties": {
          "width": { "type": "integer" },
          "type": { "type": "string", "enum": ["LINE_DASH_TYPE_UNSPECIFIED", "INVISIBLE", "CUSTOM", "SOLID", "DOTTED", "MEDIUM_DASHED", "MEDIUM_DASHED_DOTTED", "LONG_DASHED", "LONG_DASHED_DOTTED"] }
        }
      },
      "TreemapChartColorScale": {
        "type": "object",
        "properties": {
          "minValueColor": { "$ref": "#/$defs/Color" },
          "minValueColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "midValueColor": { "$ref": "#/$defs/Color" },
          "midValueColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "maxValueColor": { "$ref": "#/$defs/Color" },
          "maxValueColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "noDataColor": { "$ref": "#/$defs/Color" },
          "noDataColorStyle": { "$ref": "#/$defs/ColorStyle" }
        }
      },
      "KeyValueFormat": {
        "type": "object",
        "properties": {
          "textFormat": { "$ref": "#/$defs/TextFormat" },
          "position": { "$ref": "#/$defs/TextPosition" }
        }
      },
      "BaselineValueFormat": {
        "type": "object",
        "properties": {
          "comparisonType": { "type": "string", "enum": ["COMPARISON_TYPE_UNDEFINED", "ABSOLUTE_DIFFERENCE", "PERCENTAGE_DIFFERENCE"] },
          "textFormat": { "$ref": "#/$defs/TextFormat" },
          "position": { "$ref": "#/$defs/TextPosition" },
          "description": { "type": "string" },
          "positiveColor": { "$ref": "#/$defs/Color" },
          "positiveColorStyle": { "$ref": "#/$defs/ColorStyle" },
          "negativeColor": { "$ref": "#/$defs/Color" },
          "negativeColorStyle": { "$ref": "#/$defs/ColorStyle" }
        }
      },
      "ChartCustomNumberFormatOptions": {
        "type": "object",
        "properties": {
          "prefix": { "type": "string" },
          "suffix": { "type": "string" }
        }
      },
      "DataSourceParameter": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "namedRangeId": { "type": "string" },
          "range": { "$ref": "#/$defs/GridRange" }
        }
      },
      "BigQueryDataSourceSpec": {
        "type": "object",
        "properties": {
          "projectId": { "type": "string" },
          "querySpec": { "$ref": "#/$defs/BigQueryQuerySpec" },
          "tableSpec": { "$ref": "#/$defs/BigQueryTableSpec" }
        }
      },
      "LookerDataSourceSpec": {
        "type": "object",
        "properties": {
          "instanceUri": { "type": "string" },
          "model": { "type": "string" },
          "explore": { "type": "string" }
        }
      },
      "TableColumnDataValidationRule": {
        "type": "object",
        "properties": {
          "condition": { "$ref": "#/$defs/BooleanCondition" }
        }
      },
      "PivotGroupValueMetadata": {
        "type": "object",
        "properties": {
          "value": { "$ref": "#/$defs/ExtendedValue" },
          "collapsed": { "type": "boolean" }
        }
      },
      "PivotGroupSortValueBucket": {
        "type": "object",
        "properties": {
          "valuesIndex": { "type": "integer" },
          "buckets": { "type": "array", "items": { "$ref": "#/$defs/ExtendedValue" } }
        }
      },
      "PivotGroupRule": {
        "type": "object",
        "properties": {
          "manualRule": { "$ref": "#/$defs/ManualRule" },
          "histogramRule": { "$ref": "#/$defs/HistogramRule" },
          "dateTimeRule": { "$ref": "#/$defs/DateTimeRule" }
        }
      },
      "PivotGroupLimit": {
        "type": "object",
        "properties": {
          "countLimit": { "type": "integer" },
          "applyOrder": { "type": "integer" }
        }
      },
      "PersonProperties": {
        "type": "object",
        "properties": {
          "email": { "type": "string" },
          "displayFormat": { "type": "string", "enum": ["DISPLAY_FORMAT_UNSPECIFIED", "DEFAULT", "LAST_NAME_COMMA_FIRST_NAME", "EMAIL"] }
        }
      },
      "RichLinkProperties": {
        "type": "object",
        "properties": {
          "uri": { "type": "string" },
          "mimeType": { "type": "string" }
        }
      },
      "InterpolationPoint": {
        "type": "object",
        "properties": {
          "color": { "$ref": "#/$defs/Color" },
          "colorStyle": { "$ref": "#/$defs/ColorStyle" },
          "type": { "type": "string", "enum": ["INTERPOLATION_POINT_TYPE_UNSPECIFIED", "MIN", "MAX", "NUMBER", "PERCENT", "PERCENTILE"] },
          "value": { "type": "string" }
        }
      },
      "ChartAxisViewWindowOptions": {
        "type": "object",
        "properties": {
          "viewWindowMin": { "type": "number" },
          "viewWindowMax": { "type": "number" },
          "viewWindowMode": { "type": "string", "enum": ["DEFAULT_VIEW_WINDOW_MODE", "VIEW_WINDOW_MODE_UNSUPPORTED", "EXPLICIT", "PRETTY"] }
        }
      },
      "PointStyle": {
        "type": "object",
        "properties": {
          "size": { "type": "number" },
          "shape": { "type": "string", "enum": ["POINT_SHAPE_UNSPECIFIED", "CIRCLE", "DIAMOND", "HEXAGON", "PENTAGON", "SQUARE", "STAR", "TRIANGLE", "X_MARK"] }
        }
      },
      "BasicSeriesDataPointStyleOverride": {
        "type": "object",
        "properties": {
          "index": { "type": "integer" },
          "color": { "$ref": "#/$defs/Color" },
          "colorStyle": { "$ref": "#/$defs/ColorStyle" },
          "pointStyle": { "$ref": "#/$defs/PointStyle" }
        }
      },
      "ChartGroupRule": {
        "type": "object",
        "properties": {
          "dateTimeRule": { "$ref": "#/$defs/ChartDateTimeRule" },
          "histogramRule": { "$ref": "#/$defs/ChartHistogramRule" }
        }
      },
      "ChartSourceRange": {
        "type": "object",
        "properties": {
          "sources": { "type": "array", "items": { "$ref": "#/$defs/GridRange" } }
        }
      },
      "CandlestickSeries": {
        "type": "object",
        "properties": {
          "data": { "$ref": "#/$defs/ChartData" }
        }
      },
      "WaterfallChartColumnStyle": {
        "type": "object",
        "properties": {
          "label": { "type": "string" },
          "color": { "$ref": "#/$defs/Color" },
          "colorStyle": { "$ref": "#/$defs/ColorStyle" }
        }
      },
      "WaterfallChartCustomSubtotal": {
        "type": "object",
        "properties": {
          "subtotalIndex": { "type": "integer" },
          "label": { "type": "string" },
          "dataIsSubtotal": { "type": "boolean" }
        }
      },
      "BigQueryQuerySpec": {
        "type": "object",
        "properties": {
          "rawQuery": { "type": "string" }
        }
      },
      "BigQueryTableSpec": {
        "type": "object",
        "properties": {
          "tableProjectId": { "type": "string" },
          "tableId": { "type": "string" },
          "datasetId": { "type": "string" }
        }
      },
      "ManualRule": {
        "type": "object",
        "properties": {
          "groups": { "type": "array", "items": { "$ref": "#/$defs/ManualRuleGroup" } }
        }
      },
      "HistogramRule": {
        "type": "object",
        "properties": {
          "interval": { "type": "number" },
          "start": { "type": "number" },
          "end": { "type": "number" }
        }
      },
      "DateTimeRule": {
        "type": "object",
        "properties": {
          "type": { "type": "string", "enum": ["DATE_TIME_RULE_TYPE_UNSPECIFIED", "SECOND", "MINUTE", "HOUR", "HOUR_MINUTE", "HOUR_MINUTE_AMPM", "DAY_OF_WEEK", "DAY_OF_YEAR", "DAY_OF_MONTH", "DAY_MONTH", "MONTH", "QUARTER", "YEAR", "YEAR_MONTH", "YEAR_QUARTER", "YEAR_MONTH_DAY"] }
        }
      },
      "ChartDateTimeRule": {
        "type": "object",
        "properties": {
          "type": { "type": "string", "enum": ["CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED", "SECOND", "MINUTE", "HOUR", "HOUR_MINUTE", "HOUR_MINUTE_AMPM", "DAY_OF_WEEK", "DAY_OF_YEAR", "DAY_OF_MONTH", "DAY_MONTH", "MONTH", "QUARTER", "YEAR", "YEAR_MONTH", "YEAR_QUARTER", "YEAR_MONTH_DAY"] }
        }
      },
      "ChartHistogramRule": {
        "type": "object",
        "properties": {
          "minValue": { "type": "number" },
          "maxValue": { "type": "number" },
          "intervalSize": { "type": "number" }
        }
      },
      "ManualRuleGroup": {
        "type": "object",
        "properties": {
          "groupName": { "$ref": "#/$defs/ExtendedValue" },
          "items": { "type": "array", "items": { "$ref": "#/$defs/ExtendedValue" } }
        }
      },
      "DeveloperMetadataLocation": {
        "type": "object",
        "properties": {
          "locationType": { "type": "string", "enum": ["DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED", "ROW", "COLUMN", "SHEET", "SPREADSHEET"] },
          "sheetId": { "type": "integer" },
          "spreadsheet": { "type": "boolean" },
          "dimensionRange": { "$ref": "#/$defs/DimensionRange" }
        }
      },
      "DeveloperMetadataVisibility": {
        "type": "string",
        "enum": ["DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED", "DOCUMENT", "PROJECT"]
      },
      "DeveloperMetadataLookup": {
        "type": "object",
        "properties": {
          "metadataId": { "type": "integer" },
          "metadataKey": { "type": "string" },
          "metadataValue": { "type": "string" },
          "locationType": { "type": "string", "enum": ["DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED", "ROW", "COLUMN", "SHEET", "SPREADSHEET"] },
          "locationMatchingStrategy": { "type": "string", "enum": ["DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED", "EXACT_LOCATION", "INTERSECTING_LOCATION"] },
          "visibility": { "$ref": "#/$defs/DeveloperMetadataVisibility" }
        }
      }
    }
  },

  Get: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Sheets API - spreadsheets.get Response Body",
    "description": "JSON schema for the response body of the Method: spreadsheets.get of the Google Sheets API.",
    "type": "object",
    "properties": {
      "spreadsheetId": {
        "type": "string"
      },
      "properties": {
        "$ref": "#/definitions/SpreadsheetProperties"
      },
      "sheets": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Sheet"
        }
      },
      "namedRanges": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/NamedRange"
        }
      },
      "spreadsheetUrl": {
        "type": "string"
      },
      "developerMetadata": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/DeveloperMetadata"
        }
      },
      "dataSources": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/DataSource"
        }
      },
      "dataSourceSchedules": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/DataSourceRefreshSchedule"
        }
      }
    },
    "required": [
      "spreadsheetId",
      "properties",
      "sheets",
      "spreadsheetUrl"
    ],
    "definitions": {
      "SpreadsheetProperties": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "locale": {
            "type": "string"
          },
          "autoRecalc": {
            "type": "string",
            "enum": [
              "RECALCULATION_INTERVAL_UNSPECIFIED",
              "ON_CHANGE",
              "MINUTE",
              "HOUR"
            ]
          },
          "timeZone": {
            "type": "string"
          },
          "defaultFormat": {
            "$ref": "#/definitions/CellFormat"
          },
          "iterativeCalculationSettings": {
            "$ref": "#/definitions/IterativeCalculationSettings"
          },
          "spreadsheetTheme": {
            "$ref": "#/definitions/SpreadsheetTheme"
          }
        }
      },
      "Sheet": {
        "type": "object",
        "properties": {
          "properties": {
            "$ref": "#/definitions/SheetProperties"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/GridData"
            }
          },
          "merges": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/GridRange"
            }
          }
        }
      },
      "NamedRange": {
        "type": "object",
        "properties": {
          "namedRangeId": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "range": {
            "$ref": "#/definitions/GridRange"
          }
        }
      },
      "DeveloperMetadata": {
        "type": "object",
        "properties": {
          "metadataId": {
            "type": "integer"
          },
          "metadataKey": {
            "type": "string"
          },
          "metadataValue": {
            "type": "string"
          },
          "location": {
            "$ref": "#/definitions/DeveloperMetadataLocation"
          },
          "visibility": {
            "type": "string",
            "enum": [
              "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
              "DOCUMENT",
              "PROJECT"
            ]
          }
        }
      },
      "DataSource": {
        "type": "object",
        "properties": {
          "dataSourceId": {
            "type": "string"
          },
          "spec": {
            "$ref": "#/definitions/DataSourceSpec"
          },
          "calculatedColumns": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/DataSourceColumn"
            }
          },
          "sheetId": {
            "type": "integer"
          }
        }
      },
      "DataSourceRefreshSchedule": {
        "type": "object",
        "properties": {
          "enabled": {
            "type": "boolean"
          },
          "refreshScope": {
            "type": "string"
          },
          "dailySchedule": {
            "$ref": "#/definitions/DataSourceRefreshDailySchedule"
          },
          "weeklySchedule": {
            "$ref": "#/definitions/DataSourceRefreshWeeklySchedule"
          },
          "monthlySchedule": {
            "$ref": "#/definitions/DataSourceRefreshMonthlySchedule"
          }
        }
      },
      "CellFormat": {
        "type": "object",
        "properties": {}
      },
      "IterativeCalculationSettings": {
        "type": "object",
        "properties": {
          "maxIterations": {
            "type": "integer"
          },
          "convergenceThreshold": {
            "type": "number"
          }
        }
      },
      "SpreadsheetTheme": {
        "type": "object",
        "properties": {
          "primaryFontFamily": {
            "type": "string"
          },
          "themeColors": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/ThemeColorPair"
            }
          }
        }
      },
      "ThemeColorPair": {
        "type": "object",
        "properties": {
          "colorType": {
            "type": "string"
          },
          "color": {
            "$ref": "#/definitions/ColorStyle"
          }
        }
      },
      "ColorStyle": {
        "type": "object",
        "properties": {
          "rgbColor": {
            "$ref": "#/definitions/Color"
          },
          "themeColor": {
            "type": "string"
          }
        }
      },
      "Color": {
        "type": "object",
        "properties": {
          "red": {
            "type": "number"
          },
          "green": {
            "type": "number"
          },
          "blue": {
            "type": "number"
          },
          "alpha": {
            "type": "number"
          }
        }
      },
      "SheetProperties": {
        "type": "object",
        "properties": {
          "sheetId": {
            "type": "integer"
          },
          "title": {
            "type": "string"
          },
          "index": {
            "type": "integer"
          }
        }
      },
      "GridData": {
        "type": "object",
        "properties": {}
      },
      "GridRange": {
        "type": "object",
        "properties": {
          "sheetId": {
            "type": "integer"
          },
          "startRowIndex": {
            "type": "integer"
          },
          "endRowIndex": {
            "type": "integer"
          },
          "startColumnIndex": {
            "type": "integer"
          },
          "endColumnIndex": {
            "type": "integer"
          }
        }
      },
      "DeveloperMetadataLocation": {
        "type": "object",
        "properties": {
          "locationType": {
            "type": "string"
          },
          "spreadsheet": {
            "type": "boolean"
          },
          "sheetId": {
            "type": "integer"
          },
          "dimensionRange": {
            "$ref": "#/definitions/DimensionRange"
          }
        }
      },
      "DimensionRange": {
        "type": "object",
        "properties": {
          "sheetId": {
            "type": "integer"
          },
          "dimension": {
            "type": "string"
          },
          "startIndex": {
            "type": "integer"
          },
          "endIndex": {
            "type": "integer"
          }
        }
      },
      "DataSourceSpec": {
        "type": "object",
        "properties": {
          "parameters": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/DataSourceParameter"
            }
          },
          "bigQuery": {
            "$ref": "#/definitions/BigQueryDataSourceSpec"
          }
        }
      },
      "DataSourceColumn": {
        "type": "object",
        "properties": {
          "reference": {
            "$ref": "#/definitions/DataSourceColumnReference"
          },
          "formula": {
            "type": "string"
          }
        }
      },
      "DataSourceRefreshDailySchedule": {
        "type": "object",
        "properties": {
          "startTime": {
            "$ref": "#/definitions/TimeOfDay"
          }
        }
      },
      "DataSourceRefreshWeeklySchedule": {
        "type": "object",
        "properties": {
          "startTime": {
            "$ref": "#/definitions/TimeOfDay"
          },
          "daysOfWeek": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "DataSourceRefreshMonthlySchedule": {
        "type": "object",
        "properties": {
          "startTime": {
            "$ref": "#/definitions/TimeOfDay"
          },
          "daysOfMonth": {
            "type": "array",
            "items": {
              "type": "integer"
            }
          }
        }
      },
      "DataSourceParameter": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "namedRangeId": {
            "type": "string"
          },
          "range": {
            "$ref": "#/definitions/GridRange"
          }
        }
      },
      "BigQueryDataSourceSpec": {
        "type": "object",
        "properties": {
          "projectId": {
            "type": "string"
          },
          "querySpec": {
            "$ref": "#/definitions/BigQueryQuerySpec"
          },
          "tableSpec": {
            "$ref": "#/definitions/BigQueryTableSpec"
          }
        }
      },
      "DataSourceColumnReference": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          }
        }
      },
      "TimeOfDay": {
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
        }
      },
      "BigQueryQuerySpec": {
        "type": "object",
        "properties": {
          "rawQuery": {
            "type": "string"
          }
        }
      },
      "BigQueryTableSpec": {
        "type": "object",
        "properties": {
          "tableProjectId": {
            "type": "string"
          },
          "datasetId": {
            "type": "string"
          },
          "tableId": {
            "type": "string"
          }
        }
      }
    }
  },
};

const jsonSchemaForDocs = {
  BatchUpdate: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Docs API batchUpdate Request Body",
    "description": "JSON schema for the request body of the Method: documents.batchUpdate of Google Docs API.",
    "type": "object",
    "properties": {
      "requests": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/Request"
        }
      },
      "writeControl": {
        "$ref": "#/$defs/WriteControl"
      }
    },
    "$defs": {
      "Request": {
        "type": "object",
        "oneOf": [
          { "$ref": "#/$defs/UpdateDocumentStyleRequest" },
          { "$ref": "#/$defs/UpdateParagraphStyleRequest" },
          { "$ref": "#/$defs/UpdateTextStyleRequest" },
          { "$ref": "#/$defs/UpdateTableColumnPropertiesRequest" },
          { "$ref": "#/$defs/UpdateTableRowStyleRequest" },
          { "$ref": "#/$defs/UpdateTableCellStyleRequest" },
          { "$ref": "#/$defs/InsertTextRequest" },
          { "$ref": "#/$defs/DeleteContentRangeRequest" },
          { "$ref": "#/$defs/DeleteNamedRangeRequest" },
          { "$ref": "#/$defs/DeletePositionedObjectRequest" },
          { "$ref": "#/$defs/DeleteTableColumnRequest" },
          { "$ref": "#/$defs/DeleteTableRowRequest" },
          { "$ref": "#/$defs/DeleteParagraphBulletsRequest" },
          { "$ref": "#/$defs/InsertInlineImageRequest" },
          { "$ref": "#/$defs/InsertInlineSheetsChartRequest" },
          { "$ref": "#/$defs/InsertTableRequest" },
          { "$ref": "#/$defs/InsertTableColumnRequest" },
          { "$ref": "#/$defs/InsertTableRowRequest" },
          { "$ref": "#/$defs/MergeTableCellsRequest" },
          { "$ref": "#/$defs/UnmergeTableCellsRequest" },
          { "$ref": "#/$defs/CreateNamedRangeRequest" },
          { "$ref": "#/$defs/CreateParagraphBulletsRequest" },
          { "$ref": "#/$defs/CreateHeaderRequest" },
          { "$ref": "#/$defs/CreateFooterRequest" },
          { "$ref": "#/$defs/CreateFootnoteRequest" },
          { "$ref": "#/$defs/ReplaceAllTextRequest" },
          { "$ref": "#/$defs/ReplaceAllSmartChipsRequest" },
          { "$ref": "#/$defs/ReplaceImageRequest" },
          { "$ref": "#/$defs/ReplaceNamedRangeContentRequest" },
          { "$ref": "#/$defs/PinTableHeaderRowsRequest" },
          { "$ref": "#/$defs/InsertSectionBreakRequest" },
          { "$ref": "#/$defs/DeleteSectionBreakRequest" },
          { "$ref": "#/$defs/UpdateSectionStyleRequest" },
          { "$ref": "#/$defs/PinRevisionRequest" },
          { "$ref": "#/$defs/UnpinRevisionRequest" }
        ]
      },
      "WriteControl": {
        "type": "object",
        "properties": {
          "requiredRevisionId": {
            "type": "string"
          },
          "targetRevisionId": {
            "type": "string"
          }
        }
      },
      "UpdateDocumentStyleRequest": {
        "type": "object",
        "properties": {
          "documentStyle": {
            "$ref": "#/$defs/DocumentStyle"
          },
          "fields": {
            "type": "string"
          }
        }
      },
      "UpdateParagraphStyleRequest": {
        "type": "object",
        "properties": {
          "paragraphStyle": {
            "$ref": "#/$defs/ParagraphStyle"
          },
          "fields": {
            "type": "string"
          },
          "range": {
            "$ref": "#/$defs/Range"
          }
        }
      },
      "UpdateTextStyleRequest": {
        "type": "object",
        "properties": {
          "textStyle": {
            "$ref": "#/$defs/TextStyle"
          },
          "fields": {
            "type": "string"
          },
          "range": {
            "$ref": "#/$defs/Range"
          }
        }
      },
      "UpdateTableColumnPropertiesRequest": {
        "type": "object",
        "properties": {
          "tableStartLocation": {
            "$ref": "#/$defs/Location"
          },
          "columnIndices": {
            "type": "array",
            "items": {
              "type": "integer"
            }
          },
          "tableColumnProperties": {
            "$ref": "#/$defs/TableColumnProperties"
          },
          "fields": {
            "type": "string"
          }
        }
      },
      "UpdateTableRowStyleRequest": {
        "type": "object",
        "properties": {
          "tableStartLocation": {
            "$ref": "#/$defs/Location"
          },
          "rowIndices": {
            "type": "array",
            "items": {
              "type": "integer"
            }
          },
          "tableRowStyle": {
            "$ref": "#/$defs/TableRowStyle"
          },
          "fields": {
            "type": "string"
          }
        }
      },
      "UpdateTableCellStyleRequest": {
        "type": "object",
        "properties": {
          "tableCellStyle": {
            "$ref": "#/$defs/TableCellStyle"
          },
          "fields": {
            "type": "string"
          },
          "tableRange": {
            "$ref": "#/$defs/TableRange"
          }
        }
      },
      "InsertTextRequest": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string"
          },
          "location": {
            "$ref": "#/$defs/Location"
          },
          "endOfSegmentLocation": {
            "$ref": "#/$defs/EndOfSegmentLocation"
          }
        }
      },
      "DeleteContentRangeRequest": {
        "type": "object",
        "properties": {
          "range": {
            "$ref": "#/$defs/Range"
          }
        }
      },
      "DeleteNamedRangeRequest": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "namedRangeId": {
            "type": "string"
          }
        }
      },
      "DeletePositionedObjectRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          }
        }
      },
      "DeleteTableColumnRequest": {
        "type": "object",
        "properties": {
          "tableCellLocation": {
            "$ref": "#/$defs/TableCellLocation"
          }
        }
      },
      "DeleteTableRowRequest": {
        "type": "object",
        "properties": {
          "tableCellLocation": {
            "$ref": "#/$defs/TableCellLocation"
          }
        }
      },
      "DeleteParagraphBulletsRequest": {
        "type": "object",
        "properties": {
          "range": {
            "$ref": "#/$defs/Range"
          }
        }
      },
      "InsertInlineImageRequest": {
        "type": "object",
        "properties": {
          "uri": {
            "type": "string"
          },
          "objectSize": {
            "$ref": "#/$defs/Size"
          },
          "location": {
            "$ref": "#/$defs/Location"
          },
          "endOfSegmentLocation": {
            "$ref": "#/$defs/EndOfSegmentLocation"
          }
        }
      },
      "InsertInlineSheetsChartRequest": {
        "type": "object",
        "properties": {
          "spreadsheetId": {
            "type": "string"
          },
          "chartId": {
            "type": "integer"
          },
          "objectSize": {
            "$ref": "#/$defs/Size"
          },
          "location": {
            "$ref": "#/$defs/Location"
          },
          "endOfSegmentLocation": {
            "$ref": "#/$defs/EndOfSegmentLocation"
          }
        }
      },
      "InsertTableRequest": {
        "type": "object",
        "properties": {
          "rows": {
            "type": "integer"
          },
          "columns": {
            "type": "integer"
          },
          "location": {
            "$ref": "#/$defs/Location"
          },
          "endOfSegmentLocation": {
            "$ref": "#/$defs/EndOfSegmentLocation"
          }
        }
      },
      "InsertTableColumnRequest": {
        "type": "object",
        "properties": {
          "tableCellLocation": {
            "$ref": "#/$defs/TableCellLocation"
          },
          "insertRight": {
            "type": "boolean"
          }
        }
      },
      "InsertTableRowRequest": {
        "type": "object",
        "properties": {
          "tableCellLocation": {
            "$ref": "#/$defs/TableCellLocation"
          },
          "insertBelow": {
            "type": "boolean"
          }
        }
      },
      "MergeTableCellsRequest": {
        "type": "object",
        "properties": {
          "tableRange": {
            "$ref": "#/$defs/TableRange"
          }
        }
      },
      "UnmergeTableCellsRequest": {
        "type": "object",
        "properties": {
          "tableRange": {
            "$ref": "#/$defs/TableRange"
          }
        }
      },
      "CreateNamedRangeRequest": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "range": {
            "$ref": "#/$defs/Range"
          }
        }
      },
      "CreateParagraphBulletsRequest": {
        "type": "object",
        "properties": {
          "range": {
            "$ref": "#/$defs/Range"
          },
          "bulletPreset": {
            "type": "string"
          }
        }
      },
      "CreateHeaderRequest": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": ["HEADER_FOOTER_TYPE_UNSPECIFIED", "DEFAULT"]
          },
          "sectionBreakLocation": {
            "$ref": "#/$defs/Location"
          }
        }
      },
      "CreateFooterRequest": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": ["HEADER_FOOTER_TYPE_UNSPECIFIED", "DEFAULT"]
          },
          "sectionBreakLocation": {
            "$ref": "#/$defs/Location"
          }
        }
      },
      "CreateFootnoteRequest": {
        "type": "object",
        "properties": {
          "location": {
            "$ref": "#/$defs/Location"
          },
          "endOfSegmentLocation": {
            "$ref": "#/$defs/EndOfSegmentLocation"
          }
        }
      },
      "ReplaceAllTextRequest": {
        "type": "object",
        "properties": {
          "replaceText": {
            "type": "string"
          },
          "containsText": {
            "$ref": "#/$defs/SubstringMatchCriteria"
          }
        }
      },
      "ReplaceAllSmartChipsRequest": {
        "type": "object",
        "properties": {
          "replaceText": {
            "type": "string"
          },
          "containsText": {
            "$ref": "#/$defs/SubstringMatchCriteria"
          }
        }
      },
      "ReplaceImageRequest": {
        "type": "object",
        "properties": {
          "imageObjectId": {
            "type": "string"
          },
          "uri": {
            "type": "string"
          },
          "imageReplaceMethod": {
            "type": "string"
          }
        }
      },
      "ReplaceNamedRangeContentRequest": {
        "type": "object",
        "properties": {
          "namedRangeName": {
            "type": "string"
          },
          "text": {
            "type": "string"
          }
        }
      },
      "PinTableHeaderRowsRequest": {
        "type": "object",
        "properties": {
          "tableStartLocation": {
            "$ref": "#/$defs/Location"
          },
          "pinnedHeaderRowsCount": {
            "type": "integer"
          }
        }
      },
      "InsertSectionBreakRequest": {
        "type": "object",
        "properties": {
          "sectionType": {
            "type": "string"
          },
          "location": {
            "$ref": "#/$defs/Location"
          },
          "endOfSegmentLocation": {
            "$ref": "#/$defs/EndOfSegmentLocation"
          }
        }
      },
      "DeleteSectionBreakRequest": {
        "type": "object",
        "properties": {
          "range": {
            "$ref": "#/$defs/Range"
          }
        }
      },
      "UpdateSectionStyleRequest": {
        "type": "object",
        "properties": {
          "range": {
            "$ref": "#/$defs/Range"
          },
          "sectionStyle": {
            "$ref": "#/$defs/SectionStyle"
          },
          "fields": {
            "type": "string"
          }
        }
      },
      "PinRevisionRequest": {
        "type": "object",
        "properties": {
          "revisionId": {
            "type": "string"
          }
        }
      },
      "UnpinRevisionRequest": {
        "type": "object",
        "properties": {
          "revisionId": {
            "type": "string"
          }
        }
      },
      "TextStyle": {
        "type": "object",
        "properties": {
          "bold": { "type": "boolean" },
          "italic": { "type": "boolean" },
          "underline": { "type": "boolean" },
          "strikethrough": { "type": "boolean" },
          "smallCaps": { "type": "boolean" },
          "backgroundColor": { "$ref": "#/$defs/OptionalColor" },
          "foregroundColor": { "$ref": "#/$defs/OptionalColor" },
          "fontSize": { "$ref": "#/$defs/Dimension" },
          "weightedFontFamily": { "$ref": "#/$defs/WeightedFontFamily" },
          "baselineOffset": { "type": "string" },
          "link": { "$ref": "#/$defs/Link" }
        }
      },
      "ParagraphStyle": {
        "type": "object",
        "properties": {
          "headingId": { "type": "string" },
          "namedStyleType": { "type": "string" },
          "alignment": { "type": "string" },
          "lineSpacing": { "type": "number" },
          "direction": { "type": "string" },
          "spacingMode": { "type": "string" },
          "spaceAbove": { "$ref": "#/$defs/Dimension" },
          "spaceBelow": { "$ref": "#/$defs/Dimension" },
          "borderBetween": { "$ref": "#/$defs/ParagraphBorder" },
          "borderTop": { "$ref": "#/$defs/ParagraphBorder" },
          "borderBottom": { "$ref": "#/$defs/ParagraphBorder" },
          "borderLeft": { "$ref": "#/$defs/ParagraphBorder" },
          "borderRight": { "$ref": "#/$defs/ParagraphBorder" },
          "indentFirstLine": { "$ref": "#/$defs/Dimension" },
          "indentStart": { "$ref": "#/$defs/Dimension" },
          "indentEnd": { "$ref": "#/$defs/Dimension" },
          "tabStops": {
            "type": "array",
            "items": { "$ref": "#/$defs/TabStop" }
          },
          "keepLinesTogether": { "type": "boolean" },
          "keepWithNext": { "type": "boolean" },
          "avoidWidowAndOrphan": { "type": "boolean" },
          "shading": { "$ref": "#/$defs/Shading" },
          "pageBreakBefore": { "type": "boolean" }
        }
      },
      "DocumentStyle": {
        "type": "object",
        "properties": {
          "background": { "$ref": "#/$defs/Background" },
          "defaultHeaderId": { "type": "string" },
          "defaultFooterId": { "type": "string" },
          "evenPageHeaderId": { "type": "string" },
          "evenPageFooterId": { "type": "string" },
          "firstPageHeaderId": { "type": "string" },
          "firstPageFooterId": { "type": "string" },
          "useFirstPageHeaderFooter": { "type": "boolean" },
          "useEvenPageHeaderFooter": { "type": "boolean" },
          "pageNumberStart": { "type": "integer" },
          "marginTop": { "$ref": "#/$defs/Dimension" },
          "marginBottom": { "$ref": "#/$defs/Dimension" },
          "marginRight": { "$ref": "#/$defs/Dimension" },
          "marginLeft": { "$ref": "#/$defs/Dimension" },
          "pageSize": { "$ref": "#/$defs/Size" },
          "marginHeader": { "$ref": "#/$defs/Dimension" },
          "marginFooter": { "$ref": "#/$defs/Dimension" },
          "useCustomHeaderFooterMargins": { "type": "boolean" },
          "flipPageOrientation": { "type": "boolean" }
        }
      },
      "TableColumnProperties": {
        "type": "object",
        "properties": {
          "width": {
            "$ref": "#/$defs/Dimension"
          },
          "widthType": {
            "type": "string"
          }
        }
      },
      "TableRowStyle": {
        "type": "object",
        "properties": {
          "minRowHeight": {
            "$ref": "#/$defs/Dimension"
          }
        }
      },
      "TableCellStyle": {
        "type": "object",
        "properties": {
          "rowSpan": {
            "type": "integer"
          },
          "columnSpan": {
            "type": "integer"
          },
          "backgroundColor": {
            "$ref": "#/$defs/OptionalColor"
          },
          "borderTop": {
            "$ref": "#/$defs/TableCellBorder"
          },
          "borderBottom": {
            "$ref": "#/$defs/TableCellBorder"
          },
          "borderLeft": {
            "$ref": "#/$defs/TableCellBorder"
          },
          "borderRight": {
            "$ref": "#/$defs/TableCellBorder"
          },
          "paddingTop": {
            "$ref": "#/$defs/Dimension"
          },
          "paddingBottom": {
            "$ref": "#/$defs/Dimension"
          },
          "paddingLeft": {
            "$ref": "#/$defs/Dimension"
          },
          "paddingRight": {
            "$ref": "#/$defs/Dimension"
          },
          "contentAlignment": {
            "type": "string"
          }
        }
      },
      "SectionStyle": {
        "type": "object",
        "properties": {
          "columnProperties": {
            "type": "array",
            "items": { "$ref": "#/$defs/SectionColumnProperties" }
          },
          "columnSeparatorStyle": { "type": "string" },
          "contentDirection": { "type": "string" },
          "marginTop": { "$ref": "#/$defs/Dimension" },
          "marginBottom": { "$ref": "#/$defs/Dimension" },
          "marginRight": { "$ref": "#/$defs/Dimension" },
          "marginLeft": { "$ref": "#/$defs/Dimension" },
          "marginHeader": { "$ref": "#/$defs/Dimension" },
          "marginFooter": { "$ref": "#/$defs/Dimension" },
          "sectionType": { "type": "string" },
          "defaultHeaderId": { "type": "string" },
          "defaultFooterId": { "type": "string" },
          "firstPageHeaderId": { "type": "string" },
          "firstPageFooterId": { "type": "string" },
          "evenPageHeaderId": { "type": "string" },
          "evenPageFooterId": { "type": "string" },
          "useFirstPageHeaderFooter": { "type": "boolean" },
          "pageNumberStart": { "type": "integer" },
          "flipPageOrientation": { "type": "boolean" }
        }
      },
      "Range": {
        "type": "object",
        "properties": {
          "startIndex": { "type": "integer" },
          "endIndex": { "type": "integer" },
          "segmentId": { "type": "string" }
        }
      },
      "Location": {
        "type": "object",
        "properties": {
          "segmentId": { "type": "string" },
          "index": { "type": "integer" }
        }
      },
      "EndOfSegmentLocation": {
        "type": "object",
        "properties": {
          "segmentId": { "type": "string" }
        }
      },
      "Size": {
        "type": "object",
        "properties": {
          "height": { "$ref": "#/$defs/Dimension" },
          "width": { "$ref": "#/$defs/Dimension" }
        }
      },
      "TableCellLocation": {
        "type": "object",
        "properties": {
          "tableStartLocation": { "$ref": "#/$defs/Location" },
          "rowIndex": { "type": "integer" },
          "columnIndex": { "type": "integer" }
        }
      },
      "TableRange": {
        "type": "object",
        "properties": {
          "tableCellLocation": { "$ref": "#/$defs/TableCellLocation" },
          "rowSpan": { "type": "integer" },
          "columnSpan": { "type": "integer" }
        }
      },
      "SubstringMatchCriteria": {
        "type": "object",
        "properties": {
          "text": { "type": "string" },
          "matchCase": { "type": "boolean" }
        }
      },
      "OptionalColor": {
        "type": "object",
        "properties": {
          "color": { "$ref": "#/$defs/Color" }
        }
      },
      "Color": {
        "type": "object",
        "properties": {
          "rgbColor": { "$ref": "#/$defs/RgbColor" }
        }
      },
      "RgbColor": {
        "type": "object",
        "properties": {
          "red": { "type": "number" },
          "green": { "type": "number" },
          "blue": { "type": "number" }
        }
      },
      "Dimension": {
        "type": "object",
        "properties": {
          "magnitude": { "type": "number" },
          "unit": { "type": "string" }
        }
      },
      "WeightedFontFamily": {
        "type": "object",
        "properties": {
          "fontFamily": { "type": "string" },
          "weight": { "type": "integer" }
        }
      },
      "Link": {
        "type": "object",
        "properties": {
          "url": { "type": "string" },
          "bookmarkId": { "type": "string" },
          "headingId": { "type": "string" }
        }
      },
      "ParagraphBorder": {
        "type": "object",
        "properties": {
          "color": { "$ref": "#/$defs/OptionalColor" },
          "width": { "$ref": "#/$defs/Dimension" },
          "padding": { "$ref": "#/$defs/Dimension" },
          "dashStyle": { "type": "string" }
        }
      },
      "TabStop": {
        "type": "object",
        "properties": {
          "offset": { "$ref": "#/$defs/Dimension" },
          "alignment": { "type": "string" }
        }
      },
      "Shading": {
        "type": "object",
        "properties": {
          "backgroundColor": { "$ref": "#/$defs/OptionalColor" }
        }
      },
      "Background": {
        "type": "object",
        "properties": {
          "color": { "$ref": "#/$defs/OptionalColor" }
        }
      },
      "TableCellBorder": {
        "type": "object",
        "properties": {
          "color": { "$ref": "#/$defs/OptionalColor" },
          "width": { "$ref": "#/$defs/Dimension" },
          "dashStyle": { "type": "string" }
        }
      },
      "SectionColumnProperties": {
        "type": "object",
        "properties": {
          "width": { "$ref": "#/$defs/Dimension" },
          "paddingEnd": { "$ref": "#/$defs/Dimension" }
        }
      }
    }
  },

  Get: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Docs API Document Schema",
    "description": "JSON schema for the response body of Method: documents.get of Google Docs API.",
    "type": "object",
    "properties": {
      "document": {
        "$ref": "#/definitions/Document"
      }
    },
    "definitions": {
      "Document": {
        "type": "object",
        "properties": {
          "documentId": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "tabs": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Tab"
            }
          },
          "revisionId": {
            "type": "string"
          },
          "suggestionsViewMode": {
            "type": "string",
            "enum": [
              "DEFAULT_FOR_CURRENT_ACCESS",
              "SUGGESTIONS_INLINE",
              "PREVIEW_SUGGESTIONS_ACCEPTED",
              "PREVIEW_WITHOUT_SUGGESTIONS"
            ]
          },
          "body": {
            "$ref": "#/definitions/Body"
          },
          "headers": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/Header"
            }
          },
          "footers": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/Footer"
            }
          },
          "footnotes": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/Footnote"
            }
          },
          "documentStyle": {
            "$ref": "#/definitions/DocumentStyle"
          },
          "suggestedDocumentStyleChanges": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/SuggestedDocumentStyle"
            }
          },
          "namedStyles": {
            "$ref": "#/definitions/NamedStyles"
          },
          "suggestedNamedStylesChanges": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/SuggestedNamedStyles"
            }
          },
          "lists": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/List"
            }
          },
          "namedRanges": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/NamedRanges"
            }
          },
          "inlineObjects": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/InlineObject"
            }
          },
          "positionedObjects": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/PositionedObject"
            }
          }
        }
      },
      "Tab": {
        "type": "object",
        "properties": {
          "tabProperties": {
            "$ref": "#/definitions/TabProperties"
          },
          "childTabs": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Tab"
            }
          },
          "documentTab": {
            "$ref": "#/definitions/DocumentTab"
          }
        }
      },
      "TabProperties": {
        "type": "object",
        "properties": {
          "tabId": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "parentTabId": {
            "type": "string"
          },
          "index": {
            "type": "integer"
          },
          "nestingLevel": {
            "type": "integer"
          }
        }
      },
      "DocumentTab": {
        "type": "object",
        "properties": {
          "body": {
            "$ref": "#/definitions/Body"
          },
          "headers": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/Header"
            }
          },
          "footers": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/Footer"
            }
          },
          "footnotes": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/Footnote"
            }
          },
          "documentStyle": {
            "$ref": "#/definitions/DocumentStyle"
          },
          "suggestedDocumentStyleChanges": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/SuggestedDocumentStyle"
            }
          },
          "namedStyles": {
            "$ref": "#/definitions/NamedStyles"
          },
          "suggestedNamedStylesChanges": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/SuggestedNamedStyles"
            }
          },
          "lists": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/List"
            }
          },
          "namedRanges": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/NamedRanges"
            }
          },
          "inlineObjects": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/InlineObject"
            }
          },
          "positionedObjects": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/PositionedObject"
            }
          }
        }
      },
      "Body": {
        "type": "object",
        "properties": {
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/StructuralElement"
            }
          }
        }
      },
      "Header": {
        "type": "object",
        "properties": {
          "headerId": {
            "type": "string"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/StructuralElement"
            }
          }
        }
      },
      "Footer": {
        "type": "object",
        "properties": {
          "footerId": {
            "type": "string"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/StructuralElement"
            }
          }
        }
      },
      "Footnote": {
        "type": "object",
        "properties": {
          "footnoteId": {
            "type": "string"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/StructuralElement"
            }
          }
        }
      },
      "DocumentStyle": {
        "type": "object",
        "properties": {}
      },
      "SuggestedDocumentStyle": {
        "type": "object",
        "properties": {}
      },
      "NamedStyles": {
        "type": "object",
        "properties": {}
      },
      "SuggestedNamedStyles": {
        "type": "object",
        "properties": {}
      },
      "List": {
        "type": "object",
        "properties": {}
      },
      "NamedRanges": {
        "type": "object",
        "properties": {}
      },
      "InlineObject": {
        "type": "object",
        "properties": {}
      },
      "PositionedObject": {
        "type": "object",
        "properties": {}
      },
      "StructuralElement": {
        "type": "object",
        "properties": {}
      }
    }
  },

};

const jsonSchemaForSlides = {
  BatchUpdate: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Slides API presentations.batchUpdate Request Body",
    "description": "JSON schema for the request body of the Method: presentations.batchUpdate of Google Slides API.",
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
    "definitions": {
      "Request": {
        "type": "object",
        "oneOf": [
          { "properties": { "createSlide": { "$ref": "#/definitions/CreateSlideRequest" } } },
          { "properties": { "createShape": { "$ref": "#/definitions/CreateShapeRequest" } } },
          { "properties": { "createTable": { "$ref": "#/definitions/CreateTableRequest" } } },
          { "properties": { "insertText": { "$ref": "#/definitions/InsertTextRequest" } } },
          { "properties": { "insertTableRows": { "$ref": "#/definitions/InsertTableRowsRequest" } } },
          { "properties": { "insertTableColumns": { "$ref": "#/definitions/InsertTableColumnsRequest" } } },
          { "properties": { "deleteTableRow": { "$ref": "#/definitions/DeleteTableRowRequest" } } },
          { "properties": { "deleteTableColumn": { "$ref": "#/definitions/DeleteTableColumnRequest" } } },
          { "properties": { "replaceAllText": { "$ref": "#/definitions/ReplaceAllTextRequest" } } },
          { "properties": { "deleteObject": { "$ref": "#/definitions/DeleteObjectRequest" } } },
          { "properties": { "updatePageElementTransform": { "$ref": "#/definitions/UpdatePageElementTransformRequest" } } },
          { "properties": { "updateSlidesPosition": { "$ref": "#/definitions/UpdateSlidesPositionRequest" } } },
          { "properties": { "deleteText": { "$ref": "#/definitions/DeleteTextRequest" } } },
          { "properties": { "createImage": { "$ref": "#/definitions/CreateImageRequest" } } },
          { "properties": { "createVideo": { "$ref": "#/definitions/CreateVideoRequest" } } },
          { "properties": { "createSheetsChart": { "$ref": "#/definitions/CreateSheetsChartRequest" } } },
          { "properties": { "createLine": { "$ref": "#/definitions/CreateLineRequest" } } },
          { "properties": { "refreshSheetsChart": { "$ref": "#/definitions/RefreshSheetsChartRequest" } } },
          { "properties": { "updateShapeProperties": { "$ref": "#/definitions/UpdateShapePropertiesRequest" } } },
          { "properties": { "updateImageProperties": { "$ref": "#/definitions/UpdateImagePropertiesRequest" } } },
          { "properties": { "updateVideoProperties": { "$ref": "#/definitions/UpdateVideoPropertiesRequest" } } },
          { "properties": { "updatePageProperties": { "$ref": "#/definitions/UpdatePagePropertiesRequest" } } },
          { "properties": { "updateTableCellProperties": { "$ref": "#/definitions/UpdateTableCellPropertiesRequest" } } },
          { "properties": { "updateLineProperties": { "$ref": "#/definitions/UpdateLinePropertiesRequest" } } },
          { "properties": { "createParagraphBullets": { "$ref": "#/definitions/CreateParagraphBulletsRequest" } } },
          { "properties": { "replaceAllShapesWithImage": { "$ref": "#/definitions/ReplaceAllShapesWithImageRequest" } } },
          { "properties": { "duplicateObject": { "$ref": "#/definitions/DuplicateObjectRequest" } } },
          { "properties": { "updateTextStyle": { "$ref": "#/definitions/UpdateTextStyleRequest" } } },
          { "properties": { "replaceAllShapesWithSheetsChart": { "$ref": "#/definitions/ReplaceAllShapesWithSheetsChartRequest" } } },
          { "properties": { "deleteParagraphBullets": { "$ref": "#/definitions/DeleteParagraphBulletsRequest" } } },
          { "properties": { "updateParagraphStyle": { "$ref": "#/definitions/UpdateParagraphStyleRequest" } } },
          { "properties": { "updateTableBorderProperties": { "$ref": "#/definitions/UpdateTableBorderPropertiesRequest" } } },
          { "properties": { "updateTableColumnProperties": { "$ref": "#/definitions/UpdateTableColumnPropertiesRequest" } } },
          { "properties": { "updateTableRowProperties": { "$ref": "#/definitions/UpdateTableRowPropertiesRequest" } } },
          { "properties": { "mergeTableCells": { "$ref": "#/definitions/MergeTableCellsRequest" } } },
          { "properties": { "unmergeTableCells": { "$ref": "#/definitions/UnmergeTableCellsRequest" } } },
          { "properties": { "groupObjects": { "$ref": "#/definitions/GroupObjectsRequest" } } },
          { "properties": { "ungroupObjects": { "$ref": "#/definitions/UngroupObjectsRequest" } } },
          { "properties": { "updatePageElementAltText": { "$ref": "#/definitions/UpdatePageElementAltTextRequest" } } },
          { "properties": { "replaceImage": { "$ref": "#/definitions/ReplaceImageRequest" } } },
          { "properties": { "updateSlideProperties": { "$ref": "#/definitions/UpdateSlidePropertiesRequest" } } },
          { "properties": { "updatePageElementsZOrder": { "$ref": "#/definitions/UpdatePageElementsZOrderRequest" } } },
          { "properties": { "updateLineCategory": { "$ref": "#/definitions/UpdateLineCategoryRequest" } } },
          { "properties": { "rerouteLine": { "$ref": "#/definitions/RerouteLineRequest" } } }
        ]
      },
      "WriteControl": {
        "type": "object",
        "properties": {
          "requiredRevisionId": {
            "type": "string"
          }
        }
      },
      "CreateSlideRequest": {
        "type": "object",
        "properties": {
          "objectId": { "type": "string" },
          "insertionIndex": { "type": "integer" },
          "slideLayoutReference": { "$ref": "#/definitions/LayoutReference" },
          "placeholderIdMappings": {
            "type": "array",
            "items": { "$ref": "#/definitions/LayoutPlaceholderIdMapping" }
          }
        }
      },
      "LayoutReference": {
        "type": "object",
        "properties": {
          "predefinedLayout": { "type": "string" },
          "layoutId": { "type": "string" }
        }
      },
      "LayoutPlaceholderIdMapping": {
        "type": "object",
        "properties": {
          "layoutPlaceholder": {
            "$ref": "#/definitions/Placeholder"
          },
          "layoutPlaceholderObjectId": {
            "type": "string"
          },
          "objectId": {
            "type": "string"
          }
        }
      },
      "Placeholder": {
        "type": "object",
        "properties": {
          "parentObjectId": {
            "type": "string"
          },
          "index": {
            "type": "integer"
          },
          "type": {
            "type": "string",
            "enum": [
              "NONE",
              "BODY",
              "CHART",
              "CLIP_ART",
              "CENTERED_TITLE",
              "DIAGRAM",
              "DATE_AND_TIME",
              "FOOTER",
              "HEADER",
              "MEDIA",
              "OBJECT",
              "PICTURE",
              "SLIDE_NUMBER",
              "SUBTITLE",
              "TABLE",
              "TITLE",
              "SLIDE_IMAGE"
            ]
          }
        }
      },
      "CreateShapeRequest": {
        "type": "object",
        "properties": {
          "objectId": { "type": "string" },
          "shapeType": { "type": "string" },
          "elementProperties": { "$ref": "#/definitions/PageElementProperties" }
        }
      },
      "PageElementProperties": {
        "type": "object",
        "properties": {
          "pageObjectId": { "type": "string" },
          "size": { "$ref": "#/definitions/Size" },
          "transform": { "$ref": "#/definitions/AffineTransform" }
        }
      },
      "Size": {
        "type": "object",
        "properties": {
          "width": { "$ref": "#/definitions/Dimension" },
          "height": { "$ref": "#/definitions/Dimension" }
        }
      },
      "Dimension": {
        "type": "object",
        "properties": {
          "magnitude": {
            "type": "number"
          },
          "unit": {
            "type": "string",
            "enum": [
              "UNIT_UNSPECIFIED",
              "EMU",
              "PT"
            ]
          }
        }
      },
      "AffineTransform": {
        "type": "object",
        "properties": {
          "scaleX": {
            "type": "number"
          },
          "scaleY": {
            "type": "number"
          },
          "translateX": {
            "type": "number"
          },
          "translateY": {
            "type": "number"
          },
          "shearX": {
            "type": "number"
          },
          "shearY": {
            "type": "number"
          },
          "unit": {
            "type": "string",
            "enum": [
              "UNIT_UNSPECIFIED",
              "EMU",
              "PT"
            ]
          }
        }
      },
      "CreateTableRequest": {
        "type": "object",
        "properties": {
          "objectId": { "type": "string" },
          "elementProperties": { "$ref": "#/definitions/PageElementProperties" },
          "rows": { "type": "integer" },
          "columns": { "type": "integer" }
        }
      },
      "InsertTextRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "insertionIndex": {
            "type": "integer"
          },
          "text": {
            "type": "string"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          }
        }
      },
      "TableCellLocation": {
        "type": "object",
        "properties": {
          "rowIndex": {
            "type": "integer"
          },
          "columnIndex": {
            "type": "integer"
          }
        }
      },
      "InsertTableRowsRequest": {
        "type": "object",
        "properties": {
          "tableObjectId": {
            "type": "string"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          },
          "insertBelow": {
            "type": "boolean"
          },
          "number": {
            "type": "integer"
          }
        }
      },
      "InsertTableColumnsRequest": {
        "type": "object",
        "properties": {
          "tableObjectId": {
            "type": "string"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          },
          "insertRight": {
            "type": "boolean"
          },
          "number": {
            "type": "integer"
          }
        }
      },
      "DeleteTableRowRequest": {
        "type": "object",
        "properties": {
          "tableObjectId": {
            "type": "string"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          }
        }
      },
      "DeleteTableColumnRequest": {
        "type": "object",
        "properties": {
          "tableObjectId": {
            "type": "string"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          }
        }
      },
      "ReplaceAllTextRequest": {
        "type": "object",
        "properties": {
          "replaceText": {
            "type": "string"
          },
          "pageObjectIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "containsText": {
            "$ref": "#/definitions/SubstringMatchCriteria"
          }
        }
      },
      "SubstringMatchCriteria": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string"
          },
          "matchCase": {
            "type": "boolean"
          }
        }
      },
      "DeleteObjectRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          }
        }
      },
      "UpdatePageElementTransformRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "transform": {
            "$ref": "#/definitions/AffineTransform"
          },
          "applyMode": {
            "type": "string",
            "enum": [
              "APPLY_MODE_UNSPECIFIED",
              "RELATIVE",
              "ABSOLUTE"
            ]
          }
        }
      },
      "UpdateSlidesPositionRequest": {
        "type": "object",
        "properties": {
          "slideObjectIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "insertionIndex": {
            "type": "integer"
          }
        }
      },
      "DeleteTextRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          },
          "textRange": {
            "$ref": "#/definitions/Range"
          }
        }
      },
      "Range": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "RANGE_TYPE_UNSPECIFIED",
              "FIXED_RANGE",
              "FROM_START_INDEX",
              "ALL"
            ]
          },
          "startIndex": {
            "type": "integer"
          },
          "endIndex": {
            "type": "integer"
          }
        }
      },
      "CreateImageRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "elementProperties": {
            "$ref": "#/definitions/PageElementProperties"
          }
        }
      },
      "CreateVideoRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "source": {
            "type": "string",
            "enum": [
              "SOURCE_UNSPECIFIED",
              "YOUTUBE",
              "DRIVE"
            ]
          },
          "elementProperties": {
            "$ref": "#/definitions/PageElementProperties"
          }
        }
      },
      "CreateSheetsChartRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "spreadsheetId": {
            "type": "string"
          },
          "chartId": {
            "type": "integer"
          },
          "linkingMode": {
            "type": "string",
            "enum": [
              "NOT_LINKED_IMAGE",
              "LINKED"
            ]
          },
          "elementProperties": {
            "$ref": "#/definitions/PageElementProperties"
          }
        }
      },
      "CreateLineRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "elementProperties": {
            "$ref": "#/definitions/PageElementProperties"
          },
          "lineCategory": {
            "type": "string",
            "enum": [
              "LINE_CATEGORY_UNSPECIFIED",
              "STRAIGHT",
              "BENT",
              "CURVED"
            ]
          }
        }
      },
      "RefreshSheetsChartRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          }
        }
      },
      "UpdateShapePropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "fields": {
            "type": "string"
          },
          "shapeProperties": {
            "$ref": "#/definitions/ShapeProperties"
          }
        }
      },
      "ShapeProperties": {
        "type": "object",
        "properties": {
          "shapeBackgroundFill": {
            "$ref": "#/definitions/ShapeBackgroundFill"
          },
          "outline": {
            "$ref": "#/definitions/Outline"
          },
          "shadow": {
            "$ref": "#/definitions/Shadow"
          },
          "link": {
            "$ref": "#/definitions/Link"
          },
          "contentAlignment": {
            "type": "string"
          }
        }
      },
      "ShapeBackgroundFill": {
        "type": "object",
        "properties": {
          "propertyState": {
            "type": "string"
          },
          "solidFill": {
            "$ref": "#/definitions/SolidFill"
          }
        }
      },
      "SolidFill": {
        "type": "object",
        "properties": {
          "color": {
            "$ref": "#/definitions/OpaqueColor"
          },
          "alpha": {
            "type": "number"
          }
        }
      },
      "OpaqueColor": {
        "type": "object",
        "properties": {
          "rgbColor": {
            "$ref": "#/definitions/RgbColor"
          },
          "themeColor": {
            "type": "string"
          }
        }
      },
      "RgbColor": {
        "type": "object",
        "properties": {
          "red": {
            "type": "number"
          },
          "green": {
            "type": "number"
          },
          "blue": {
            "type": "number"
          }
        }
      },
      "Outline": {
        "type": "object",
        "properties": {
          "outlineFill": {
            "$ref": "#/definitions/OutlineFill"
          },
          "weight": {
            "$ref": "#/definitions/Dimension"
          },
          "dashStyle": {
            "type": "string"
          },
          "propertyState": {
            "type": "string"
          }
        }
      },
      "OutlineFill": {
        "type": "object",
        "properties": {
          "solidFill": {
            "$ref": "#/definitions/SolidFill"
          }
        }
      },
      "Shadow": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "alignment": {
            "type": "string"
          },
          "transform": {
            "$ref": "#/definitions/AffineTransform"
          },
          "blurRadius": {
            "$ref": "#/definitions/Dimension"
          },
          "color": {
            "$ref": "#/definitions/OpaqueColor"
          },
          "alpha": {
            "type": "number"
          },
          "propertyState": {
            "type": "string"
          }
        }
      },
      "Link": {
        "type": "object",
        "properties": {
          "relativeLink": {
            "type": "string"
          },
          "pageObjectId": {
            "type": "string"
          },
          "slideIndex": {
            "type": "integer"
          },
          "url": {
            "type": "string"
          }
        }
      },
      "UpdateImagePropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "fields": {
            "type": "string"
          },
          "imageProperties": {
            "$ref": "#/definitions/ImageProperties"
          }
        }
      },
      "ImageProperties": {
        "type": "object",
        "properties": {
          "outline": {
            "$ref": "#/definitions/Outline"
          },
          "shadow": {
            "$ref": "#/definitions/Shadow"
          },
          "link": {
            "$ref": "#/definitions/Link"
          },
          "brightness": {
            "type": "number"
          },
          "contrast": {
            "type": "number"
          },
          "transparency": {
            "type": "number"
          },
          "recolor": {
            "$ref": "#/definitions/Recolor"
          },
          "cropProperties": {
            "$ref": "#/definitions/CropProperties"
          }
        }
      },
      "Recolor": {
        "type": "object",
        "properties": {
          "recolorStops": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/ColorStop"
            }
          },
          "name": {
            "type": "string"
          }
        }
      },
      "ColorStop": {
        "type": "object",
        "properties": {
          "color": {
            "$ref": "#/definitions/OpaqueColor"
          },
          "alpha": {
            "type": "number"
          },
          "position": {
            "type": "number"
          }
        }
      },
      "CropProperties": {
        "type": "object",
        "properties": {
          "leftOffset": {
            "type": "number"
          },
          "rightOffset": {
            "type": "number"
          },
          "topOffset": {
            "type": "number"
          },
          "bottomOffset": {
            "type": "number"
          },
          "angle": {
            "type": "number"
          }
        }
      },
      "UpdateVideoPropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "fields": {
            "type": "string"
          },
          "videoProperties": {
            "$ref": "#/definitions/VideoProperties"
          }
        }
      },
      "VideoProperties": {
        "type": "object",
        "properties": {
          "outline": {
            "$ref": "#/definitions/Outline"
          },
          "autoPlay": {
            "type": "boolean"
          },
          "start": {
            "type": "integer"
          },
          "end": {
            "type": "integer"
          },
          "mute": {
            "type": "boolean"
          }
        }
      },
      "UpdatePagePropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "fields": {
            "type": "string"
          },
          "pageProperties": {
            "$ref": "#/definitions/PageProperties"
          }
        }
      },
      "PageProperties": {
        "type": "object",
        "properties": {
          "pageBackgroundFill": {
            "$ref": "#/definitions/PageBackgroundFill"
          },
          "colorScheme": {
            "$ref": "#/definitions/ColorScheme"
          }
        }
      },
      "PageBackgroundFill": {
        "type": "object",
        "properties": {
          "propertyState": {
            "type": "string"
          },
          "solidFill": {
            "$ref": "#/definitions/SolidFill"
          },
          "stretchedPictureFill": {
            "$ref": "#/definitions/StretchedPictureFill"
          }
        }
      },
      "StretchedPictureFill": {
        "type": "object",
        "properties": {
          "contentUrl": {
            "type": "string"
          },
          "size": {
            "$ref": "#/definitions/Size"
          }
        }
      },
      "ColorScheme": {
        "type": "object",
        "properties": {
          "colors": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/ThemeColorPair"
            }
          }
        }
      },
      "ThemeColorPair": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "color": {
            "$ref": "#/definitions/RgbColor"
          }
        }
      },
      "UpdateTableCellPropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "tableRange": {
            "$ref": "#/definitions/TableRange"
          },
          "fields": {
            "type": "string"
          },
          "tableCellProperties": {
            "$ref": "#/definitions/TableCellProperties"
          }
        }
      },
      "TableRange": {
        "type": "object",
        "properties": {
          "location": {
            "$ref": "#/definitions/TableCellLocation"
          },
          "rowSpan": {
            "type": "integer"
          },
          "columnSpan": {
            "type": "integer"
          }
        }
      },
      "TableCellProperties": {
        "type": "object",
        "properties": {
          "tableCellBackgroundFill": {
            "$ref": "#/definitions/TableCellBackgroundFill"
          },
          "contentAlignment": {
            "type": "string"
          }
        }
      },
      "TableCellBackgroundFill": {
        "type": "object",
        "properties": {
          "propertyState": {
            "type": "string"
          },
          "solidFill": {
            "$ref": "#/definitions/SolidFill"
          }
        }
      },
      "UpdateLinePropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "fields": {
            "type": "string"
          },
          "lineProperties": {
            "$ref": "#/definitions/LineProperties"
          }
        }
      },
      "LineProperties": {
        "type": "object",
        "properties": {
          "lineFill": {
            "$ref": "#/definitions/LineFill"
          },
          "weight": {
            "$ref": "#/definitions/Dimension"
          },
          "dashStyle": {
            "type": "string"
          },
          "startArrow": {
            "type": "string"
          },
          "endArrow": {
            "type": "string"
          },
          "link": {
            "$ref": "#/definitions/Link"
          }
        }
      },
      "LineFill": {
        "type": "object",
        "properties": {
          "solidFill": {
            "$ref": "#/definitions/SolidFill"
          }
        }
      },
      "CreateParagraphBulletsRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "textRange": {
            "$ref": "#/definitions/Range"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          },
          "bulletPreset": {
            "type": "string"
          }
        }
      },
      "ReplaceAllShapesWithImageRequest": {
        "type": "object",
        "properties": {
          "imageUrl": {
            "type": "string"
          },
          "replaceMethod": {
            "type": "string"
          },
          "containsText": {
            "$ref": "#/definitions/SubstringMatchCriteria"
          },
          "pageObjectIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "DuplicateObjectRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "objectIds": {
            "type": "object",
            "additionalProperties": {
              "type": "string"
            }
          }
        }
      },
      "UpdateTextStyleRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "textRange": {
            "$ref": "#/definitions/Range"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          },
          "style": {
            "$ref": "#/definitions/TextStyle"
          },
          "fields": {
            "type": "string"
          }
        }
      },
      "TextStyle": {
        "type": "object",
        "properties": {
          "foregroundColor": {
            "$ref": "#/definitions/OptionalColor"
          },
          "backgroundColor": {
            "$ref": "#/definitions/OptionalColor"
          },
          "bold": {
            "type": "boolean"
          },
          "italic": {
            "type": "boolean"
          },
          "underline": {
            "type": "boolean"
          },
          "strikethrough": {
            "type": "boolean"
          },
          "smallCaps": {
            "type": "boolean"
          },
          "fontFamily": {
            "type": "string"
          },
          "fontSize": {
            "$ref": "#/definitions/Dimension"
          },
          "link": {
            "$ref": "#/definitions/Link"
          },
          "baselineOffset": {
            "type": "string"
          }
        }
      },
      "OptionalColor": {
        "type": "object",
        "properties": {
          "opaqueColor": {
            "$ref": "#/definitions/OpaqueColor"
          }
        }
      },
      "ReplaceAllShapesWithSheetsChartRequest": {
        "type": "object",
        "properties": {
          "spreadsheetId": {
            "type": "string"
          },
          "chartId": {
            "type": "integer"
          },
          "linkingMode": {
            "type": "string"
          },
          "containsText": {
            "$ref": "#/definitions/SubstringMatchCriteria"
          },
          "pageObjectIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "DeleteParagraphBulletsRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "textRange": {
            "$ref": "#/definitions/Range"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          }
        }
      },
      "UpdateParagraphStyleRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "textRange": {
            "$ref": "#/definitions/Range"
          },
          "cellLocation": {
            "$ref": "#/definitions/TableCellLocation"
          },
          "style": {
            "$ref": "#/definitions/ParagraphStyle"
          },
          "fields": {
            "type": "string"
          }
        }
      },
      "ParagraphStyle": {
        "type": "object",
        "properties": {
          "lineSpacing": {
            "type": "number"
          },
          "alignment": {
            "type": "string"
          },
          "indentStart": {
            "$ref": "#/definitions/Dimension"
          },
          "indentEnd": {
            "$ref": "#/definitions/Dimension"
          },
          "spaceAbove": {
            "$ref": "#/definitions/Dimension"
          },
          "spaceBelow": {
            "$ref": "#/definitions/Dimension"
          },
          "indentFirstLine": {
            "$ref": "#/definitions/Dimension"
          },
          "direction": {
            "type": "string"
          },
          "spacingMode": {
            "type": "string"
          }
        }
      },
      "UpdateTableBorderPropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "tableRange": {
            "$ref": "#/definitions/TableRange"
          },
          "borderPosition": {
            "type": "string"
          },
          "tableBorderProperties": {
            "$ref": "#/definitions/TableBorderProperties"
          },
          "fields": {
            "type": "string"
          }
        }
      },
      "TableBorderProperties": {
        "type": "object",
        "properties": {
          "tableBorderFill": {
            "$ref": "#/definitions/TableBorderFill"
          },
          "weight": {
            "$ref": "#/definitions/Dimension"
          },
          "dashStyle": {
            "type": "string"
          }
        }
      },
      "TableBorderFill": {
        "type": "object",
        "properties": {
          "solidFill": {
            "$ref": "#/definitions/SolidFill"
          }
        }
      },
      "UpdateTableColumnPropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "columnIndices": {
            "type": "array",
            "items": {
              "type": "integer"
            }
          },
          "tableColumnProperties": {
            "$ref": "#/definitions/TableColumnProperties"
          },
          "fields": {
            "type": "string"
          }
        }
      },
      "TableColumnProperties": {
        "type": "object",
        "properties": {
          "columnWidth": {
            "$ref": "#/definitions/Dimension"
          }
        }
      },
      "UpdateTableRowPropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "rowIndices": {
            "type": "array",
            "items": {
              "type": "integer"
            }
          },
          "tableRowProperties": {
            "$ref": "#/definitions/TableRowProperties"
          },
          "fields": {
            "type": "string"
          }
        }
      },
      "TableRowProperties": {
        "type": "object",
        "properties": {
          "minRowHeight": {
            "$ref": "#/definitions/Dimension"
          }
        }
      },
      "MergeTableCellsRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "tableRange": {
            "$ref": "#/definitions/TableRange"
          }
        }
      },
      "UnmergeTableCellsRequest": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "tableRange": {
            "$ref": "#/definitions/TableRange"
          }
        }
      },
      "GroupObjectsRequest": {
        "type": "object",
        "properties": {
          "childrenObjectIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "groupObjectId": {
            "type": "string"
          }
        }
      },
      "UngroupObjectsRequest": {
        "type": "object",
        "properties": {
          "objectIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "UpdatePageElementAltTextRequest": {
        "type": "object",
        "properties": {
          "objectId": { "type": "string" },
          "title": { "type": "string" },
          "description": { "type": "string" }
        }
      },
      "ReplaceImageRequest": {
        "type": "object",
        "properties": {
          "imageObjectId": { "type": "string" },
          "url": { "type": "string" },
          "imageReplaceMethod": { "type": "string" }
        }
      },
      "UpdateSlidePropertiesRequest": {
        "type": "object",
        "properties": {
          "objectId": { "type": "string" },
          "slideProperties": { "$ref": "#/definitions/SlideProperties" },
          "fields": { "type": "string" }
        }
      },
      "SlideProperties": {
        "type": "object",
        "properties": {
          "notesPage": { "$ref": "#/definitions/Page" },
          "isSkipped": { "type": "boolean" },
          "layoutObjectId": { "type": "string" },
          "masterObjectId": { "type": "string" }
        }
      },
      "Page": {
        "type": "object",
        "properties": {
          "objectId": { "type": "string" },
          "pageType": { "type": "string" },
          "pageElements": {
            "type": "array",
            "items": { "$ref": "#/definitions/PageElement" }
          },
          "revisionId": { "type": "string" },
          "pageProperties": { "$ref": "#/definitions/PageProperties" },
          "slideProperties": { "$ref": "#/definitions/SlideProperties" },
          "layoutProperties": { "$ref": "#/definitions/LayoutProperties" },
          "notesProperties": { "$ref": "#/definitions/NotesProperties" },
          "masterProperties": { "$ref": "#/definitions/MasterProperties" }
        }
      },
      "PageElement": {
        "type": "object",
        "properties": {
          "objectId": {
            "type": "string"
          },
          "size": {
            "$ref": "#/definitions/Size"
          },
          "transform": {
            "$ref": "#/definitions/AffineTransform"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "elementGroup": {
            "$ref": "#/definitions/Group"
          },
          "shape": {
            "$ref": "#/definitions/Shape"
          },
          "image": {
            "$ref": "#/definitions/Image"
          },
          "video": {
            "$ref": "#/definitions/Video"
          },
          "line": {
            "$ref": "#/definitions/Line"
          },
          "table": {
            "$ref": "#/definitions/Table"
          },
          "wordArt": {
            "$ref": "#/definitions/WordArt"
          },
          "sheetsChart": {
            "$ref": "#/definitions/SheetsChart"
          }
        }
      },
      "Group": {
        "type": "object",
        "properties": {
          "children": {
            "type": "array",
            "items": { "$ref": "#/definitions/PageElement" }
          }
        }
      },
      "Shape": {
        "type": "object",
        "properties": {
          "shapeType": { "type": "string" },
          "text": { "$ref": "#/definitions/TextContent" },
          "shapeProperties": { "$ref": "#/definitions/ShapeProperties" },
          "placeholder": { "$ref": "#/definitions/Placeholder" }
        }
      },
      "TextContent": {
        "type": "object",
        "properties": {
          "textElements": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/TextElement"
            }
          },
          "lists": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/List"
            }
          }
        }
      },
      "TextElement": {
        "type": "object",
        "properties": {
          "startIndex": {
            "type": "integer"
          },
          "endIndex": {
            "type": "integer"
          },
          "paragraphMarker": {
            "$ref": "#/definitions/ParagraphMarker"
          },
          "textRun": {
            "$ref": "#/definitions/TextRun"
          },
          "autoText": {
            "$ref": "#/definitions/AutoText"
          }
        }
      },
      "ParagraphMarker": {
        "type": "object",
        "properties": {
          "style": {
            "$ref": "#/definitions/ParagraphStyle"
          },
          "bullet": {
            "$ref": "#/definitions/Bullet"
          }
        }
      },
      "Bullet": {
        "type": "object",
        "properties": {
          "listId": { "type": "string" },
          "nestingLevel": { "type": "integer" },
          "glyph": { "type": "string" },
          "bulletStyle": { "$ref": "#/definitions/TextStyle" }
        }
      },
      "TextRun": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          },
          "style": {
            "$ref": "#/definitions/TextStyle"
          }
        }
      },
      "AutoText": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "content": {
            "type": "string"
          },
          "style": {
            "$ref": "#/definitions/TextStyle"
          }
        }
      },
      "List": {
        "type": "object",
        "properties": {
          "listId": {
            "type": "string"
          },
          "nestingLevel": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/definitions/NestingLevel"
            }
          }
        }
      },
      "NestingLevel": {
        "type": "object",
        "properties": {
          "bulletStyle": {
            "$ref": "#/definitions/TextStyle"
          }
        }
      },
      "Image": {
        "type": "object",
        "properties": {
          "sourceUrl": {
            "type": "string"
          },
          "contentUrl": {
            "type": "string"
          },
          "imageProperties": {
            "$ref": "#/definitions/ImageProperties"
          },
          "placeholder": {
            "$ref": "#/definitions/Placeholder"
          }
        }
      },
      "Video": {
        "type": "object",
        "properties": {
          "source": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "videoProperties": {
            "$ref": "#/definitions/VideoProperties"
          }
        }
      },
      "Line": {
        "type": "object",
        "properties": {
          "lineType": {
            "type": "string"
          },
          "lineCategory": {
            "type": "string"
          },
          "lineProperties": {
            "$ref": "#/definitions/LineProperties"
          }
        }
      },
      "Table": {
        "type": "object",
        "properties": {
          "rows": {
            "type": "integer"
          },
          "columns": {
            "type": "integer"
          },
          "tableRows": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/TableRow"
            }
          },
          "tableColumns": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/TableColumn"
            }
          },
          "horizontalBorderRows": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/TableBorderRow"
            }
          },
          "verticalBorderRows": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/TableBorderRow"
            }
          }
        }
      },
      "TableRow": {
        "type": "object",
        "properties": {
          "rowHeight": {
            "$ref": "#/definitions/Dimension"
          },
          "tableCells": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/TableCell"
            }
          },
          "tableRowProperties": {
            "$ref": "#/definitions/TableRowProperties"
          }
        }
      },
      "TableCell": {
        "type": "object",
        "properties": {
          "location": {
            "$ref": "#/definitions/TableCellLocation"
          },
          "rowSpan": {
            "type": "integer"
          },
          "columnSpan": {
            "type": "integer"
          },
          "text": {
            "$ref": "#/definitions/TextContent"
          },
          "tableCellProperties": {
            "$ref": "#/definitions/TableCellProperties"
          }
        }
      },
      "TableColumn": {
        "type": "object",
        "properties": {
          "tableColumnProperties": {
            "$ref": "#/definitions/TableColumnProperties"
          }
        }
      },
      "TableBorderRow": {
        "type": "object",
        "properties": {
          "tableBorderCells": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/TableBorderCell"
            }
          }
        }
      },
      "TableBorderCell": {
        "type": "object",
        "properties": {
          "location": {
            "$ref": "#/definitions/TableCellLocation"
          },
          "tableBorderProperties": {
            "$ref": "#/definitions/TableBorderProperties"
          }
        }
      },
      "WordArt": {
        "type": "object",
        "properties": {
          "renderedText": {
            "type": "string"
          }
        }
      },
      "SheetsChart": {
        "type": "object",
        "properties": {
          "spreadsheetId": {
            "type": "string"
          },
          "chartId": {
            "type": "integer"
          },
          "contentUrl": {
            "type": "string"
          },
          "sheetsChartProperties": {
            "$ref": "#/definitions/SheetsChartProperties"
          }
        }
      },
      "SheetsChartProperties": {
        "type": "object",
        "properties": {
          "chartImageProperties": {
            "$ref": "#/definitions/ImageProperties"
          }
        }
      },
      "LayoutProperties": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "displayName": { "type": "string" },
          "masterObjectId": { "type": "string" }
        }
      },
      "NotesProperties": {
        "type": "object",
        "properties": {
          "speakerNotesObjectId": { "type": "string" }
        }
      },
      "MasterProperties": {
        "type": "object",
        "properties": {
          "displayName": { "type": "string" }
        }
      },
      "UpdatePageElementsZOrderRequest": {
        "type": "object",
        "properties": {
          "pageElementObjectIds": {
            "type": "array",
            "items": { "type": "string" }
          },
          "operation": { "type": "string" }
        }
      },
      "UpdateLineCategoryRequest": {
        "type": "object",
        "properties": {
          "objectId": { "type": "string" },
          "lineCategory": { "type": "string" }
        }
      },
      "RerouteLineRequest": {
        "type": "object",
        "properties": {
          "objectId": { "type": "string" }
        }
      }
    }
  },

  Get: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Presentation",
    "description": "A Google Slides presentation.",
    "type": "object",
    "properties": {
      "presentationId": {
        "type": "string",
        "description": "The ID of the presentation."
      },
      "pageSize": {
        "$ref": "#/$defs/Size"
      },
      "slides": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/Page"
        },
        "description": "The slides in the presentation."
      },
      "title": {
        "type": "string",
        "description": "The title of the presentation."
      },
      "masters": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/Page"
        },
        "description": "The slide masters in the presentation."
      },
      "layouts": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/Page"
        },
        "description": "The layouts in the presentation."
      },
      "locale": {
        "type": "string",
        "description": "The locale of the presentation, as an IETF BCP 47 language tag."
      },
      "revisionId": {
        "type": "string",
        "description": "Output only. The revision ID of the presentation.",
        "readOnly": true
      },
      "notesMaster": {
        "$ref": "#/$defs/Page"
      }
    },
    "$defs": {
      "Size": {
        "type": "object",
        "properties": {
          "width": {
            "$ref": "#/$defs/Dimension"
          },
          "height": {
            "$ref": "#/$defs/Dimension"
          }
        }
      },
      "Dimension": {
        "type": "object",
        "properties": {
          "magnitude": {
            "type": "number"
          },
          "unit": {
            "type": "string",
            "enum": ["UNIT_UNSPECIFIED", "EMU", "PT"]
          }
        }
      },
      "Page": {
        "type": "object",
        "description": "A page in a presentation.",
        "properties": {
          "objectId": {
            "type": "string",
            "description": "The object ID for this page."
          },
          "pageType": {
            "type": "string",
            "enum": ["SLIDE", "MASTER", "LAYOUT", "NOTES", "NOTES_MASTER"],
            "description": "The type of the page."
          },
          "pageElements": {
            "type": "array",
            "items": {
              "type": "object"
            },
            "description": "The page elements rendered on the page."
          },
          "revisionId": {
            "type": "string",
            "description": "Output only. The revision ID of the presentation.",
            "readOnly": true
          },
          "pageProperties": {
            "$ref": "#/$defs/PageProperties"
          },
          "slideProperties": {
            "$ref": "#/$defs/SlideProperties"
          },
          "layoutProperties": {
            "$ref": "#/$defs/LayoutProperties"
          },
          "notesProperties": {
            "$ref": "#/$defs/NotesProperties"
          },
          "masterProperties": {
            "$ref": "#/$defs/MasterProperties"
          }
        }
      },
      "PageProperties": {
        "type": "object",
        "properties": {
          "pageBackgroundFill": {
            "type": "object"
          },
          "colorScheme": {
            "type": "object"
          }
        }
      },
      "SlideProperties": {
        "type": "object",
        "properties": {
          "layoutObjectId": {
            "type": "string"
          },
          "masterObjectId": {
            "type": "string"
          },
          "notesPage": {
            "$ref": "#/$defs/Page"
          },
          "isSkipped": {
            "type": "boolean"
          }
        }
      },
      "LayoutProperties": {
        "type": "object",
        "properties": {
          "masterObjectId": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "displayName": {
            "type": "string"
          }
        }
      },
      "NotesProperties": {
        "type": "object",
        "properties": {
          "speakerNotesObjectId": {
            "type": "string"
          }
        }
      },
      "MasterProperties": {
        "type": "object",
        "properties": {
          "displayName": {
            "type": "string"
          }
        }
      }
    }
  },

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

  PersonResponse: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "People API getBatchGet Response",
    "description": "Response body for the people.getBatchGet method in the Google People API.",
    "type": "object",
    "properties": {
      "responses": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PersonResponse"
        }
      }
    },
    "definitions": {
      "PersonResponse": {
        "type": "object",
        "properties": {
          "person": {
            "$ref": "#/definitions/Person"
          },
          "requestedResourceName": {
            "type": "string"
          },
          "status": {
            "$ref": "#/definitions/Status"
          }
        }
      },
      "Person": {
        "type": "object",
        "properties": {
          "resourceName": {
            "type": "string",
            "description": "The resource name for the person, assigned by the server."
          },
          "etag": {
            "type": "string",
            "description": "The HTTP entity tag of the resource."
          },
          "names": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "displayName": {
                  "type": "string"
                },
                "familyName": {
                  "type": "string"
                },
                "givenName": {
                  "type": "string"
                }
              }
            }
          },
          "emailAddresses": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "value": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "Status": {
        "type": "object",
        "properties": {
          "code": {
            "type": "integer",
            "description": "The status code, which should be an enum value of google.rpc.Code."
          },
          "message": {
            "type": "string",
            "description": "A developer-facing error message, which should be in English."
          },
          "details": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "@type": {
                  "type": "string"
                }
              },
              "additionalProperties": true
            }
          }
        }
      }
    }
  },

  SearchResponse: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "SearchResponse",
    "description": "The response to a search request for the authenticated user, given a query.",
    "type": "object",
    "properties": {
      "results": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/SearchResult"
        }
      }
    },
    "definitions": {
      "SearchResult": {
        "type": "object",
        "properties": {
          "person": {
            "$ref": "#/definitions/Person"
          }
        }
      },
      "Person": {
        "type": "object",
        "properties": {
          "resourceName": {
            "type": "string"
          },
          "etag": {
            "type": "string"
          },
          "metadata": {
            "type": "object"
          },
          "addresses": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "ageRange": {
            "type": "string"
          },
          "ageRanges": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "biographies": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "birthdays": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "braggingRights": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "calendarUrls": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "clientData": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "coverPhotos": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "emailAddresses": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "events": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "externalIds": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "fileAses": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "genders": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "imClients": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "interests": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "locales": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "locations": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "memberships": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "miscKeywords": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "names": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "nicknames": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "occupations": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "organizations": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "phoneNumbers": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "photos": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relations": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relationshipInterests": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relationshipStatuses": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "residences": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "sipAddresses": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "skills": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "taglines": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "urls": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "userDefined": {
            "type": "array",
            "items": {
              "type": "object"
            }
          }
        }
      }
    }
  },

};

const jsonSchemaDrive = {
  Comment: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Drive API Comment",
    "description": "JSON schema for the Comment resource in the Google Drive API.",
    "type": "object",
    "properties": {
      "anchor": {
        "type": "string",
        "description": "A region of the document represented as a JSON string."
      },
      "author": {
        "$ref": "#/definitions/User",
        "description": "The user who created the comment."
      },
      "content": {
        "type": "string",
        "description": "The plain text content of the comment."
      },
      "createdTime": {
        "type": "string",
        "description": "The time at which the comment was created (RFC 3339 date-time).",
        "format": "date-time"
      },
      "deleted": {
        "type": "boolean",
        "description": "Whether the comment has been deleted. A deleted comment has no content."
      },
      "htmlContent": {
        "type": "string",
        "description": "The content of the comment with HTML formatting."
      },
      "id": {
        "type": "string",
        "description": "The ID of the comment."
      },
      "kind": {
        "type": "string",
        "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#comment\".",
        "const": "drive#comment"
      },
      "modifiedTime": {
        "type": "string",
        "description": "The last time the comment or any of its replies was modified (RFC 3339 date-time).",
        "format": "date-time"
      },
      "quotedFileContent": {
        "type": "object",
        "description": "The file content to which the comment refers.",
        "properties": {
          "mimeType": {
            "type": "string",
            "description": "The MIME type of the quoted content."
          },
          "value": {
            "type": "string",
            "description": "The quoted content itself."
          }
        }
      },
      "replies": {
        "type": "array",
        "description": "The full list of replies to the comment in chronological order.",
        "items": {
          "$ref": "#/definitions/Reply"
        }
      },
      "resolved": {
        "type": "boolean",
        "description": "Whether the comment has been resolved by one of its replies."
      }
    },
    "definitions": {
      "User": {
        "type": "object",
        "description": "Information about a Drive user.",
        "properties": {
          "displayName": {
            "type": "string",
            "description": "A plain text displayable name for this user."
          },
          "kind": {
            "type": "string",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#user\".",
            "const": "drive#user"
          },
          "me": {
            "type": "boolean",
            "description": "Whether this user is the requesting user."
          },
          "permissionId": {
            "type": "string",
            "description": "The user's ID as visible in Permission resources."
          },
          "emailAddress": {
            "type": "string",
            "description": "The email address of the user.",
            "format": "email"
          },
          "photoLink": {
            "type": "string",
            "description": "A link to the user's profile photo, if available.",
            "format": "uri"
          }
        }
      },
      "Reply": {
        "type": "object",
        "description": "A reply to a comment on a file.",
        "properties": {
          "action": {
            "type": "string",
            "description": "The action the reply performed to the parent comment. Valid values are: resolve, reopen."
          },
          "author": {
            "$ref": "#/definitions/User",
            "description": "The user who created the reply."
          },
          "content": {
            "type": "string",
            "description": "The plain text content of the reply."
          },
          "createdTime": {
            "type": "string",
            "description": "The time at which the reply was created (RFC 3339 date-time).",
            "format": "date-time"
          },
          "deleted": {
            "type": "boolean",
            "description": "Whether the reply has been deleted. A deleted reply has no content."
          },
          "htmlContent": {
            "type": "string",
            "description": "The content of the reply with HTML formatting."
          },
          "id": {
            "type": "string",
            "description": "The ID of the reply."
          },
          "kind": {
            "type": "string",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#reply\".",
            "const": "drive#reply"
          },
          "modifiedTime": {
            "type": "string",
            "description": "The last time the reply was modified (RFC 3339 date-time).",
            "format": "date-time"
          }
        }
      }
    }
  },

  Revision: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Drive API Revision Resource",
    "description": "JSON schema for the Resource: Revision of the Google Drive API. [1]",
    "type": "object",
    "properties": {
      "kind": {
        "type": "string",
        "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#revision\". [1]",
        "const": "drive#revision",
        "readOnly": true
      },
      "id": {
        "type": "string",
        "description": "The ID of the revision. [1]",
        "readOnly": true
      },
      "mimeType": {
        "type": "string",
        "description": "The MIME type of the revision. [1]",
        "readOnly": true
      },
      "modifiedTime": {
        "type": "string",
        "description": "The last time the revision was modified (RFC 3339 date-time). [1]",
        "format": "date-time",
        "readOnly": true
      },
      "keepForever": {
        "type": "boolean",
        "description": "Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive. [1]",
        "default": false
      },
      "published": {
        "type": "boolean",
        "description": "Whether this revision is published. This is only applicable to Docs Editors files. [1]",
        "default": false
      },
      "publishedLink": {
        "type": "string",
        "description": "A link to the published revision. This is only populated for Docs Editors files. [1]",
        "readOnly": true
      },
      "publishAuto": {
        "type": "boolean",
        "description": "Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files. [1]",
        "default": false
      },
      "publishedOutsideDomain": {
        "type": "boolean",
        "description": "Whether this revision is published outside the domain. This is only applicable to Docs Editors files. [1]",
        "default": false
      },
      "lastModifyingUser": {
        "description": "The last user to modify this revision. This field is only populated when the last modification was performed by a signed-in user. [1]",
        "type": "object",
        "properties": {
          "kind": {
            "type": "string",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#user\". [2]",
            "const": "drive#user",
            "readOnly": true
          },
          "displayName": {
            "type": "string",
            "description": "A plain text displayable name for this user. [2]",
            "readOnly": true
          },
          "photoLink": {
            "type": "string",
            "description": "A link to the user's profile photo, if available. [2]",
            "readOnly": true
          },
          "me": {
            "type": "boolean",
            "description": "Whether this user is the requesting user. [2]",
            "readOnly": true
          },
          "permissionId": {
            "type": "string",
            "description": "The user's ID as visible in Permission resources. [2]",
            "readOnly": true
          },
          "emailAddress": {
            "type": "string",
            "description": "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. [2]",
            "format": "email",
            "readOnly": true
          }
        },
        "required": [
          "kind",
          "displayName",
          "photoLink",
          "me",
          "permissionId",
          "emailAddress"
        ],
        "readOnly": true
      },
      "originalFilename": {
        "type": "string",
        "description": "The original filename used to create this revision. This is only applicable to files with binary content in Drive. [1]",
        "readOnly": true
      },
      "md5Checksum": {
        "type": "string",
        "description": "The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive. [1]",
        "readOnly": true
      },
      "size": {
        "type": "string",
        "description": "The size of the revision's content in bytes. This is only applicable to files with binary content in Drive. [1]",
        "format": "int64",
        "readOnly": true
      },
      "exportLinks": {
        "type": "object",
        "description": "Links for exporting Docs Editors files to specific formats. [1]",
        "additionalProperties": {
          "type": "string"
        },
        "readOnly": true
      }
    },
    "required": [
      "kind",
      "id",
      "mimeType",
      "modifiedTime"
    ]
  },

  DriveActivity: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Response body of Method: activity.query",
    "description": "JSON schema for the response body of the Google Drive Activity API's activity.query method.",
    "type": "object",
    "properties": {
      "activities": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/DriveActivity"
        }
      },
      "nextPageToken": {
        "type": "string"
      }
    },
    "definitions": {
      "DriveActivity": {
        "type": "object",
        "description": "A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. [3]",
        "properties": {
          "primaryActionDetail": {
            "$ref": "#/definitions/ActionDetail"
          },
          "actors": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Actor"
            }
          },
          "actions": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Action"
            }
          },
          "targets": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Target"
            }
          },
          "timestamp": {
            "type": "string",
            "format": "date-time",
            "description": "The activity occurred at this specific time. [3, 6]"
          },
          "timeRange": {
            "type": "object",
            "properties": {
              "startTime": {
                "type": "string",
                "format": "date-time"
              },
              "endTime": {
                "type": "string",
                "format": "date-time"
              }
            }
          }
        }
      },
      "ActionDetail": {
        "type": "object",
        "description": "Data describing the type and additional information of an action. This is a union field; only one of its properties can be present. [2]"
      },
      "Actor": {
        "type": "object",
        "description": "The actor of a Drive activity. This is a union field; only one of its properties can be present. [4]"
      },
      "Action": {
        "type": "object",
        "description": "Information about the action. [1]",
        "properties": {
          "detail": {
            "$ref": "#/definitions/ActionDetail"
          },
          "actor": {
            "$ref": "#/definitions/Actor"
          },
          "target": {
            "$ref": "#/definitions/Target"
          },
          "timestamp": {
            "type": "string",
            "format": "date-time"
          },
          "timeRange": {
            "type": "object",
            "properties": {
              "startTime": {
                "type": "string",
                "format": "date-time"
              },
              "endTime": {
                "type": "string",
                "format": "date-time"
              }
            }
          }
        }
      },
      "Target": {
        "type": "object",
        "description": "Information about the target of activity. This is a union field; only one of its properties can be present. [5]"
      }
    }
  },

};

const jsonSchemaAnalyticsAdmin = {
  AccountSummary: {
    "title": "AccountSummary",
    "description": "A virtual resource representing an overview of an account and all its child Google Analytics properties. [2]",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "Resource name for this account summary. Format: accountSummaries/{account_id} Example: \"accountSummaries/1000\" [2]"
      },
      "account": {
        "type": "string",
        "description": "Resource name of account referred to by this account summary Format: accounts/{account_id} Example: \"accounts/1000\" [2]"
      },
      "displayName": {
        "type": "string",
        "description": "Display name for the account referred to in this account summary. [2]"
      },
      "propertySummaries": {
        "type": "array",
        "description": "List of summaries for child accounts of this account. [2]",
        "items": {
          "type": "object",
          "title": "PropertySummary",
          "description": "A virtual resource representing metadata for a Google Analytics property. [1]",
          "properties": {
            "property": {
              "type": "string",
              "description": "Resource name of property referred to by this property summary Format: properties/{property_id} Example: \"properties/1000\" [1]"
            },
            "displayName": {
              "type": "string",
              "description": "Display name for the property referred to in this property summary. [1]"
            },
            "propertyType": {
              "type": "string",
              "description": "The property's property type. [1]",
              "enum": [
                "PROPERTY_TYPE_UNSPECIFIED",
                "PROPERTY_TYPE_ORDINARY",
                "PROPERTY_TYPE_SUBPROPERTY",
                "PROPERTY_TYPE_ROLLUP"
              ]
            },
            "parent": {
              "type": "string",
              "description": "Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: \"accounts/100\", \"properties/200\" [1]"
            }
          },
          "required": [
            "property",
            "displayName",
            "propertyType",
            "parent"
          ]
        }
      }
    },
    "required": [
      "name",
      "account",
      "displayName",
      "propertySummaries"
    ]
  },

  Property: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Analytics Admin API Property",
    "description": "A resource message representing a Google Analytics property.",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "Output only. Resource name of this property. Format: properties/{property_id} Example: \"properties/1000\"",
        "readOnly": true
      },
      "propertyType": {
        "type": "string",
        "description": "Immutable. The property type for this Property resource. When creating a property, if the type is \"PROPERTY_TYPE_UNSPECIFIED\", then \"ORDINARY_PROPERTY\" will be implied.",
        "enum": [
          "PROPERTY_TYPE_UNSPECIFIED",
          "PROPERTY_TYPE_ORDINARY",
          "PROPERTY_TYPE_SUBPROPERTY",
          "PROPERTY_TYPE_ROLLUP"
        ]
      },
      "createTime": {
        "type": "string",
        "description": "Output only. Time when the entity was originally created.",
        "format": "date-time",
        "readOnly": true
      },
      "updateTime": {
        "type": "string",
        "description": "Output only. Time when entity payload fields were last updated.",
        "format": "date-time",
        "readOnly": true
      },
      "parent": {
        "type": "string",
        "description": "Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: \"accounts/100\", \"properties/101\""
      },
      "displayName": {
        "type": "string",
        "description": "Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units."
      },
      "industryCategory": {
        "type": "string",
        "description": "Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK",
        "enum": [
          "INDUSTRY_CATEGORY_UNSPECIFIED",
          "AUTOMOTIVE",
          "BUSINESS_AND_INDUSTRIAL_MARKETS",
          "FINANCE",
          "HEALTHCARE",
          "TECHNOLOGY",
          "TRAVEL",
          "OTHER",
          "ARTS_AND_ENTERTAINMENT",
          "BEAUTY_AND_FITNESS",
          "BOOKS_AND_LITERATURE",
          "FOOD_AND_DRINK",
          "GAMES",
          "HOBBIES_AND_LEISURE",
          "HOME_AND_GARDEN",
          "INTERNET_AND_TELECOM",
          "LAW_AND_GOVERNMENT",
          "NEWS",
          "ONLINE_COMMUNITIES",
          "PEOPLE_AND_SOCIETY",
          "PETS_AND_ANIMALS",
          "REAL_ESTATE",
          "REFERENCE",
          "SCIENCE",
          "SPORTS",
          "JOBS_AND_EDUCATION",
          "SHOPPING"
        ]
      },
      "timeZone": {
        "type": "string",
        "description": "Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: \"America/Los_Angeles\""
      },
      "currencyCode": {
        "type": "string",
        "description": "The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: \"USD\", \"EUR\", \"JPY\""
      },
      "serviceLevel": {
        "type": "string",
        "description": "Output only. The Google Analytics service level that applies to this property.",
        "enum": [
          "SERVICE_LEVEL_UNSPECIFIED",
          "GOOGLE_ANALYTICS_STANDARD",
          "GOOGLE_ANALYTICS_360"
        ],
        "readOnly": true
      },
      "deleteTime": {
        "type": "string",
        "description": "Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can.",
        "format": "date-time",
        "readOnly": true
      },
      "expireTime": {
        "type": "string",
        "description": "Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted.",
        "format": "date-time",
        "readOnly": true
      },
      "account": {
        "type": "string",
        "description": "Immutable. The resource name of the parent account Format: accounts/{account_id} Example: \"accounts/123\""
      }
    },
    "required": [
      "displayName",
      "timeZone"
    ]
  },

};

const jsonSchemaAnalyticsData = {

  RunReport: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Analytics Data API runReport Request Body",
    "description": "JSON schema for the request body of the Method: properties.runReport of the Google Analytics Data API.",
    "type": "object",
    "properties": {
      "dimensions": {
        "type": "array",
        "description": "The dimensions requested and displayed.",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the dimension."
            },
            "dimensionExpression": {
              "type": "object",
              "description": "One dimension can be the result of an expression of multiple dimensions.",
              "properties": {
                "lowerCase": {
                  "type": "object",
                  "properties": {
                    "dimensionName": {
                      "type": "string"
                    }
                  }
                },
                "upperCase": {
                  "type": "object",
                  "properties": {
                    "dimensionName": {
                      "type": "string"
                    }
                  }
                },
                "concatenate": {
                  "type": "object",
                  "properties": {
                    "dimensionNames": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "delimiter": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "metrics": {
        "type": "array",
        "description": "The metrics requested and displayed.",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the metric."
            },
            "expression": {
              "type": "string",
              "description": "A mathematical expression for derived metrics."
            },
            "invisible": {
              "type": "boolean",
              "description": "Indicates if a metric is invisible in the report response."
            }
          }
        }
      },
      "dateRanges": {
        "type": "array",
        "description": "Date ranges of data to read.",
        "items": {
          "type": "object",
          "properties": {
            "startDate": {
              "type": "string",
              "description": "The inclusive start date for the query in the format YYYY-MM-DD."
            },
            "endDate": {
              "type": "string",
              "description": "The inclusive end date for the query in the format YYYY-MM-DD."
            },
            "name": {
              "type": "string",
              "description": "Assigns a name to this date range."
            }
          }
        }
      },
      "dimensionFilter": {
        "type": "object",
        "description": "Dimension filters let you ask for only specific dimension values in the report.",
        "properties": {
          "andGroup": {
            "type": "object",
            "properties": {
              "expressions": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "andGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "orGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "notExpression": {
                      "type": "object"
                    },
                    "filter": {
                      "type": "object",
                      "properties": {
                        "fieldName": {
                          "type": "string"
                        },
                        "stringFilter": {
                          "type": "object",
                          "properties": {
                            "matchType": {
                              "type": "string",
                              "enum": [
                                "MATCH_TYPE_UNSPECIFIED",
                                "EXACT",
                                "BEGINS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "FULL_REGEXP",
                                "PARTIAL_REGEXP"
                              ]
                            },
                            "value": {
                              "type": "string"
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "inListFilter": {
                          "type": "object",
                          "properties": {
                            "values": {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "numericFilter": {
                          "type": "object",
                          "properties": {
                            "operation": {
                              "type": "string",
                              "enum": [
                                "OPERATION_UNSPECIFIED",
                                "EQUAL",
                                "LESS_THAN",
                                "LESS_THAN_OR_EQUAL",
                                "GREATER_THAN",
                                "GREATER_THAN_OR_EQUAL"
                              ]
                            },
                            "value": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "betweenFilter": {
                          "type": "object",
                          "properties": {
                            "fromValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            },
                            "toValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "emptyFilter": {
                          "type": "object"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "orGroup": {
            "type": "object",
            "properties": {
              "expressions": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "andGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "orGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "notExpression": {
                      "type": "object"
                    },
                    "filter": {
                      "type": "object",
                      "properties": {
                        "fieldName": {
                          "type": "string"
                        },
                        "stringFilter": {
                          "type": "object",
                          "properties": {
                            "matchType": {
                              "type": "string",
                              "enum": [
                                "MATCH_TYPE_UNSPECIFIED",
                                "EXACT",
                                "BEGINS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "FULL_REGEXP",
                                "PARTIAL_REGEXP"
                              ]
                            },
                            "value": {
                              "type": "string"
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "inListFilter": {
                          "type": "object",
                          "properties": {
                            "values": {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "numericFilter": {
                          "type": "object",
                          "properties": {
                            "operation": {
                              "type": "string",
                              "enum": [
                                "OPERATION_UNSPECIFIED",
                                "EQUAL",
                                "LESS_THAN",
                                "LESS_THAN_OR_EQUAL",
                                "GREATER_THAN",
                                "GREATER_THAN_OR_EQUAL"
                              ]
                            },
                            "value": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "betweenFilter": {
                          "type": "object",
                          "properties": {
                            "fromValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            },
                            "toValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "emptyFilter": {
                          "type": "object"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "notExpression": {
            "type": "object",
            "properties": {
              "andGroup": {
                "type": "object",
                "properties": {
                  "expressions": {
                    "type": "array",
                    "items": {
                      "type": "object"
                    }
                  }
                }
              },
              "orGroup": {
                "type": "object",
                "properties": {
                  "expressions": {
                    "type": "array",
                    "items": {
                      "type": "object"
                    }
                  }
                }
              },
              "notExpression": {
                "type": "object"
              },
              "filter": {
                "type": "object",
                "properties": {
                  "fieldName": {
                    "type": "string"
                  },
                  "stringFilter": {
                    "type": "object",
                    "properties": {
                      "matchType": {
                        "type": "string",
                        "enum": [
                          "MATCH_TYPE_UNSPECIFIED",
                          "EXACT",
                          "BEGINS_WITH",
                          "ENDS_WITH",
                          "CONTAINS",
                          "FULL_REGEXP",
                          "PARTIAL_REGEXP"
                        ]
                      },
                      "value": {
                        "type": "string"
                      },
                      "caseSensitive": {
                        "type": "boolean"
                      }
                    }
                  },
                  "inListFilter": {
                    "type": "object",
                    "properties": {
                      "values": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "caseSensitive": {
                        "type": "boolean"
                      }
                    }
                  },
                  "numericFilter": {
                    "type": "object",
                    "properties": {
                      "operation": {
                        "type": "string",
                        "enum": [
                          "OPERATION_UNSPECIFIED",
                          "EQUAL",
                          "LESS_THAN",
                          "LESS_THAN_OR_EQUAL",
                          "GREATER_THAN",
                          "GREATER_THAN_OR_EQUAL"
                        ]
                      },
                      "value": {
                        "type": "object",
                        "properties": {
                          "int64Value": {
                            "type": "string"
                          },
                          "doubleValue": {
                            "type": "number"
                          }
                        }
                      }
                    }
                  },
                  "betweenFilter": {
                    "type": "object",
                    "properties": {
                      "fromValue": {
                        "type": "object",
                        "properties": {
                          "int64Value": {
                            "type": "string"
                          },
                          "doubleValue": {
                            "type": "number"
                          }
                        }
                      },
                      "toValue": {
                        "type": "object",
                        "properties": {
                          "int64Value": {
                            "type": "string"
                          },
                          "doubleValue": {
                            "type": "number"
                          }
                        }
                      }
                    }
                  },
                  "emptyFilter": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "filter": {
            "type": "object",
            "properties": {
              "fieldName": {
                "type": "string"
              },
              "stringFilter": {
                "type": "object",
                "properties": {
                  "matchType": {
                    "type": "string",
                    "enum": [
                      "MATCH_TYPE_UNSPECIFIED",
                      "EXACT",
                      "BEGINS_WITH",
                      "ENDS_WITH",
                      "CONTAINS",
                      "FULL_REGEXP",
                      "PARTIAL_REGEXP"
                    ]
                  },
                  "value": {
                    "type": "string"
                  },
                  "caseSensitive": {
                    "type": "boolean"
                  }
                }
              },
              "inListFilter": {
                "type": "object",
                "properties": {
                  "values": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "caseSensitive": {
                    "type": "boolean"
                  }
                }
              },
              "numericFilter": {
                "type": "object",
                "properties": {
                  "operation": {
                    "type": "string",
                    "enum": [
                      "OPERATION_UNSPECIFIED",
                      "EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL"
                    ]
                  },
                  "value": {
                    "type": "object",
                    "properties": {
                      "int64Value": {
                        "type": "string"
                      },
                      "doubleValue": {
                        "type": "number"
                      }
                    }
                  }
                }
              },
              "betweenFilter": {
                "type": "object",
                "properties": {
                  "fromValue": {
                    "type": "object",
                    "properties": {
                      "int64Value": {
                        "type": "string"
                      },
                      "doubleValue": {
                        "type": "number"
                      }
                    }
                  },
                  "toValue": {
                    "type": "object",
                    "properties": {
                      "int64Value": {
                        "type": "string"
                      },
                      "doubleValue": {
                        "type": "number"
                      }
                    }
                  }
                }
              },
              "emptyFilter": {
                "type": "object"
              }
            }
          }
        }
      },
      "metricFilter": {
        "type": "object",
        "description": "The filter clause of metrics.",
        "properties": {
          "andGroup": {
            "type": "object",
            "properties": {
              "expressions": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "andGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "orGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "notExpression": {
                      "type": "object"
                    },
                    "filter": {
                      "type": "object",
                      "properties": {
                        "fieldName": {
                          "type": "string"
                        },
                        "stringFilter": {
                          "type": "object",
                          "properties": {
                            "matchType": {
                              "type": "string",
                              "enum": [
                                "MATCH_TYPE_UNSPECIFIED",
                                "EXACT",
                                "BEGINS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "FULL_REGEXP",
                                "PARTIAL_REGEXP"
                              ]
                            },
                            "value": {
                              "type": "string"
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "inListFilter": {
                          "type": "object",
                          "properties": {
                            "values": {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "numericFilter": {
                          "type": "object",
                          "properties": {
                            "operation": {
                              "type": "string",
                              "enum": [
                                "OPERATION_UNSPECIFIED",
                                "EQUAL",
                                "LESS_THAN",
                                "LESS_THAN_OR_EQUAL",
                                "GREATER_THAN",
                                "GREATER_THAN_OR_EQUAL"
                              ]
                            },
                            "value": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "betweenFilter": {
                          "type": "object",
                          "properties": {
                            "fromValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            },
                            "toValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "emptyFilter": {
                          "type": "object"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "orGroup": {
            "type": "object",
            "properties": {
              "expressions": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "andGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "orGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "notExpression": {
                      "type": "object"
                    },
                    "filter": {
                      "type": "object",
                      "properties": {
                        "fieldName": {
                          "type": "string"
                        },
                        "stringFilter": {
                          "type": "object",
                          "properties": {
                            "matchType": {
                              "type": "string",
                              "enum": [
                                "MATCH_TYPE_UNSPECIFIED",
                                "EXACT",
                                "BEGINS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "FULL_REGEXP",
                                "PARTIAL_REGEXP"
                              ]
                            },
                            "value": {
                              "type": "string"
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "inListFilter": {
                          "type": "object",
                          "properties": {
                            "values": {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "numericFilter": {
                          "type": "object",
                          "properties": {
                            "operation": {
                              "type": "string",
                              "enum": [
                                "OPERATION_UNSPECIFIED",
                                "EQUAL",
                                "LESS_THAN",
                                "LESS_THAN_OR_EQUAL",
                                "GREATER_THAN",
                                "GREATER_THAN_OR_EQUAL"
                              ]
                            },
                            "value": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "betweenFilter": {
                          "type": "object",
                          "properties": {
                            "fromValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            },
                            "toValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "emptyFilter": {
                          "type": "object"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "notExpression": {
            "type": "object",
            "properties": {
              "andGroup": {
                "type": "object",
                "properties": {
                  "expressions": {
                    "type": "array",
                    "items": {
                      "type": "object"
                    }
                  }
                }
              },
              "orGroup": {
                "type": "object",
                "properties": {
                  "expressions": {
                    "type": "array",
                    "items": {
                      "type": "object"
                    }
                  }
                }
              },
              "notExpression": {
                "type": "object"
              },
              "filter": {
                "type": "object",
                "properties": {
                  "fieldName": {
                    "type": "string"
                  },
                  "stringFilter": {
                    "type": "object",
                    "properties": {
                      "matchType": {
                        "type": "string",
                        "enum": [
                          "MATCH_TYPE_UNSPECIFIED",
                          "EXACT",
                          "BEGINS_WITH",
                          "ENDS_WITH",
                          "CONTAINS",
                          "FULL_REGEXP",
                          "PARTIAL_REGEXP"
                        ]
                      },
                      "value": {
                        "type": "string"
                      },
                      "caseSensitive": {
                        "type": "boolean"
                      }
                    }
                  },
                  "inListFilter": {
                    "type": "object",
                    "properties": {
                      "values": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "caseSensitive": {
                        "type": "boolean"
                      }
                    }
                  },
                  "numericFilter": {
                    "type": "object",
                    "properties": {
                      "operation": {
                        "type": "string",
                        "enum": [
                          "OPERATION_UNSPECIFIED",
                          "EQUAL",
                          "LESS_THAN",
                          "LESS_THAN_OR_EQUAL",
                          "GREATER_THAN",
                          "GREATER_THAN_OR_EQUAL"
                        ]
                      },
                      "value": {
                        "type": "object",
                        "properties": {
                          "int64Value": {
                            "type": "string"
                          },
                          "doubleValue": {
                            "type": "number"
                          }
                        }
                      }
                    }
                  },
                  "betweenFilter": {
                    "type": "object",
                    "properties": {
                      "fromValue": {
                        "type": "object",
                        "properties": {
                          "int64Value": {
                            "type": "string"
                          },
                          "doubleValue": {
                            "type": "number"
                          }
                        }
                      },
                      "toValue": {
                        "type": "object",
                        "properties": {
                          "int64Value": {
                            "type": "string"
                          },
                          "doubleValue": {
                            "type": "number"
                          }
                        }
                      }
                    }
                  },
                  "emptyFilter": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "filter": {
            "type": "object",
            "properties": {
              "fieldName": {
                "type": "string"
              },
              "stringFilter": {
                "type": "object",
                "properties": {
                  "matchType": {
                    "type": "string",
                    "enum": [
                      "MATCH_TYPE_UNSPECIFIED",
                      "EXACT",
                      "BEGINS_WITH",
                      "ENDS_WITH",
                      "CONTAINS",
                      "FULL_REGEXP",
                      "PARTIAL_REGEXP"
                    ]
                  },
                  "value": {
                    "type": "string"
                  },
                  "caseSensitive": {
                    "type": "boolean"
                  }
                }
              },
              "inListFilter": {
                "type": "object",
                "properties": {
                  "values": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "caseSensitive": {
                    "type": "boolean"
                  }
                }
              },
              "numericFilter": {
                "type": "object",
                "properties": {
                  "operation": {
                    "type": "string",
                    "enum": [
                      "OPERATION_UNSPECIFIED",
                      "EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL"
                    ]
                  },
                  "value": {
                    "type": "object",
                    "properties": {
                      "int64Value": {
                        "type": "string"
                      },
                      "doubleValue": {
                        "type": "number"
                      }
                    }
                  }
                }
              },
              "betweenFilter": {
                "type": "object",
                "properties": {
                  "fromValue": {
                    "type": "object",
                    "properties": {
                      "int64Value": {
                        "type": "string"
                      },
                      "doubleValue": {
                        "type": "number"
                      }
                    }
                  },
                  "toValue": {
                    "type": "object",
                    "properties": {
                      "int64Value": {
                        "type": "string"
                      },
                      "doubleValue": {
                        "type": "number"
                      }
                    }
                  }
                }
              },
              "emptyFilter": {
                "type": "object"
              }
            }
          }
        }
      },
      "offset": {
        "type": "string",
        "format": "int64",
        "description": "The row count of the start row."
      },
      "limit": {
        "type": "string",
        "format": "int64",
        "description": "The number of rows to return."
      },
      "metricAggregations": {
        "type": "array",
        "description": "Aggregation of metrics.",
        "items": {
          "type": "string",
          "enum": [
            "METRIC_AGGREGATION_UNSPECIFIED",
            "TOTAL",
            "MINIMUM",
            "MAXIMUM",
            "COUNT"
          ]
        }
      },
      "orderBys": {
        "type": "array",
        "description": "Specifies how rows are ordered in the response.",
        "items": {
          "type": "object",
          "properties": {
            "desc": {
              "type": "boolean"
            },
            "metric": {
              "type": "object",
              "properties": {
                "metricName": {
                  "type": "string"
                }
              }
            },
            "dimension": {
              "type": "object",
              "properties": {
                "dimensionName": {
                  "type": "string"
                },
                "orderType": {
                  "type": "string",
                  "enum": [
                    "ORDER_TYPE_UNSPECIFIED",
                    "ALPHANUMERIC",
                    "CASE_INSENSITIVE_ALPHANUMERIC",
                    "NUMERIC"
                  ]
                }
              }
            },
            "pivot": {
              "type": "object",
              "properties": {
                "metricName": {
                  "type": "string"
                },
                "pivotSelections": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "dimensionName": {
                        "type": "string"
                      },
                      "dimensionValue": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "currencyCode": {
        "type": "string",
        "description": "A currency code in ISO4217 format, such as 'AED', 'USD', 'JPY'."
      },
      "cohortSpec": {
        "type": "object",
        "description": "Cohort group associated with this request.",
        "properties": {
          "cohorts": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "dimension": {
                  "type": "string"
                },
                "dateRange": {
                  "type": "object",
                  "properties": {
                    "startDate": {
                      "type": "string"
                    },
                    "endDate": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "cohortsRange": {
            "type": "object",
            "properties": {
              "granularity": {
                "type": "string",
                "enum": [
                  "GRANULARITY_UNSPECIFIED",
                  "DAILY",
                  "WEEKLY",
                  "MONTHLY"
                ]
              },
              "startOffset": {
                "type": "integer"
              },
              "endOffset": {
                "type": "integer"
              }
            }
          },
          "cohortReportSettings": {
            "type": "object",
            "properties": {
              "accumulate": {
                "type": "boolean"
              }
            }
          }
        }
      },
      "keepEmptyRows": {
        "type": "boolean",
        "description": "If false or unspecified, each row with all metrics equal to 0 will not be returned."
      },
      "returnPropertyQuota": {
        "type": "boolean",
        "description": "Toggles whether to return the current state of this Google Analytics property's quota."
      },
      "comparisons": {
        "type": "array",
        "description": "The configuration of comparisons requested and displayed.",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "dimensionFilter": {
              "type": "object",
              "properties": {
                "andGroup": {
                  "type": "object",
                  "properties": {
                    "expressions": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "andGroup": {
                            "type": "object",
                            "properties": {
                              "expressions": {
                                "type": "array",
                                "items": {
                                  "type": "object"
                                }
                              }
                            }
                          },
                          "orGroup": {
                            "type": "object",
                            "properties": {
                              "expressions": {
                                "type": "array",
                                "items": {
                                  "type": "object"
                                }
                              }
                            }
                          },
                          "notExpression": {
                            "type": "object"
                          },
                          "filter": {
                            "type": "object",
                            "properties": {
                              "fieldName": {
                                "type": "string"
                              },
                              "stringFilter": {
                                "type": "object",
                                "properties": {
                                  "matchType": {
                                    "type": "string",
                                    "enum": [
                                      "MATCH_TYPE_UNSPECIFIED",
                                      "EXACT",
                                      "BEGINS_WITH",
                                      "ENDS_WITH",
                                      "CONTAINS",
                                      "FULL_REGEXP",
                                      "PARTIAL_REGEXP"
                                    ]
                                  },
                                  "value": {
                                    "type": "string"
                                  },
                                  "caseSensitive": {
                                    "type": "boolean"
                                  }
                                }
                              },
                              "inListFilter": {
                                "type": "object",
                                "properties": {
                                  "values": {
                                    "type": "array",
                                    "items": {
                                      "type": "string"
                                    }
                                  },
                                  "caseSensitive": {
                                    "type": "boolean"
                                  }
                                }
                              },
                              "numericFilter": {
                                "type": "object",
                                "properties": {
                                  "operation": {
                                    "type": "string",
                                    "enum": [
                                      "OPERATION_UNSPECIFIED",
                                      "EQUAL",
                                      "LESS_THAN",
                                      "LESS_THAN_OR_EQUAL",
                                      "GREATER_THAN",
                                      "GREATER_THAN_OR_EQUAL"
                                    ]
                                  },
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "int64Value": {
                                        "type": "string"
                                      },
                                      "doubleValue": {
                                        "type": "number"
                                      }
                                    }
                                  }
                                }
                              },
                              "betweenFilter": {
                                "type": "object",
                                "properties": {
                                  "fromValue": {
                                    "type": "object",
                                    "properties": {
                                      "int64Value": {
                                        "type": "string"
                                      },
                                      "doubleValue": {
                                        "type": "number"
                                      }
                                    }
                                  },
                                  "toValue": {
                                    "type": "object",
                                    "properties": {
                                      "int64Value": {
                                        "type": "string"
                                      },
                                      "doubleValue": {
                                        "type": "number"
                                      }
                                    }
                                  }
                                }
                              },
                              "emptyFilter": {
                                "type": "object"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "orGroup": {
                  "type": "object",
                  "properties": {
                    "expressions": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "andGroup": {
                            "type": "object",
                            "properties": {
                              "expressions": {
                                "type": "array",
                                "items": {
                                  "type": "object"
                                }
                              }
                            }
                          },
                          "orGroup": {
                            "type": "object",
                            "properties": {
                              "expressions": {
                                "type": "array",
                                "items": {
                                  "type": "object"
                                }
                              }
                            }
                          },
                          "notExpression": {
                            "type": "object"
                          },
                          "filter": {
                            "type": "object",
                            "properties": {
                              "fieldName": {
                                "type": "string"
                              },
                              "stringFilter": {
                                "type": "object",
                                "properties": {
                                  "matchType": {
                                    "type": "string",
                                    "enum": [
                                      "MATCH_TYPE_UNSPECIFIED",
                                      "EXACT",
                                      "BEGINS_WITH",
                                      "ENDS_WITH",
                                      "CONTAINS",
                                      "FULL_REGEXP",
                                      "PARTIAL_REGEXP"
                                    ]
                                  },
                                  "value": {
                                    "type": "string"
                                  },
                                  "caseSensitive": {
                                    "type": "boolean"
                                  }
                                }
                              },
                              "inListFilter": {
                                "type": "object",
                                "properties": {
                                  "values": {
                                    "type": "array",
                                    "items": {
                                      "type": "string"
                                    }
                                  },
                                  "caseSensitive": {
                                    "type": "boolean"
                                  }
                                }
                              },
                              "numericFilter": {
                                "type": "object",
                                "properties": {
                                  "operation": {
                                    "type": "string",
                                    "enum": [
                                      "OPERATION_UNSPECIFIED",
                                      "EQUAL",
                                      "LESS_THAN",
                                      "LESS_THAN_OR_EQUAL",
                                      "GREATER_THAN",
                                      "GREATER_THAN_OR_EQUAL"
                                    ]
                                  },
                                  "value": {
                                    "type": "object",
                                    "properties": {
                                      "int64Value": {
                                        "type": "string"
                                      },
                                      "doubleValue": {
                                        "type": "number"
                                      }
                                    }
                                  }
                                }
                              },
                              "betweenFilter": {
                                "type": "object",
                                "properties": {
                                  "fromValue": {
                                    "type": "object",
                                    "properties": {
                                      "int64Value": {
                                        "type": "string"
                                      },
                                      "doubleValue": {
                                        "type": "number"
                                      }
                                    }
                                  },
                                  "toValue": {
                                    "type": "object",
                                    "properties": {
                                      "int64Value": {
                                        "type": "string"
                                      },
                                      "doubleValue": {
                                        "type": "number"
                                      }
                                    }
                                  }
                                }
                              },
                              "emptyFilter": {
                                "type": "object"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "notExpression": {
                  "type": "object",
                  "properties": {
                    "andGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "orGroup": {
                      "type": "object",
                      "properties": {
                        "expressions": {
                          "type": "array",
                          "items": {
                            "type": "object"
                          }
                        }
                      }
                    },
                    "notExpression": {
                      "type": "object"
                    },
                    "filter": {
                      "type": "object",
                      "properties": {
                        "fieldName": {
                          "type": "string"
                        },
                        "stringFilter": {
                          "type": "object",
                          "properties": {
                            "matchType": {
                              "type": "string",
                              "enum": [
                                "MATCH_TYPE_UNSPECIFIED",
                                "EXACT",
                                "BEGINS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "FULL_REGEXP",
                                "PARTIAL_REGEXP"
                              ]
                            },
                            "value": {
                              "type": "string"
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "inListFilter": {
                          "type": "object",
                          "properties": {
                            "values": {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            "caseSensitive": {
                              "type": "boolean"
                            }
                          }
                        },
                        "numericFilter": {
                          "type": "object",
                          "properties": {
                            "operation": {
                              "type": "string",
                              "enum": [
                                "OPERATION_UNSPECIFIED",
                                "EQUAL",
                                "LESS_THAN",
                                "LESS_THAN_OR_EQUAL",
                                "GREATER_THAN",
                                "GREATER_THAN_OR_EQUAL"
                              ]
                            },
                            "value": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "betweenFilter": {
                          "type": "object",
                          "properties": {
                            "fromValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            },
                            "toValue": {
                              "type": "object",
                              "properties": {
                                "int64Value": {
                                  "type": "string"
                                },
                                "doubleValue": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        },
                        "emptyFilter": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "filter": {
                  "type": "object",
                  "properties": {
                    "fieldName": {
                      "type": "string"
                    },
                    "stringFilter": {
                      "type": "object",
                      "properties": {
                        "matchType": {
                          "type": "string",
                          "enum": [
                            "MATCH_TYPE_UNSPECIFIED",
                            "EXACT",
                            "BEGINS_WITH",
                            "ENDS_WITH",
                            "CONTAINS",
                            "FULL_REGEXP",
                            "PARTIAL_REGEXP"
                          ]
                        },
                        "value": {
                          "type": "string"
                        },
                        "caseSensitive": {
                          "type": "boolean"
                        }
                      }
                    },
                    "inListFilter": {
                      "type": "object",
                      "properties": {
                        "values": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "caseSensitive": {
                          "type": "boolean"
                        }
                      }
                    },
                    "numericFilter": {
                      "type": "object",
                      "properties": {
                        "operation": {
                          "type": "string",
                          "enum": [
                            "OPERATION_UNSPECIFIED",
                            "EQUAL",
                            "LESS_THAN",
                            "LESS_THAN_OR_EQUAL",
                            "GREATER_THAN",
                            "GREATER_THAN_OR_EQUAL"
                          ]
                        },
                        "value": {
                          "type": "object",
                          "properties": {
                            "int64Value": {
                              "type": "string"
                            },
                            "doubleValue": {
                              "type": "number"
                            }
                          }
                        }
                      },
                      "betweenFilter": {
                        "type": "object",
                        "properties": {
                          "fromValue": {
                            "type": "object",
                            "properties": {
                              "int64Value": {
                                "type": "string"
                              },
                              "doubleValue": {
                                "type": "number"
                              }
                            }
                          },
                          "toValue": {
                            "type": "object",
                            "properties": {
                              "int64Value": {
                                "type": "string"
                              },
                              "doubleValue": {
                                "type": "number"
                              }
                            }
                          }
                        }
                      },
                      "emptyFilter": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
            },
            "comparison": {
              "type": "string"
            }
          }
        }
      }
    },
    "required": []
  },

  RunReportResponse: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "RunReportResponse",
    "description": "The response report table corresponding to a request.",
    "type": "object",
    "properties": {
      "dimensionHeaders": {
        "type": "array",
        "description": "Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "The dimension's name."
            }
          }
        }
      },
      "metricHeaders": {
        "type": "array",
        "description": "Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "The metric's name."
            },
            "type": {
              "type": "string",
              "description": "The metric's data type.",
              "enum": [
                "TYPE_UNSPECIFIED",
                "INTEGER",
                "FLOAT",
                "SECONDS",
                "MILLISECONDS",
                "MINUTES",
                "HOURS",
                "STANDARD",
                "CURRENCY",
                "FEET",
                "MILES",
                "METERS",
                "KILOMETERS"
              ]
            }
          }
        }
      },
      "rows": {
        "type": "array",
        "description": "Rows of dimension value combinations and metric values in the report.",
        "items": {
          "type": "object",
          "properties": {
            "dimensionValues": {
              "type": "array",
              "description": "List of requested dimension values.",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string",
                    "description": "Value as a string if the dimension type is a string."
                  }
                }
              }
            },
            "metricValues": {
              "type": "array",
              "description": "List of requested visible metric values.",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string",
                    "description": "Measurement value. See MetricHeader for type."
                  }
                }
              }
            }
          }
        }
      },
      "totals": {
        "type": "array",
        "description": "If requested, the totaled values of metrics.",
        "items": {
          "type": "object",
          "properties": {
            "dimensionValues": {
              "type": "array",
              "description": "List of requested dimension values.",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string",
                    "description": "Value as a string if the dimension type is a string."
                  }
                }
              }
            },
            "metricValues": {
              "type": "array",
              "description": "List of requested visible metric values.",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string",
                    "description": "Measurement value. See MetricHeader for type."
                  }
                }
              }
            }
          }
        }
      },
      "maximums": {
        "type": "array",
        "description": "If requested, the maximum values of metrics.",
        "items": {
          "type": "object",
          "properties": {
            "dimensionValues": {
              "type": "array",
              "description": "List of requested dimension values.",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string",
                    "description": "Value as a string if the dimension type is a string."
                  }
                }
              }
            },
            "metricValues": {
              "type": "array",
              "description": "List of requested visible metric values.",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string",
                    "description": "Measurement value. See MetricHeader for type."
                  }
                }
              }
            }
          }
        }
      },
      "minimums": {
        "type": "array",
        "description": "If requested, the minimum values of metrics.",
        "items": {
          "type": "object",
          "properties": {
            "dimensionValues": {
              "type": "array",
              "description": "List of requested dimension values.",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string",
                    "description": "Value as a string if the dimension type is a string."
                  }
                }
              }
            },
            "metricValues": {
              "type": "array",
              "description": "List of requested visible metric values.",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string",
                    "description": "Measurement value. See MetricHeader for type."
                  }
                }
              }
            }
          }
        }
      },
      "rowCount": {
        "type": "integer",
        "description": "The total number of rows in the query result."
      },
      "metadata": {
        "type": "object",
        "description": "Metadata for the report.",
        "properties": {
          "dataLossFromOtherRow": {
            "type": "boolean",
            "description": "If true, indicates some buckets of dimension combinations are rolled into \"(other)\" row."
          },
          "samplingMetadatas": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "samplesReadCount": {
                  "type": "string",
                  "format": "int64"
                },
                "samplingSpaceSize": {
                  "type": "string",
                  "format": "int64"
                }
              }
            }
          },
          "schemaRestrictionResponse": {
            "type": "object",
            "description": "Describes the schema restrictions actively enforced in creating this report.",
            "properties": {
              "activeMetricRestrictions": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "metricName": {
                      "type": "string"
                    },
                    "restrictedMetricTypes": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "enum": [
                          "RESTRICTED_METRIC_TYPE_UNSPECIFIED",
                          "COST_DATA",
                          "REVENUE_DATA"
                        ]
                      }
                    }
                  }
                }
              }
            }
          },
          "currencyCode": {
            "type": "string",
            "description": "The currency code used in this report."
          },
          "timeZone": {
            "type": "string",
            "description": "The property's current timezone."
          },
          "emptyReason": {
            "type": "string",
            "description": "If empty reason is specified, the report is empty for this reason."
          },
          "subjectToThresholding": {
            "type": "boolean"
          }
        }
      },
      "propertyQuota": {
        "type": "object",
        "description": "This Google Analytics property's quota state including this request.",
        "properties": {
          "tokensPerDay": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "tokensPerHour": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "concurrentRequests": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "serverErrorsPerProjectPerHour": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "potentiallyThresholdedRequestsPerHour": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "tokensPerProjectPerHour": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          }
        }
      },
      "kind": {
        "type": "string",
        "description": "Identifies what kind of resource this message is. This kind is always the fixed string \"analyticsData#runReport\"."
      }
    }
  },

  RunRealtimeReport: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Analytics Data API runRealtimeReport Request Body",
    "description": "JSON schema for the request body of the Method: properties.runRealtimeReport of Google Analytics Data API.",
    "type": "object",
    "properties": {
      "dimensions": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "dimensionExpression": {
              "type": "object",
              "oneOf": [
                {
                  "properties": {
                    "lowerCase": {
                      "type": "object",
                      "properties": {
                        "dimensionName": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "properties": {
                    "upperCase": {
                      "type": "object",
                      "properties": {
                        "dimensionName": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "properties": {
                    "concatenate": {
                      "type": "object",
                      "properties": {
                        "dimensionNames": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "delimiter": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      },
      "metrics": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "expression": {
              "type": "string"
            },
            "invisible": {
              "type": "boolean"
            }
          }
        }
      },
      "dimensionFilter": {
        "$ref": "#/properties/metricFilter"
      },
      "metricFilter": {
        "type": "object",
        "oneOf": [
          {
            "properties": {
              "andGroup": {
                "type": "object",
                "properties": {
                  "expressions": {
                    "type": "array",
                    "items": {
                      "$ref": "#/properties/metricFilter"
                    }
                  }
                }
              }
            }
          },
          {
            "properties": {
              "orGroup": {
                "type": "object",
                "properties": {
                  "expressions": {
                    "type": "array",
                    "items": {
                      "$ref": "#/properties/metricFilter"
                    }
                  }
                }
              }
            }
          },
          {
            "properties": {
              "notExpression": {
                "$ref": "#/properties/metricFilter"
              }
            }
          },
          {
            "properties": {
              "filter": {
                "type": "object",
                "properties": {
                  "fieldName": {
                    "type": "string"
                  },
                  "one_filter": {
                    "oneOf": [
                      {
                        "properties": {
                          "stringFilter": {
                            "type": "object",
                            "properties": {
                              "matchType": {
                                "type": "string",
                                "enum": [
                                  "MATCH_TYPE_UNSPECIFIED",
                                  "EXACT",
                                  "BEGINS_WITH",
                                  "ENDS_WITH",
                                  "CONTAINS",
                                  "FULL_REGEXP",
                                  "PARTIAL_REGEXP"
                                ]
                              },
                              "value": {
                                "type": "string"
                              },
                              "caseSensitive": {
                                "type": "boolean"
                              }
                            }
                          }
                        }
                      },
                      {
                        "properties": {
                          "inListFilter": {
                            "type": "object",
                            "properties": {
                              "values": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                }
                              },
                              "caseSensitive": {
                                "type": "boolean"
                              }
                            }
                          }
                        }
                      },
                      {
                        "properties": {
                          "numericFilter": {
                            "type": "object",
                            "properties": {
                              "operation": {
                                "type": "string",
                                "enum": [
                                  "OPERATION_UNSPECIFIED",
                                  "EQUAL",
                                  "LESS_THAN",
                                  "LESS_THAN_OR_EQUAL",
                                  "GREATER_THAN",
                                  "GREATER_THAN_OR_EQUAL"
                                ]
                              },
                              "value": {
                                "type": "object",
                                "oneOf": [
                                  {
                                    "properties": {
                                      "int64Value": {
                                        "type": "string"
                                      }
                                    }
                                  },
                                  {
                                    "properties": {
                                      "doubleValue": {
                                        "type": "number"
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      {
                        "properties": {
                          "betweenFilter": {
                            "type": "object",
                            "properties": {
                              "fromValue": {
                                "type": "object",
                                "oneOf": [
                                  {
                                    "properties": {
                                      "int64Value": {
                                        "type": "string"
                                      }
                                    }
                                  },
                                  {
                                    "properties": {
                                      "doubleValue": {
                                        "type": "number"
                                      }
                                    }
                                  }
                                ]
                              },
                              "toValue": {
                                "type": "object",
                                "oneOf": [
                                  {
                                    "properties": {
                                      "int64Value": {
                                        "type": "string"
                                      }
                                    }
                                  },
                                  {
                                    "properties": {
                                      "doubleValue": {
                                        "type": "number"
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      {
                        "properties": {
                          "emptyFilter": {
                            "type": "object"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        ]
      },
      "limit": {
        "type": "string",
        "format": "int64"
      },
      "metricAggregations": {
        "type": "array",
        "items": {
          "type": "string",
          "enum": [
            "METRIC_AGGREGATION_UNSPECIFIED",
            "TOTAL",
            "MINIMUM",
            "MAXIMUM",
            "COUNT"
          ]
        }
      },
      "orderBys": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "desc": {
              "type": "boolean"
            },
            "one_order_by": {
              "oneOf": [
                {
                  "properties": {
                    "metric": {
                      "type": "object",
                      "properties": {
                        "metricName": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "properties": {
                    "dimension": {
                      "type": "object",
                      "properties": {
                        "dimensionName": {
                          "type": "string"
                        },
                        "orderType": {
                          "type": "string",
                          "enum": [
                            "ORDER_TYPE_UNSPECIFIED",
                            "ALPHANUMERIC",
                            "CASE_INSENSITIVE_ALPHANUMERIC",
                            "NUMERIC"
                          ]
                        }
                      }
                    }
                  }
                },
                {
                  "properties": {
                    "pivot": {
                      "type": "object",
                      "properties": {
                        "metricName": {
                          "type": "string"
                        },
                        "pivotSelections": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "dimensionName": {
                                "type": "string"
                              },
                              "dimensionValue": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      },
      "returnPropertyQuota": {
        "type": "boolean"
      },
      "minuteRanges": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "startMinutesAgo": {
              "type": "integer"
            },
            "endMinutesAgo": {
              "type": "integer"
            }
          }
        }
      }
    }
  },

  RunRealtimeReportResponse: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Analytics Data API - runRealtimeReport Response Body",
    "description": "The response realtime report table corresponding to a request.",
    "type": "object",
    "properties": {
      "dimensionHeaders": {
        "description": "Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "description": "The dimension's name.",
              "type": "string"
            }
          }
        }
      },
      "metricHeaders": {
        "description": "Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "description": "The metric's name.",
              "type": "string"
            },
            "type": {
              "description": "The metric's data type.",
              "type": "string"
            }
          }
        }
      },
      "rows": {
        "description": "Rows of dimension value combinations and metric values in the report.",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "dimensionValues": {
              "description": "List of requested dimension values.",
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "description": "Value as a string if the dimension type is a string.",
                    "type": "string"
                  }
                }
              }
            },
            "metricValues": {
              "description": "List of requested visible metric values.",
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "description": "Measurement value. See MetricHeader for type.",
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "totals": {
        "description": "If requested, the totaled values of metrics.",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "dimensionValues": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                }
              }
            },
            "metricValues": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "maximums": {
        "description": "If requested, the maximum values of metrics.",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "dimensionValues": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                }
              }
            },
            "metricValues": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "minimums": {
        "description": "If requested, the minimum values of metrics.",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "dimensionValues": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                }
              }
            },
            "metricValues": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "rowCount": {
        "description": "The total number of rows in the query result. rowCount is independent of the number of rows returned in the response and the limit request parameter.",
        "type": "integer"
      },
      "propertyQuota": {
        "description": "This Google Analytics property's Realtime quota state including this request.",
        "type": "object",
        "properties": {
          "tokensPerDay": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "tokensPerHour": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "concurrentRequests": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "serverErrorsPerProjectPerHour": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "potentiallyThresholdedRequestsPerHour": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          },
          "tokensPerProjectPerHour": {
            "type": "object",
            "properties": {
              "consumed": {
                "type": "integer"
              },
              "remaining": {
                "type": "integer"
              }
            }
          }
        }
      },
      "kind": {
        "description": "Identifies what kind of resource this message is. This kind is always the fixed string \"analyticsData#runRealtimeReport\".",
        "type": "string"
      }
    }
  },

};

const jsonSchemaMaps = {
  Geocode: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Maps Geocoder Response",
    "description": "Schema for the JSON response from Google Apps Script's Maps.newGeocoder()",
    "type": "object",
    "properties": {
      "status": {
        "type": "string",
        "description": "The status of the request."
      },
      "results": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "formatted_address": {
              "type": "string",
              "description": "The human-readable address of this location."
            },
            "types": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "An array indicating the type of the returned result."
            },
            "place_id": {
              "type": "string",
              "description": "A unique identifier for a place."
            },
            "plus_code": {
              "type": "object",
              "properties": {
                "global_code": {
                  "type": "string"
                },
                "compound_code": {
                  "type": "string"
                }
              },
              "required": [
                "global_code",
                "compound_code"
              ]
            },
            "navigation_points": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "location": {
                    "type": "object",
                    "properties": {
                      "longitude": {
                        "type": "number"
                      },
                      "latitude": {
                        "type": "number"
                      }
                    },
                    "required": [
                      "longitude",
                      "latitude"
                    ]
                  },
                  "restricted_travel_modes": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "required": [
                  "location"
                ]
              }
            },
            "geometry": {
              "type": "object",
              "properties": {
                "viewport": {
                  "type": "object",
                  "properties": {
                    "northeast": {
                      "type": "object",
                      "properties": {
                        "lat": {
                          "type": "number"
                        },
                        "lng": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "lat",
                        "lng"
                      ]
                    },
                    "southwest": {
                      "type": "object",
                      "properties": {
                        "lat": {
                          "type": "number"
                        },
                        "lng": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "lat",
                        "lng"
                      ]
                    }
                  },
                  "required": [
                    "northeast",
                    "southwest"
                  ]
                },
                "location_type": {
                  "type": "string"
                },
                "location": {
                  "type": "object",
                  "properties": {
                    "lat": {
                      "type": "number"
                    },
                    "lng": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "lat",
                    "lng"
                  ]
                }
              },
              "required": [
                "viewport",
                "location_type",
                "location"
              ]
            },
            "address_components": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "long_name": {
                    "type": "string"
                  },
                  "short_name": {
                    "type": "string"
                  },
                  "types": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "required": [
                  "long_name",
                  "short_name",
                  "types"
                ]
              }
            }
          },
          "required": [
            "formatted_address",
            "types",
            "place_id",
            "plus_code",
            "navigation_points",
            "geometry",
            "address_components"
          ]
        }
      }
    },
    "required": [
      "status",
      "results"
    ]
  },

  ReverseGeocode: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Maps Geocoder Response",
    "description": "JSON schema for the response from Maps.newGeocoder().reverseGeocode()",
    "type": "object",
    "properties": {
      "results": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "navigation_points": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "restricted_travel_modes": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "location": {
                    "type": "object",
                    "properties": {
                      "longitude": {
                        "type": "number"
                      },
                      "latitude": {
                        "type": "number"
                      }
                    },
                    "required": ["longitude", "latitude"]
                  }
                },
                "required": ["location"]
              }
            },
            "geometry": {
              "type": "object",
              "properties": {
                "location_type": {
                  "type": "string"
                },
                "viewport": {
                  "type": "object",
                  "properties": {
                    "northeast": {
                      "type": "object",
                      "properties": {
                        "lng": {
                          "type": "number"
                        },
                        "lat": {
                          "type": "number"
                        }
                      },
                      "required": ["lng", "lat"]
                    },
                    "southwest": {
                      "type": "object",
                      "properties": {
                        "lat": {
                          "type": "number"
                        },
                        "lng": {
                          "type": "number"
                        }
                      },
                      "required": ["lat", "lng"]
                    }
                  },
                  "required": ["northeast", "southwest"]
                },
                "location": {
                  "type": "object",
                  "properties": {
                    "lat": {
                      "type": "number"
                    },
                    "lng": {
                      "type": "number"
                    }
                  },
                  "required": ["lat", "lng"]
                },
                "bounds": {
                  "type": "object",
                  "properties": {
                    "northeast": {
                      "type": "object",
                      "properties": {
                        "lat": { "type": "number" },
                        "lng": { "type": "number" }
                      },
                      "required": ["lat", "lng"]
                    },
                    "southwest": {
                      "type": "object",
                      "properties": {
                        "lat": { "type": "number" },
                        "lng": { "type": "number" }
                      },
                      "required": ["lat", "lng"]
                    }
                  },
                  "required": ["northeast", "southwest"]
                }
              },
              "required": ["location_type", "viewport", "location"]
            },
            "plus_code": {
              "type": "object",
              "properties": {
                "compound_code": {
                  "type": "string"
                },
                "global_code": {
                  "type": "string"
                }
              },
              "required": ["compound_code", "global_code"]
            },
            "address_components": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "long_name": {
                    "type": "string"
                  },
                  "types": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "short_name": {
                    "type": "string"
                  }
                },
                "required": ["long_name", "types", "short_name"]
              }
            },
            "formatted_address": {
              "type": "string"
            },
            "types": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "place_id": {
              "type": "string"
            }
          },
          "required": ["geometry", "address_components", "formatted_address", "types", "place_id"]
        }
      },
      "status": {
        "type": "string"
      },
      "plus_code": {
        "type": "object",
        "properties": {
          "global_code": {
            "type": "string"
          },
          "compound_code": {
            "type": "string"
          }
        },
        "required": ["global_code", "compound_code"]
      }
    },
    "required": ["results", "status"]
  },

  DirectionFinder: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Google Maps Direction Finder Schema",
    "description": "A JSON schema for the response from Google Apps Script's Maps.newDirectionFinder()",
    "type": "object",
    "properties": {
      "routes": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "waypoint_order": {
              "type": "array",
              "items": {}
            },
            "bounds": {
              "type": "object",
              "properties": {
                "southwest": {
                  "type": "object",
                  "properties": {
                    "lat": { "type": "number" },
                    "lng": { "type": "number" }
                  },
                  "required": ["lat", "lng"]
                },
                "northeast": {
                  "type": "object",
                  "properties": {
                    "lat": { "type": "number" },
                    "lng": { "type": "number" }
                  },
                  "required": ["lat", "lng"]
                }
              },
              "required": ["southwest", "northeast"]
            },
            "warnings": {
              "type": "array",
              "items": { "type": "string" }
            },
            "legs": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "departure_time": {
                    "type": "object",
                    "properties": {
                      "value": { "type": "integer" },
                      "text": { "type": "string" },
                      "time_zone": { "type": "string" }
                    },
                    "required": ["value", "text", "time_zone"]
                  },
                  "steps": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "html_instructions": { "type": "string" },
                        "start_location": {
                          "type": "object",
                          "properties": {
                            "lat": { "type": "number" },
                            "lng": { "type": "number" }
                          },
                          "required": ["lat", "lng"]
                        },
                        "travel_mode": { "type": "string" },
                        "end_location": {
                          "type": "object",
                          "properties": {
                            "lat": { "type": "number" },
                            "lng": { "type": "number" }
                          },
                          "required": ["lat", "lng"]
                        },
                        "polyline": {
                          "type": "object",
                          "properties": {
                            "points": { "type": "string" }
                          },
                          "required": ["points"]
                        },
                        "duration": {
                          "type": "object",
                          "properties": {
                            "value": { "type": "integer" },
                            "text": { "type": "string" }
                          },
                          "required": ["value", "text"]
                        },
                        "distance": {
                          "type": "object",
                          "properties": {
                            "value": { "type": "integer" },
                            "text": { "type": "string" }
                          },
                          "required": ["value", "text"]
                        },
                        "transit_details": {
                          "type": "object",
                          "properties": {
                            "num_stops": { "type": "integer" },
                            "departure_stop": {
                              "type": "object",
                              "properties": {
                                "name": { "type": "string" },
                                "location": {
                                  "type": "object",
                                  "properties": {
                                    "lat": { "type": "number" },
                                    "lng": { "type": "number" }
                                  },
                                  "required": ["lat", "lng"]
                                }
                              },
                              "required": ["name", "location"]
                            },
                            "arrival_time": {
                              "type": "object",
                              "properties": {
                                "value": { "type": "integer" },
                                "text": { "type": "string" },
                                "time_zone": { "type": "string" }
                              },
                              "required": ["value", "text", "time_zone"]
                            },
                            "headsign": { "type": "string" },
                            "arrival_stop": {
                              "type": "object",
                              "properties": {
                                "location": {
                                  "type": "object",
                                  "properties": {
                                    "lat": { "type": "number" },
                                    "lng": { "type": "number" }
                                  },
                                  "required": ["lat", "lng"]
                                },
                                "name": { "type": "string" }
                              },
                              "required": ["location", "name"]
                            },
                            "line": {
                              "type": "object",
                              "properties": {
                                "name": { "type": "string" },
                                "text_color": { "type": "string" },
                                "color": { "type": "string" },
                                "vehicle": {
                                  "type": "object",
                                  "properties": {
                                    "type": { "type": "string" },
                                    "icon": { "type": "string" },
                                    "name": { "type": "string" }
                                  },
                                  "required": ["type", "icon", "name"]
                                },
                                "agencies": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "url": { "type": "string" },
                                      "name": { "type": "string" }
                                    },
                                    "required": ["url", "name"]
                                  }
                                }
                              },
                              "required": ["name", "text_color", "color", "vehicle", "agencies"]
                            },
                            "departure_time": {
                              "type": "object",
                              "properties": {
                                "value": { "type": "integer" },
                                "text": { "type": "string" },
                                "time_zone": { "type": "string" }
                              },
                              "required": ["value", "text", "time_zone"]
                            }
                          },
                          "required": ["num_stops", "departure_stop", "arrival_time", "headsign", "arrival_stop", "line", "departure_time"]
                        }
                      }
                    }
                  }
                }
              }
            },
            "copyrights": { "type": "string" },
            "fare": {
              "type": "object",
              "properties": {
                "currency": { "type": "string" },
                "value": { "type": "integer" },
                "text": { "type": "string" }
              },
              "required": ["currency", "value", "text"]
            },
            "overview_polyline": {
              "type": "object",
              "properties": {
                "points": { "type": "string" }
              },
              "required": ["points"]
            },
            "summary": { "type": "string" }
          }
        }
      },
      "geocoded_waypoints": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "place_id": { "type": "string" },
            "geocoder_status": { "type": "string" },
            "types": {
              "type": "array",
              "items": { "type": "string" }
            },
            "partial_match": { "type": "boolean" }
          },
          "required": ["place_id", "geocoder_status", "types"]
        }
      },
      "status": { "type": "string" }
    },
    "required": ["routes", "geocoded_waypoints", "status"]
  },

};

/**
const jsonSchemaForCalendar_requestBody = {
  "type": "object",
  "title": "Events resource",
  "properties": {
    "anyoneCanAddSelf": {
      "type": "boolean",
      "description": "Whether anyone can invite themselves to the event (deprecated). Optional. The default is False. [2]"
    },
    "attachments": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "fileUrl": {
            "type": "string",
            "description": "URL link to the attachment. For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API. Required when adding an attachment. [2]"
          },
          "title": {
            "type": "string",
            "description": "Attachment title. [2]"
          },
          "mimeType": {
            "type": "string",
            "description": "Internet media type (MIME type) of the attachment. [2]"
          },
          "iconLink": {
            "type": "string",
            "description": "URL link to the attachment's icon. [2]"
          },
          "fileId": {
            "type": "string",
            "description": "ID of the attached file. Read-only. For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API. [2]"
          }
        },
        "required": ["fileUrl"]
      }
    },
    "attendees": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "additionalGuests": {
            "type": "integer",
            "description": "Number of additional guests. Optional. The default is 0. [2]"
          },
          "comment": {
            "type": "string",
            "description": "The attendee's response comment. Optional. [2]"
          },
          "displayName": {
            "type": "string",
            "description": "The attendee's name, if available. Optional. [2]"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322. Required when adding an attendee. [2]"
          },
          "id": {
            "type": "string",
            "description": "The attendee's Profile ID, if available. [2]"
          },
          "optional": {
            "type": "boolean",
            "description": "Whether this is an optional attendee. Optional. The default is False. [2]"
          },
          "organizer": {
            "type": "boolean",
            "description": "Whether the attendee is the organizer of the event. Read-only. The default is False. [2]"
          },
          "resource": {
            "type": "boolean",
            "description": "Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False. [2]"
          },
          "responseStatus": {
            "type": "string",
            "enum": ["needsAction", "declined", "tentative", "accepted"],
            "description": "The attendee's response status. [2]"
          },
          "self": {
            "type": "boolean",
            "description": "Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False. [2]"
          }
        },
        "required": ["email"]
      }
    },
    "attendeesOmitted": {
      "type": "boolean",
      "description": "Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False. [2]"
    },
    "birthdayProperties": {
      "type": "object",
      "description": "Birthday or special event data. Used if eventType is 'birthday'. Immutable. [2]",
      "properties": {
        "contact": {
          "type": "string",
          "description": "Resource name of the contact this birthday event is linked to. This can be used to fetch contact details from People API. Format: 'people/c12345'. Read-only. [2]"
        },
        "customTypeName": {
          "type": "string",
          "description": "Custom type label specified for this event. This is populated if birthdayProperties.type is set to 'custom'. Read-only. [2]"
        },
        "type": {
          "type": "string",
          "description": "Type of birthday or special event. Possible values are: 'anniversary', 'birthday', 'custom', 'other', 'self'. The Calendar API only supports creating events with the type 'birthday'. The type cannot be changed after the event is created. [2]",
          "enum": [
            "anniversary",
            "birthday",
            "custom",
            "other",
            "self"
          ]
        }
      }
    },
    "colorId": {
      "type": "string",
      "description": "The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the colors endpoint). Optional. [2]"
    },
    "conferenceData": {
      "type": "object",
      "description": "The conference-related information, such as details of a Google Meet conference. To create new conference details use the createRequest field. To persist your changes, remember to set the conferenceDataVersion request parameter to 1 for all event modification requests. [2]"
    },
    "created": {
      "type": "string",
      "format": "date-time",
      "description": "Creation time of the event (as a RFC3339 timestamp). Read-only. [2]"
    },
    "creator": {
      "type": "object",
      "properties": {
        "displayName": {
          "type": "string",
          "description": "The creator's name, if available. [2]"
        },
        "email": {
          "type": "string",
          "description": "The creator's email address, if available. [2]"
        },
        "id": {
          "type": "string",
          "description": "The creator's Profile ID, if available. [2]"
        },
        "self": {
          "type": "boolean",
          "description": "Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. [2]"
        }
      }
    },
    "description": {
      "type": "string",
      "description": "Description of the event. Can contain HTML. Optional. [2]"
    },
    "end": {
      "type": "object",
      "description": "The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance. [2]",
      "properties": {
        "date": {
          "type": "string",
          "format": "date",
          "description": "The date, in the format 'yyyy-mm-dd', if this is an all-day event. [2]"
        },
        "dateTime": {
          "type": "string",
          "format": "date-time",
          "description": "The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone. [2]"
        },
        "timeZone": {
          "type": "string",
          "description": "The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. 'Europe/Zurich'.) [2]"
        }
      }
    },
    "endTimeUnspecified": {
      "type": "boolean",
      "description": "Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False. [2]"
    },
    "etag": {
      "type": "string",
      "description": "ETag of the resource. [2]"
    },
    "eventType": {
      "type": "string",
      "description": "Specific type of the event. This cannot be modified after the event is created. [2]",
      "enum": [
        "birthday",
        "default",
        "focusTime",
        "fromGmail",
        "outOfOffice",
        "workingLocation"
      ]
    },
    "extendedProperties": {
      "type": "object",
      "properties": {
        "private": {
          "type": "object",
          "description": "Properties that are private to the copy of the event that appears on this calendar. [2]"
        },
        "shared": {
          "type": "object",
          "description": "Properties that are shared between copies of the event on other attendees' calendars. [2]"
        }
      }
    },
    "focusTimeProperties": {
      "type": "object",
      "description": "Focus Time event data. Used if eventType is focusTime. [2]"
    },
    "gadget": {
      "type": "object",
      "description": "The gadget's display mode. Deprecated. [2]",
      "properties": {
        "display": {
          "type": "string",
          "enum": ["icon", "chip"]
        },
        "height": {
          "type": "integer"
        },
        "iconLink": {
          "type": "string"
        },
        "link": {
          "type": "string"
        },
        "preferences": {
          "type": "object"
        },
        "title": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "width": {
          "type": "integer"
        }
      }
    },
    "guestsCanInviteOthers": {
      "type": "boolean",
      "description": "Whether attendees other than the organizer can invite others to the event. Optional. The default is True. [2]"
    },
    "guestsCanModify": {
      "type": "boolean",
      "description": "Whether attendees other than the organizer can modify the event. Optional. The default is False. [2]"
    },
    "guestsCanSeeOtherGuests": {
      "type": "boolean",
      "description": "Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True. [2]"
    },
    "hangoutLink": {
      "type": "string",
      "description": "An absolute link to the Google Hangout associated with this event. Read-only. [2]"
    },
    "htmlLink": {
      "type": "string",
      "description": "An absolute link to this event in the Google Calendar Web UI. Read-only. [2]"
    },
    "iCalUID": {
      "type": "string",
      "description": "Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method. Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. [2]"
    },
    "id": {
      "type": "string",
      "description": "Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. [2]"
    },
    "kind": {
      "type": "string",
      "description": "Type of the resource ('calendar#event'). [2]"
    },
    "location": {
      "type": "string",
      "description": "Geographic location of the event as free-form text. Optional. [2]"
    },
    "locked": {
      "type": "boolean",
      "description": "Whether this is a locked event copy where no changes can be made to the main event fields 'summary', 'description', 'location', 'start', 'end' or 'recurrence'. The default is False. Read-Only. [2]"
    },
    "organizer": {
      "type": "object",
      "properties": {
        "displayName": {
          "type": "string",
          "description": "The organizer's name, if available. [2]"
        },
        "email": {
          "type": "string",
          "description": "The organizer's email address, if available. It must be a valid email address as per RFC5322. [2]"
        },
        "id": {
          "type": "string",
          "description": "The organizer's Profile ID, if available. [2]"
        },
        "self": {
          "type": "boolean",
          "description": "Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. [2]"
        }
      }
    },
    "originalStartTime": {
      "type": "object",
      "properties": {
        "date": {
          "type": "string",
          "format": "date"
        },
        "dateTime": {
          "type": "string",
          "format": "date-time"
        },
        "timeZone": {
          "type": "string"
        }
      }
    },
    "outOfOfficeProperties": {
      "type": "object",
      "description": "Out of office event data. Used if eventType is outOfOffice. [2]"
    },
    "privateCopy": {
      "type": "boolean",
      "description": "If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False. [2]"
    },
    "recurrence": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. [2]"
    },
    "recurringEventId": {
      "type": "string",
      "description": "For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable. [2]"
    },
    "reminders": {
      "type": "object",
      "properties": {
        "overrides": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "method": {
                "type": "string",
                "enum": ["email", "popup"]
              },
              "minutes": {
                "type": "integer"
              }
            },
            "required": ["method", "minutes"]
          }
        },
        "useDefault": {
          "type": "boolean"
        }
      }
    },
    "sequence": {
      "type": "integer",
      "description": "Sequence number as per iCalendar. [2]"
    },
    "source": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "url": {
          "type": "string"
        }
      }
    },
    "start": {
      "type": "object",
      "description": "The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance. [2]",
      "properties": {
        "date": {
          "type": "string",
          "format": "date",
          "description": "The date, in the format 'yyyy-mm-dd', if this is an all-day event. [2]"
        },
        "dateTime": {
          "type": "string",
          "format": "date-time",
          "description": "The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone. [2]"
        },
        "timeZone": {
          "type": "string",
          "description": "The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. 'Europe/Zurich'.) [2]"
        }
      }
    },
    "status": {
      "type": "string",
      "enum": ["confirmed", "tentative", "cancelled"],
      "description": "Status of the event. Optional. [2]"
    },
    "summary": {
      "type": "string",
      "description": "Title of the event. [2]"
    },
    "transparency": {
      "type": "string",
      "enum": ["opaque", "transparent"],
      "description": "Whether the event blocks time on the calendar. Optional. [2]"
    },
    "updated": {
      "type": "string",
      "format": "date-time",
      "description": "Last modification time of the main event data (as a RFC3339 timestamp). Updating event reminders will not cause this to change. Read-only. [2]"
    },
    "visibility": {
      "type": "string",
      "enum": ["default", "public", "private", "confidential"],
      "description": "Visibility of the event. Optional. [2]"
    },
    "workingLocationProperties": {
      "type": "object",
      "properties": {
        "customLocation": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            }
          }
        },
        "homeOffice": {
          "type": "object"
        },
        "officeLocation": {
          "type": "object",
          "properties": {
            "buildingId": {
              "type": "string"
            },
            "deskId": {
              "type": "string"
            },
            "floorId": {
              "type": "string"
            },
            "floorSectionId": {
              "type": "string"
            },
            "label": {
              "type": "string"
            }
          }
        },
        "type": {
          "type": "string",
          "enum": ["homeOffice", "officeLocation", "customLocation"]
        }
      },
      "required": ["type"]
    }
  },
  "required": [
    "end",
    "start"
  ]
};

// for insert event.
const jsonSchemaForCalendar_insertEvent = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Google Calendar API - Events: insert Parameters",
  "description": "JSON schema for the parameters of the Google Calendar API's Events: insert method. [1, 2]",
  "type": "object",
  "properties": {
    "pathParameters": {
      "type": "object",
      "properties": {
        "calendarId": {
          "type": "string",
          "description": "Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the 'primary' keyword. [1]"
        }
      }
    },
    "queryParameters": {
      "type": "object",
      "properties": {
        "conferenceDataVersion": {
          "type": "integer",
          "description": "Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. [1]",
          "enum": [
            0,
            1
          ],
          "default": 0
        },
        "maxAttendees": {
          "type": "integer",
          "description": "The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. [1]"
        },
        "sendNotifications": {
          "type": "boolean",
          "description": "Deprecated. Please use sendUpdates instead. Whether to send notifications about the event insertion (for example, sending invitations to attendees). Note that some emails might still be sent even if you set the value to false. The default is false. [1]"
        },
        "sendUpdates": {
          "type": "string",
          "description": "Guests who should receive notifications about the event insertion (for example, sending invitations to attendees). [1]",
          "enum": [
            "all",
            "externalOnly",
            "none"
          ]
        },
        "supportsAttachments": {
          "type": "boolean",
          "description": "Whether API client performing operation supports event attachments. Optional. The default is False. [1]",
          "default": false
        }
      }
    },
    "requestBody": jsonSchemaForCalendar_requestBody
  },
  "required": [
    "pathParameters",
    "requestBody"
  ]
};

// for update event.
const jsonSchemaForCalendar_updateEvent = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Google Calendar API - Events: update Parameters",
  "description": "JSON schema for the parameters of the Google Calendar API's Events: update method. [1, 2]",
  "type": "object",
  "properties": {
    "pathParameters": {
      "type": "object",
      "properties": {
        "calendarId": {
          "type": "string",
          "description": "Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the 'primary' keyword. [1]"
        },
        "eventId": {
          "type": "string",
          "description": "Event identifier. [1]"
        }
      },
      "required": ["eventId"]
    },
    "queryParameters": {
      "type": "object",
      "properties": {
        "alwaysIncludeEmail": {
          "type": "boolean",
          "description": "Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). [1]"
        },
        "conferenceDataVersion": {
          "type": "integer",
          "description": "Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. [1]",
          "enum": [
            0,
            1
          ],
          "default": 0
        },
        "maxAttendees": {
          "type": "integer",
          "description": "The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. [1]"
        },
        "sendNotifications": {
          "type": "boolean",
          "description": "Deprecated. Please use sendUpdates instead. Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false. [1]"
        },
        "sendUpdates": {
          "type": "string",
          "description": "Guests who should receive notifications about the event update (for example, title changes, etc.). [1]",
          "enum": [
            "all",
            "externalOnly",
            "none"
          ]
        },
        "supportsAttachments": {
          "type": "boolean",
          "description": "Whether API client performing operation supports event attachments. Optional. The default is False. [1]",
          "default": false
        }
      }
    },
    "requestBody": jsonSchemaForCalendar_requestBody
  },
  "required": [
    "pathParameters",
    "requestBody"
  ]
};
 */
