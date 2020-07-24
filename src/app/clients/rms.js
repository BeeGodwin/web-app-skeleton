import RMSClient from '@bbc/rms-client';

const client = RMSClient.createClient({
  apiKey: process.env.RMS_CLIENT_API_KEY
});

export const getProgramme = (pid) => {
  const query = client.v2ProgrammePlayable().pid(pid);
  return client.get(query);
};

export const getExperience = (pid) => {
  const query = client.experienceInlinePlaySignedOut().identifier(pid);
  return client.get(query);
};