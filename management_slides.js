/**
 * Management of Google Slides
 * Updated on 20250923 10:14
 */

/**
 * This function generate a presentation with Google Slides.
 * https://github.com/tanaikech/Integrating-Gemini-and-Google-Apps-Script-for-Automated-Google-Slides-Presentations
 * @private
 */
function generate_presentation_with_google_slides(object = {}) {
  const { title = null, name = "Sample speaker", presentationTime = 5, text = "" } = object;
  let { documentId = null } = object;
  let result;

  /**
   * Check API.
   */
  const apiName = "Drive";
  if (isAPIAtAdvancedGoogleServices_(apiName).api == "disable") {
    result = { content: [{ type: "text", text: `${apiName} API is disabled. Please enable ${apiName} API in the Advanced Google services.` }], isError: true };
    return { jsonrpc: "2.0", result };
  }

  try {
    if (title) {
      if (!documentId && text) {
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
  /**
   * Check API
   */
  const check = checkAPI_("Slides");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Slides.Presentations.get, args: [object.pathParameters?.presentationId, {}], jsonSchema: jsonSchemaForSlides.Get });
}

/**
 * This function manages Google Slides using Slides API.
 * @private
 */
function manage_google_slides_using_slides_api(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Slides");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Slides.Presentations.batchUpdate, args: [object.requestBody, object.pathParameters?.presentationId] });
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
        text: { type: "string", description: "Description of the presentation. If document ID is used, this property is ignored." },
        documentId: { type: "string", description: "The document ID of a Google Document. This document is used as the description for creating the presentation." },
      },
      required: ["title", "name", "presentationTime"]
    }
  },

  get_google_slides_object_using_slides_api: {
    description: "Use this to get Google Slides Object using Slides API. When this tool is used, for example, the object IDs on the slides can be retrieved.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            presentationId: { type: "string", description: "The presentation ID of the presentation to retrieve." }
          },
          required: ["presentationId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  manage_google_slides_using_slides_api: {
    title: "Updates Google Slides",
    description: `Use this to manage Google Slides using Slides API. Provide the request body for batchUpdate method. In order to retrieve the detailed information of the spreadsheet, including the object ID and so on, it is required to use a tool "get_google_slides_object_using_slides_api".`,
    parameters: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          description: `Create the request body for "Method: documents.batchUpdate" of Google Docs API. If you want to know how to create the request body, please check a tool "explanation_manage_google_slides_using_slides_api".`,
        },
        pathParameters: {
          type: "object",
          properties: {
            presentationId: {
              type: "string", description: "The presentation ID to apply the updates to."
            }
          },
          required: ["presentationId"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

};

