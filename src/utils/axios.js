import axios from 'axios';

const req = axios.create({
   baseURL: process.env.NODE_ENV === `development` ? `http://192.168.0.103:4000` : `https://tips.ga`,
   timeout: 4000,
});

export default req;