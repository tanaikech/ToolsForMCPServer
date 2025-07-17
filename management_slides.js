/**
 * Management of Google Slides
 * Updated on 20250717 15:50
 */

/**
 * This function generate a presentation with Google Slides.
 * https://github.com/tanaikech/Integrating-Gemini-and-Google-Apps-Script-for-Automated-Google-Slides-Presentations
 * @private
 */
function generate_presentation_with_google_slides(object = {}) {
  const { title = null, name = "Sample speaker", presentationTime = 5, text = "" } = object;
  let result;
  try {
    if (title) {
      let documentId = null;
      if (text) {
        const doc = DocumentApp.create("temp");
        documentId = doc.getId();
        doc.getBody().appendParagraph(text);
        doc.saveAndClose();
      }
      const presentation = SlidesApp.create(name);
      const object = { apiKey, title, name, presentationTime, generateImage: true, presentationDesign: "Normal", presentation };
      if (documentId) {
        object.documentId = documentId;
      }
      new GeneratePresentation(object).run();
      presentation.getSlides()[0].remove();
      presentation.saveAndClose();
      Drive.Files.remove(documentId);

      // If you want to return only the text, please use below.
      result = {
        content: [{ type: "text", text: `Presentation was successfully created. The url is "${presentation.getUrl()}".` }],
        isError: false,
      };

      // If you want to return the text and a PDF file of the created presentation, please use the below.
      // But, in the current stage, type "pdf" cannot be used. So, I would like to expect the future update.
      // const data = Utilities.base64Encode(DriveApp.getFileById(presentation.getId()).getBlob().getBytes());
      // result = {
      //   content: [
      //     { type: "text", text: `Presentation was successfully created. The url is "${presentation.getUrl()}".` },
      //     { type: "pdf", data, mimeType: MimeType.PDF },
      //   ],
      //   isError: false,
      // };
    } else {
      result = { content: [{ type: "text", text: "No presentation title." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function gets Google Slides Objects using Slides API.
 * @private
 */
function get_google_slides_object_using_slides_api(object = {}) {
  const { presentationId = null } = object;
  let result;
  try {
    if (!presentationId) {
      result = { content: [{ type: "text", text: "No presentation ID." }], isError: true };
    } else {
      const obj = Slides.Presentations.get(presentationId);
      result = { content: [{ type: "text", text: JSON.stringify(obj) }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function manages Google Slides using Slides API.
 * @private
 */
function manage_google_slides_using_slides_api(object = {}) {
  const { presentationId = null, requests = [] } = object;
  let result;
  try {
    if (!presentationId || requests.length == 0) {
      result = { content: [{ type: "text", text: "No presentation ID or requests." }], isError: true };
    } else {
      const obj = Slides.Presentations.batchUpdate({ requests }, presentationId);
      result = { content: [{ type: "text", text: JSON.stringify(obj) }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// Descriptions of the functions.
const descriptions_management_slides = {
  generate_presentation_with_google_slides: {
    description: "Use this to create and generate a presentation using Google Slides.",
    parameters: {
      type: "object",
      properties: {
        title: { type: "string", description: "Title of the presentation." },
        name: { type: "string", description: "Your name. This name is used as the speaker name of the presentation." },
        presentationTime: { type: "number", description: "Presentation time. The unit is minute." },
        text: { type: "string", description: "Description of the presentation." },
      },
      required: ["title", "name", "presentationTime", "text"]
    }
  },

  get_google_slides_object_using_slides_api: {
    description: "Use this to get Google Slides Object using Slides API. https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/get When this tool is used, for example, the object IDs on the slides can be retrieved.",
    parameters: {
      type: "object",
      properties: {
        presentationId: { type: "string", description: "Presentation ID of Google Slides." },
      },
      required: ["presentationId"]
    }
  },

  manage_google_slides_using_slides_api: {
    description: "Use this to manage Google Slides using Slides API. Provide the request body for batchUpdate method. https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/batchUpdate",
    parameters: {
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
    }
  },

};

/**
 * Class object for generating presentation using Gemini API.
 * Author: Kanshi Tanaike
 * version 1.0.0
 * @class
 */
class GeneratePresentation {
  /**
   * @param {Object} object Object using this script.
   * @param {String} object.apiKey API key for Gemini API.
   * @param {String} object.name Your name. This name is used in the presentation.
   * @param {String} object.presentationTime Presentation time. The unit is minute.
   * @param {String} object.title Title of your presentation.
   * @param {String} object.documentId Document ID of the Google Docs, including the description, tables, and images, which are the base information for generating your presentation. Even when only the title is given, this script can also generate the presentation from only the title using Gemini.
   * @param {SlidesApp.Presentation} object.presentation Presentation (Google Slides). The generated presentation is put into this presentation. When this is not used, a new Google Slide is created.
   * @param {Boolean} object.generateImage The default is false. When this is true, the images are also generated by Gemini when the method "run" is run. But when a lot of images are generated, an error might occur. So, as the default, "false" is used. By this, the description of each image is set as the placeholder. You can generate the images using the description later with the method "replaceTextWithImage".
   * @param {String} object.presentationDesign About the design of presentation, you can select one of "NORMAL", "DARK", and "COOL". The default is "NORMAL".
   * @param {Boolean} object.dependentGenerateImages The default is true. When this is true, the images in the presentations are generated in the chat. By this, the generated images have a correlation. Ref: https://medium.com/google-cloud/generate-growing-images-using-gemini-api-3de7638e47fd
   */
  constructor(object = {}) {
    const { apiKey = null, name = "Sample speaker name", presentationTime = 10, title = null, documentId = null, presentation = SlidesApp.create("generatedPresentation"), generateImage = false, presentationDesign = "NORMAL", dependentGenerateImages = true } = object;

    /** @private */
    this.geminiObjForContent = {
      apiKey,
      model: "models/gemini-2.0-flash-exp",
      generationConfig: { responseMimeType: "application/json" },
      tools: [{ googleSearch: {} }],
    };

    /** @private */
    this.geminiObjForImage = {
      apiKey,
      model: "models/gemini-2.0-flash-exp",
      exportRawData: true,
      generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
    };

    /** @private */
    this.name = name;

    /** @private */
    this.presentationTime = presentationTime;

    /** @private */
    this.title = title;

    /** @private */
    this.documentId = documentId;

    /** @private */
    this.descriptionOfPresentation = "";

    /** @private */
    this.parsedDocImages = null;

    /** @private */
    this.fileList = [];

    /** @private */
    this.presentation = presentation;

    /** @private */
    this.generateImage = generateImage;

    /** @private */
    this.presentationDesign = presentationDesign.toLowerCase();

    /** @private */
    this.dependentGenerateImages = dependentGenerateImages;

    /** @private */
    this.headers = { authorization: "Bearer " + ScriptApp.getOAuthToken() };

    /** @private */
    this.g;
  }

  /**
    * ### Description
    * Main method of GeneratePresentation.
    * Generate presentation to Google Slides from the title and the Google Docs including the description of the presentation.
    *
    * @return {void}
    */
  run() {
    console.log("Start.");
    this.errorProcess_();

    /** @private */
    this.g = new GeminiWithFiles(this.geminiObjForContent);
    const q = this.createPrompt_();

    // DriveApp.createFile("sample.txt", q);
    // return

    const object = this.generateContent_(q);
    this.createPresentation_(object);
    console.log("Finished!");
  }

  /**
    * ### Description
    * Replace text with the generated image. After you run the function "run", please run this function.
    * The text of placeholder is replaced with the generated image.
    *
    * @return {void}
    */
  replaceTextWithImage() {
    console.log("Start.");
    if (this.dependentGenerateImages) {
      this.g = new GeminiWithFiles(this.geminiObjForImage);
    }
    this.presentation.getSlides().forEach(slide => {
      slide.getPageElements().forEach(p => {
        if (p.getPageElementType() == SlidesApp.PageElementType.SHAPE) {
          const shape = p.asShape();
          const text = shape.getText().asString().trim();
          const description = text.match(/\{\{(.*)\}\}/);
          if (description) {
            try {
              let prompt = `Generate an image from the description of "${description[1]}".`;
              if (this.title) {
                prompt = `I am creating a presentation with a title of ${this.title}. ` + prompt;
              }
              if (!this.dependentGenerateImages) {
                this.g = new GeminiWithFiles(this.geminiObjForImage);
              }
              const blob = this.generateImage_(prompt);
              if (blob) {
                shape.replaceWithImage(blob);
              } else {
                console.warn(`About "${text}", the image could be generated. Please try again later.`);
              }
            } catch (e) {
              console.error(`About "${text}", the image could be generated. The error message is "${e.message}". Please try again later.`);
            }
          }
        }
      });
    });
    console.log("Finished!");
  }

  /**
  * ### Description
  * Check parameters.
  *
  * @return {void}
  * @private
  */
  errorProcess_() {
    console.log("Checking errors.");
    if (!this.geminiObjForContent.apiKey) {
      throw new Error("Please set your API key for using Gemini API.");
    }
    if (!this.title) {
      throw new Error("Please set the title of your presentation.");
    }
    console.log("Done.");
  }

  /**
  * ### Description
  * Create prompt for Gemini.
  *
  * @return {String} Created prompt.
  * @private
  */
  createPrompt_() {
    console.log("Createing prompt.");
    const slideWidth = this.presentation.getPageWidth();
    const slideHeight = this.presentation.getPageHeight();

    let basePrompt = [
      `My name is ${this.name}. This name is used as the speaker of the presentation.`,
      `I want to create a presentation about "${this.title}" as a title.`
    ];
    const forImages = [];
    if (this.documentId) {
      this.descriptionOfPresentation = this.parseDocument_();
      basePrompt = [
        ...basePrompt,
        `As additional information, I want to create the presentation using not only the title but also the following description, images, and tables as the base information from "DescriptionOfPresentation" as a supplement material.`,
        `When the images are given from "DescriptionOfPresentation", they are required to be used in the created presentation. The filenames of the images are required to be used as placeholders on Google Slides.`,
        `You are required to create a more fulfilling presentation by including more important information with important images and tables. When you think that when other images except for "DescriptionOfPresentation" are added, it will be a better presentation, other images are also required to be added.`,
        `When, in order to create a better presentation, insert the more important texts, images, and tables, and add more important information.`,
        `<DescriptionOfPresentation>\n${this.descriptionOfPresentation}</DescriptionOfPresentation>`,
      ];
      if (this.parsedDocImages && this.parsedDocImages.size > 0) {
        const names = [...this.parsedDocImages].map(([name]) => name);
        forImages.push(
          `The names of images for "DescriptionOfPresentation" are as follows.`,
          `<NamesOfImagesForDescriptionOfPresentation>${JSON.stringify(names)}</NamesOfImagesForDescriptionOfPresentation>`,
          `When you use those images, set the names of images to the description of the inserted image.`,
          `You can also add other important images except for "NamesOfImagesForDescriptionOfPresentation". At that time, it is required to return the text of the detailed description for generating the image for the 1st argument of the insertImage method.`,
        );
      }
    }

    const q = [
      ...basePrompt,
      `You are required to create the presentation using Google Slides as the title.`,
      `Each object in each slide page is required to be placed using Google Apps Script.`,
      `So think of Classes and methods in each Class for managing Google Slides using Google Apps Script.`,
      `The information on the slide "InformationOfSlide" is as follows.`,
      `<InformationOfSlide>`,
      `The presentation time is ${this.presentationTime} minutes. You are required to create Google Slides to present for this time schedule.`,
      `The slide page size is ${slideWidth} points and ${slideHeight} points in width and height, respectively.`,
      `</InformationOfSlide>`,
      `You are required to return the coordinates in the slide page for putting the objects (text, image, line, table) into Google Slides. In order to return the generated result, you are required to use the following JSON schema of "jsonSchema".`,
    ];

    const descriptionForJsonSchema = [
      `Create each slide page for the presentation using Google Slides. In order to insert the objects into the Google Slides, you can use the following methods of the Class SlidesApp.Slide for Google Apps Script.`,
      `<Methods>`,
      `If the text is required to be put, the insertTextBox method of the Class SlidesApp.Slide is used. So, return the suitable arguments for the method. Coordinate for putting into the slide page and the text. The arguments are "text", "left", "top", "width", and "height" in order.`,
      `If the image you think is required to be inserted, the insertImage method of the Class SlidesApp.Slide is used. So, return the suitable arguments for the method. Those are the coordinates for putting into the slide page and the text of the detailed description for generating the image. The arguments are "text of the detailed description for generating the image.", "left", "top", "width", and "height" in order. The image will be generated using the text in the future.`,
      forImages.length == 0 ? "" : forImages.join("\n"),
      `If the line is required to be put, the insertLine method is used. So, return the suitable arguments for the method. Coordinate for putting into the slide page and the length, the thickness of the line, and the lineCategory. The arguments are "LineCategory", "startLeft", "startTop", "endLeft", and "endTop" in order. You can select LineCategory from "STRAIGHT", "CURVED", and "BENT".`,
      `If the table is required to be put, the insertTable method is used. So, return the suitable arguments for the method. Coordinate for putting into the slide page and the width and height of the table and the data of the table as a 2-dimensional array. The arguments are "numRows", "numColumns", "left", "top", "width", and "height" in order.`,
      `If the shape is required to be put, the insertShape method is used. The arguments are "ShapeType", "left", "top", "width", and "height" in order. You can select ShapeType from "TEXT_BOX","RECTANGLE","ROUND_RECTANGLE","ELLIPSE","ARC","BENT_ARROW","BENT_UP_ARROW","BEVEL","BLOCK_ARC","BRACE_PAIR","BRACKET_PAIR","CAN","CHEVRON","CHORD","CLOUD","CORNER","CUBE","CURVED_DOWN_ARROW","CURVED_LEFT_ARROW","CURVED_RIGHT_ARROW","CURVED_UP_ARROW","DECAGON","DIAGONAL_STRIPE","DIAMOND","DODECAGON","DONUT","DOUBLE_WAVE","DOWN_ARROW","DOWN_ARROW_CALLOUT","FOLDED_CORNER","FRAME","HALF_FRAME","HEART","HEPTAGON","HEXAGON","HOME_PLATE","HORIZONTAL_SCROLL","IRREGULAR_SEAL_1","IRREGULAR_SEAL_2","LEFT_ARROW","LEFT_ARROW_CALLOUT","LEFT_BRACE","LEFT_BRACKET","LEFT_RIGHT_ARROW","LEFT_RIGHT_ARROW_CALLOUT","LEFT_RIGHT_UP_ARROW","LEFT_UP_ARROW","LIGHTNING_BOLT","MATH_DIVIDE","MATH_EQUAL","MATH_MINUS","MATH_MULTIPLY","MATH_NOT_EQUAL","MATH_PLUS","MOON","NO_SMOKING","NOTCHED_RIGHT_ARROW","OCTAGON","PARALLELOGRAM","PENTAGON","PIE","PLAQUE","PLUS","QUAD_ARROW","QUAD_ARROW_CALLOUT","RIBBON","RIBBON_2","RIGHT_ARROW","RIGHT_ARROW_CALLOUT","RIGHT_BRACE","RIGHT_BRACKET","ROUND_1_RECTANGLE","ROUND_2_DIAGONAL_RECTANGLE","ROUND_2_SAME_RECTANGLE","RIGHT_TRIANGLE","SMILEY_FACE","SNIP_1_RECTANGLE","SNIP_2_DIAGONAL_RECTANGLE","SNIP_2_SAME_RECTANGLE","SNIP_ROUND_RECTANGLE","STAR_10","STAR_12","STAR_16","STAR_24","STAR_32","STAR_4","STAR_5","STAR_6","STAR_7","STAR_8","STRIPED_RIGHT_ARROW","SUN","TRAPEZOID","TRIANGLE","UP_ARROW","UP_ARROW_CALLOUT","UP_DOWN_ARROW","UTURN_ARROW","VERTICAL_SCROLL","WAVE","WEDGE_ELLIPSE_CALLOUT","WEDGE_RECTANGLE_CALLOUT","WEDGE_ROUND_RECTANGLE_CALLOUT","FLOW_CHART_ALTERNATE_PROCESS","FLOW_CHART_COLLATE","FLOW_CHART_CONNECTOR","FLOW_CHART_DECISION","FLOW_CHART_DELAY","FLOW_CHART_DISPLAY","FLOW_CHART_DOCUMENT","FLOW_CHART_EXTRACT","FLOW_CHART_INPUT_OUTPUT","FLOW_CHART_INTERNAL_STORAGE","FLOW_CHART_MAGNETIC_DISK","FLOW_CHART_MAGNETIC_DRUM","FLOW_CHART_MAGNETIC_TAPE","FLOW_CHART_MANUAL_INPUT","FLOW_CHART_MANUAL_OPERATION","FLOW_CHART_MERGE","FLOW_CHART_MULTIDOCUMENT","FLOW_CHART_OFFLINE_STORAGE","FLOW_CHART_OFFPAGE_CONNECTOR","FLOW_CHART_ONLINE_STORAGE","FLOW_CHART_OR","FLOW_CHART_PREDEFINED_PROCESS","FLOW_CHART_PREPARATION","FLOW_CHART_PROCESS","FLOW_CHART_PUNCHED_CARD","FLOW_CHART_PUNCHED_TAPE","FLOW_CHART_SORT","FLOW_CHART_SUMMING_JUNCTION","FLOW_CHART_TERMINATOR","ARROW_EAST","ARROW_NORTH_EAST","ARROW_NORTH","SPEECH","STARBURST","TEARDROP","ELLIPSE_RIBBON","ELLIPSE_RIBBON_2","CLOUD_CALLOUT","CUSTOM".`,
      `</Methods>`,
      `Consider the following important points.`,
      `<IMPORTANT>`,
      `The presentation should be highly visible with including the texts, images, lines, and tables. You are also required to put all objects in a suitable place on each page. Each page is required to be put into each element in the array "pages".`,
      `In order to create a more visible presentation, you can give the text style to the text. You can use "bold", "italic", "underline", "fontSize", "foregroundColor", and "linkUrl".`,
      `Also, you are required to use various important images.`,
      `Use the colorful font colors.`,
      `Don't overlap each object on each page by considering the z direction. Generate carefully the coordinates and size of all objects without overlapping.`,
      `The font size is carefully given by considering the length of the text. When the length of text is large and the font size is large, the text overlaps with other objects. In the current stage, when the width of the text box is large, it's better.`,
      `Make the whole design of the presentation so ${this.presentationDesign}! Select carefully the colors of font, line, and shape.`,
      `</IMPORTANT>`,
    ];

    const textStyle = {
      description: "Text style of the text.",
      type: "object",
      properties: {
        bold: { type: "boolean", description: "When the text uses bold type for the text, it's true. When the text doesn't use bold type for the text, it's false." },
        italic: { type: "boolean", description: "When the text uses italic type for the text, it's true. When the text doesn't use italic type for the text, it's false." },
        underline: { type: "boolean", description: "When the text uses underline for the text, it's true. When the text doesn't use underline for the text, it's false." },
        fontSize: { type: "number", description: "Font size. The unit is point." },
        foregroundColor: { type: "string", description: "Font color as the hex like #ff0000." },
        linkUrl: { type: "string", description: "When you set the hyperlink to the text, give the URL." },
      }
    };
    const jsonSchema = {
      description: descriptionForJsonSchema.join("\n"),
      type: "object",
      properties: {
        pages: {
          type: "array",
          description: "Each page is required to be included in each element in an array.",
          items: {
            type: "object",
            description: "Each page is required to be included in each element in an array.",
            properties: {
              objects: {
                type: "array",
                items: {
                  type: "object",
                  description: `All objects on one page are required to be included in "objects". The order of the elements in this array is the same as the order of the z-direction on the slide. You are required to set each object by considering its z-direction.`,
                  properties: {
                    method: {
                      description: "Method name for putting objects. Select one of the insertTextBox, insertImage, insertLine, insertShape, and insertTable of the Class SlidesApp.Slide.",
                      type: "string",
                    },
                    args: {
                      description: [
                        `The arguments of the selected method. The order of the elements is the order of the arguments.`,
                        `The arguments of insertTextBox are "text", "left", "top", "width", and "height" in order.`,
                        `The arguments of insertTable are "numRows", "numColumns", "left", "top", "width", and "height" in order.`,
                        `The arguments of insertLine are "LineCategory", "startLeft", "startTop", "endLeft", and "endTop" in order. The values of LineCategory have already been mentioned in the above.`,
                        `The arguments of insertShape are "ShapeType", "left", "top", "width", and "height" in order. The values of ShapeType have already been mentioned in the above.`,
                        `The arguments of insertImage are "text of the detailed description for generating the image.", "left", "top", "width", and "height" in order.`,
                      ].join("\n"),
                      type: "array",
                      items: {
                        type: "string",
                        description: "Arguments of the selected method.",
                      }
                    },
                    valuesForTable: {
                      description: `When you select insertTable, the table values are required to be given as a 2-dimensional array. The length of rows and columns of "values" is required to be the same as the row number and the column number of the given arguments for the insertTable method. Each cell value is required to be put into the property of "value". The text style is required to be given as a 2-dimensional array to the property of "textStyleForTableCell" with the same element of the value.`,
                      type: "array",
                      items: {
                        type: "array",
                        description: "Rows of the table.",
                        items: {
                          type: "object",
                          description: "Columns of each row of the table.",
                          properties: {
                            value: {
                              type: "string",
                              description: `Here, the cell value of the table is required to be put. The text style is required to be put into the propery "textStyleForTableCell".`,
                            },
                            textStyleForTableCell: textStyle
                          }
                        }
                      }
                    },
                    textStyle,
                    shapeColor: {
                      description: "Solid fill color of the shape.",
                      type: "object",
                      properties: {
                        red: { type: "number", description: "Red of RGB. You can select from 0 to 255. This value is required to be an integer." },
                        green: { type: "number", description: "Green of RGB. You can select from 0 to 255. This value is required to be an integer." },
                        blue: { type: "number", description: "Blue of RGB. You can select from 0 to 255. This value is required to be an integer." },
                        alpha: { type: "number", description: "Alpha. You can select from 0.0 to 1.0." },
                      }
                    }
                  }
                }
              },
              note: {
                type: "string",
                description: "Text of the subtitles of the actual speeches for this page. The speaker will use this text to speak in the presentation. The text is required to be able to be spoken within the estimated time for talking for this page."
              },
              time: {
                type: "number",
                description: "Estimated time for talking for this page. The unit is seconds."
              }
            }
          }
        },
        totalPages: {
          type: "number",
          description: "Total number of pages of this presentation that you generated."
        },
        totalTime: {
          type: "number",
          description: "Total presentation time. The unit is seconds."
        },
      }
    };

    q.push(`<jsonSchema>${JSON.stringify(jsonSchema)}</jsonSchema>`);
    const finalPrompt = q.join("\n");

    console.log("Done.");
    return finalPrompt;
  }

  /**
  * ### Description
  * Parse Google Docs to use with Gemini.
  *
  * @return {String} Parsed Google Docs as Markdown.
  * @private
  */
  parseDocument_() {
    console.log("Parsing Google Docs.");
    let text = this.convertDocsToMarkdown_();
    const r = [...text.matchAll(/\[(.*)\]: <(data:image.*?)>/g)];
    if (r.length == 0) {
      console.log("No images were detected.");
    } else {
      r.forEach(([e]) => text = text.replace(e, ""));
      this.parsedDocImages = r.reduce((m, [, name, data]) => {
        const [head, base64] = data.split(",");
        const mimeType = head.split(":")[1].split(";")[0];
        return m.set(name, Utilities.newBlob(Utilities.base64Decode(base64), mimeType, name));
      }, new Map());
      const blobs = [...this.parsedDocImages].map(([, blob]) => blob);
      this.fileList = this.g.setBlobs(blobs).uploadFiles();
      this.g.withUploadedFilesByGenerateContent(this.fileList);
    }
    console.log("Done.");
    return text;
  }

  /**
  * ### Description
  * Convert Google Docs to Markdown.
  *
  * @return {String} Parsed Google Docs as Markdown.
  * @private
  */
  convertDocsToMarkdown_() {
    const url = `https://docs.google.com/feeds/download/documents/export/Export?exportFormat=markdown&id=${this.documentId}`;
    return UrlFetchApp.fetch(url, { headers: this.headers }).getContentText();
  }

  /**
  * ### Description
  * Generate content by Gemini.
  *
  * @param {String} q Prompt for Gemini.
  * @return {Object} Object generated by Gemini.
  * @private
  */
  generateContent_(q) {
    console.log("Generating content by Gemini.");
    const object = this.g.generateContent({ q });
    if (this.fileList.length > 0) {
      const names = this.fileList.map(({ name }) => name);
      this.g.deleteFiles(names);
    }
    console.log("Done.");
    return object;
  }

  /**
  * ### Description
  * Generate image by Gemini.
  *
  * @param {String} q Prompt for Gemini.
  * @return {Object} Object generated by Gemini.
  * @private
  */
  generateImage_(q) {
    console.log(`Generating image by Gemini. Prompt: ${q}`);
    const res = this.g.chat({ parts: [{ text: q }], role: 'user' });
    const imageObj = res.candidates[0].content.parts.find((e) => e.inlineData);
    if (imageObj) {
      const imageBlob = Utilities.newBlob(
        Utilities.base64Decode(imageObj.inlineData.data),
        imageObj.inlineData.mimeType
      );
      console.log("Image was created.");
      return imageBlob;
    }
    console.warn("Image was not created.");
    console.warn(res.candidates[0].content.parts[0].text);
    return null;
  }

  /**
  * ### Description
  * Create presentation using the generated content.
  *
  * @param {Object} object Generated content.
  * @return {Object} Object generated by Gemini.
  * @private
  */
  createPresentation_(object) {
    console.log("Creating presentation.");
    if (!object.pages || object.pages.length == 0) {
      throw new Error("Genrated content cannot be used. Please try again.");
    }
    if (this.dependentGenerateImages) {
      this.g = new GeminiWithFiles(this.geminiObjForImage);
    }
    object.pages.forEach(({ objects, note, time }) => {
      const slide = this.presentation.appendSlide();
      slide.getNotesPage().getSpeakerNotesShape().getText().setText(`${note} (Duration is ${time} seconds.)`);
      objects.forEach(({ method, args, textStyle, valuesForTable, shapeColor }) => {
        if (method == "insertShape") {
          const [shapeType, ...ag] = args;
          const shape = slide.insertShape(SlidesApp.ShapeType[shapeType], ...ag);
          if (shapeColor) {
            shape.getFill().setSolidFill(shapeColor.red, shapeColor.green, shapeColor.blue, shapeColor.alpha);
          }
        } else if (method == "insertLine") {
          const [lineCategory, ...ag] = args;
          slide.insertLine(SlidesApp.LineCategory[lineCategory], ...ag);
        } else {
          if (method == "insertImage") {
            if (this.parsedDocImages && this.parsedDocImages.size > 0 && this.parsedDocImages.has(args[0].trim())) {
              args[0] = this.parsedDocImages.get(args[0].trim());
            } else if (this.generateImage) {
              if (!this.dependentGenerateImages) {
                this.g = new GeminiWithFiles(this.geminiObjForImage);
              }
              const blob = this.generateImage_(`I am creating a presentation with a title of ${this.title}. Generate an image from the description of "${args[0]}".`);
              if (blob) {
                args[0] = blob;
              } else {
                method = "insertTextBox";
                args[0] = `{{${args[0]}}}`;
              }
            } else {
              method = "insertTextBox";
              args[0] = `{{${args[0]}}}`;
            }
          }
          const obj = slide[method](...args);
          if (method == "insertTextBox" && textStyle) {
            const ts = obj.getText().getTextStyle();
            Object.entries(textStyle).forEach(([style, value]) => ts[`set${style.replace(/^./, ([a]) => a.toUpperCase())}`](value));
          } else if (method == "insertTable" && valuesForTable && Array.isArray(valuesForTable)) {
            obj.remove();
            const [, , ...ag] = args;
            const tb = slide.insertTable(valuesForTable.length, valuesForTable[0].length, ...ag);
            valuesForTable.forEach((r, i) => r.forEach(({ value, textStyleForTableCell }, j) => {
              const t = tb.getCell(i, j).getText().setText(value).getTextStyle();
              Object.entries(textStyleForTableCell).forEach(([style, v]) => t[`set${style.replace(/^./, ([a]) => a.toUpperCase())}`](v));
            }));
          }
        }
      });
    });
    console.log("Done.");
  }
}
