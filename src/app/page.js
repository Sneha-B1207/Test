'use client';
import React, { useState } from 'react';
import { Box, Snackbar, Alert } from '@mui/material';
import Sidebar from '@/components/Sidebar';
import DashboardView from '@/components/DashboardView';
import ReportModal from '@/components/ReportModal';
import { useDashboard } from '@/context/DashboardContext';

export default function Home() {
  const { addReport } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAdd = (newReport) => {
    addReport(newReport);
    setSuccess(true);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar onOpenModal={() => setIsModalOpen(true)} />
      <DashboardView />
      <ReportModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAdd} 
      />
      
      <Snackbar 
        open={success} 
        autoHideDuration={3000} 
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="success" variant="filled">
          Report added and stored successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}