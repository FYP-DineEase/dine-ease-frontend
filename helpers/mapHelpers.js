import axios from 'axios';

const baseURL = 'https://api.mapbox.com';

// fetch location
export async function fetchCountry(long, lat) {
  const apiUrl = `${baseURL}/search/geocode/v6/reverse?longitude=${long}&latitude=${lat}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`;

  const response = await axios.get(apiUrl);
  const { place, region, country } = response.data.features[0].properties.context;

  const location = {
    coordinates: [long, lat],
    country: `${place.name}, ${region.name}, ${country.name}`,
  };

  return location;
}
