const mapboxgl = require('mapbox-gl')

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0amZveCIsImEiOiJjazM0b2tha2oxN3FlM2JuOXQ3OXZhOGQxIn0.g_y3Iu-r-GP2BmZg1G79IQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

function buildMarker(latLng, type) {
    let markerDomEl = document.createElement("div")
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
    
    new mapboxgl.Marker(markerDomEl)
        .setLngLat(latLng)
        .addTo(map)
}

module.exports = {
    buildMarker
}