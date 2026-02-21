'use client';
import { useState, useCallback, useMemo } from 'react';
import { Box, Pagination, Typography } from '@mui/material';
import { useDashboard } from '@/context/DashboardContext';
import ReportList from './ReportList';
import ReportSearch from './ReportSearch';

export default function Sidebar({ onOpenModal }) {
  const { reports, selectedIds, toggleSelect } = useDashboard();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const handleToggleSelect = useCallback((reportId) => {
    toggleSelect(reportId);
  }, [toggleSelect]);

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
      width: 320, 
      bgcolor: 'white', 
      p: 3, 
      height: '93vh', 
      borderRight: '1px solid #e3e6f0',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)'
    }}>
      <Typography variant="h6" sx={{ mb: 2, color: '#3a3b45', fontWeight: 700, fontSize: '1rem' }}>
        Select Report Dashboard
      </Typography>
      
      <ReportSearch 
        search={search} 
        setSearch={setSearch} 
        setPage={setPage} 
        onOpenModal={onOpenModal}
      />

      <ReportList 
        paginatedReports={paginatedReports} 
        selectedIds={selectedIds} 
        onSelect={handleToggleSelect} 
      />
      
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
  );
}