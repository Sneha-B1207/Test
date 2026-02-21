'use client';
import { Box, Grid, Card, Typography } from '@mui/material';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend
} from 'chart.js';
import ReportCard from './ReportCard';
import ReportInnerCard from './ReportInnerCard';
import { stackedBarData, donutData } from '../data/chartsData';
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function DashboardView() {

  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#e7edf7', overflowY: 'auto', width: '96%' }}>
      <Grid container spacing={2} mb={2}>
        <ReportCard /> 
      </Grid>

    <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#ffffff', overflowY: 'auto', width: '96%' }}>
      <Grid container spacing={2} mb={2}>
        <ReportInnerCard /> 
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Card sx={{ p: 2, height: 400, boxShadow: '0 0.15rem 1.75rem 0 rgba(12, 29, 214, 0.15)' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="primary" gutterBottom>
              Best Unit Operations
            </Typography>
            <Box sx={{ height: 330 ,width:600}}>
              <Bar 
                data={stackedBarData} 
                options={{ 
                  maintainAspectRatio: false, 
                  scales: { x: { stacked: true }, y: { stacked: true } } 
                }} 
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={{ p: 2, height: 400, boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="primary" gutterBottom>
              Rates Distribution
            </Typography>
            <Box sx={{ height: 330 ,width:600}}>
              <Doughnut data={donutData} options={{ maintainAspectRatio: false }} />
            </Box>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
}