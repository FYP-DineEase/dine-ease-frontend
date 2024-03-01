import { MeiliSearch } from 'meilisearch';

export const connectToMeilisearch = () => {
  const client = new MeiliSearch({
    host: `http://localhost:7700`,
    apiKey: process.env.NEXT_PUBLIC_MEILI_SEARCH_TOKEN,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MEILI_SEARCH_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  return client;
};
