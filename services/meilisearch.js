import { MeiliSearch } from 'meilisearch';
import { PORTS } from '@/utils/port';

const service = 'meilisearch';
const port = PORTS[service];

export const connectToMeilisearch = () => {
  const client = new MeiliSearch({
    host: `http://localhost:${port}`,
    apiKey: 'cd13d088-21cf-4286-ae61-0643d321dd9e',
    headers: {
      Authorization: 'Bearer cd13d088-21cf-4286-ae61-0643d321dd9e',
      'Content-Type': 'application/json',
    },
  });
  return client;
};
