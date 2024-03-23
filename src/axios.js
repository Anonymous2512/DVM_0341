// src/axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://book-finder1.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': 'b0aca78be7mshd84eeb43795cc10p116e3fjsnc85698a9bd44',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
});

export default axiosInstance;
