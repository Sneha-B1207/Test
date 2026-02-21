'use client';
import { useDashboard } from '@/context/DashboardContext';
import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';

const ReportInnerCard = () => {
  const { selectedIds, reports } = useDashboard();
  
  return (
    selectedIds?.map((item) => {
      const data = reports?.find((r) => r.id === item) || {};
      
      if (!data.id) return null;

      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
          <Card 
            sx={{ 
              p: 2, 
              border: '1px solid #e3e6f0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              textAlign: 'center',
              // minHeight: '100px',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.02)' }
            }}
          >
            <Typography 
              variant="h6" 
              fontWeight="bold" 
              // sx={{ color: '#3a3b45', mb: 0.5 }}
            >
              {data?.title}
            </Typography>

            <Typography 
              variant="caption" 
              sx={{ color: '#4e73df', fontWeight: 'bold' }}
            >
              {data.kpiValue || "0"}
            </Typography>
          </Card>
        </Grid>
      );
    })
  );
};

export default ReportInnerCard;