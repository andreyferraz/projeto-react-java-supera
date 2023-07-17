import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TransactionSearch from './components/TransactionSearch';
import TransactionTable from './components/TransactionTable';
import { fetchTransactions } from './services/TransactionService';
import theme from './styles';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [balanceInPeriod, setBalanceInPeriod] = useState(0);

  const handleSearch = async (startDate, endDate, operatorName) => {
    try {
      const data = await fetchTransactions(startDate, endDate, operatorName);

      setTransactions(data.transactions);
      setTotalBalance(data.totalBalance);
      setBalanceInPeriod(data.balanceInPeriod);
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
              <TransactionTable
                transactions={transactions}
                totalBalance={totalBalance}
                balanceInPeriod={balanceInPeriod}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
