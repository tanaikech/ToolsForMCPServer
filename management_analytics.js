/**
 * Google Analytics Admin API: https://developers.google.com/analytics/devguides/config/admin/v1/rest
 * ref: https://github.com/googleanalytics/google-analytics-mcp
 */
function analytics_admin_accountSummaries_list() {
  /**
   * Check API
   */
  const check = checkAPI_("AnalyticsAdmin");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: AnalyticsAdmin.AccountSummaries.list, args: [{}], jsonSchema: jsonSchemaAnalyticsAdmin.AccountSummary, itemName: "accountSummaries" });
}

function analytics_admin_properties_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("AnalyticsAdmin");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: AnalyticsAdmin.Properties.get, args: [object.pathParameters?.name], jsonSchema: jsonSchemaAnalyticsAdmin.Property });
}

/**
 * Google Analytics Data API: https://developers.google.com/analytics/devguides/reporting/data/v1/rest
 * ref: https://github.com/googleanalytics/google-analytics-mcp
 */
function analytics_data_properties_runReport(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("AnalyticsData");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: AnalyticsData.Properties.runReport, args: [object.requestBody, object.pathParameters?.property], jsonSchema: jsonSchemaAnalyticsData.RunReportResponse });
}

function analytics_data_properties_runRealtimeReport(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("AnalyticsData");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: AnalyticsData.Properties.runRealtimeReport, args: [object.requestBody, object.pathParameters?.property], jsonSchema: jsonSchemaAnalyticsData.RunRealtimeReportResponse });
}

const descriptions_management_analytics = {

  analytics_admin_accountSummaries_list: {
    title: "Retrieves a list of all Google Analytics accounts accessible by the current user",
    description: `Use to retrieve a list of all Google Analytics accounts accessible by the current user. Each entry provides key details for the account and a summary of its properties, making it useful for discovering available data streams and managing permissions.`,
    parameters: {
      type: "object",
      properties: {
        queryParameters: {
          type: "object",
          properties: {}
        }
      }
    }
  },

  analytics_admin_properties_get: {
    title: "Get detailed information about a single Google Analytics property",
    description: `Use to get detailed information about a single Google Analytics property, providing essential details for management and analysis. Use this to confirm property settings or to retrieve its metadata.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            name: { type: "string", description: `Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000"` }
          },
          required: ["name"]
        }
      },
      required: ["pathParameters"]
    }
  },

  analytics_data_properties_runReport: {
    title: "Fetches a custom report from a Google Analytics property",
    description: `Use to fetch a custom report from a Google Analytics property. Specify the metrics (e.g., active users, event count) and dimensions (e.g., country, event name) to retrieve specific user activity data. This tool is best for answering questions about user behavior, such as "How many active users did we have in Japan last month?" or "What are the top 5 most popular events?"`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            property: { type: "string", description: `A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see where to find your Property ID. Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234` }
          },
          required: ["property"]
        },
        requestBody: {
          type: "object",
          description: `Create the request body for "Method: properties.runReport" of Google Analytics Data API. If you want to know how to create the request body, please check a tool "explanation_analytics_data_properties_runReport".`,
        },
      },
      required: ["pathParameters", "requestBody"]
    }
  },

  analytics_data_properties_runRealtimeReport: {
    title: "Generates a customized report of real-time event data from a Google Analytics property",
    description: `Use to generate a customized report of real-time event data from a Google Analytics property, showing events and user activity that occurred within the last 30 minutes. Useful for monitoring live traffic and immediate user behavior.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            property: { type: "string", description: `A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see where to find your Property ID. Example: properties/1234` }
          },
          required: ["property"]
        },
        requestBody: {
          type: "object",
          description: `Create the request body for "Method: properties.runRealtimeReport" of Google Analytics Data API. If you want to know how to create the request body, please check a tool "explanation_analytics_data_properties_runRealtimeReport".`,
        },
      },
      required: ["pathParameters", "requestBody"]
    }
  },

};
