import axios from 'axios';

const BASE_URL = 'http://sua-url-java-api'; // Substitua pela URL correta

export const fetchTransactions = async (startDate, endDate, operatorName) => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions`, {
      params: {
        startDate,
        endDate,
        operatorName,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};
