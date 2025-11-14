/**
 * FileSearchApp: This is used with Gemini API.
 * (required) An API key for using the Gemini API
 * Author: Kanshi Tanaike
 * https://github.com/tanaikech/FileSearchApp
 *
 * Updated on 20251113 1048
 * version 1.0.0
 */

/**
 * Main entry point to interact with the FileSearch class.
 *
 * @param {object} options - The configuration object.
 * @param {string} options.method - The name of the FileSearch method to call (e.g., 'create', 'list', 'media_upload').
 * @param {string} options.apiKey - The Gemini API key.
 * @param {string} [options.model] - The Gemini model name.
 * @param {object} [options.config] - The configuration object specific to the method being called.
 * @returns {any} The result from the called method.
 */
function fileSearchEntryPoint(options = {}) {
  const { method, config = {}, ...constructorOptions } = options;
  if (!method) {
    throw new Error("A 'method' property must be specified in the options.");
  }

  const fileSearch = new FileSearch(constructorOptions);

  if (typeof fileSearch[method] !== "function") {
    throw new Error(
      `Method '${method}' does not exist on the FileSearch class.`
    );
  }

  return fileSearch[method](config);
}

/**
 * A class for interacting with the Google AI File Search API.
 */
class FileSearch {
  /**
   * @param {object} params - The parameters.
   * @param {string} params.apiKey - The Gemini API key.
   * @param {string} [params.model="models/gemini-2.5-flash"] - The Gemini model name.
   */
  constructor({
    apiKey,
    model = "models/gemini-2.5-flash" /** or models/gemini-2.5-pro */,
  }) {
    if (!apiKey) {
      throw new Error("API key is required.");
    }
    this.apiKey = apiKey;
    this.model = model;

    // Define base URLs as instance properties
    this.apiBaseUrl = "https://generativelanguage.googleapis.com/v1beta";
    this.uploadApiBaseUrl =
      "https://generativelanguage.googleapis.com/upload/v1beta";
  }

  // --- File Search Store Methods ---

  /**
   * Creates a new File Search Store.
   * @param {object} params - The parameters.
   * @param {string} params.displayName - The display name for the new store.
   * @returns {object} The created FileSearchStore object.
   */
  create({ displayName }) {
    const endpoint = "/fileSearchStores";
    const payload = {
      displayName: displayName || `sampleFileSearchStore-${Date.now()}`,
    };
    return this._request(endpoint, {
      method: "post",
      payload: JSON.stringify(payload),
    });
  }

  /**
   * Deletes a File Search Store.
   * @param {object} params - The parameters.
   * @param {string} params.fileSearchStoreName - The name of the store to delete.
   * @returns {string} A confirmation message.
   */
  remove({ fileSearchStoreName }) {
    if (!fileSearchStoreName) throw new Error("Provide fileSearchStoreName.");
    const endpoint = `/${fileSearchStoreName}`;
    const query = { force: "true" };
    this._request(endpoint, { method: "delete" }, query);
    return `"${fileSearchStoreName}" was successfully deleted.`;
  }

  /**
   * Gets information about a specific File Search Store.
   * @param {object} params - The parameters.
   * @param {string} params.fileSearchStoreName - The name of the store to retrieve.
   * @returns {object} The FileSearchStore object.
   */
  get({ fileSearchStoreName }) {
    if (!fileSearchStoreName) throw new Error("Provide fileSearchStoreName.");
    const endpoint = `/${fileSearchStoreName}`;
    return this._request(endpoint, {}, { fields: "*" });
  }

  /**
   * Lists all File Search Stores.
   * @returns {object[]} An array of all FileSearchStore objects.
   */
  list() {
    const endpoint = "/fileSearchStores";
    const results = [];
    let pageToken = "";
    do {
      const query = { pageSize: 20, pageToken };
      const response = this._request(endpoint, {}, query);
      if (response.fileSearchStores && response.fileSearchStores.length > 0) {
        results.push(...response.fileSearchStores);
      }
      pageToken = response.nextPageToken;
    } while (pageToken);
    return results;
  }

  // --- Document Methods ---

  /**
   * Uploads files from various sources to a File Search Store.
   * @param {object} params - The parameters.
   * @returns {string} A confirmation message with the document name.
   */
  media_upload({
    fileSearchStoreName,
    displayName,
    text,
    mimeType,
    fileIds = [],
    folderId,
    urls = [],
    customMetadata = [],
    chunkingConfig = [],
  }) {
    // ref: https://ai.google.dev/gemini-api/docs/file-search#supported-files
    const supportedMimeTypes = [
      "application/dart",
      "application/ecmascript",
      "application/json",
      "application/ms-java",
      "application/msword",
      "application/pdf",
      "application/sql",
      "application/typescript",
      "application/vnd.curl",
      "application/vnd.dart",
      "application/vnd.ibm.secure-container",
      "application/vnd.jupyter",
      "application/vnd.ms-excel",
      "application/vnd.oasis.opendocument.text",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
      "application/x-csh",
      "application/x-hwp",
      "application/x-hwp-v5",
      "application/x-latex",
      "application/x-php",
      "application/x-powershell",
      "application/x-sh",
      "application/x-shellscript",
      "application/x-tex",
      "application/x-zsh",
      "application/xml",
      "application/zip",
      "text/1d-interleaved-parityfec",
      "text/RED",
      "text/SGML",
      "text/cache-manifest",
      "text/calendar",
      "text/cql",
      "text/cql-extension",
      "text/cql-identifier",
      "text/css",
      "text/csv",
      "text/csv-schema",
      "text/dns",
      "text/encaprtp",
      "text/enriched",
      "text/example",
      "text/fhirpath",
      "text/flexfec",
      "text/fwdred",
      "text/gff3",
      "text/grammar-ref-list",
      "text/hl7v2",
      "text/html",
      "text/javascript",
      "text/jcr-cnd",
      "text/jsx",
      "text/markdown",
      "text/mizar",
      "text/n3",
      "text/parameters",
      "text/parityfec",
      "text/php",
      "text/plain",
      "text/provenance-notation",
      "text/prs.fallenstein.rst",
      "text/prs.lines.tag",
      "text/prs.prop.logic",
      "text/raptorfec",
      "text/rfc822-headers",
      "text/rtf",
      "text/rtp-enc-aescm128",
      "text/rtploopback",
      "text/rtx",
      "text/sgml",
      "text/shaclc",
      "text/shex",
      "text/spdx",
      "text/strings",
      "text/t140",
      "text/tab-separated-values",
      "text/texmacs",
      "text/troff",
      "text/tsv",
      "text/tsx",
      "text/turtle",
      "text/ulpfec",
      "text/uri-list",
      "text/vcard",
      "text/vnd.DMClientScript",
      "text/vnd.IPTC.NITF",
      "text/vnd.IPTC.NewsML",
      "text/vnd.a",
      "text/vnd.abc",
      "text/vnd.ascii-art",
      "text/vnd.curl",
      "text/vnd.debian.copyright",
      "text/vnd.dvb.subtitle",
      "text/vnd.esmertec.theme-descriptor",
      "text/vnd.exchangeable",
      "text/vnd.familysearch.gedcom",
      "text/vnd.ficlab.flt",
      "text/vnd.fly",
      "text/vnd.fmi.flexstor",
      "text/vnd.gml",
      "text/vnd.graphviz",
      "text/vnd.hans",
      "text/vnd.hgl",
      "text/vnd.in3d.3dml",
      "text/vnd.in3d.spot",
      "text/vnd.latex-z",
      "text/vnd.motorola.reflex",
      "text/vnd.ms-mediapackage",
      "text/vnd.net2phone.commcenter.command",
      "text/vnd.radisys.msml-basic-layout",
      "text/vnd.senx.warpscript",
      "text/vnd.sosi",
      "text/vnd.sun.j2me.app-descriptor",
      "text/vnd.trolltech.linguist",
      "text/vnd.wap.si",
      "text/vnd.wap.sl",
      "text/vnd.wap.wml",
      "text/vnd.wap.wmlscript",
      "text/vtt",
      "text/wgsl",
      "text/x-asm",
      "text/x-bibtex",
      "text/x-boo",
      "text/x-c",
      "text/x-c++hdr",
      "text/x-c++src",
      "text/x-cassandra",
      "text/x-chdr",
      "text/x-coffeescript",
      "text/x-component",
      "text/x-csh",
      "text/x-csharp",
      "text/x-csrc",
      "text/x-cuda",
      "text/x-d",
      "text/x-diff",
      "text/x-dsrc",
      "text/x-emacs-lisp",
      "text/x-erlang",
      "text/x-gff3",
      "text/x-go",
      "text/x-haskell",
      "text/x-java",
      "text/x-java-properties",
      "text/x-java-source",
      "text/x-kotlin",
      "text/x-lilypond",
      "text/x-lisp",
      "text/x-literate-haskell",
      "text/x-lua",
      "text/x-moc",
      "text/x-objcsrc",
      "text/x-pascal",
      "text/x-pcs-gcd",
      "text/x-perl",
      "text/x-perl-script",
      "text/x-python",
      "text/x-python-script",
      "text/x-r-markdown",
      "text/x-rsrc",
      "text/x-rst",
      "text/x-ruby-script",
      "text/x-rust",
      "text/x-sass",
      "text/x-scala",
      "text/x-scheme",
      "text/x-script.python",
      "text/x-scss",
      "text/x-setext",
      "text/x-sfv",
      "text/x-sh",
      "text/x-siesta",
      "text/x-sos",
      "text/x-sql",
      "text/x-swift",
      "text/x-tcl",
      "text/x-tex",
      "text/x-vbasic",
      "text/x-vcalendar",
      "text/xml",
      "text/xml-dtd",
      "text/xml-external-parsed-entity",
      "text/yaml",
    ];

    const convMimeType_ = (fileBlob) => {
      if (!supportedMimeTypes.includes(fileBlob.getContentType())) {
        return UrlFetchApp.fetch(
          `https://drive.google.com/thumbnail?sz=w1000&id=${fileId}`,
          { headers: { authorization: "Bearer " + ScriptApp.getOAuthToken() } }
        ).getBlob();
      }
      return fileBlob;
    };

    const upload_ = ({ fileId, text, url }) => {
      let fileBlob;
      if (fileId) {
        fileBlob = DriveApp.getFileById(fileId).getBlob();
      } else if (text) {
        fileBlob = Utilities.newBlob(
          text,
          mimeType || MimeType.PLAIN_TEXT,
          displayName || `doc-${Date.now()}`
        );
      } else if (url) {
        fileBlob = UrlFetchApp.fetch(url).getBlob();
        if (fileBlob.getName().toLocaleLowerCase() == "undefined.html") {
          fileBlob.setName(`doc-${Date.now()}`);
        }
      } else {
        throw new Error("Provide one of 'text', 'fileId', or 'url'.");
      }
      const metadata = {
        displayName: fileBlob.getName(),
        mimeType: fileBlob.getContentType(),
        ...(customMetadata.length > 0 && { customMetadata }),
        ...(chunkingConfig.length > 0 && { chunkingConfig }),
      };
      const payload = {
        metadata: Utilities.newBlob(
          JSON.stringify(metadata),
          "application/json"
        ),
        file: convMimeType_(fileBlob),
      };
      const endpoint = `/${fileSearchStoreName}:uploadToFileSearchStore`;
      const operation = this._request(
        endpoint,
        { method: "post", payload },
        {},
        true
      );
      const finalOperation = this._pollOperation(operation);
      return `Processing complete for: ${metadata.displayName}\nDocument name is "${finalOperation.name}".`;
    };

    let res = [];
    if (text) {
      res.push(upload_({ text }));
    } else if (folderId) {
      const folder = DriveApp.getFolderById(folderId);
      const files = folder.getFiles();
      fileIds = [];
      while (files.hasNext()) {
        const file = files.next();
        fileIds.push(file.getId());
      }
      if (fileIds.length > 0) {
        res.push(...fileIds.map((fileId) => upload_({ fileId })));
      }
    } else if (fileIds && fileIds.length > 0) {
      res.push(...fileIds.map((fileId) => upload_({ fileId })));
    } else if (urls && urls.length > 0) {
      res.push(...urls.map((url) => upload_({ url })));
    }
    if (res.length > 0) {
      return res.join("\n");
    }
    return "No files were uploaded.";
  }

  /**
   * Imports a file from File Service to a FileSearchStore.
   * @param {object} params - The parameters.
   * @returns {object} The operation object.
   */
  import_file({
    fileSearchStoreName,
    fileName,
    customMetadata = [],
    chunkingConfig = [],
  }) {
    if (!fileName) throw new Error("Provide fileName.");
    const endpoint = `/${fileSearchStoreName}:importFile`;
    const payload = {
      fileName,
      ...(customMetadata.length > 0 && { customMetadata }),
      ...(chunkingConfig.length > 0 && { chunkingConfig }),
    };
    const operation = this._request(endpoint, {
      method: "post",
      payload: JSON.stringify(payload),
    });
    const finalOperation = this._pollOperation(operation);
    return `Processing complete for: ${fileName}\nDocument name is "${finalOperation.name}".`;
  }

  /**
   * Gets a specific document.
   * @param {object} params - The parameters.
   * @param {string} params.documentName - The name of the document to retrieve.
   * @returns {object} The Document object.
   */
  documents_get({ documentName }) {
    if (!documentName) throw new Error("Provide documentName.");
    const endpoint = `/${documentName}`;
    return this._request(endpoint, {}, { fields: "*" });
  }

  /**
   * Deletes a document.
   * @param {object} params - The parameters.
   * @param {string} params.documentName - The name of the document to delete.
   * @returns {string} A confirmation message.
   */
  documents_remove({ documentName }) {
    if (!documentName) throw new Error("Provide documentName.");
    const endpoint = `/${documentName}`;
    this._request(endpoint, { method: "delete" }, { force: "true" });
    return `"${documentName}" was successfully deleted.`;
  }

  /**
   * Lists all documents in a File Search Store.
   * @param {object} params - The parameters.
   * @param {string} params.fileSearchStoreName - The name of the store.
   * @returns {object[]} An array of Document objects.
   */
  documents_list({ fileSearchStoreName }) {
    if (!fileSearchStoreName) throw new Error("Provide fileSearchStoreName.");
    const endpoint = `/${fileSearchStoreName}/documents`;
    const results = [];
    let pageToken = "";
    do {
      const query = { pageSize: 20, pageToken };
      const response = this._request(endpoint, {}, query);
      if (response.documents && response.documents.length > 0) {
        results.push(...response.documents);
      }
      pageToken = response.nextPageToken;
    } while (pageToken);
    return results;
  }

  /**
   * Performs semantic search over a Document.
   * @param {object} params - The parameters.
   * @param {string} params.name - The resource name of the document to search (e.g., 'fileSearchStores/my-store/documents/my-doc').
   * @param {string} params.query - The query to search for.
   * @param {number} [params.resultsCount] - The number of results to return.
   * @param {object[]} [params.metadataFilters] - Filters to apply to the search.
   * @returns {object} The search results.
   */
  documents_query({ name, query, resultsCount, metadataFilters = [] }) {
    if (!name || !query) {
      throw new Error(
        "Provide both 'name' (the document resource name) and 'query'."
      );
    }
    const endpoint = `/${name}:query`;
    const payload = { query };
    if (resultsCount) {
      payload.resultsCount = resultsCount;
    }
    if (metadataFilters && metadataFilters.length > 0) {
      payload.metadataFilters = metadataFilters;
    }
    return this._request(endpoint, {
      method: "post",
      payload: JSON.stringify(payload),
    });
  }

  // --- RAG Content Generation ---

  /**
   * Generates content using File Search Stores as a RAG tool.
   * @param {object} params - The parameters for content generation.
   * @returns {string} The generated text content.
   */
  generate_content({
    fileSearchStoreNames = [],
    prompt,
    metadataFilter = null,
  }) {
    const endpoint = `/${this.model}:generateContent`;
    const tools = [
      {
        fileSearch: {
          fileSearchStoreNames,
          ...(metadataFilter && { metadataFilter }),
        },
      },
    ];
    const payload = {
      contents: [{ parts: [{ text: prompt }], role: "user" }],
      ...(fileSearchStoreNames.length > 0 && { tools }),
    };
    const response = this._request(endpoint, {
      method: "post",
      payload: JSON.stringify(payload),
    });
    return response.candidates[0].content.parts.find((p) => p.text).text;
  }

  // --- Private Helper Methods ---

  /**
   * Polls a long-running operation until it's complete.
   * @param {object} operation - The initial operation object.
   * @returns {object} The completed operation object.
   */
  _pollOperation(operation) {
    let currentOperation = operation;
    while (!currentOperation.done) {
      Utilities.sleep(1500); // Wait before polling again
      const endpoint = `/${currentOperation.name}`;
      currentOperation = this._request(endpoint);
    }
    return currentOperation;
  }

  /**
   * Centralized method for making API requests.
   * @param {string} endpoint - The API endpoint path.
   * @param {object} options - The options for UrlFetchApp.
   * @param {object} queryParams - The query parameters.
   * @param {boolean} useUploadUrl - Whether to use the upload base URL.
   * @returns {object} The JSON response.
   */
  _request(endpoint, options = {}, queryParams = {}, useUploadUrl = false) {
    const baseUrl = useUploadUrl ? this.uploadApiBaseUrl : this.apiBaseUrl;
    const allQueryParams = { key: this.apiKey, ...queryParams };
    const queryString = Object.entries(allQueryParams)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");

    const url = `${baseUrl}${endpoint}?${queryString}`;
    const fetchOptions = {
      muteHttpExceptions: true,
      contentType: "application/json",
      ...options,
    };

    const response = UrlFetchApp.fetch(url, fetchOptions);
    const responseCode = response.getResponseCode();
    const responseBody = response.getContentText();

    if (responseCode >= 200 && responseCode < 300) {
      // For empty success responses (e.g., DELETE)
      if (responseBody === "") {
        return {};
      }
      return JSON.parse(responseBody);
    } else {
      throw new Error(`API Error: ${responseCode} - ${responseBody}`);
    }
  }
}
