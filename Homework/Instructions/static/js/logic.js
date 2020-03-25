// MAP 
var myMap = L.map("map", {
    center: [34.0522, -118.2437],
    zoom: 4
  });
  //Layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 9,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  // Get Geojson Data
  var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  var geojson;
  // D3 Load Data
  d3.json(geoData, function(data) {
    console.log(data);
    function markerSize(mag) {
        return mag;
      }
      var magMarkers = [];
      
    //   var mag = features.properties.mag;
      // Loop through locations and create city and state markers
      for (var i = 0; i < geoData.length; i++) {
        // Set the marker radius for the state by passing population into the markerSize function
        magMarkers.push(
          L.circle(geoData[i].coordinates[1],coordinates[0], {
            stroke: false,
            fillOpacity: 0.75,
            color: "orange",
            fillColor: "red",
            radius: markerSize(data[i].properties.mag)
          }).addTo(myMap)
        )}

        L.geoData(data).addTo(myMap);
  });