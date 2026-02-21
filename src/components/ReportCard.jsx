'use client';
import { Grid, Card, Typography, Box, Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useDashboard } from '@/context/DashboardContext';

export default function ReportCard() {
  const { reports, selectedIds } = useDashboard();
  const selectedReports = reports.filter(r => selectedIds.includes(r.id));
  const getIcon = (title) => {
    if (title.includes('Open')) return <NotificationsIcon sx={{ color: '#4e73df' }} />;
    if (title.includes('Rate')) return <CheckCircleIcon sx={{ color: '#b19cd9' }} />;
    return <AccessTimeFilledIcon sx={{ color: '#5a5c69' }} />;
  };

  return (
    <>
      {selectedReports.map((report) => (
        <Grid item xs={12} md={4} key={report.id}>
          <Card sx={{ p: 3, display: 'flex', alignItems: 'center', height: '40px',width:"auto"}}>
            <Avatar sx={{ bgcolor: '#f0f2f9', mr: 2, width: 48, height: 48 }}>
              {getIcon(report.title)}
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, lineHeight: 1 }}>
                {report.kpiValue}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 300 }}>
                {report.title}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
}