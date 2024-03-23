// services/bookAPI.js

import axiosInstance from '../axios';

const getBooks = async () => {
  try {
    const response = await axiosInstance.get('/search', {
      params: {
        order_by: 'random',
        results_per_page: '52', 
        page: '1'
      }
    });
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getBooks;
