import { MeiliSearch } from 'meilisearch';
import { PORTS } from '@/utils/port';

export const connectToMeilisearch = () => {
  const client = new MeiliSearch({
    host: `http://localhost:${PORTS['meilisearch']}`,
    apiKey: process.env.NEXT_PUBLIC_MEILI_SEARCH_TOKEN,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MEILI_SEARCH_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  return client;
};
