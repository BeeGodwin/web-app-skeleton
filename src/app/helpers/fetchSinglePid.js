import axios from 'axios';
import { programme } from '../models/programme';

async function fetchSinglePid(pid) {
  return await axios.get(`/data/${pid}`)
  .then((res) => {
    const result = programme(res.data);
    return result;
  });
}

export default fetchSinglePid;