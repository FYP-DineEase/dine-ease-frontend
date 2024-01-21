import axios from 'axios';

const baseURL = 'https://api.mapbox.com';
const token = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;

// fetch location
export async function fetchCountry(long, lat) {
  const apiUrl = `${baseURL}/search/geocode/v6/reverse?longitude=${long}&latitude=${lat}&access_token=${token}`;

  const response = await axios.get(apiUrl);
  const context = response.data.features[0].properties.context;

  const location = {
    coordinates: [long, lat],
    country: [context?.place?.name, context?.region?.name, context?.country?.name]
      .filter(Boolean)
      .join(', '),
  };

  return location;
}

// get route
export async function getRoute(unit, start, end) {
  const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/${unit}/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${token}`;

  const response = await axios.get(apiUrl);
  const coords = response.data.routes[0].geometry.coordinates;
  console.log(coords);
}
