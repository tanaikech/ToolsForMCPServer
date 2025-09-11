/**
 * Management of Gmail
 * Updated on 20250910 16:20
 */

/**
 * This function gets messages from Gmail.
 * @private
 */
function get_massages_from_Gmail_(object = {}) {
  let { query, excludedMessageIds = [] } = object;
  let result;
  try {
    const labels = GmailApp.getUserLabels().map(l => l.getName());
    const threads = GmailApp.search(query);
    const messages = threads.reduce((ar, t) => {
      const messages = t.getMessages().reduce((arr, m) => {
        const mId = m.getId();
        if (!excludedMessageIds.includes(mId)) {
          arr.push({
            title: m.getSubject(),
            from: m.getFrom(),
            body: m.getPlainBody().trim(),
            messageId: mId,
            attachments: m.getAttachments().map(ee => ({ filename: ee.getName(), mimeType: ee.getContentType() })),
          });
        }
        return arr;
      }, []);
      if (messages.length > 0) {
        ar.push({ threadId: t.getId(), messages });
      }
      return ar;
    }, []);
    const countMessages = messages.reduce((c, e) => c += e.messages.length, 0);
    let messagesStr, jsonSchemaStr;
    if (messages.length > 0) {
      const jsonSchema = {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "threadId": {
              "type": "string",
              "description": "The unique identifier for the email thread."
            },
            "messages": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string",
                    "description": "The email address of the sender of the email message."
                  },
                  "from": {
                    "type": "string",
                    "description": "The title or subject of the email message."
                  },
                  "body": {
                    "type": "string",
                    "description": "The main content or body of the email message."
                  },
                  "messageId": {
                    "type": "string",
                    "description": "The unique identifier for the individual email message."
                  },
                  "attachments": {
                    "type": "array",
                    "description": "Information of the attachment files.",
                    "items": {
                      "type": "object",
                      "properties": {
                        "filename": {
                          "type": "string",
                          "description": "Filename of the attachment file."
                        },
                        "mimeType": {
                          "type": "string",
                          "description": "MimeType of the attachment file."
                        },
                      },
                      "required": ["filename", "mimeType"]
                    },
                  },
                },
                "required": ["title", "body", "messageId", "attachments"]
              }
            }
          },
          "required": ["threadId", "messages"]
        }
      };
      messagesStr = [
        `${countMessages} new messages were found.`,
        `The messages from Gmail are put in "Data" of a JSON array.`,
        `<Data>${JSON.stringify(messages)}</Data>`,
        `The user's labels are as follows.`,
        `<Labels>${labels.join(",")}</Label>`
      ];
      jsonSchemaStr = [
        `The JSON schema of "Data" is as follows. Understand "Data" using this JSON schema.`,
        `<JSONSchema>${JSON.stringify(jsonSchema)}</JSONSchema>`,
      ];
    } else {
      messagesStr = ["New messages were not found."];
      jsonSchemaStr = [];
    }
    const text = [...messagesStr, ...jsonSchemaStr].join("\n");
    result = { content: [{ type: "text", text }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function gets messages from Gmail using `after`.
 * @private
 */
function get_massages_by_time_from_Gmail(object = {}) {
  let { after } = object;
  if (!after) {
    /**
     * When no 'after' time is set, emails from 30 minutes ago to the present are retrieved.
     */
    after = Math.floor((Date.now() / 1000) - (30 * 60));
  } else {
    after = Math.floor(new Date(after) / 1000);
  }
  object.query = `after: ${after}`;
  return get_massages_from_Gmail_(object);
}

/**
 * This function gets messages from Gmail using the search query.
 * @private
 */
function get_massages_by_search_from_Gmail(object = {}) {
  let { query = "" } = object;
  if (!query) {
    /**
     * When no 'query' is set, emails from 30 minutes ago to the present are retrieved.
     */
    query = `after: ${Math.floor((Date.now() / 1000) - (30 * 60))}`;
  }
  object.query = query;
  return get_massages_from_Gmail_(object);
}

/**
 * This function gets attachment files from Gmail.
 * In this case, the attachment file is created as a file on Google Drive and the file ID is returned.
 * @private
 */
function get_attachment_files_from_Gmail(object = {}) {
  const { messageId } = object;
  let result;
  try {
    if (messageId) {
      const m = GmailApp.getMessageById(messageId);
      const attachments = m.getAttachments();
      let content;
      if (attachments.length > 0) {
        const fileObj = attachments.map(blob => {
          const file = DriveApp.createFile(blob);
          return { filename: file.getName(), fileId: file.getId(), mimeType: file.getMimeType() };
        });
        const jsonSchema = {
          type: "array",
          description: "Attachment files of Gmail.",
          items: {
            type: "object",
            properties: {
              filename: { type: "string", description: "Filename of the file." },
              fileId: { type: "string", description: "File ID on Google Drive." },
              mimeType: { type: "string", description: "MimeType of the file." },
            }
          }
        };
        const text = [
          `The attachment files are as follows.`,
          `<AttachmentFiles>${JSON.stringify(fileObj)}</AttachmentFiles>`,
          `JSON schema of "AttachmentFiles" is as follows.`,
          `<jsonSchema>${JSON.stringify(jsonSchema)}</jsonSchema>`,
        ].join("\n");
        content = [{ type: "text", text }];

      } else {
        content = [{ type: "text", text: `No attachment files in the email of "${obj.messageId}".` }];
      }
      result = { content, isError: false };
    } else {
      result = { content: [{ type: "text", text: "No message ID." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function adds labels to threads.
 * @private
 */
function add_label_to_Gmail(object = {}) {
  const { obj } = object;
  let result;
  try {
    const labelObj = GmailApp.getUserLabels().reduce((o, l) => (o[l.getName()] = l, o), {});
    const res = obj.reduce((ar, e) => {
      if (e.threadId && e.labels && e.labels.length > 0) {
        ar.push(`The labels of "${e.labels.join("\n")}" were added to the thread of ${e.threadId}.`);
        try {
          const thread = GmailApp.getThreadById(e.threadId);
          e.labels.forEach(l => {
            if (labelObj[l]) {
              thread.addLabel(labelObj[l]);
            }
          });
        } catch ({ stack }) {
          console.error(stack);
        }
      }
      return ar;
    }, []);
    if (res.length > 0) {
      result = { content: [{ type: "text", text: res.join("\n") }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "No labels were added to any threads." }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function automatically draft mails in Gmail.
 * @private
 */
function auto_reply_draft_creation_Gmail(object = {}) {
  const { obj } = object;
  let result;
  try {
    if (obj && obj.length > 0) {
      const res = obj.reduce((ar, e) => {
        if (e.messageId && e.replyMessage) {
          try {
            const m = GmailApp.getMessageById(e.messageId);
            let draftMail;
            if (e.attachmentFiles && Array.isArray(e.attachmentFiles) && e.attachmentFiles.length > 0) {
              draftMail = m.createDraftReply(e.replyMessage, { attachments: e.attachmentFiles.map(id => DriveApp.getFileById(id).getBlob()) });
            } else {
              draftMail = m.createDraftReply(e.replyMessage);
            }
            const draftId = draftMail.getId();
            const searchUrl = `https://mail.google.com/mail/#search/rfc822msgid:${encodeURIComponent(m.getHeader("Message-ID"))}`;
            ar.push(`A draft email to the message ID of "${e.messageId}" was successfully created. The draft ID is "${draftId}". The URL is "${searchUrl}".`);
          } catch ({ stack }) {
            console.error(stack);
          }
        }
        return ar;
      }, []);
      if (res.length > 0) {
        result = { content: [{ type: "text", text: res.join("\n") }], isError: false };
      } else {
        result = { content: [{ type: "text", text: "No creation of drafted emails." }], isError: false };
      }
    } else {
      result = { content: [{ type: "text", text: "No creation of drafted emails." }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function automatically draft mails in Gmail.
 * @private
 */
function auto_new_draft_creation_Gmail(object = {}) {
  const { obj } = object;
  let result;
  try {
    if (obj && obj.length > 0) {
      const res = obj.reduce((ar, e) => {
        if (e.to && e.title && e.body) {
          try {
            let m;
            if (e.attachmentFiles && Array.isArray(e.attachmentFiles) && e.attachmentFiles.length > 0) {
              m = GmailApp.createDraft(e.to, e.title, e.body, { attachments: e.attachmentFiles.map(id => DriveApp.getFileById(id).getBlob()) });
            } else {
              m = GmailApp.createDraft(e.to, e.title, e.body);
            }
            const draftId = m.getId();
            ar.push(`A draft email was successfully created. The draft ID is "${draftId}".`);
          } catch ({ stack }) {
            console.error(stack);
          }
        }
        return ar;
      }, []);
      if (res.length > 0) {
        result = { content: [{ type: "text", text: res.join("\n") }], isError: false };
      } else {
        result = { content: [{ type: "text", text: "No creation of drafted emails." }], isError: true };
      }
    } else {
      result = { content: [{ type: "text", text: "No creation of drafted emails." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function sends the draft mails in Gmail.
 * @private
 */
function send_mails_Gmail(object = {}) {
  const { draftIds = [] } = object;
  let result;
  try {
    if (draftIds.length > 0) {
      const res = draftIds.map(draftId => {
        try {
          const draft = GmailApp.getDraft(draftId);
          const title = draft.getMessage().getSubject();
          draft.send();
          return `Message of "${title}" was correctly sent.`;
        } catch ({ message }) {
          if (message.includes("Not found")) {
            return `"${draftId}" was not found.`;
          }
          return `"${draftId}" couldn't be sent.`;
        }
      });
      result = { content: [{ type: "text", text: res.join("\n") }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "No messages were sent." }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function sends the draft mails in Gmail.
 * @private
 */
function remove_mails_Gmail(object = {}) {
  const { messageIds = [] } = object;
  let result;
  try {
    if (messageIds.length > 0) {
      const res = messageIds.map(messageId => {
        try {
          const m = GmailApp.getMessageById(messageId);
          GmailApp.moveMessageToTrash(m);
          const title = m.getSubject();
          return `Message of "${title}" was moved to the trash.`;
        } catch ({ message }) {
          if (message.includes("Not found")) {
            return `"${messageId}" was not found.`;
          }
          return `"${messageId}" couldn't be removed.`;
        }
      });
      result = { content: [{ type: "text", text: res.join("\n") }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "No messages were removed." }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// Descriptions of the functions.
const descriptions_management_gmail = {
  /**
   * The key and the function name are required to be the same.
   */
  get_massages_by_time_from_Gmail: {
    description: `Get messages (emails) from Gmail using the time. This function returns the messages from "after" to now.`,
    parameters: {
      type: "object",
      properties: {
        after: {
          description: `Time for retrieving the emails. The emails are retrieved from "after" to now. The date format is "yyyy-MM-dd\'T\'HH:mm:ss".`,
          type: "string"
        },
        excludedMessageIds: {
          description: `Excluded message IDs.`,
          type: "array",
          items: { type: "string", description: `Excluded message ID.` }
        }
      },
      required: ["after"]
    }
  },

  /**
   * The key and the function name are required to be the same.
   */
  get_massages_by_search_from_Gmail: {
    description: `Get messages (emails) from Gmail using the search query. This function returns the messages using the search query.`,
    parameters: {
      type: "object",
      properties: {
        query: {
          description: `Search query. The search query can be seen at the official document. https://support.google.com/mail/answer/7190`,
          type: "string"
        },
        excludedMessageIds: {
          description: `Excluded message IDs.`,
          type: "array",
          items: { type: "string", description: `Excluded message ID.` }
        }
      },
      required: ["query"]
    }
  },

  /**
   * The key and the function name are required to be the same.
   */
  get_attachment_files_from_Gmail: {
    description: "Use this to retrieve the attachment files of an email. The attachment files are returned as the file IDs on Google Drive.",
    parameters: {
      type: "object",
      properties: {
        messageId: { type: "string", description: `Message ID of the email.` }
      },
      required: ["messageId"]
    }
  },

  /**
   * The key and the function name are required to be the same.
   */
  add_label_to_Gmail: {
    description: "Add labels to threads of Gmail. Don't use the invalid thread IDs.",
    parameters: {
      type: "object",
      properties: {
        obj: {
          type: "array",
          description: `Object array including thread IDs and labels. The labels are added to each thread IDs.`,
          items: {
            type: "object",
            description: "Thread IDs and labels. The labels are added to each thread IDs.",
            properties: {
              threadId: {
                type: "string",
                description: "The unique identifier for the email thread.",
              },
              labels: {
                type: "array",
                description: "Array including the labels.",
                items: {
                  type: "string",
                  description: "The suitable labels for the thread of the thread ID.",
                }
              }
            },
            required: ["threadId", "labels"]
          }
        }
      },
      required: ["obj"]
    }
  },

  /**
   * The key and the function name are required to be the same.
   */
  auto_reply_draft_creation_Gmail: {
    description: "Create automatically drafted reply emails in Gmail. Don't use the invalid message IDs. This function returns the value including the message ID, the draft ID, the URL of the mail.",
    parameters: {
      type: "object",
      properties: {
        obj: {
          type: "array",
          description: `Object array including message IDs and reply messages. Each reply message is used as a reply to each message with the message ID.`,
          items: {
            type: "object",
            description: "Message IDs and reply messages. Each reply message is used as a reply to each message with the message ID.",
            properties: {
              messageId: {
                type: "string",
                description: "The unique identifier for the email message.",
              },
              replyMessage: {
                type: "string",
                description: "Message for replying to the mail.",
              },
              attachmentFiles: {
                description: "Attachment files. If no attachment files are used, please set only the empty array like [].",
                type: "array",
                items: { type: "string", description: "File ID of the file on Google Drive" }
              }
            },
            required: ["messageId", "replyMessage", "attachmentFiles"]
          }
        }
      },
      required: ["obj"]
    }
  },

  /**
   * The key and the function name are required to be the same.
   */
  auto_new_draft_creation_Gmail: {
    description: "Create automatically drafted emails in Gmail. This function returns the value, including the message ID and the draft ID. When creating the draft email, confirm the owner's name and insert the sender's name into the footer. Don't use '[Your Name]'. If you have no information about the sender's email, don't include the footer of sender's name in the email.",
    parameters: {
      type: "object",
      properties: {
        obj: {
          type: "array",
          description: `Object array including the recipient mail address, the mail title, and the mail body.`,
          items: {
            type: "object",
            description: "The recipient mail address, the mail title, and the mail body. And, the attachment files.",
            properties: {
              to: { type: "string", description: "Recipient mail address." },
              title: { type: "string", description: "Mail title." },
              body: { type: "string", description: "Mail body." },
              attachmentFiles: {
                description: "Attachment files. If no attachment files are used, please set only the empty array like [].",
                type: "array",
                items: { type: "string", description: "File ID of the file on Google Drive" }
              },
            },
            required: ["to", "title", "body", "attachmentFiles"]
          }
        }
      },
      required: ["obj"]
    }
  },

  /**
   * The key and the function name are required to be the same.
   */
  send_mails_Gmail: {
    description: "Use this to send the draft emails which have already been created. If you want to send an email, first, it is required to create a draft email. By this, the draft email can be sent.",
    parameters: {
      type: "object",
      properties: {
        draftIds: {
          type: "array",
          description: `Array including the message IDs. The messages will be sent using the send method of Class GmailApp.GmailDraft.`,
          items: { type: "string", description: "Draft ID." }
        }
      }
    }
  },

  /**
   * The key and the function name are required to be the same.
   */
  remove_mails_Gmail: {
    description: "Use this to remove the messages.",
    parameters: {
      type: "object",
      properties: {
        messageIds: {
          type: "array",
          description: `Array including the draft IDs. The draft mails of the draft IDs will be removed using the moveMessageToTrash method of Class GmailApp.`,
          items: { type: "string", description: "Message ID." }
        }
      }
    }
  },

};
