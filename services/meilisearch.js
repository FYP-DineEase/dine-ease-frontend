import { MeiliSearch } from 'meilisearch';

const port = 7700;

export const connectToMeilisearch = () => {
  const client = new MeiliSearch({
    host: `http://localhost:${port}`,
    apiKey: process.env.MEILI_SEARCH_TOKEN,
    headers: {
      Authorization: `Bearer ${process.env.MEILI_SEARCH_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  return client;
};
