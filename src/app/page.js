'use client';
import React, { useState, useCallback } from 'react';
import { Box, Snackbar, Alert, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Sidebar from '@/components/Sidebar';
import DashboardView from '@/components/DashboardView';
import ReportModal from '@/components/ReportModal';
import { useDashboard } from '@/context/DashboardContext';
import { Notifications } from '@mui/icons-material';
import {  IconButton, Avatar } from '@mui/material';
import DashboardCard from '@/components/DashboardCard';

export default function Home() {
  const { addReport } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAdd = useCallback((newReport) => {
    addReport(newReport);
    setIsModalOpen(false); 
    setSuccess(true);    
  }, [addReport]);

  return (
    <Box component="div" sx={{ minHeight: "100vh",bgcolor: "#F6F0FC", }}>
      <Navbar />
      <Box component="section" sx={{ px: 3, py: 2,bgcolor: "#F6F0FC",  }}>
        <DashboardCard />
      </Box>
      <Box 
        component="main" 
        sx={{ 
          display: "flex", 
          px: 3, 
          pb: 3, 
          gap: 2, 
          alignItems: 'flex-start', 
          bgcolor: "#F6F0FC",
        }}
      >
        <Box component="aside" sx={{ flexShrink: 0 }}>
          <Sidebar onOpenModal={() => setIsModalOpen(true)} />
        </Box>

        <Box component="article" sx={{ flexGrow: 1 }}>
          <DashboardView />
        </Box>
      </Box>
      <ReportModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAdd} />
      <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
        <Alert severity="success" variant="filled">Report synchronized!</Alert>
      </Snackbar>
    </Box>
  );
}

const Navbar = () => (
  <AppBar 
    position="static" 
    elevation={0} 
    sx={{ 
      bgcolor: "#2B0480",
      borderBottom: "1px solid #e3e6f0",
      px: 2
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem', letterSpacing: 0.5 , color:"white" }}>
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton 
          sx={{ 
            color: '#a0a0c0', 
            '&:hover': { bgcolor: 'rgba(62, 62, 106, 0.5)', color: 'white' },
            transition: 'all 0.2s'
          }}
        >
          <Notifications sx={{ fontSize: '1.2rem' }} />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);