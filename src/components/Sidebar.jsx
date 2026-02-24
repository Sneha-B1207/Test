'use client';
import React, { useState, useMemo, memo } from 'react';
import { Box, Button, Pagination, TextField, Typography,Checkbox, Grid, Card, LinearProgress } from '@mui/material';
import { useDashboard } from '@/context/DashboardContext';
import { List, ListItemButton, ListItemText, Radio } from '@mui/material';


export default function Sidebar({ onOpenModal }) {
  const { reports,activeReport } = useDashboard();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const filteredReports = useMemo(() => {
    return reports.filter(r => 
      r.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [reports, search]);

  const totalPages = Math.ceil(filteredReports.length / itemsPerPage);

  const paginatedReports = useMemo(() => {
    return filteredReports.slice(
      (page - 1) * itemsPerPage, 
      page * itemsPerPage
    );
  }, [filteredReports, page]);

  return (
  <Box sx={{ 
    width: 350, 
    bgcolor: "#f8f9fc", 
    p: 3, 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)',
    overflowY: 'hidden',
    mt:1,
  }}>
    
   
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden' }}>
      <Typography variant="h6" sx={{ mb: 2, color: '#3a3b45', fontWeight: 700, fontSize: '0.9rem' }}>
        Select Report Dashboard
      </Typography>
      
      <ReportSearch 
        search={search} 
        setSearch={setSearch} 
        setPage={setPage} 
        onOpenModal={onOpenModal}
      />

      <ReportList paginatedReports={paginatedReports} />
      
      <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center', pt: 2 }}>
        <Pagination 
          count={totalPages || 1} 
          size="small" 
          color="primary" 
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ '& .MuiPaginationItem-root': { fontSize: '0.75rem' } }}
        />
      </Box>
    </Box>
  </Box>
);
}


const ReportSearch = ({ search, setSearch, setPage, onOpenModal }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          fullWidth 
          placeholder="Search reports..."
          size="small" 
          value={search}
          onChange={(e) => { 
            setSearch(e.target.value); 
            setPage(1);
          }}
        />
        <Button
          variant="contained" 
          onClick={onOpenModal} 
          sx={{ bgcolor: '#4e73df', minWidth: '60px', fontWeight: 'bold' }}
        >
          ADD
        </Button>
    </Box>
  );
};

const ReportItem = memo(({ report, isSelected, onSelect }) => {
  return (
    <ListItemButton 
      onClick={() => onSelect(report.id)}
      selected={isSelected}
      sx={{
        borderRadius: 1,
        mb: 0.5,
        display: 'flex',
        justifyContent: 'space-between',
        '&.Mui-selected': { bgcolor: 'rgba(78, 115, 223, 0.1)' }
      }}
    >
      <ListItemText primary={report.title} />
      <Checkbox
        checked={isSelected}
        size="small"
        sx={{ p: 0, color: '#d1d3e2' }}
      />
    </ListItemButton>
  );
});

const ReportList = ({ paginatedReports }) => {
  const { activeReport, selectReport } = useDashboard();

  return (
    <List sx={{ flexGrow: 1, overflowY: 'auto', mt: 1 }}>
      {paginatedReports.map((report) => (
        <ReportItem 
          key={report.id} 
          report={report} 
          isSelected={activeReport?.id === report.id} 
          onSelect={selectReport} 
        />
      ))}
    </List>
  );
};

