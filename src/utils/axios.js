import axios from 'axios';

const req = axios.create({
   baseURL: process.env.NODE_ENV === `development` ? `http://localhost:4000` : `https://tips.ga`,
   timeout: 4000,
});

export default req;