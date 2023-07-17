import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const TransactionSearch = ({ onSearch }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [operatorName, setOperatorName] = useState('');

  const handleSearch = () => {
    
    onSearch(startDate, endDate, operatorName);
    
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        placeholder="Data de Início"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        placeholder="Data de Fim"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Nome do Operador Transacionado"
        value={operatorName}
        onChange={(e) => setOperatorName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSearch}>
        Pesquisar
      </Button>
    </Box>
  );
};

export default TransactionSearch;
