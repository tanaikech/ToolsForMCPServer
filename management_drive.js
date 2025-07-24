/**
 * Management of Google Drive
 * Updated on 20250724 11:30
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

      /**
       * Another approach.
       */
      // const base64Data = Utilities.base64Encode(file.getBlob().getBytes());
      // const retObj = {
      //   text: `${filename} (${mimeType}) was downloaded.`,
      //   fileContent: base64Data,
      //   fileMimeType: mimeType,
      //   filename,
      // };
      // const jsonSchema = {
      //   type: "object",
      //   description: "Information of the file and the file content of base64 data.",
      //   properties: {
      //     text: { type: "string", description: "Information of the file." },
      //     fileContent: { type: "string", description: "Base64 data converted from the file content." },
      //     filename: { type: "string", description: "Filename the file content." },
      //     fileMimeType: { type: "string", description: "MimeType of the file content." },
      //   }
      // };
      // const text = [
      //   `The response file information is as follows.`,
      //   `<ResponseData>${JSON.stringify(retObj)}</ResponseData>`,
      //   `JSON schema of "ResponseData" is as follows.`,
      //   `<jsonSchema>${JSON.stringify(jsonSchema)}</jsonSchema>`,
      // ].join("\n");
      // result = {
      //   content: [
      //     { type: "text", text },
      //     { type, data: base64Data, mimeType },
      //   ],
      //   isError: false
      // };

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

/**
 * This function renames files on Google Drive.
 * @private
 */
function rename_files_on_google_drive(object = {}) {
  const { fileList } = object;
  let result;
  try {
    if (fileList && Array.isArray(fileList) && fileList.length > 0) {
      const text = fileList.map(({ fileId, newName }) => {
        try {
          const file = DriveApp.getFileById(fileId);
          const oldFilename = file.getName();
          file.setName(newName);
          return `FileId: "${fileId}". Renamed successfully from "${oldFilename}" to "${newName}".`;
        } catch ({ message }) {
          return `FileId: "${fileId}". Error: ${message}.`;
        }
      }).join("\n");
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: `Invalid arguments.` }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function moves files on Google Drive.
 * @private
 */
function move_files_on_google_drive(object = {}) {
  const { fileList } = object;
  let result;
  try {
    if (fileList && Array.isArray(fileList) && fileList.length > 0) {
      const text = fileList.map(({ srcId, dstId }) => {
        try {
          const src = DriveApp.getFileById(srcId);
          const dst = DriveApp.getFileById(dstId);
          if (dst.getMimeType() == MimeType.FOLDER) {
            if (src.getMimeType() == MimeType.FOLDER) {
              MoveFolder.run({ srcFolderId: srcId, dstFolderId: dstId });
              return `Folder "${src.getName()}" was moved to the folder "${dst.getName()}".`;
            }
            src.moveTo(DriveApp.getFolderById(dstId));
            return `File "${src.getName()}" was moved to the folder "${dst.getName()}".`;
          }
          return `dstId is not the folder ID of the folder.`;
        } catch ({ message }) {
          return `FileId: "${fileId}". Error: ${message}.`;
        }
      }).join("\n");
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: `Invalid arguments.` }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function convers the mimeType of the file on Google Drive.
 * @private
 */
function convert_mimetype_of_file_on_google_drive(object = {}) {
  const { fileIds = [], dstMimeType = null } = object;
  let result;
  try {
    if (Array.isArray(fileIds) && fileIds.length > 0 && dstMimeType) {
      const ar = new MimeTypeApp().setFileIds(fileIds).getAs({ mimeType: dstMimeType });
      const text = ar.map((e, i) => {
        if (e.toString() == "Blob") {
          return `The mimeType of "${fileIds[i]}" was converted to "${dstMimeType}". The new file ID is "${DriveApp.createFile(blob).getId()}".`;
        }
        try {
          DriveApp.getFileById(e);
          return `The mimeType of "${fileIds[i]}" was converted to "${dstMimeType}". The new file ID is "${e}".`;
        } catch ({ message }) {
          console.log(message);
          return `The mimeType of "${fileIds[i]}" was not converted to "${dstMimeType}". Message: ${e}`;
        }
      }).join("\n");
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: `No file IDs or the destination mimeType.` }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function changes the permission of a file or folder on Google Drive.
 * @private
 */
function change_permission_of_file_on_google_drive(object = {}) {
  const { fileId, email, role } = object;
  let result;
  try {
    if (!fileId || !email || !role) {
      throw new Error("Missing required parameters. Please provide 'fileId', 'email', and 'role'.");
    }
    const normalizedRole = role.toLowerCase();
    if (!['viewer', 'commenter', 'editor'].includes(normalizedRole)) {
      throw new Error("Invalid role specified. The role must be one of 'viewer', 'commenter', or 'editor'.");
    }

    let item;
    let itemType;

    try {
      item = DriveApp.getFileById(fileId);
      itemType = "file";
    } catch (e) {
      try {
        item = DriveApp.getFolderById(fileId);
        itemType = "folder";
      } catch (f) {
        throw new Error(`Could not find a file or folder with the ID '${fileId}'.`);
      }
    }

    switch (normalizedRole) {
      case 'editor':
        item.addEditor(email);
        break;
      case 'commenter':
        item.addCommenter(email);
        break;
      case 'viewer':
        item.addViewer(email);
        break;
    }

    result = { content: [{ type: "text", text: `Permission for the ${itemType} '${item.getName()}' (ID: ${fileId}) was successfully updated. User '${email}' has been granted '${normalizedRole}' access.` }], isError: false };

  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function creates Google Docs by converting the markdown format.
 * @private
 */
function create_google_docs_from_markdown_on_google_drive(object = {}) {
  const { name = "sample name", markdown = "" } = object;
  let result;
  try {
    if (markdown) {
      const blob = Utilities.newBlob(markdown, "text/markdown", name);
      const obj = Drive.Files.create({ mimeType: MimeType.GOOGLE_DOCS, name }, blob);
      const url = `https://docs.google.com/document/d/${obj.id}/edit`;
      result = { content: [{ type: "text", text: `The Google Docs file was created successfully. The file ID and URL of the created Google Docs are "${obj.id}" and "${url}", respectively.` }], isError: false };
    } else {
      result = { content: [{ type: "text", text: `No text as markdown.` }], isError: true };
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
    description: "Use this to search files in Google Drive by providing a search query. For example, the filename can be converted to the file ID. But, in the case of Google Drive, the file IDs are unique values. But, the same filenames can exist in the same folder. So, when a filename is searched, multiple file IDs might be returned. At that time, it is required to confirm which file the user wants to use.",
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
    description: "Use this to get and download a file from Google Drive by giving a filename. When you use this function, the returned data is base64 data. So, you are required to decode base64 data.",
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
    description: "Use this to put and upload data to Google Drive as a file. When you use this function, please provide the file content converted to base64 data. So, you are required to encode the file content as base64 data.",
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

  rename_files_on_google_drive: {
    description: "Use this to rename the files on Google Drive.",
    parameters: {
      type: "object",
      properties: {
        fileList: {
          type: "array",
          items: {
            type: "object",
            properties: {
              fileId: { type: "string", description: "File ID of the file on Google Drive." },
              newName: { type: "string", description: "New filename by renaming the file." },
            },
            required: ["fileId", "newName"]
          },
        },
      },
      required: ["fileList"]
    }
  },

  move_files_on_google_drive: {
    description: "Use this to move the files and the folders into other folder on Google Drive.",
    parameters: {
      type: "object",
      properties: {
        fileList: {
          type: "array",
          items: {
            type: "object",
            properties: {
              srcId: { type: "string", description: "File ID or folder ID of the source file or folder." },
              dstId: { type: "string", description: "Destination folder ID." },
            },
            required: ["srcId", "dstId"]
          },
        },
      },
      required: ["fileList"]
    }
  },

  convert_mimetype_of_file_on_google_drive: {
    description: "Use this to convert the mimeType of files on Google Drive.",
    parameters: {
      type: "object",
      properties: {
        fileIds: { type: "array", items: { type: "string", description: "File ID of the file on Google Drive. The mimeType of this file is converted." } },
        dstMimeType: { type: "string", description: "Destination mimeType." },
      },
      required: ["fileIds", "dstMimeType"]
    }
  },

  change_permission_of_file_on_google_drive: {
    description: "Use to change the permission of a file or folder on Google Drive for a specific user by providing the item ID, user email, and desired role. As a sample situation, when URLs of the files are included in an email, it is required to add the permission to the recipient user to allow the user to read or write the file.",
    parameters: {
      type: "object",
      properties: {
        fileId: {
          description: "The ID of the file or folder on Google Drive whose permissions need to be changed.",
          type: "string"
        },
        email: {
          description: "The email address of the user to whom the permission will be granted.",
          type: "string"
        },
        role: {
          description: "The permission level to grant. Accepted values are 'viewer', 'commenter', or 'editor'.",
          type: "string"
        },
      },
      required: ["fileId", "email", "role"]
    }
  },

  create_google_docs_from_markdown_on_google_drive: {
    description: "Use to create a Google Document from a markdown format.",
    parameters: {
      type: "object",
      properties: {
        name: { description: "Google Document name.", type: "string" },
        markdown: { description: "Text as a markdown format.", type: "string" },
      },
      required: ["markdown"]
    }
  }

};
