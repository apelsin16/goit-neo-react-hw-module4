import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImagesWithQuery = async (query, page = 1) => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}`;
    const response = await axios.get(url);
    return response.data;
};
