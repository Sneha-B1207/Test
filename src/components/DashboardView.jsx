'use client';
import React, { useMemo } from 'react';
import { Box, Grid, Card, Typography } from '@mui/material';
import { Bar, Doughnut } from 'react-chartjs-2';
import { useDashboard, useDashboardState } from '@/context/DashboardContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const DashboardView = () => {
  const { reports, activeId } = useDashboardState();

const activeReport = useMemo(() => {
  return reports.find(r => r.id === activeId);
}, [reports, activeId]);
  const barOptions = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: { position: 'top', labels: { usePointStyle: true, padding: 20 } },
        tooltip: { backgroundColor: '#5a5c69', padding: 12, cornerRadius: 8 },
      },
      scales: {
        x: { 
          stacked: true, 
          grid: { display: false }
        },
        y: { 
          stacked: true,
          grid: { display: true, 
            drawBorder: false, 
            color: '#eaecf4' },
          ticks: { padding: 10 }
        }
      },
      elements: {
        bar: { borderRadius: 6 } 
      },
      animation: { animateRotate: true, animateScale: true } 
    };

  const barChartConfig = useMemo(() => {
    if (!activeReport?.barChartData) return { labels: [], datasets: [] }; 
    return {
      labels: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'],
      datasets: [
        { label: 'In Process', data: activeReport.barChartData.inProcess, backgroundColor: '#bda1f1' },
        { label: 'Unacknowledged', data: activeReport.barChartData.unacknowledged, backgroundColor: '#d1d3e2' },
        { label: 'On Watch', data: activeReport.barChartData.onWatch, backgroundColor: '#5b7feb' },
      ],
    };
  }, [activeReport]);

  const donutChartConfig = useMemo(() => {
    if (!activeReport?.donutChartData) return { labels: [], datasets: [] };
    
    return {
      labels: ['Open', 'In Process', 'Acknowledged', 'On Watch'],
      datasets: [{
        data: [
          activeReport.donutChartData.open,
          activeReport.donutChartData.inProcess,
          activeReport.donutChartData.acknowledged,
          activeReport.donutChartData.onWatch
        ],
        backgroundColor: ['#5b7feb', '#bda1f1', '#d1d3e2', '#986beb'],
      }]
    };
  }, [activeReport]);

  if (!activeReport) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography>Loading Dashboard...</Typography>
      </Box>
    );
  }

return (
  <Box sx={{ 
    flexGrow: 1, 
    p: 3, 
    height: '100vh', 
    overflowY: 'auto' 
  }}>
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} width={"49%"}>
        <Card sx={{ p: 3, borderRadius: 2, height: '100%' }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={2}>Best Unit Operations</Typography>
          <Box sx={{ height: 350,width:"100%" }}>
            <Bar 
              data={barChartConfig} 
              options={barOptions} 
            />
          </Box>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={6} width={"49%"}>
        <Card sx={{ p: 3, borderRadius: 2, height: '100%' }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={2}>Alert Rates Distribution</Typography>
          <Box sx={{ height: 350,width:"100%" }}>
            <Doughnut data={donutChartConfig} options={{ maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20 } },
                  tooltip: { backgroundColor: '#5a5c69', padding: 12, cornerRadius: 8 }
                },
                animation: { animateRotate: true, animateScale: true } }} />
          </Box>
        </Card>
      </Grid>
    </Grid>
  </Box>
);
};

export default DashboardView;