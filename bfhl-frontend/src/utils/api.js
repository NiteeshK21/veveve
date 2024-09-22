import axios from 'axios';

export const postData = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/bfhl', data);
    return response.data;
  } catch (error) {
    console.error('Error sending data', error);
    return null;
  }
};

export const getData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/bfhl');
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    return null;
  }
};