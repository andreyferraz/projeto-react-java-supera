import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { format } from 'date-fns';

const TransactionSearch = ({ onSearch }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [operatorName, setOperatorName] = useState('');

  const handleSearch = () => {
    // Formata as datas no padrão "yyyy-mm-dd"
    const formattedStartDate = format(new Date(startDate), 'yyyy-MM-dd');
    const formattedEndDate = format(new Date(endDate), 'yyyy-MM-dd');
    
    onSearch(formattedStartDate, formattedEndDate, operatorName);
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        label="Data de Início"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Data de Fim"
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
