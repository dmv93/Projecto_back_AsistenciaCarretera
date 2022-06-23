const map = L.map('map_templat').setView([40.4206907, -3.6954028], 13);

const myIcon = L.icon({
  iconUrl: '../img/logo3.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  // shadowUrl: 'my-icon-shadow.png',
  // shadowSize: [68, 95],
  // shadowAnchor: [22, 94]
});

const socket = io();

const MAPBOX_API =
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';

const ACCESS_TOKEN =
  'pk.eyJ1IjoiY2Nhc3RpbGxvMDZtYiIsImEiOiJja2k1eXpybXU3em1mMnRsNjNqajJ0YW12In0.aFQJlFDBDQeUpLHT4EiRYg';

L.tileLayer(MAPBOX_API, {
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: ACCESS_TOKEN,
}).addTo(map);

map.locate({ enableHighAccuracy: true });

map.on('locationfound', (e) => {
  let coords = [e.latlng.lat, e.latlng.lng];
  const marker = L.marker(coords);
  marker.bindPopup('Estás aquí');
  map.addLayer(marker);
  socket.emit('userCoordinates', e.latlng);
});

socket.on('newUserCoordinates', (coords) => {
  const marker = L.marker(coords.lat, coords.lng);
  marker.bindPopup('Estás aquí');
  map.addLayer(marker);
});
const marker = L.marker([40.4046673, -3.7242709], { icon: myIcon });
marker.bindPopup('Grua DIMA');
map.addLayer(marker);
