/**
 * Management of Google Maps
 * Updated on 20250910 16:20
 */

function maps_get_route(object = {}) {
  const { language = "en", originText, destinationText, originLatLon, destinationLatLon, mode = "TRANSIT", arrivalTime, departureTime, timezone = Session.getScriptTimeZone() } = object;
  let result;
  try {
    const directions = Maps.newDirectionFinder()
      .setLanguage(language)
      .setMode(Maps.DirectionFinder.Mode[mode])
      .setOptimizeWaypoints(true);
    if (originText) {
      directions.setOrigin(originText);
    }
    if (destinationText) {
      directions.setDestination(destinationText);
    }
    if (originLatLon) {
      directions.setOrigin(originLatLon.latitude, originLatLon.longitude);
    }
    if (destinationLatLon) {
      directions.setDestination(destinationLatLon.latitude, destinationLatLon.longitude);
    }
    if (arrivalTime) {
      directions.setArrive(arrivalTime == "current" ? new Date() : Utilities.parseDate(arrivalTime, timezone, "yyyy-MM-dd HH:mm:ss"));
    }
    if (departureTime) {
      directions.setDepart(departureTime == "current" ? new Date() : Utilities.parseDate(departureTime, timezone, "yyyy-MM-dd HH:mm:ss"));
    }
    const res = directions.getDirections();
    if (res.routes && res.routes.length > 0) {
      const text = [
        `The retrieval of directions between locations is as follows.`,
        `<Directions>${JSON.stringify(res)}</Directions>`,
        `JSON schema of "Directions" is as follows.`,
        `<JSONSchema>${JSON.stringify(jsonSchemaMaps.ReverseGeocode)}</JSONSchema>`,
        `The value of polyline for creating a map using a tool "maps_create_map" is as follows.`,
        `<Polyline>${res.routes[0].overview_polyline.points}</Polyline>`,
      ].join("\n");
      result = { content: [{ type: "text", text }], isError: false };
    } else {
      result = { content: [{ type: "text", text: "No route was obtained. Try it again." }], isError: true };
    }
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

function maps_convert_location_to_lat_lon(object = {}) {
  const { language = "en", address } = object;
  let result;
  try {
    const d = Maps.newGeocoder().setLanguage(language).geocode(address);
    const text = [
      `The approximate geographic points for a given address is as follows.`,
      `<GeographicPoints>${JSON.stringify(d)}</GeographicPoints>`,
      `JSON schema of "GeographicPoints" is as follows.`,
      `<JSONSchema>${JSON.stringify(jsonSchemaMaps.Geocode)}</JSONSchema>`,
    ].join("\n");
    result = { content: [{ type: "text", text }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

function maps_convert_lat_lon_to_location(object = {}) {
  const { language = "en", latitude, longitude } = object;
  let result;
  try {
    const d = Maps.newGeocoder().setLanguage(language).reverseGeocode(latitude, longitude);
    const text = [
      `The approximate addresses for a given geographic point is as follows.`,
      `<Addresses>${JSON.stringify(d)}</Addresses>`,
      `JSON schema of "Addresses" is as follows.`,
      `<JSONSchema>${JSON.stringify(jsonSchemaMaps.ReverseGeocode)}</JSONSchema>`,
    ].join("\n");
    result = { content: [{ type: "text", text }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };

}

function maps_create_map(object = {}) {
  const { language = "en", name = "sampleMap", format = "PNG", centerText, centerLatLon, addressText, addressLatLon, routeStartText, routeEndText, routeStartLatLon, routeEndLatLon, points = [], polyline, markerAddresses = [], markerLatLons = [], zoom } = object;
  let result;
  try {
    const map = Maps.newStaticMap().setLanguage(language).setSize(1000, 1000).setFormat(Maps.StaticMap.Format[format]);
    if (centerText) {
      map.setCenter(centerText);
    }
    if (centerLatLon) {
      map.setCenter(centerLatLon.latitude, centerLatLon.longitude);
    }
    if (points.length > 0) {
      map.addPath(Maps.encodePolyline(points));
    } else if (polyline) {
      map.addPath(polyline);
    }
    if (routeStartText) {
      map.addMarker(routeStartText);
      map.addVisible(routeStartText);
    }
    if (routeEndText) {
      map.addMarker(routeEndText);
      map.addVisible(routeEndText);
    }
    if (routeStartLatLon) {
      map.addMarker(routeStartLatLon.latitude, routeStartLatLon.longitude);
      map.addVisible(routeStartLatLon.latitude, routeStartLatLon.longitude);
    }
    if (routeEndLatLon) {
      map.addMarker(routeEndLatLon.latitude, routeEndLatLon.longitude);
      map.addVisible(routeEndLatLon.latitude, routeEndLatLon.longitude);
    }
    if (addressText) {
      map.setCenter(addressText);
    }
    if (addressLatLon) {
      map.setCenter(addressLatLon.latitude, addressLatLon.longitude);
    }
    if (markerAddresses.length > 0) {
      markerAddresses.forEach(m => map.addMarker(m).addVisible(m));
    }
    if (markerLatLons.length > 0) {
      markerLatLons.forEach(m => map.addMarker(m.latitude, m.longitude).addVisible(m.latitude, m.longitude));
    }
    if (zoom) {
      map.setZoom(zoom);
    }
    const file = DriveApp.createFile(map.getBlob().setName(name));
    result = { content: [{ type: "text", text: `A static map was created as a image file. The file URL and file ID of the file on Google Drive are "${file.getUrl()}" and "${file.getId()}", respectively.` }], isError: false };
  } catch ({ stack }) {
    result = { content: [{ type: "text", text: stack }], isError: true };
  }
  console.log(result); // Check response.
  return { jsonrpc: "2.0", result };
}

// Descriptions of the functions.
const descriptions_management_maps = {
  maps_get_route: {
    description: [
      "Use this to allow for the retrieval of directions between locations.",
      `The date is required to be included. The date format is "yyyy-MM-dd HH:mm"`,
      `If you cannot know the location, decide the location using the timezone.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        language: {
          type: "string",
          description: "Language of the response. The default is 'en'. A BCP-47 language identifier."
        },
        originText: {
          type: "string",
          description: "The starting address."
        },
        destinationText: {
          type: "string",
          description: "The ending address."
        },
        originLatLon: {
          type: "object",
          description: `If you want to use latitude and longitude as the starting address. Use this instead of "originText".`,
          properties: {
            latitude: { type: "number", description: "The latitude of the starting location" },
            longitude: { type: "number", description: "The longitude of the starting location" },
          },
          required: ["latitude", "longitude"]
        },
        destinationLatLon: {
          type: "object",
          description: `If you want to use latitude and longitude as the starting address. Use this instead of "destinationText".`,
          properties: {
            latitude: { type: "number", description: "The latitude of the ending location" },
            longitude: { type: "number", description: "The longitude of the ending location" },
          },
          required: ["latitude", "longitude"]
        },
        mode: {
          type: "string",
          description: `A constant value from Mode. The default is "TRANSIT". The available values are as follows. DRIVING": Driving directions via roads., "WALKING": Walking directions via pedestrian paths and sidewalks (where available)., "BICYCLING": Bicycling directions via bicycle paths and preferred streets (where available)., "TRANSIT": Transit directions via public transit routes (where available). This mode requires that you set either the departure or arrival time.`,
          enum: ["DRIVING", "WALKING", "BICYCLING", "TRANSIT"]
        },
        arrivalTime: {
          type: "string",
          description: `The time of arrival. The date format is "yyyy-MM-dd HH:mm". But, in this case, "mm" is required to be "00". If you want to set the current time. Set "current".. In this case, the current time is used.`,
        },
        departureTime: {
          type: "string",
          description: `The time of departure. The date format is "yyyy-MM-dd HH:mm". But, in this case, "mm" is required to be "00". If you want to set the current time. Set "current".. In this case, the current time is used.`,
        },
        timezone: {
          type: "string",
          description: `The timezone. In the case of Japan, "Asia/Tokyo" is used. The default is the timezone of the Google Apps Script project.`
        },
      }
    }
  },

  maps_convert_location_to_lat_lon: {
    description: "Use this to convert the location name and address and the location name to an approximate geographic point (latitude and longitude).",
    parameters: {
      type: "object",
      properties: {
        language: {
          type: "string",
          description: "Language of the response. The default is 'en'. A BCP-47 language identifier."
        },
        address: {
          type: "string",
          description: "An address. Name of the location and place."
        }
      },
      required: ["address"]
    }
  },

  maps_convert_lat_lon_to_location: {
    description: "Use this to convert a given geographic point (latitude and longitude) to an approximate location name and address.",
    parameters: {
      type: "object",
      properties: {
        language: {
          type: "string",
          description: "Language of the response. The default is 'en'. A BCP-47 language identifier."
        },
        latitude: { type: "number", description: "The latitude of the point" },
        longitude: { type: "number", description: "The longitude of the point" },
      },
      required: ["latitude", "longitude"]
    }
  },

  maps_create_map: {
    description: "Use this to create a static map as an image file on Google Drive.",
    parameters: {
      type: "object",
      properties: {
        language: { type: "string", description: "Language of the response. The default is 'en'. A BCP-47 language identifier." },
        name: { type: "string", description: "Filename of created static map image." },
        format: {
          type: "string",
          description: "Format of the ceated image. The default is 'PNG'.",
          enum: ["PNG", "GIF", "JPG"]
        },
        centerText: { type: "string", description: "Address (Location name, location address) of the center of the map." },
        centerLatLon: {
          type: "object",
          properties: {
            latitude: { type: "number", description: "The latitude of the center of the map" },
            longitude: { type: "number", description: "The longitude of the center of the map" },
          },
          required: ["latitude", "longitude"]
        },
        addressText: { type: "string", description: "Address (Location name, location address)." },
        addressLatLon: {
          type: "object",
          properties: {
            latitude: { type: "number", description: "The latitude of the location" },
            longitude: { type: "number", description: "The longitude of the location" },
          },
          required: ["latitude", "longitude"]
        },
        routeStartText: { type: "string", description: "Address (Location name, location address) of the route start." },
        routeEndText: { type: "string", description: "Address (Location name, location address) of the route end." },
        routeStartLatLon: {
          type: "object",
          properties: {
            latitude: { type: "number", description: "The latitude of the route start." },
            longitude: { type: "number", description: "The longitude of the route start." },
          },
          required: ["latitude", "longitude"]
        },
        routeEndLatLon: {
          type: "object",
          properties: {
            latitude: { type: "number", description: "The latitude of the route end." },
            longitude: { type: "number", description: "The longitude of the route end." },
          },
          required: ["latitude", "longitude"]
        },
        points: { type: "array", items: { type: "number", description: "An array of latitude/longitude pairs to encode." } },
        polyline: { type: "string", description: `When you have already got the response from a tool "maps_get_route", you have already got the value of "polyline".` },
        markerAddresses: { type: "array", items: { type: "string", description: "Address (Location name, location address)" } },
        markerLatLons: {
          type: "array",
          items: {
            type: "object",
            properties: {
              latitude: { type: "number", description: "The latitude of the location and the place." },
              longitude: { type: "number", description: "The longitude of the location and the place." },
            },
            required: ["latitude", "longitude"]
          }
        },
        zoom: { type: "number", description: "A value from zero to 21, inclusive. It is required to be an integer. Set zoom by considering that the size of the map is always 1000 pixels x 1000 pixels, and the requirement to display the area." },
      }
    }
  },

};

