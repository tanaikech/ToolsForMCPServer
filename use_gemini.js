/**
 * Functions using Gemini
 * Updated on 20250709 08:55
 */

/**
 * This function generates a description of the file and set it to the file.
 * @private
 */
function generate_description_on_google_drive(object = {}) {
  const { fileId } = object;
  let result;
  try {
    if (fileId) {
      const file = DriveApp.getFileById(fileId);
      if (file.getMimeType() != MimeType.FOLDER) {
        const g = new GeminiWithFiles({ apiKey });
        const fileList = g.setFileIds([fileId]).uploadFiles();
        const res = g.withUploadedFilesByGenerateContent(fileList).generateContent({ q: "Describe this file." });
        g.deleteFiles(fileList.map(({ name }) => name));
        file.setDescription(res);
        result = { content: [{ type: "text", text: `Created description is "${res}". This was set to "${file.getName()}".` }], isError: false };
      } else {
        result = { content: [{ type: "text", text: `The inputted file ID is the folder ID. Please set the file ID of the file.` }], isError: true };
      }
    } else {
      result = { content: [{ type: "text", text: `No file ID.` }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function generates an image file from a prompt using Gemini API.
 * @private
 */
function generate_image_on_google_drive(object = {}) {
  const { prompt } = object;
  let result;
  try {
    if (prompt) {
      const g = new GeminiWithFiles({
        apiKey,
        exportRawData: true,
        model: "models/gemini-2.0-flash-exp",
        generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
      });
      const res = g.generateContent({ q: prompt });
      const imageObj = res.candidates[0].content.parts.find((e) => e.inlineData);
      const imageBlob = Utilities.newBlob(
        Utilities.base64Decode(imageObj.inlineData.data),
        imageObj.inlineData.mimeType
      );
      const file = DriveApp.createFile(imageBlob.setName(prompt)).setDescription(`This image file was generated from a prompt of "${prompt}".`);
      result = { content: [{ type: "text", text: `An image was successfully generated from a prompt "${prompt}" as a file on Google Drive. The file URL and ID are "${file.getUrl()}" and "${file.getId()}", respectively.` }], isError: false };
    } else {
      result = { content: [{ type: "text", text: `No prompt for generating image.` }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function summarizes a file using Gemini API.
 * @private
 */
function summarize_file_on_google_drive(object = {}) {
  const { fileId, prompt = "Describe this file." } = object;
  let result;
  try {
    if (fileId) {
      const file = DriveApp.getFileById(fileId);
      const mimeType = file.getMimeType();
      if (mimeType != MimeType.FOLDER) {
        const g = new GeminiWithFiles({ apiKey });
        let fileList = [];
        if (mimeType.includes("application/vnd.google-apps")) {
          fileList = g.setBlobs([file.getBlob()]).uploadFiles();
        } else {
          fileList = g.setFileIds([fileId]).uploadFiles();
        }
        const text = g.withUploadedFilesByGenerateContent(fileList).generateContent({ q: prompt });
        g.deleteFiles(fileList.map(({ name }) => name));
        result = { content: [{ type: "text", text }], isError: false };
      } else {
        result = { content: [{ type: "text", text: `The inputted file ID is the folder ID. Please set the file ID of the file.` }], isError: true };
      }
    } else {
      result = { content: [{ type: "text", text: `No file ID.` }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function generates a roadmap to Google Sheets.
 * @private
 */
function generate_roadmap_to_google_sheets(object = {}) {
  console.log(object)
  const { goal = null, exportPDF = false } = object;
  let result;
  try {
    if (goal) {
      result = getSheet_(object);
      if (result.toString() == "Sheet") {
        const sheet = result;
        const ss = sheet.getParent();
        const spreadsheetId = ss.getId();
        const sheetId = sheet.getSheetId();
        const obj = {
          ...object,
          apiKey,
          spreadsheetId,
          sheetId,
        };
        const g = new GenerateRoadmap(obj).generateContent();
        g.putValuesToSpreadsheet();

        if (exportPDF) {
          SpreadsheetApp.flush();
          const range = sheet.getDataRange();
          const startRow = range.getRow() - 1;
          const endRow = startRow + range.getNumRows();
          const startCol = range.getColumn() - 1;
          const endCol = startCol + range.getNumColumns();
          const pdfUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=pdf&gid=${sheetId}&r1=${startRow}&c1=${startCol}&r2=${endRow}&c2=${endCol}&portrait=false`;
          const blob = UrlFetchApp.fetch(pdfUrl, { headers: { authorization: "Bearer " + ScriptApp.getOAuthToken() } }).getBlob();
          const file = DriveApp.createFile(blob.setName(`${goal}.pdf`));
          result = { content: [{ type: "text", text: `Roadmap was successfully generated in Google Sheets. The spreadsheet ID and the sheet name are "${spreadsheetId}" and "${sheet.getName()}" (sheet ID: "${sheetId}"), respectively. The URL is "${ss.getUrl()}". The file ID of the converted PDF file is "${file.getId()}".` }], isError: false };
        } else {
          result = { content: [{ type: "text", text: `Roadmap was successfully generated in Google Sheets. The spreadsheet ID and the sheet name are "${spreadsheetId}" and "${sheet.getName()}" (sheet ID: "${sheetId}"), respectively. The URL is "${ss.getUrl()}".` }], isError: false };
        }
      }
    } else {
      result = { content: [{ type: "text", text: `The goal of the roadmap is not found.` }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function generates a description of a web site using URL.
 * @private
 */
function description_web_site(object = {}) {
  const { urls = [] } = object;
  let result;
  try {
    if (Array.isArray(urls) && urls.length > 0) {
      const q = [
        `Read and understand all the content of all sites from "URLs". Follow "Mission".`,
        `<URLs>${urls.join(",")}</URLs>`,
        `<Mission>`,
        `- Describe the sites.`,
        `</Mission>`,
      ].join("\n");
      const g = new GeminiWithFiles({ apiKey, model: "models/gemini-2.5-flash", tools: [{ urlContext: {} }, { googleSearch: {} }] });
      const text = g.generateContent({ q });
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "No URLs." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// Descriptions of the functions.
const descriptions_use_gemini = {
  generate_description_on_google_drive: {
    description: "Use this to generate the description of the file and set it to the file on Google Drive.",
    parameters: {
      type: "object",
      properties: {
        fileId: { type: "string", description: "File ID of the file on Google Drive." },
      },
      required: ["fileId"]
    }
  },

  generate_image_on_google_drive: {
    description: "Use this to generate an image from an inputted prompt. The generated image is saved as a file on Google Drive.",
    parameters: {
      type: "object",
      properties: {
        prompt: { type: "string", description: "Prompt (description) for generating an image using Gemini." },
      },
      required: ["prompt"]
    }
  },

  summarize_file_on_google_drive: {
    description: "Use this to describe and summaize a file on Google Drive.",
    parameters: {
      type: "object",
      properties: {
        fileId: { type: "string", description: "File ID of the file on Google Drive." },
        prompt: { type: "string", description: "Prompt (description) for summarizing." },
      },
      required: ["fileId", "prompt"]
    }
  },

  generate_roadmap_to_google_sheets: {
    description: "Use this to generate a roadmap to Google Sheets.",
    parameters: {
      type: "object",
      properties: {
        spreadsheetId: { type: "string", description: "Spreadsheet ID of Google Sheets." },
        spreadsheetUrl: { type: "string", description: "Spreadsheet URL of Google Sheets." },
        sheetName: { type: "string", description: "Sheet name in the Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets." },
        sheetId: { type: "string", description: "Sheet ID of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets." },
        sheetIndex: { type: "number", description: "Sheet index (The 1st sheet is 0.) of the sheet in Google Sheets. If both sheetName, sheetId, and sheetIndex are not provided, the values are retrieved from the 1st sheet on Google Sheets." },
        goal: { type: "string", description: "Goal of the roadmap." },
        description: { type: "string", description: "Description of the roadmap." },
        exportPDF: { type: "boolean", description: "The default is false. When this is true, the PDF file converted from the Google Sheets is created and the file ID of the PDF file is returned. You can download the created PDF file using this file ID." },
      },
      oneOf: [{ required: ["spreadsheetId", "goal"] }, { required: ["spreadsheetUrl", "goal"] }]
    }
  },

  description_web_site: {
    description: "Use this to describe sites using URLs.",
    parameters: {
      type: "object",
      description: "URLs of the sites. This function describes the sites.",
      properties: {
        urls: { type: "array", items: { type: "string", description: "URL of the site." } },
      },
      required: ["urls"]
    }
  },

};
