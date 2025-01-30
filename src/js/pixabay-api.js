const API_KEY = '48293872-b2eb1e8e6b9d94230c1481ee9';
const BASE_URL = 'https://pixabay.com/api/';
import axios from 'axios';

export async function serviceImages(question, page = 1) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: question,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${params}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
