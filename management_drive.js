/**
 * Management of Google Drive
 */

/**
 * This function searches files in Google Drive.
 * @private
 */
function search_file_in_google_drive(object = {}) {
  const { query } = object;
  let result;
  try {
    if (query) {
      const fileList = [];
      let pageToken = "";
      const options = { q: query, corpora: "allDrives", includeItemsFromAllDrives: true, supportsAllDrives: true, pageSize: 1000, fields: "nextPageToken,files(mimeType,id,name,createdTime,modifiedTime,webViewLink)" };
      do {
        const { files, nextPageToken } = Drive.Files.list(options);
        fileList.push(...files);
        pageToken = nextPageToken;
        options.pageToken = pageToken;
      } while (pageToken);
      if (fileList.length > 0) {
        const jsonSchema = {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string", "description": "Filename." },
              "mimeType": { "type": "string", "description": "MimeType of the file." },
              "id": { "type": "string", "description": "File ID of the file." },
              "webViewLink": { "type": "string", "description": "File URL of the file." },
              "createdTime": { "type": "string", "description": "The created time of the file." },
              "modifiedTime": { "type": "string", "description": "The modified time of the file." },
            },
            "required": ["filename", "mimeType", "fileId", "fileUrl"]
          }
        };
        const text = [
          `${fileList.length} files were found.`,
          `The file lsit of the files are put in "FileList" of a JSON array.`,
          `<FileList>${JSON.stringify(fileList)}</FileList>`,
          `The JSON schema of "FileList" is as follows. Understand "FileList" using this JSON schema.`,
          `<JSONSchema>${JSON.stringify(jsonSchema)}</JSONSchema>`,
        ].join("\n");
        result = { content: [{ type: "text", text }], isError: false };
      } else {
        result = { content: [{ type: "text", text: `No files were returned.` }], isError: false };
      }
    } else {
      result = { content: [{ type: "text", text: `Invalid arguments.` }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function gets file from Google Drive.
 * @private
 */
function get_file_from_google_drive(object = {}) {
  const { filename } = object;
  let result;
  try {
    const files = DriveApp.searchFiles(`title contains '${filename}' and trashed=false`);
    if (files.hasNext()) {
      const file = files.next();
      const filename = file.getName();
      const mimeType = file.getMimeType();
      const type = mimeType.split("/")[0];
      result = {
        content: [
          {
            type: "text",
            text: `${filename} (${mimeType}) was downloaded.`,
          },
          {
            type,
            data: Utilities.base64Encode(file.getBlob().getBytes()),
            mimeType,
          },
        ],
        isError: false,
      };
    } else {
      result = { content: [{ type: "text", text: `There is no file of "${filename}".` }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function puts data as a file to Google Drive.
 * @private
 */
function put_file_to_google_drive(object = {}) {
  const { filename, base64Data, mimeType } = object;
  let result;
  try {
    if (filename && base64Data && mimeType) {
      const blob = Utilities.newBlob(Utilities.base64Decode(base64Data), mimeType, filename);
      const file = DriveApp.createFile(blob);
      result = { content: [{ type: "text", text: `The data was successfully uploaded to the root folder of Google Drive as a file. The file URL is "${file.getUrl()}".` }], isError: false };
    } else {
      result = { content: [{ type: "text", text: `Invalid arguments.` }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function creates a file to Google Drive.
 * @private
 */
function create_file_to_google_drive(object = {}) {
  const { filename, mimeType } = object;
  let result;
  try {
    if (filename && mimeType) {
      const { webViewLink } = Drive.Files.create({ name: filename, mimeType }, null, { fields: "webViewLink" });
      result = { content: [{ type: "text", text: `A file was created on the root folder. The file URL is "${webViewLink}".` }], isError: false };
    } else {
      result = { content: [{ type: "text", text: `Invalid arguments.` }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}


// Descriptions of the functions.
const descriptions_management_drive = {
  search_file_in_google_drive: {
    description: "Use this to search files in Google Drive by providing a search query.",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: `Search query. In this case, the files are searched using "Method: files.list" of Drive API v3. "https://developers.google.com/workspace/drive/api/reference/rest/v3/files/list" The official document of "Search query terms and operators" is "https://developers.google.com/workspace/drive/api/guides/ref-search-terms".`
        }
      },
      required: ["query"]
    }
  },

  get_file_from_google_drive: {
    description: "Use this to get and download a file from Google Drive by giving a filename.",
    parameters: {
      type: "object",
      properties: {
        filename: {
          type: "string",
          description: "Filename of the file on Google Drive."
        }
      },
      required: ["filename"]
    }
  },

  put_file_to_google_drive: {
    description: "Use this to put and upload data to Google Drive as a file.",
    parameters: {
      type: "object",
      properties: {
        filename: {
          type: "string",
          description: "Filename of the file on Google Drive."
        },
        base64Data: {
          type: "string",
          description: "Base64 data of the file content."
        },
        mimeType: {
          type: "string",
          description: "MimeType of data of the file content."
        },
      },
      required: ["filename", "base64Data", "mimeType"]
    }
  },

  create_file_to_google_drive: {
    description: "Use this to create an empty file to Google Drive.",
    parameters: {
      type: "object",
      properties: {
        filename: {
          type: "string",
          description: "Filename of the file on Google Drive."
        },
        mimeType: {
          type: "string",
          description: "MimeType of data of the file content."
        },
      },
      required: ["filename", "mimeType"]
    }
  },
};
