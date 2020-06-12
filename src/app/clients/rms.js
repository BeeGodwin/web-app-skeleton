import RMSClient from '@bbc/rms-client';

export default RMSClient.createClient({
  apiKey: process.env.MS_CLIENT_API_KEY
});