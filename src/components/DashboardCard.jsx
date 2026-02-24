'use client';
import React from 'react';
import { Box, Grid, Card, Typography, LinearProgress } from '@mui/material';
import { useDashboard } from '@/context/DashboardContext';
import { AccessTime, CheckCircle, Notifications } from '@mui/icons-material';


const DashboardCard = () => {
    const { activeReport } = useDashboard();
      const kpis = [
        { title: 'Open Alerts', val: activeReport?.metrics?.openAlerts || 0, icon: <Notifications />, col: '#4e73df' },
        { title: 'Closing Rate %', val: `${activeReport?.metrics?.closingRate || 0}%`, icon: <CheckCircle />, col: '#1cc88a' },
        { title: 'Oldest Alert', val: `${activeReport?.metrics?.oldestAlert || 0} Days`, icon: <AccessTime />, col: '#36b9cc' },
      ];
    
  return (
    <Box sx={{ 
    flexGrow: 1, 
    p: 0, 
    bgcolor: "#efebf7",
    height: 'auto', 
    overflowY: 'auto' 
  }}>

    <Grid container spacing={1} mb={0}>
        <Grid item xs={12} md={3} width={"25%"} >
            <Card sx={{ p: 1, borderRadius: 1, mb: 0 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle2" fontWeight="700">Last 7 Days</Typography>
                    <Typography variant="caption" sx={{ color: '#858796' }}>
                      {activeReport?.progress || 0}% Progress
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={activeReport?.progress || 0} 
                      sx={{ height: 8, borderRadius: 5 }} 
                    />
                  </Box>
          </Card>

        </Grid>
      {kpis.map((item, i) => (
        <Grid item xs={12} md={3} key={i} width={"24%"}>
          <Card sx={{ p: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 1 }}>
            <Box>
              <Typography variant="h5" fontWeight="bold">{item.val}</Typography>
              <Typography variant="caption" color="textSecondary">{item.title}</Typography>
            </Box>
            <Box sx={{ color: item.col, display: 'flex' }}>{item.icon}</Box>
          </Card>
        </Grid>
      ))}
    </Grid>

   
  </Box>
  )
}

export default DashboardCard
