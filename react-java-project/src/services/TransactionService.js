import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; 

export const fetchTransactions = async (startDate, endDate, operatorName) => {
  try {
    const response = await axios.get(`${BASE_URL}/transferencias`, {
      params: {
        startDate,
        endDate,
        operatorName,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching transferencias:', error);
    throw error;
  }
};

export const fetchTransactionsFilter = async (dataInicio, dataFim, nomeOperador) => {
  try {
    const response = await axios.get(`${BASE_URL}/transferencias/transacoes-por-periodo`, {
      params: {
        dataInicio,
        dataFim,
        nomeOperador,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching transferencias:', error);
    throw error;
  }
};

export const fetchTotalBalance = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/transferencias/saldo-total`);

    console.log(response)
    return response.data;
  
    
  } catch (error) {
    console.error('Error fetching total balance:', error);
    throw error;
  }
};
