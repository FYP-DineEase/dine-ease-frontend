import { MeiliSearch } from 'meilisearch';
import { PORTS } from '@/utils/port';

const service = 'meilisearch';
const port = PORTS[service];

export const connectToMeilisearch = () => {
  const client = new MeiliSearch({
    host: `http://localhost:${port}`,
    apiKey: '834efdb6-6044-4b44-8fcb-560710936f36',
    headers: {
      Authorization: `Bearer 834efdb6-6044-4b44-8fcb-560710936f36`,
      'Content-Type': 'application/json',
    },
  });
  return client;
};
