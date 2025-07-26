/**
 * Management of Google Slides
 * Updated on 20250726 12:13
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

// /**
//  * This function manages Google Slides using Slides API.
//  * This is for only @google/gemini-cli with v0.1.13. At v0.1.13, the specification of the schema for MCP was changed. So, I use this tool.
//  * At v0.1.14, I confirmed that the previous schema could be used. So, this tool was removed, and the above tool is reimplemented.
//  * @private
//  */
// function manage_google_slides_using_slides_api(object = {}) {
//   const { presentationId = null, prompt = null, refUrls = [] } = object;
//   let result;
//   try {
//     if (presentationId && prompt) {
//       const resourceIds = { presentationId };
//       const res = new GenerateRequestBody().generateRequestBody({ apiKey, prompt, jsonSchema: jsonSchemaForSlides, resourceIds, refUrls });
//       result = { content: [{ type: "text", text: `The generated request body was correctly used, and your request in the prompt was successfully run. The generated request body is as follows.\n${JSON.stringify(res)}` }], isError: false };
//     }
//   } catch ({ stack }) {
//     result = { content: [{ type: "text", text: stack }], isError: true };
//   }
//   console.log(result); // Check response.
//   return { jsonrpc: "2.0", result };
// }

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
    parameters: jsonSchemaForSlides,
  },

  // /**
  //  * This is for only @google/gemini-cli with v0.1.13.
  //  */
  // manage_google_slides_using_slides_api: {
  //   description: `Use this to manage Google Slides using the batchUpdate method of the Slides API. The information of the page object IDs and the object IDs of the shapes of each slide can be retrieved by a tool "get_google_slides_object_using_slides_api".`,
  //   parameters: {
  //     type: "object",
  //     properties: {
  //       presentationId: { type: "string", description: "Presentation ID (Google Slides ID) of Google Slides." },
  //       prompt: { type: "string", description: "Prompt. Provide the request for processing using the Slides API by natural language. In order to help generate the request body, if it is required to add more information and the modification points, please reflect them in the provided prompt and provide it as the new prompt." },
  //       refUrls: {
  //         type: "array",
  //         description: "URLs for helping to generate the request body. If the request is complicated, provide the URLs with the information for helping to help generate the request body.",
  //         items: { type: "string", description: "URL" }
  //       },
  //     },
  //     required: ["presentationId", "prompt"]
  //   }
  // },

};

