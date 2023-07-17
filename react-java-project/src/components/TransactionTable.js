import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns'; // Importe a função format aqui
import { fetchTotalBalance } from '../services/TransactionService'; // Importe a função fetchTotalBalance aqui


const TransactionTable = ({ transactions, balanceInPeriod }) => {
  const [loading, setLoading] = useState(true);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    // Função para carregar o saldo total ao iniciar a aplicação
    const loadTotalBalance = async () => {
      try {
        const totalBalance = await fetchTotalBalance();
        console.log(totalBalance)
        setTotalBalance(totalBalance);
        setLoading(false);
      } catch (error) {
        console.error('Error loading total balance:', error);
      }
    };

    loadTotalBalance();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
    { transactions?
      <><Typography variant="subtitle1" sx={{ mb: 1 }}>
          Saldo Total: {totalBalance}
        </Typography><Typography variant="subtitle1" sx={{ mb: 2 }}>
            Saldo no Período: {balanceInPeriod}
          </Typography><TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Dados</strong></TableCell>
                  <TableCell><strong>Valencia</strong></TableCell>
                  <TableCell><strong>Tipo</strong></TableCell>
                  <TableCell><strong>Nome do Operador Transacionado</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {transactions.map((transaction) => (
                  <TableRow key={transaction.idTransferencia}>
                    <TableCell>{format(new Date (transaction?.dataTransferencia), "dd-MM-yyyy")}</TableCell>
                    <TableCell>{transaction.valor}</TableCell>
                    <TableCell>{transaction.tipo}</TableCell>
                    <TableCell>{transaction.nomeOperadorTransacao}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer></>
    :""
  }
    </div>

  );
};

export default TransactionTable;
