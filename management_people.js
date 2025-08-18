/**
 * Management of Google People
 * Updated on 20250818 15:26
 */

function people_contactGroups_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("People");
  if (check.result) {
    return check;
  }

  const { queryParameters = {} } = object;
  return for_google_apis.list({ func: People.ContactGroups.list, args: [queryParameters], jsonSchema: jsonSchemaForPeople.ContactGroup, itemName: "contactGroups" });
}

function people_otherContacts_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("People");
  if (check.result) {
    return check;
  }

  const { queryParameters = {} } = object;
  return for_google_apis.list({ func: People.OtherContacts.list, args: [queryParameters], jsonSchema: jsonSchemaForPeople.Person, itemName: "otherContacts" });
}

function people_connections_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("People");
  if (check.result) {
    return check;
  }

  const { pathParameters, queryParameters = {} } = object;
  return for_google_apis.list({ func: People.People.Connections.list, args: [pathParameters.resourceName || "people/me", queryParameters], jsonSchema: jsonSchemaForPeople.Person, itemName: "connections" });
}

// Method: people.getBatchGet@People API: https://developers.google.com/people/api/rest/v1/people/getBatchGet
function people_people_getBatchGet(object = {}) {
  /**
  * Check API
  */
  const check = checkAPI_("People");
  if (check.result) {
    return check;
  }

  let result;
  try {
    const { responses } = People.People.getBatchGet(object.queryParameters);
    const text = [
      `Retrieved values are as follows.`,
      `<Values>${(!responses || responses.length == 0) ? "No values." : JSON.stringify({ responses })}</Values>`,
      `JSON schema of "Values" is as follows.`,
      `<JSONSchema>${JSON.stringify(jsonSchemaForPeople.PersonResponse)}</JSONSchema>`,
    ].join("\n");
    result = { content: [{ type: "text", text }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// Method: otherContacts.search@People API: https://developers.google.com/people/api/rest/v1/otherContacts/search
function people_otherContacts_search(object = {}) {
  /**
  * Check API
  */
  const check = checkAPI_("People");
  if (check.result) {
    return check;
  }

  let result;
  try {
    const { results } = People.OtherContacts.search(object.queryParameters);
    const text = [
      `Retrieved values are as follows.`,
      `<Values>${(!results || results.length == 0) ? "No values." : JSON.stringify({ results })}</Values>`,
      `JSON schema of "Values" is as follows.`,
      `<JSONSchema>${JSON.stringify(jsonSchemaForPeople.SearchResponse)}</JSONSchema>`,
    ].join("\n");
    result = { content: [{ type: "text", text }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

const descriptions_management_people = {
  people_contactGroups_list: {
    title: "Get contactGroups list",
    description: `List all contact groups owned by the authenticated user. Members of the contact groups are not populated.`,
    parameters: {
      type: "object",
      properties: {
        queryParameters: {
          "type": "object",
          "title": "Query parameters",
          "description": "Parameters that are appended to the URL.",
          "properties": {
            "syncToken": {
              "type": "string",
              "description": "Optional. A sync token, returned by a previous call to contactgroups.list . Only resources changed since the sync token was created will be returned."
            },
            "groupFields": {
              "type": "string",
              "description": "Optional. A field mask to restrict which fields on the group are returned. Defaults to metadata, groupType, memberCount, and name if not set or set to empty. Valid fields are: clientData, groupType, memberCount, metadata, name"
            }
          }
        }
      }
    }
  },

  people_otherContacts_list: {
    title: "Get all Other contacts list",
    description: `List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions.`,
    parameters: {
      type: "object",
      properties: {
        queryParameters: {
          "title": "Google People API - Method: otherContacts.list - Query Parameters",
          "description": "JSON schema for the query parameters of the Google People API's otherContacts.list method.",
          "type": "object",
          "properties": {
            "readMask": {
              "type": "string",
              "description": "Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas.",
              "enum": [
                "addresses",
                "ageRanges",
                "biographies",
                "birthdays",
                "calendarUrls",
                "clientData",
                "coverPhotos",
                "emailAddresses",
                "events",
                "externalIds",
                "genders",
                "imClients",
                "interests",
                "locales",
                "locations",
                "memberships",
                "metadata",
                "miscKeywords",
                "names",
                "nicknames",
                "occupations",
                "organizations",
                "phoneNumbers",
                "photos",
                "relations",
                "sipAddresses",
                "skills",
                "urls",
                "userDefined"
              ]
            },
            "requestSyncToken": {
              "type": "boolean",
              "description": "Optional. Whether the response should return nextSyncToken on the last page of results."
            },
            "sources": {
              "type": "string",
              "description": "Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT if not set.",
              "enum": [
                "READ_SOURCE_TYPE_CONTACT",
                "READ_SOURCE_TYPE_PROFILE"
              ]
            },
            "syncToken": {
              "type": "string",
              "description": "Optional. A sync token, received from a previous response nextSyncToken."
            }
          },
          "required": ["readMask"]
        }
      },
      required: ["queryParameters"]
    }
  },

  people_connections_list: {
    title: "Get a list of the authenticated user's contacts",
    description: `Provides a list of the authenticated user's contacts.`,
    parameters: {
      type: "object",
      properties: {
        "pathParameters": {
          "type": "object",
          "properties": {
            "resourceName": {
              "type": "string",
              "description": `Required. The resource name to return connections for. Only "people/me" is valid. [1]`
            }
          },
          "required": ["resourceName"]
        },
        "queryParameters": {
          "type": "object",
          "properties": {
            "personFields": {
              "type": "string",
              "description": "Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. [1]",
              "enum": [
                "addresses",
                "ageRanges",
                "biographies",
                "birthdays",
                "calendarUrls",
                "clientData",
                "coverPhotos",
                "emailAddresses",
                "events",
                "externalIds",
                "genders",
                "imClients",
                "interests",
                "locales",
                "locations",
                "memberships",
                "metadata",
                "miscKeywords",
                "names",
                "nicknames",
                "occupations",
                "organizations",
                "phoneNumbers",
                "photos",
                "relations",
                "sipAddresses",
                "skills",
                "urls",
                "userDefined"
              ]
            },
            "requestMask.includeField": {
              "type": "string",
              "description": "DEPRECATED (Please use personFields instead) A mask to restrict results to a subset of person fields. [1]"
            },
            "requestSyncToken": {
              "type": "boolean",
              "description": "Optional. Whether the response should return `nextSyncToken` on the last page of results. [1]"
            },
            "sortOrder": {
              "type": "string",
              "description": "Optional. The order in which the connections should be sorted. Defaults to LAST_MODIFIED_ASCENDING. [1]",
              "enum": [
                "LAST_MODIFIED_ASCENDING",
                "FIRST_NAME_ASCENDING",
                "LAST_NAME_ASCENDING"
              ]
            },
            "sources": {
              "type": "string",
              "description": "Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set. [1]",
              "enum": [
                "READ_SOURCE_TYPE_UNSPECIFIED",
                "READ_SOURCE_TYPE_PROFILE",
                "READ_SOURCE_TYPE_CONTACT",
                "READ_SOURCE_TYPE_DOMAIN_CONTACT"
              ]
            },
            "syncToken": {
              "type": "string",
              "description": "Optional. A sync token, received from a previous response `nextSyncToken`. [1]"
            }
          },
          "required": ["personFields"]
        }
      },
      required: ["pathParameters", "queryParameters"]
    }
  },

  people_people_getBatchGet: {
    title: "Provides information about a list of specific people by specifying a list of requested resource names",
    description: "Use to provide information about a list of specific people by specifying a list of requested resource names. Use people/me to indicate the authenticated user.",
    parameters: {
      type: "object",
      properties: {
        queryParameters: {
          type: "object",
          properties: {
            resourceNames: {
              type: "array",
              description: [
                `Required. The resource names of the people to provide information about. It's repeatable. The URL query parameter should be an array.`,
                `- To get information about the authenticated user, specify people/me.`,
                `- To get information about a google account, specify people/{account_id}.`,
                `- To get information about a contact, specify the resource name that identifies the contact as returned by people.connections.list.`,
                `There is a maximum of 200 resource names.`,
              ].join("\n"),
              items: { type: "string" }
            },
            personFields: {
              type: "string",
              description: `Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are "addresses","ageRanges","biographies","birthdays","calendarUrls","clientData","coverPhotos","emailAddresses","events","externalIds","genders","imClients","interests","locales","locations","memberships","metadata","miscKeywords","names","nicknames","occupations","organizations","phoneNumbers","photos","relations","sipAddresses","skills","urls","userDefined".`,
              enum: ["addresses", "ageRanges", "biographies", "birthdays", "calendarUrls", "clientData", "coverPhotos", "emailAddresses", "events", "externalIds", "genders", "imClients", "interests", "locales", "locations", "memberships", "metadata", "miscKeywords", "names", "nicknames", "occupations", "organizations", "phoneNumbers", "photos", "relations", "sipAddresses", "skills", "urls", "userDefined"]
            },
            sources: {
              type: "array",
              description: `Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.`,
              items: { type: "string" }
            }
          },
          required: ["resourceNames", "personFields"]
        }
      },
      required: ["queryParameters"]
    }
  },

  people_otherContacts_search: {
    title: "Provides a list of contacts in the authenticated user's other contacts that matches the search query",
    description: "Use to provide a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's names, emailAddresses, and phoneNumbers fields that are from the OTHER_CONTACT source.",
    parameters: {
      type: "object",
      properties: {
        queryParameters: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: `Required. The plain-text query for the request. The query is used to match prefix phrases of the fields on a person. For example, a person with name "foo name" matches queries such as "f", "fo", "foo", "foo n", "nam", etc., but not "oo n".`
            },
            readMask: {
              type: "string",
              description: [
                `Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are:`,
                `- emailAddresses`,
                `- metadata`,
                `- names`,
                `- phoneNumbers`,
              ].join("\n")
            }
          },
          required: ["query", "readMask"]
        }
      },
      required: ["queryParameters"]
    }
  },

};
