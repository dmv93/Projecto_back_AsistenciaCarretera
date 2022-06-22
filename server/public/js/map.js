mapboxgl.accessToken =
  'pk.eyJ1IjoiY2Nhc3RpbGxvMDZtYiIsImEiOiJja2k1eXpybXU3em1mMnRsNjNqajJ0YW12In0.aFQJlFDBDQeUpLHT4EiRYg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-3.6954028, 40.4206907], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
async function getGrua() {
  const res = await fetch('/grua');
  const data = await res.json();
  //   console.log(data);
  const grua = data.data.map((grua) => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          grua.location.coordinates[0],
          grua.location.coordinates[1],
        ],
      },
      properties: {
        gruaId: grua.gruaId,
        icon: 'car',
      },
    };
  });
  loadMap(grua);
}

function loadMap(gruas) {
  map.on('load', () => {
    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: gruas,
          //   features: [
          //     {
          //       type: 'Feature',
          //       geometry: {
          //         type: 'Point',
          //         coordinates: [-3.6954028, 40.4206907],
          //       },
          //       properties: {
          //         gruaId: 'Grúa',
          //         icon: 'car',
          //       },
          //     },
          //   ],
        },
      }, // reference the data source
      layout: {
        'icon-image': '{icon}-15', // reference the image
        'icon-size': 1.5,
        'text-field': '{gruaId}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.9],
        'text-anchor': 'top',
      },
    });
  });
}
// loadMap();
getGrua();
