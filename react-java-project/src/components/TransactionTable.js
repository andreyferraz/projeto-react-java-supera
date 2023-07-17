import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

const TransactionTable = ({ transactions, totalBalance, balanceInPeriod }) => {
  return (
    <div>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Saldo Total: {totalBalance}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Saldo no Período: {balanceInPeriod}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dados</TableCell>
              <TableCell>Valencia</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Nome do Operador Transacionado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.dados}</TableCell>
                <TableCell>{transaction.valencia}</TableCell>
                <TableCell>{transaction.tipo}</TableCell>
                <TableCell>{transaction.nomeOperador}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionTable;
