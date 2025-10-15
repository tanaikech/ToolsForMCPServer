/**
 * Management of APIs and others
 * Updated on 20250711 15:32
 */

/**
 * This function exchanges rate.
 * Ref: https://github.com/google/A2A/blob/main/samples/python/agents/langgraph/agent.py#L19
 * @private
 */
function get_exchange_rate(object) {
  const { currency_from = "USD", currency_to = "EUR", currency_date = "latest" } = object;
  let result;
  try {
    const resStr = UrlFetchApp.fetch(`https://api.frankfurter.app/${currency_date}?from=${currency_from}&to=${currency_to}`).getContentText();
    const obj = JSON.parse(resStr);
    result = {
      content: [{
        type: "text", text: [
          `The raw data from the API is ${resStr}. The detailed result is as follows.`,
          `The currency rate at ${currency_date} from "${currency_from}" to "${currency_to}" is ${obj.rates[currency_to]}.`,
        ].join("\n")
      }], isError: false
    };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function returns the current weather.
 * The API is from https://open-meteo.com/
 *
 * { latitude = "35.681236", longitude = "139.767125", timezone = "Asia/Tokyo" } is Tokyo station.
 * @private
 */
function get_current_weather(object) {
  const { latitude = "35.681236", longitude = "139.767125", timezone = "Asia/Tokyo" } = object;
  let result;
  try {

    // Ref: https://open-meteo.com/en/docs?hourly=weather_code&current=weather_code#weather_variable_documentation
    const code = {
      "0": "Clear sky",
      "1": "Mainly clear, partly cloudy, and overcast",
      "2": "Mainly clear, partly cloudy, and overcast",
      "3": "Mainly clear, partly cloudy, and overcast",
      "45": "Fog and depositing rime fog",
      "48": "Fog and depositing rime fog",
      "51": "Drizzle: Light, moderate, and dense intensity",
      "53": "Drizzle: Light, moderate, and dense intensity",
      "55": "Drizzle: Light, moderate, and dense intensity",
      "56": "Freezing Drizzle: Light and dense intensity",
      "57": "Freezing Drizzle: Light and dense intensity",
      "61": "Rain: Slight, moderate and heavy intensity",
      "63": "Rain: Slight, moderate and heavy intensity",
      "65": "Rain: Slight, moderate and heavy intensity",
      "66": "Freezing Rain: Light and heavy intensity",
      "67": "Freezing Rain: Light and heavy intensity",
      "71": "Snow fall: Slight, moderate, and heavy intensity",
      "73": "Snow fall: Slight, moderate, and heavy intensity",
      "75": "Snow fall: Slight, moderate, and heavy intensity",
      "77": "Snow grains",
      "80": "Rain showers: Slight, moderate, and violent",
      "81": "Rain showers: Slight, moderate, and violent",
      "82": "Rain showers: Slight, moderate, and violent",
      "85": "Snow showers slight and heavy",
      "86": "Snow showers slight and heavy",
      "95": "Thunderstorm: Slight or moderate",
      "96": "Thunderstorm with slight and heavy hail",
      "99": "Thunderstorm with slight and heavy hail"
    };
    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code,temperature_2m,relative_humidity_2m,rain,precipitation,snowfall,surface_pressure&timezone=${encodeURIComponent(timezone)}`;

    const resObj = UrlFetchApp.fetch(endpoint, { muteHttpExceptions: true });
    if (resObj.getResponseCode() == 200) {
      const obj = JSON.parse(resObj.getContentText());
      const keys = ["time", "interval", "weather_code", "temperature_2m", "relative_humidity_2m", "rain", "precipitation", "snowfall", "surface_pressure"];
      const { current, current_units } = obj;
      const text = keys.map(k => {
        const v = k == "weather_code" ? code[current[k]] : current[k];
        const unit = k == "weather_code" ? "None" : current_units[k];
        if (k == "time") {
          k = `Date (${timezone})`;
        }
        return `${k} is "${v}" (Unit: ${unit}).`
      }).join(" ");
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "No value was returned. Please try again." }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function returns the weather for the specific date.
 * The API is from https://open-meteo.com/
 *
 * { latitude = "35.681236", longitude = "139.767125", date = "2025-05-27 12:00", timezone = "Asia/Tokyo" } is Tokyo station.
 * @private
 */
function get_specific_date_weather(object) {
  const { latitude = "35.681236", longitude = "139.767125", date = "2025-05-27 12:00", timezone = "Asia/Tokyo" } = object;
  let result;
  try {

    // Ref: https://open-meteo.com/en/docs?hourly=weather_code&current=weather_code#weather_variable_documentation
    const code = {
      "0": "Clear sky",
      "1": "Mainly clear, partly cloudy, and overcast",
      "2": "Mainly clear, partly cloudy, and overcast",
      "3": "Mainly clear, partly cloudy, and overcast",
      "45": "Fog and depositing rime fog",
      "48": "Fog and depositing rime fog",
      "51": "Drizzle: Light, moderate, and dense intensity",
      "53": "Drizzle: Light, moderate, and dense intensity",
      "55": "Drizzle: Light, moderate, and dense intensity",
      "56": "Freezing Drizzle: Light and dense intensity",
      "57": "Freezing Drizzle: Light and dense intensity",
      "61": "Rain: Slight, moderate and heavy intensity",
      "63": "Rain: Slight, moderate and heavy intensity",
      "65": "Rain: Slight, moderate and heavy intensity",
      "66": "Freezing Rain: Light and heavy intensity",
      "67": "Freezing Rain: Light and heavy intensity",
      "71": "Snow fall: Slight, moderate, and heavy intensity",
      "73": "Snow fall: Slight, moderate, and heavy intensity",
      "75": "Snow fall: Slight, moderate, and heavy intensity",
      "77": "Snow grains",
      "80": "Rain showers: Slight, moderate, and violent",
      "81": "Rain showers: Slight, moderate, and violent",
      "82": "Rain showers: Slight, moderate, and violent",
      "85": "Snow showers slight and heavy",
      "86": "Snow showers slight and heavy",
      "95": "Thunderstorm: Slight or moderate",
      "96": "Thunderstorm with slight and heavy hail",
      "99": "Thunderstorm with slight and heavy hail"
    };
    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=weather_code,temperature_2m,relative_humidity_2m,precipitation_probability,surface_pressure&timezone=${encodeURIComponent(timezone)}`;

    const resObj = UrlFetchApp.fetch(endpoint, { muteHttpExceptions: true });
    if (resObj.getResponseCode() == 200) {
      const obj = JSON.parse(resObj.getContentText())
      const keys = ["weather_code", "temperature_2m", "relative_humidity_2m", "precipitation_probability", "surface_pressure"];
      const { hourly_units, hourly: { time, ...others } } = obj;
      const widx = time.indexOf(`${date.replace(" ", "T").trim().split(":")[0]}:00`);
      if (widx != -1) {
        const text = `Date is ${time[widx]} (${timezone}). ` + keys.map(k => {
          const v = others[k][widx];
          const r = k == "weather_code" ? code[v] : v;
          const unit = k == "weather_code" ? "None" : hourly_units[k];
          return `${k} is "${r}" (Unit: ${unit}).`;
        }).join(" ");
        result = { content: [{ type: "text", text }], isError: false };
      } else {
        result = { content: [{ type: "text", text: "No value was returned. Please try again." }], isError: false };
      }
    } else {
      result = { content: [{ type: "text", text: "No value was returned. Please try again." }], isError: false };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

/**
 * This function returns the current date time and timezone.
 * @private
 */
function get_current_date_time(object = {}) {
  const { timezone = Session.getScriptTimeZone() } = object;
  let result;
  try {
    const datetime = Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd HH:mm:ss");
    result = { content: [{ type: "text", text: `The current date and time are "${datetime}". Timezone is "${timezone}".` }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// Descriptions of the functions.
const descriptions_management_apis = {
  get_exchange_rate: {
    description: "Use this to get the current exchange rate. Using this, for example, it can exchange yen for dollars.",
    parameters: {
      type: "object",
      properties: {
        currency_from: {
          type: "string",
          description: "Source currency (major currency). Default is USD."
        },
        currency_to: {
          type: "string",
          description: "Destination currency (major currency). Default is EUR."
        },
        currency_date: {
          type: "string",
          description: "Date of the currency. Default is latest. It should be ISO format (YYYY-MM-DD)."
        }
      },
      required: ["currency_from", "currency_to", "currency_date"]
    }
  },

  get_current_weather: {
    description: [
      "Use this to get the current weather using the latitude and the longitude.",
      "At that time, convert the location to the latitude and the longitude and provide them to the function.",
      `If you cannot know the location, decide the location using the timezone.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        latitude: {
          type: "number",
          description: "The latitude of the inputed location."
        },
        longitude: {
          type: "number",
          description: "The longitude of the inputed location."
        },
        timezone: {
          type: "string",
          description: `The timezone. In the case of Japan, "Asia/Tokyo" is used.`
        },
      },
      required: ["latitude", "longitude", "timezone"]
    }
  },

  get_specific_date_weather: {
    description: [
      "Use this to get the weather for the specific date using the latitude and the longitude.",
      "At that time, convert the location to the latitude and the longitude and provide them to the function.",
      `The date is required to be included. The date format is "yyyy-MM-dd HH:mm"`,
      `If you cannot know the location, decide the location using the timezone.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        latitude: {
          type: "number",
          description: "The latitude of the inputed location."
        },
        longitude: {
          type: "number",
          description: "The longitude of the inputed location."
        },
        date: {
          type: "string",
          description: `Date for searching the weather. The date format is "yyyy-MM-dd HH:mm". But, in this case, "mm" is required to be "00".`
        },
        timezone: {
          type: "string",
          description: `The timezone. In the case of Japan, "Asia/Tokyo" is used.`
        },
      },
      required: ["latitude", "longitude", "date", "timezone"]
    }
  },

  get_current_date_time: {
    description: "The current date and time are returned. Please provide your timezone. If you don't know the timezone, it is automatically detected with the script.",
    parameters: {
      type: "object",
      properties: { timezone: { type: "string", description: "Your timezone. The default timezone is provided by Session.getScriptTimeZone()." } },
      required: ["timezone"]
    }
  },

};
