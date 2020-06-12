import RMSClient from '@bbc/rms-client';

export const client = RMSClient.createClient({
  apiKey: process.env.MS_CLIENT_API_KEY
});


export const getProgramme = (pid) => {
  const query = client.v2ProgrammePlayable().pid(pid);
  return client.get(query);
};