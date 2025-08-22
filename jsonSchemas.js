/**
 * JSON schemas for the request body of the batchUpdate method of Google Docs API, Sheets API, and Slides API.
 * Author: Kanshi Tanaike
 * GitHub: https://github.com/tanaikech/Generating-Request-Body-for-APIs-using-Gemini
 * 
 * version 1.0.5
 */

const requestsForSheetsAPI_ = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Google Sheets API batchUpdate Requests",
  "description": "JSON schema for the 'requests' property of the spreadsheets.batchUpdate method.",
  "type": "array",
  "items": {
    "$ref": "#/$defs/Request"
  },
  "$defs": {
    "Request": {
      "type": "object",
      "description": "A single kind of update to apply to a spreadsheet.",
      "oneOf": [
        {
          "properties": {
            "updateSpreadsheetProperties": {
              "$ref": "#/$defs/UpdateSpreadsheetPropertiesRequest"
            }
          }
        },
        {
          "properties": {
            "updateSheetProperties": {
              "$ref": "#/$defs/UpdateSheetPropertiesRequest"
            }
          }
        },
        {
          "properties": {
            "updateDimensionProperties": {
              "$ref": "#/$defs/UpdateDimensionPropertiesRequest"
            }
          }
        },
        {
          "properties": {
            "updateNamedRange": {
              "$ref": "#/$defs/UpdateNamedRangeRequest"
            }
          }
        },
        {
          "properties": {
            "repeatCell": {
              "$ref": "#/$defs/RepeatCellRequest"
            }
          }
        },
        {
          "properties": {
            "addNamedRange": {
              "$ref": "#/$defs/AddNamedRangeRequest"
            }
          }
        },
        {
          "properties": {
            "deleteNamedRange": {
              "$ref": "#/$defs/DeleteNamedRangeRequest"
            }
          }
        },
        {
          "properties": {
            "addSheet": {
              "$ref": "#/$defs/AddSheetRequest"
            }
          }
        },
        {
          "properties": {
            "deleteSheet": {
              "$ref": "#/$defs/DeleteSheetRequest"
            }
          }
        },
        {
          "properties": {
            "autoFill": {
              "$ref": "#/$defs/AutoFillRequest"
            }
          }
        },
        {
          "properties": {
            "cutPaste": {
              "$ref": "#/$defs/CutPasteRequest"
            }
          }
        },
        {
          "properties": {
            "copyPaste": {
              "$ref": "#/$defs/CopyPasteRequest"
            }
          }
        },
        {
          "properties": {
            "mergeCells": {
              "$ref": "#/$defs/MergeCellsRequest"
            }
          }
        },
        {
          "properties": {
            "unmergeCells": {
              "$ref": "#/$defs/UnmergeCellsRequest"
            }
          }
        },
        {
          "properties": {
            "updateBorders": {
              "$ref": "#/$defs/UpdateBordersRequest"
            }
          }
        },
        {
          "properties": {
            "updateCells": {
              "$ref": "#/$defs/UpdateCellsRequest"
            }
          }
        },
        {
          "properties": {
            "addFilterView": {
              "$ref": "#/$defs/AddFilterViewRequest"
            }
          }
        },
        {
          "properties": {
            "appendCells": {
              "$ref": "#/$defs/AppendCellsRequest"
            }
          }
        },
        {
          "properties": {
            "clearBasicFilter": {
              "$ref": "#/$defs/ClearBasicFilterRequest"
            }
          }
        },
        {
          "properties": {
            "deleteDimension": {
              "$ref": "#/$defs/DeleteDimensionRequest"
            }
          }
        },
        {
          "properties": {
            "deleteEmbeddedObject": {
              "$ref": "#/$defs/DeleteEmbeddedObjectRequest"
            }
          }
        },
        {
          "properties": {
            "deleteFilterView": {
              "$ref": "#/$defs/DeleteFilterViewRequest"
            }
          }
        },
        {
          "properties": {
            "duplicateFilterView": {
              "$ref": "#/$defs/DuplicateFilterViewRequest"
            }
          }
        },
        {
          "properties": {
            "duplicateSheet": {
              "$ref": "#/$defs/DuplicateSheetRequest"
            }
          }
        },
        {
          "properties": {
            "findReplace": {
              "$ref": "#/$defs/FindReplaceRequest"
            }
          }
        }
      ]
    },
    "UpdateSpreadsheetPropertiesRequest": {
      "type": "object",
      "properties": {
        "properties": {
          "type": "object"
        },
        "fields": {
          "type": "string"
        }
      }
    },
    "UpdateSheetPropertiesRequest": {
      "type": "object",
      "properties": {
        "properties": {
          "type": "object"
        },
        "fields": {
          "type": "string"
        }
      }
    },
    "UpdateDimensionPropertiesRequest": {
      "type": "object",
      "properties": {
        "range": {
          "type": "object"
        },
        "properties": {
          "type": "object"
        },
        "fields": {
          "type": "string"
        }
      }
    },
    "UpdateNamedRangeRequest": {
      "type": "object",
      "properties": {
        "namedRange": {
          "type": "object"
        },
        "fields": {
          "type": "string"
        }
      }
    },
    "RepeatCellRequest": {
      "type": "object",
      "properties": {
        "range": {
          "type": "object"
        },
        "cell": {
          "$ref": "#/$defs/CellData"
        },
        "fields": {
          "type": "string"
        }
      }
    },
    "AddNamedRangeRequest": {
      "type": "object",
      "properties": {
        "namedRange": {
          "type": "object"
        }
      }
    },
    "DeleteNamedRangeRequest": {
      "type": "object",
      "properties": {
        "namedRangeId": {
          "type": "string"
        }
      }
    },
    "AddSheetRequest": {
      "type": "object",
      "properties": {
        "properties": {
          "type": "object"
        }
      }
    },
    "DeleteSheetRequest": {
      "type": "object",
      "properties": {
        "sheetId": {
          "type": "integer"
        }
      }
    },
    "AutoFillRequest": {
      "type": "object",
      "properties": {
        "range": {
          "type": "object"
        },
        "sourceAndDestination": {
          "type": "object"
        },
        "useAlternateSeries": {
          "type": "boolean"
        }
      }
    },
    "CutPasteRequest": {
      "type": "object",
      "properties": {
        "source": {
          "type": "object"
        },
        "destination": {
          "type": "object"
        },
        "pasteType": {
          "type": "string"
        }
      }
    },
    "CopyPasteRequest": {
      "type": "object",
      "properties": {
        "source": {
          "type": "object"
        },
        "destination": {
          "type": "object"
        },
        "pasteType": {
          "type": "string"
        },
        "pasteOrientation": {
          "type": "string"
        }
      }
    },
    "MergeCellsRequest": {
      "type": "object",
      "properties": {
        "range": {
          "type": "object"
        },
        "mergeType": {
          "type": "string"
        }
      }
    },
    "UnmergeCellsRequest": {
      "type": "object",
      "properties": {
        "range": {
          "type": "object"
        }
      }
    },
    "UpdateBordersRequest": {
      "type": "object",
      "properties": {
        "range": {
          "type": "object"
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
          "type": "object"
        },
        "rows": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/RowData"
          }
        },
        "fields": {
          "type": "string"
        }
      }
    },
    "AddFilterViewRequest": {
      "type": "object",
      "properties": {
        "filter": {
          "type": "object"
        }
      }
    },
    "AppendCellsRequest": {
      "type": "object",
      "properties": {
        "sheetId": {
          "type": "integer"
        },
        "rows": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/RowData"
          }
        },
        "fields": {
          "type": "string"
        }
      }
    },
    "ClearBasicFilterRequest": {
      "type": "object",
      "properties": {
        "sheetId": {
          "type": "integer"
        }
      }
    },
    "DeleteDimensionRequest": {
      "type": "object",
      "properties": {
        "range": {
          "type": "object"
        }
      }
    },
    "DeleteEmbeddedObjectRequest": {
      "type": "object",
      "properties": {
        "objectId": {
          "type": "integer"
        }
      }
    },
    "DeleteFilterViewRequest": {
      "type": "object",
      "properties": {
        "filterId": {
          "type": "integer"
        }
      }
    },
    "DuplicateFilterViewRequest": {
      "type": "object",
      "properties": {
        "filterId": {
          "type": "integer"
        }
      }
    },
    "DuplicateSheetRequest": {
      "type": "object",
      "properties": {
        "sourceSheetId": {
          "type": "integer"
        },
        "insertSheetIndex": {
          "type": "integer"
        },
        "newSheetId": {
          "type": "integer"
        },
        "newSheetName": {
          "type": "string"
        }
      }
    },
    "FindReplaceRequest": {
      "type": "object",
      "properties": {
        "find": {
          "type": "string"
        },
        "replacement": {
          "type": "string"
        },
        "matchCase": {
          "type": "boolean"
        },
        "matchEntireCell": {
          "type": "boolean"
        },
        "searchByRegex": {
          "type": "boolean"
        },
        "includeFormulas": {
          "type": "boolean"
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
    "RowData": {
      "type": "object",
      "properties": {
        "values": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/CellData"
          }
        }
      }
    },
    "CellData": {
      "type": "object",
      "properties": {
        "userEnteredValue": {
          "type": "object"
        },
        "effectiveValue": {
          "type": "object"
        },
        "formattedValue": {
          "type": "string"
        },
        "userEnteredFormat": {
          "type": "object"
        },
        "effectiveFormat": {
          "type": "object"
        },
        "hyperlink": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "textFormatRuns": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "dataValidation": {
          "type": "object"
        },
        "pivotTable": {
          "type": "object"
        },
        "dataSourceTable": {
          "type": "object"
        },
        "dataSourceFormula": {
          "type": "object"
        }
      }
    }
  }
};

const jsonSchemaForSheets = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Google Sheets API - spreadsheets.batchUpdate Request Body",
  "description": "A request to apply one or more updates to a spreadsheet.",
  "type": "object",
  "properties": {
    "spreadsheetId": { "type": "string", "description": "Spreadsheet ID" },
    "requests": {
      "type": "array",
      "items": {
        "type": "object",
        "description": [
          `Create "requests" by following JSON schema.`,
          `The JSON schema of "requests" is as follows.`,
          `<JSONSchema>${JSON.stringify(requestsForSheetsAPI_)}</JSONSchema>`,
          `Many of the "update" requests require field masks as "fields". The reference URLs are as follows.`,
          `<URLs>`,
          `https://developers.google.com/workspace/sheets/api/guides/field-masks#update_with_a_field_mask`,
          `https://developers.google.com/workspace/sheets/api/guides/batchupdate#field_masks`,
          `</URLs>`,
          `You can also refer to creating "request" by searching Google.`,
        ].join("\n"),
      }
    }
  },
  "required": ["spreadsheetId", "requests"]
};

const requestsForDocsAPI_ = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Google Docs API batchUpdate Requests",
  "description": "Schema for the 'requests' property of the documents.batchUpdate method.",
  "type": "array",
  "items": {
    "$ref": "#/definitions/Request"
  },
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
        "replaceText": {
          "type": "string"
        },
        "containsText": {
          "$ref": "#/definitions/SubstringMatchCriteria"
        },
        "tabsCriteria": {
          "$ref": "#/definitions/TabsCriteria"
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
          "$ref": "#/definitions/Location"
        },
        "endOfSegmentLocation": {
          "$ref": "#/definitions/EndOfSegmentLocation"
        }
      }
    },
    "UpdateTextStyleRequest": {
      "type": "object",
      "properties": {
        "textStyle": {
          "$ref": "#/definitions/TextStyle"
        },
        "fields": {
          "type": "string"
        },
        "range": {
          "$ref": "#/definitions/Range"
        }
      }
    },
    "CreateParagraphBulletsRequest": {
      "type": "object",
      "properties": {
        "range": {
          "$ref": "#/definitions/Range"
        },
        "bulletPreset": {
          "type": "string",
          "enum": [
            "BULLET_GLYPH_PRESET_UNSPECIFIED",
            "BULLET_DISC_CIRCLE_SQUARE",
            "BULLET_DIAMONDX_ARROW3D_SQUARE",
            "BULLET_CHECKBOX",
            "BULLET_ARROW_DIAMOND_DISC",
            "BULLET_STAR_CIRCLE_SQUARE",
            "BULLET_ARROW3D_CIRCLE_SQUARE",
            "BULLET_LEFTTRIANGLE_DIAMOND_DISC",
            "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE",
            "BULLET_DIAMOND_CIRCLE_SQUARE",
            "NUMBERED_DECIMAL_ALPHA_ROMAN",
            "NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS",
            "NUMBERED_DECIMAL_NESTED",
            "NUMBERED_UPPERALPHA_ALPHA_ROMAN",
            "NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL",
            "NUMBERED_ZERODECIMAL_ALPHA_ROMAN"
          ]
        }
      }
    },
    "DeleteParagraphBulletsRequest": {
      "type": "object",
      "properties": {
        "range": {
          "$ref": "#/definitions/Range"
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
          "$ref": "#/definitions/Range"
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
    "UpdateParagraphStyleRequest": {
      "type": "object",
      "properties": {
        "paragraphStyle": {
          "$ref": "#/definitions/ParagraphStyle"
        },
        "fields": {
          "type": "string"
        },
        "range": {
          "$ref": "#/definitions/Range"
        }
      }
    },
    "DeleteContentRangeRequest": {
      "type": "object",
      "properties": {
        "range": {
          "$ref": "#/definitions/Range"
        }
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
        "objectId": { "type": "string" }
      }
    },
    "UpdateTableColumnPropertiesRequest": {
      "type": "object",
      "properties": {
        "tableStartLocation": { "$ref": "#/definitions/Location" },
        "columnIndices": { "type": "array", "items": { "type": "integer" } },
        "tableColumnProperties": { "$ref": "#/definitions/TableColumnProperties" },
        "fields": { "type": "string" }
      }
    },
    "UpdateTableCellStyleRequest": {
      "type": "object",
      "properties": {
        "tableCellStyle": { "$ref": "#/definitions/TableCellStyle" },
        "fields": { "type": "string" },
        "tableRange": { "$ref": "#/definitions/TableRange" }
      }
    },
    "UpdateTableRowStyleRequest": {
      "type": "object",
      "properties": {
        "tableStartLocation": { "$ref": "#/definitions/Location" },
        "rowIndices": { "type": "array", "items": { "type": "integer" } },
        "tableRowStyle": { "$ref": "#/definitions/TableRowStyle" },
        "fields": { "type": "string" }
      }
    },
    "ReplaceImageRequest": {
      "type": "object",
      "properties": {
        "imageObjectId": { "type": "string" },
        "uri": { "type": "string" },
        "imageReplaceMethod": { "type": "string", "enum": ["IMAGE_REPLACE_METHOD_UNSPECIFIED", "CENTER_CROP"] }
      }
    },
    "UpdateDocumentStyleRequest": {
      "type": "object",
      "properties": {
        "documentStyle": { "$ref": "#/definitions/DocumentStyle" },
        "fields": { "type": "string" }
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
        "type": { "type": "string", "enum": ["HEADER_FOOTER_TYPE_UNSPECIFIED", "DEFAULT"] },
        "sectionBreakLocation": { "$ref": "#/definitions/Location" }
      }
    },
    "CreateFooterRequest": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "enum": ["HEADER_FOOTER_TYPE_UNSPECIFIED", "DEFAULT"] },
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
        "text": { "type": "string" }
      }
    },
    "UpdateSectionStyleRequest": {
      "type": "object",
      "properties": {
        "range": { "$ref": "#/definitions/Range" },
        "sectionStyle": { "$ref": "#/definitions/SectionStyle" },
        "fields": { "type": "string" }
      }
    },
    "InsertSectionBreakRequest": {
      "type": "object",
      "properties": {
        "sectionType": { "type": "string", "enum": ["SECTION_TYPE_UNSPECIFIED", "CONTINUOUS", "NEXT_PAGE"] },
        "location": { "$ref": "#/definitions/Location" },
        "endOfSegmentLocation": { "$ref": "#/definitions/EndOfSegmentLocation" }
      }
    },
    "DeleteHeaderRequest": {
      "type": "object",
      "properties": {
        "headerId": { "type": "string" }
      }
    },
    "DeleteFooterRequest": {
      "type": "object",
      "properties": {
        "footerId": { "type": "string" }
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
        "text": {
          "type": "string"
        },
        "matchCase": {
          "type": "boolean"
        }
      }
    },
    "Location": {
      "type": "object",
      "properties": {
        "segmentId": {
          "type": "string"
        },
        "index": {
          "type": "integer"
        }
      }
    },
    "EndOfSegmentLocation": {
      "type": "object",
      "properties": {
        "segmentId": {
          "type": "string"
        }
      }
    },
    "Range": {
      "type": "object",
      "properties": {
        "segmentId": {
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
    "TextStyle": {
      "type": "object",
      "properties": {
        "bold": { "type": "boolean" },
        "italic": { "type": "boolean" },
        "underline": { "type": "boolean" },
        "strikethrough": { "type": "boolean" },
        "smallCaps": { "type": "boolean" },
        "backgroundColor": { "$ref": "#/definitions/OptionalColor" },
        "foregroundColor": { "$ref": "#/definitions/OptionalColor" },
        "fontSize": { "$ref": "#/definitions/Dimension" },
        "weightedFontFamily": { "$ref": "#/definitions/WeightedFontFamily" },
        "baselineOffset": { "type": "string", "enum": ["BASELINE_OFFSET_UNSPECIFIED", "NONE", "SUPERSCRIPT", "SUBSCRIPT"] },
        "link": { "$ref": "#/definitions/Link" }
      }
    },
    "OptionalColor": {
      "type": "object",
      "properties": {
        "color": {
          "$ref": "#/definitions/Color"
        }
      }
    },
    "Color": {
      "type": "object",
      "properties": {
        "rgbColor": {
          "$ref": "#/definitions/RgbColor"
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
            "PT"
          ]
        }
      }
    },
    "WeightedFontFamily": {
      "type": "object",
      "properties": {
        "fontFamily": {
          "type": "string"
        },
        "weight": {
          "type": "integer"
        }
      }
    },
    "Link": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string"
        },
        "bookmarkId": {
          "type": "string"
        },
        "headingId": {
          "type": "string"
        }
      }
    },
    "Size": {
      "type": "object",
      "properties": {
        "height": {
          "$ref": "#/definitions/Dimension"
        },
        "width": {
          "$ref": "#/definitions/Dimension"
        }
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
    "TableColumnProperties": {
      "type": "object",
      "properties": {
        "width": { "$ref": "#/definitions/Dimension" },
        "widthType": { "type": "string", "enum": ["WIDTH_TYPE_UNSPECIFIED", "EVENLY_DISTRIBUTED", "FIXED_WIDTH"] }
      }
    },
    "TableCellStyle": {
      "type": "object",
      "properties": {
        "backgroundColor": { "$ref": "#/definitions/OptionalColor" },
        "borderTop": { "$ref": "#/definitions/TableCellBorder" },
        "borderBottom": { "$ref": "#/definitions/TableCellBorder" },
        "borderLeft": { "$ref": "#/definitions/TableCellBorder" },
        "borderRight": { "$ref": "#/definitions/TableCellBorder" },
        "paddingTop": { "$ref": "#/definitions/Dimension" },
        "paddingBottom": { "$ref": "#/definitions/Dimension" },
        "paddingLeft": { "$ref": "#/definitions/Dimension" },
        "paddingRight": { "$ref": "#/definitions/Dimension" },
        "contentAlignment": { "type": "string", "enum": ["CONTENT_ALIGNMENT_UNSPECIFIED", "CONTENT_ALIGNMENT_UNSUPPORTED", "TOP", "MIDDLE", "BOTTOM"] }
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
    "TableRowStyle": {
      "type": "object",
      "properties": {
        "minRowHeight": { "$ref": "#/definitions/Dimension" }
      }
    },
    "DocumentStyle": {
      "type": "object",
      "properties": {
        "background": { "$ref": "#/definitions/Background" },
        "pageNumberStart": { "type": "integer" },
        "marginTop": { "$ref": "#/definitions/Dimension" },
        "marginBottom": { "$ref": "#/definitions/Dimension" },
        "marginRight": { "$ref": "#/definitions/Dimension" },
        "marginLeft": { "$ref": "#/definitions/Dimension" },
        "pageSize": { "$ref": "#/definitions/Size" },
        "marginHeader": { "$ref": "#/definitions/Dimension" },
        "marginFooter": { "$ref": "#/definitions/Dimension" },
        "useCustomHeaderFooterMargins": { "type": "boolean" },
        "flipPageOrientation": { "type": "boolean" }
      }
    },
    "SectionStyle": {
      "type": "object",
      "properties": {
        "columnProperties": { "type": "array", "items": { "$ref": "#/definitions/SectionColumnProperties" } },
        "columnSeparatorStyle": { "type": "string", "enum": ["COLUMN_SEPARATOR_STYLE_UNSPECIFIED", "NONE", "BETWEEN_EACH_COLUMN"] },
        "contentDirection": { "type": "string", "enum": ["CONTENT_DIRECTION_UNSPECIFIED", "LEFT_TO_RIGHT", "RIGHT_TO_LEFT"] },
        "marginTop": { "$ref": "#/definitions/Dimension" },
        "marginBottom": { "$ref": "#/definitions/Dimension" },
        "marginRight": { "$ref": "#/definitions/Dimension" },
        "marginLeft": { "$ref": "#/definitions/Dimension" },
        "marginHeader": { "$ref": "#/definitions/Dimension" },
        "marginFooter": { "$ref": "#/definitions/Dimension" },
        "pageNumberStart": { "type": "integer" }
      }
    },
    "Background": {
      "type": "object",
      "properties": {
        "color": {
          "$ref": "#/definitions/OptionalColor"
        }
      }
    },
    "SectionColumnProperties": {
      "type": "object",
      "properties": {
        "width": {
          "$ref": "#/definitions/Dimension"
        },
        "paddingEnd": {
          "$ref": "#/definitions/Dimension"
        }
      }
    },
    "ParagraphStyle": {
      "type": "object",
      "properties": {
        "headingId": { "type": "string" },
        "namedStyleType": { "type": "string", "enum": ["NAMED_STYLE_TYPE_UNSPECIFIED", "NORMAL_TEXT", "TITLE", "SUBTITLE", "HEADING_1", "HEADING_2", "HEADING_3", "HEADING_4", "HEADING_5", "HEADING_6"] },
        "alignment": { "type": "string", "enum": ["ALIGNMENT_UNSPECIFIED", "START", "CENTER", "END", "JUSTIFIED"] },
        "lineSpacing": { "type": "number" },
        "direction": { "type": "string", "enum": ["CONTENT_DIRECTION_UNSPECIFIED", "LEFT_TO_RIGHT", "RIGHT_TO_LEFT"] },
        "spacingMode": { "type": "string", "enum": ["SPACING_MODE_UNSPECIFIED", "NEVER_COLLAPSE", "COLLAPSE_LISTS"] },
        "spaceAbove": { "$ref": "#/definitions/Dimension" },
        "spaceBelow": { "$ref": "#/definitions/Dimension" },
        "borderBetween": { "$ref": "#/definitions/ParagraphBorder" },
        "borderTop": { "$ref": "#/definitions/ParagraphBorder" },
        "borderBottom": { "$ref": "#/definitions/ParagraphBorder" },
        "borderLeft": { "$ref": "#/definitions/ParagraphBorder" },
        "borderRight": { "$ref": "#/definitions/ParagraphBorder" },
        "indentFirstLine": { "$ref": "#/definitions/Dimension" },
        "indentStart": { "$ref": "#/definitions/Dimension" },
        "indentEnd": { "$ref": "#/definitions/Dimension" },
        "keepLinesTogether": { "type": "boolean" },
        "keepWithNext": { "type": "boolean" },
        "shading": { "$ref": "#/definitions/Shading" }
      }
    },
    "ParagraphBorder": {
      "type": "object",
      "properties": {
        "color": { "$ref": "#/definitions/OptionalColor" },
        "width": { "$ref": "#/definitions/Dimension" },
        "padding": { "$ref": "#/definitions/Dimension" },
        "dashStyle": { "type": "string", "enum": ["DASH_STYLE_UNSPECIFIED", "SOLID", "DOT", "DASH"] }
      }
    },
    "Shading": {
      "type": "object",
      "properties": {
        "backgroundColor": {
          "$ref": "#/definitions/OptionalColor"
        }
      }
    },
    "TableCellBorder": {
      "type": "object",
      "properties": {
        "color": { "$ref": "#/definitions/OptionalColor" },
        "width": { "$ref": "#/definitions/Dimension" },
        "dashStyle": { "type": "string", "enum": ["DASH_STYLE_UNSPECIFIED", "SOLID", "DOT", "DASH"] }
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
    }
  }
};

const jsonSchemaForDocs = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Google Docs API batchUpdate Request Body",
  "description": "A list of updates to apply to the document.",
  "type": "object",
  "properties": {
    "documentId": { "type": "string", "description": "Document ID" },
    "requests": {
      "type": "array",
      "items": {
        "type": "object",
        "description": [
          `Create "requests" by following JSON schema.`,
          `The JSON schema of "requests" is as follows.`,
          `<JSONSchema>${JSON.stringify(requestsForDocsAPI_)}</JSONSchema>`,
          `Many of the "update" requests require field masks as "fields". The reference URLs are as follows.`,
          `<URLs>`,
          `https://developers.google.com/workspace/sheets/api/guides/field-masks#update_with_a_field_mask`,
          `https://developers.google.com/workspace/sheets/api/guides/batchupdate#field_masks`,
          `</URLs>`,
          `You can also refer to creating "request" by searching Google.`,
        ].join("\n"),
      }
    }
  },
  "required": ["documentId", "requests"]
};

const requestsForSlidesAPI_ = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Google Slides API Requests",
  "description": "JSON schema for the 'requests' property of the presentations.batchUpdate method in the Google Slides API. The 'requests' property is an array of Request objects.",
  "type": "array",
  "items": {
    "$ref": "#/definitions/Request"
  },
  "definitions": {
    "Request": {
      "type": "object",
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
        "predefinedLayout": { "type": "string", "enum": ["PREDEFINED_LAYOUT_UNSPECIFIED", "BLANK", "CAPTION_ONLY", "TITLE", "TITLE_AND_BODY", "TITLE_AND_TWO_COLUMNS", "TITLE_ONLY", "SECTION_HEADER", "SECTION_TITLE_AND_DESCRIPTION", "ONE_COLUMN_TEXT", "MAIN_POINT", "BIG_NUMBER"] },
        "layoutId": { "type": "string" }
      }
    },
    "LayoutPlaceholderIdMapping": {
      "type": "object",
      "properties": {
        "layoutPlaceholder": { "$ref": "#/definitions/Placeholder" },
        "layoutPlaceholderObjectId": { "type": "string" },
        "objectId": { "type": "string" }
      }
    },
    "Placeholder": {
      "type": "object",
      "properties": {
        "parentObjectId": { "type": "string" },
        "index": { "type": "integer" },
        "type": { "type": "string", "enum": ["NONE", "BODY", "CHART", "CLIP_ART", "CENTERED_TITLE", "DIAGRAM", "DATE_AND_TIME", "FOOTER", "HEADER", "MEDIA", "OBJECT", "PICTURE", "SLIDE_NUMBER", "SUBTITLE", "TABLE", "TITLE", "SLIDE_IMAGE"] }
      }
    },
    "CreateShapeRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "shapeType": { "type": "string", "enum": ["TYPE_UNSPECIFIED", "TEXT_BOX", "RECTANGLE", "ROUND_RECTANGLE", "ELLIPSE", "ARC", "BENT_ARROW", "BENT_UP_ARROW", "BEVEL", "BLOCK_ARC", "BRACE_PAIR", "BRACKET_PAIR", "CAN", "CHEVRON", "CHORD", "CLOUD", "CORNER", "CUBE", "CURVED_DOWN_ARROW", "CURVED_LEFT_ARROW", "CURVED_RIGHT_ARROW", "CURVED_UP_ARROW", "DECAGON", "DIAMOND", "DODECAGON", "DONUT", "DOUBLE_WAVE", "DOWN_ARROW", "DOWN_ARROW_CALLOUT", "FOLDED_CORNER", "FRAME", "HALF_FRAME", "HEART", "HEPTAGON", "HEXAGON", "HOME_PLATE", "HORIZONTAL_SCROLL", "IRREGULAR_SEAL_1", "IRREGULAR_SEAL_2", "LEFT_ARROW", "LEFT_ARROW_CALLOUT", "LEFT_BRACE", "LEFT_BRACKET", "LEFT_RIGHT_ARROW", "LEFT_RIGHT_ARROW_CALLOUT", "LEFT_RIGHT_UP_ARROW", "LEFT_UP_ARROW", "LIGHTNING_BOLT", "MATH_DIVIDE", "MATH_EQUAL", "MATH_MINUS", "MATH_MULTIPLY", "MATH_NOT_EQUAL", "MATH_PLUS", "MOON", "NO_SMOKING", "NON_ISOSCELES_TRAPEZOID", "NOTCHED_RIGHT_ARROW", "OCTAGON", "PARALLELOGRAM", "PENTAGON", "PIE", "PLAQUE", "PLUS", "QUAD_ARROW", "QUAD_ARROW_CALLOUT", "RIBBON", "RIBBON_2", "RIGHT_ARROW", "RIGHT_ARROW_CALLOUT", "RIGHT_BRACE", "RIGHT_BRACKET", "ROUND_1_RECTANGLE", "ROUND_2_DIAG_RECTANGLE", "ROUND_2_SAME_RECTANGLE", "RIGHT_TRIANGLE", "SMILEY_FACE", "SNIP_1_RECTANGLE", "SNIP_2_DIAG_RECTANGLE", "SNIP_2_SAME_RECTANGLE", "SNIP_ROUND_RECTANGLE", "STAR_10", "STAR_12", "STAR_16", "STAR_24", "STAR_32", "STAR_4", "STAR_5", "STAR_6", "STAR_7", "STAR_8", "STRIPED_RIGHT_ARROW", "SUN", "TRAPEZOID", "TRIANGLE", "UP_ARROW", "UP_ARROW_CALLOUT", "UP_DOWN_ARROW", "UTURN_ARROW", "VERTICAL_SCROLL", "WAVE", "WEDGE_ELLIPSE_CALLOUT", "WEDGE_RECTANGLE_CALLOUT", "WEDGE_ROUND_RECTANGLE_CALLOUT"] },
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
        "magnitude": { "type": "number" },
        "unit": { "type": "string", "enum": ["UNIT_UNSPECIFIED", "EMU", "PT"] }
      }
    },
    "AffineTransform": {
      "type": "object",
      "properties": {
        "scaleX": { "type": "number" },
        "scaleY": { "type": "number" },
        "translateX": { "type": "number" },
        "translateY": { "type": "number" },
        "shearX": { "type": "number" },
        "shearY": { "type": "number" },
        "unit": { "type": "string", "enum": ["UNIT_UNSPECIFIED", "EMU", "PT"] }
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
        "objectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" },
        "insertionIndex": { "type": "integer" },
        "text": { "type": "string" }
      }
    },
    "TableCellLocation": {
      "type": "object",
      "properties": {
        "rowIndex": { "type": "integer" },
        "columnIndex": { "type": "integer" }
      }
    },
    "InsertTableRowsRequest": {
      "type": "object",
      "properties": {
        "tableObjectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" },
        "insertBelow": { "type": "boolean" },
        "number": { "type": "integer" }
      }
    },
    "InsertTableColumnsRequest": {
      "type": "object",
      "properties": {
        "tableObjectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" },
        "insertRight": { "type": "boolean" },
        "number": { "type": "integer" }
      }
    },
    "DeleteTableRowRequest": {
      "type": "object",
      "properties": {
        "tableObjectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" }
      }
    },
    "DeleteTableColumnRequest": {
      "type": "object",
      "properties": {
        "tableObjectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" }
      }
    },
    "ReplaceAllTextRequest": {
      "type": "object",
      "properties": {
        "replaceText": { "type": "string" },
        "pageObjectIds": { "type": "array", "items": { "type": "string" } },
        "containsText": { "$ref": "#/definitions/SubstringMatchCriteria" }
      }
    },
    "SubstringMatchCriteria": {
      "type": "object",
      "properties": {
        "text": { "type": "string" },
        "matchCase": { "type": "boolean" }
      }
    },
    "DeleteObjectRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" }
      }
    },
    "UpdatePageElementTransformRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "transform": { "$ref": "#/definitions/AffineTransform" },
        "applyMode": { "type": "string", "enum": ["APPLY_MODE_UNSPECIFIED", "RELATIVE", "ABSOLUTE"] }
      }
    },
    "UpdateSlidesPositionRequest": {
      "type": "object",
      "properties": {
        "slideObjectIds": { "type": "array", "items": { "type": "string" } },
        "insertionIndex": { "type": "integer" }
      }
    },
    "DeleteTextRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" },
        "textRange": { "$ref": "#/definitions/Range" }
      }
    },
    "Range": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "enum": ["RANGE_TYPE_UNSPECIFIED", "FIXED_RANGE", "FROM_START_INDEX", "ALL"] },
        "startIndex": { "type": "integer" },
        "endIndex": { "type": "integer" }
      }
    },
    "CreateImageRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "elementProperties": { "$ref": "#/definitions/PageElementProperties" },
        "url": { "type": "string" }
      }
    },
    "CreateVideoRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "elementProperties": { "$ref": "#/definitions/PageElementProperties" },
        "id": { "type": "string" },
        "source": { "type": "string", "enum": ["SOURCE_UNSPECIFIED", "YOUTUBE", "DRIVE"] }
      }
    },
    "CreateSheetsChartRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "spreadsheetId": { "type": "string" },
        "chartId": { "type": "integer" },
        "linkingMode": { "type": "string", "enum": ["NOT_LINKED_IMAGE", "LINKED"] },
        "elementProperties": { "$ref": "#/definitions/PageElementProperties" }
      }
    },
    "CreateLineRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "elementProperties": { "$ref": "#/definitions/PageElementProperties" },
        "lineCategory": { "type": "string", "enum": ["STRAIGHT", "BENT", "CURVED"] },
        "category": { "type": "string", "enum": ["STRAIGHT", "BENT", "CURVED"] }
      }
    },
    "RefreshSheetsChartRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" }
      }
    },
    "UpdateShapePropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "fields": { "type": "string" },
        "shapeProperties": { "type": "object" }
      }
    },
    "UpdateImagePropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "fields": { "type": "string" },
        "imageProperties": { "type": "object" }
      }
    },
    "UpdateVideoPropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "fields": { "type": "string" },
        "videoProperties": { "type": "object" }
      }
    },
    "UpdatePagePropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "fields": { "type": "string" },
        "pageProperties": { "type": "object" }
      }
    },
    "UpdateTableCellPropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "fields": { "type": "string" },
        "tableRange": { "$ref": "#/definitions/TableRange" },
        "tableCellProperties": { "type": "object" }
      }
    },
    "TableRange": {
      "type": "object",
      "properties": {
        "location": { "$ref": "#/definitions/TableCellLocation" },
        "rowSpan": { "type": "integer" },
        "columnSpan": { "type": "integer" }
      }
    },
    "UpdateLinePropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "fields": { "type": "string" },
        "lineProperties": { "type": "object" }
      }
    },
    "CreateParagraphBulletsRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" },
        "textRange": { "$ref": "#/definitions/Range" },
        "bulletPreset": { "type": "string", "enum": ["BULLET_DISC_CIRCLE_SQUARE", "BULLET_DIAMONDX_ARROW3D_SQUARE", "BULLET_CHECKBOX", "BULLET_ARROW_DIAMOND_DISC", "BULLET_STAR_CIRCLE_SQUARE", "BULLET_ARROW3D_CIRCLE_SQUARE", "BULLET_LEFTTRIANGLE_DIAMOND_DISC", "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE", "BULLET_DIAMOND_CIRCLE_SQUARE", "NUMBERED_DIGIT_ALPHA_ROMAN", "NUMBERED_DIGIT_ALPHA_ROMAN_PARENS", "NUMBERED_DIGIT_NESTED", "NUMBERED_UPPERALPHA_ALPHA_ROMAN", "NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT", "NUMBERED_ZERODIGIT_ALPHA_ROMAN"] }
      }
    },
    "ReplaceAllShapesWithImageRequest": {
      "type": "object",
      "properties": {
        "imageUrl": { "type": "string" },
        "replaceMethod": { "type": "string", "enum": ["CENTER_INSIDE", "CENTER_CROP"] },
        "imageReplaceMethod": { "type": "string", "enum": ["IMAGE_REPLACE_METHOD_UNSPECIFIED", "CENTER_INSIDE", "CENTER_CROP"] },
        "pageObjectIds": { "type": "array", "items": { "type": "string" } },
        "containsText": { "$ref": "#/definitions/SubstringMatchCriteria" }
      }
    },
    "DuplicateObjectRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "objectIds": { "type": "object", "additionalProperties": { "type": "string" } }
      }
    },
    "UpdateTextStyleRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" },
        "style": { "type": "object" },
        "textRange": { "$ref": "#/definitions/Range" },
        "fields": { "type": "string" }
      }
    },
    "ReplaceAllShapesWithSheetsChartRequest": {
      "type": "object",
      "properties": {
        "spreadsheetId": { "type": "string" },
        "chartId": { "type": "integer" },
        "linkingMode": { "type": "string", "enum": ["NOT_LINKED_IMAGE", "LINKED"] },
        "pageObjectIds": { "type": "array", "items": { "type": "string" } },
        "containsText": { "$ref": "#/definitions/SubstringMatchCriteria" }
      }
    },
    "DeleteParagraphBulletsRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" },
        "textRange": { "$ref": "#/definitions/Range" }
      }
    },
    "UpdateParagraphStyleRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "cellLocation": { "$ref": "#/definitions/TableCellLocation" },
        "style": { "type": "object" },
        "textRange": { "$ref": "#/definitions/Range" },
        "fields": { "type": "string" }
      }
    },
    "UpdateTableBorderPropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "borderPosition": { "type": "string", "enum": ["ALL", "BOTTOM", "INNER", "INNER_HORIZONTAL", "INNER_VERTICAL", "LEFT", "OUTER", "RIGHT", "TOP"] },
        "tableRange": { "$ref": "#/definitions/TableRange" },
        "tableBorderProperties": { "type": "object" },
        "fields": { "type": "string" }
      }
    },
    "UpdateTableColumnPropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "columnIndices": { "type": "array", "items": { "type": "integer" } },
        "tableColumnProperties": { "type": "object" },
        "fields": { "type": "string" }
      }
    },
    "UpdateTableRowPropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "rowIndices": { "type": "array", "items": { "type": "integer" } },
        "tableRowProperties": { "type": "object" },
        "fields": { "type": "string" }
      }
    },
    "MergeTableCellsRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "tableRange": { "$ref": "#/definitions/TableRange" }
      }
    },
    "UnmergeTableCellsRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "tableRange": { "$ref": "#/definitions/TableRange" }
      }
    },
    "GroupObjectsRequest": {
      "type": "object",
      "properties": {
        "groupObjectId": { "type": "string" },
        "childrenObjectIds": { "type": "array", "items": { "type": "string" } }
      }
    },
    "UngroupObjectsRequest": {
      "type": "object",
      "properties": {
        "objectIds": { "type": "array", "items": { "type": "string" } }
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
        "imageReplaceMethod": { "type": "string", "enum": ["IMAGE_REPLACE_METHOD_UNSPECIFIED", "CENTER_INSIDE", "CENTER_CROP"] },
        "url": { "type": "string" }
      }
    },
    "UpdateSlidePropertiesRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "slideProperties": { "type": "object" },
        "fields": { "type": "string" }
      }
    },
    "UpdatePageElementsZOrderRequest": {
      "type": "object",
      "properties": {
        "pageElementObjectIds": { "type": "array", "items": { "type": "string" } },
        "operation": { "type": "string", "enum": ["Z_ORDER_OPERATION_UNSPECIFIED", "BRING_TO_FRONT", "BRING_FORWARD", "SEND_BACKWARD", "SEND_TO_BACK"] }
      }
    },
    "UpdateLineCategoryRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" },
        "lineCategory": { "type": "string", "enum": ["STRAIGHT", "BENT", "CURVED"] }
      }
    },
    "RerouteLineRequest": {
      "type": "object",
      "properties": {
        "objectId": { "type": "string" }
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
    "presentationId": { "type": "string", "description": "Presentation ID (Google Slide ID)" },
    "requests": {
      "type": "array",
      "items": {
        "type": "object",
        "description": [
          `Create "requests" by following JSON schema.`,
          `The JSON schema of "requests" is as follows.`,
          `<JSONSchema>${JSON.stringify(requestsForSlidesAPI_)}</JSONSchema>`,
          `Many of the "update" requests require field masks as "fields". The reference URLs are as follows.`,
          `<URLs>`,
          `https://developers.google.com/workspace/sheets/api/guides/field-masks#update_with_a_field_mask`,
          `https://developers.google.com/workspace/sheets/api/guides/batchupdate#field_masks`,
          `</URLs>`,
          `You can also refer to creating "request" by searching Google.`,
        ].join("\n"),
      }
    }
  },
  "required": ["presentationId", "requests"]
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
