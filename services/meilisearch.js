import { MeiliSearch } from 'meilisearch';

export const connectToMeilisearch = () => {
  const client = new MeiliSearch({
    host: `http://localhost:7700`,
    apiKey: 'cd13d088-21cf-4286-ae61-0643d321dd9e',
    headers: {
      Authorization: 'Bearer cd13d088-21cf-4286-ae61-0643d321dd9e',
      'Content-Type': 'application/json',
    },
  });
  return client;
};
