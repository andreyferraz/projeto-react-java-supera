import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TransactionSearch from './components/TransactionSearch';
import TransactionTable from './components/TransactionTable';
import { fetchTransactions, fetchTransactionsFilter } from './services/TransactionService';
import theme from './styles';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [balanceInPeriod, setBalanceInPeriod] = useState(0);

  // Função para carregar os dados ao iniciar a aplicação
  useEffect(() => {
    const loadTransactions = async () => {
      try {
        // Chama a função fetchTransactions para buscar os dados
        const data = await fetchTransactions();
        console.log(data);
  
        setTransactions(data);
    
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    
    loadTransactions();
  }, []);

  const handleSearch = async (startDate, endDate, operatorName) => {
    try {
      const data = await fetchTransactionsFilter(startDate, endDate, operatorName);
      console.log(data)
      setTransactions(data.transacoesPorPeriodo);
      setBalanceInPeriod(data.valorTotalPorPeriodo);
    } catch (error) {
      console.error('Error searching transactions:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Consulta de Transações</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TransactionSearch onSearch={handleSearch} />
            </Grid>
            <Grid item xs={12}>

              {
                transactions?
              <TransactionTable
                transactions={transactions}
                totalBalance={totalBalance}
                balanceInPeriod={balanceInPeriod}
              />
              :''
              }
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
