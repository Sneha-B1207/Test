import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import DashboardView from './DashboardView';
import ReportModal from './ReportModal';

const Dashboard = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState(() => {
      const saved = localStorage.getItem('selected_report_ids');
      return saved ? JSON.parse(saved) : [];});
  

  useEffect(() => {
    const saved = localStorage.getItem('dashboard_reports');
    if (saved) {
      const data = JSON.parse(saved);
      setReports(data);
      if (data.length > 0) setSelectedReport(data[0]);
    }
  }, []);

  const handleAddReport = (newReport) => {
    const updated = [newReport, ...reports];
    setReports(updated);
    localStorage.setItem('dashboard_reports', JSON.stringify(updated));
    if (!selectedReport) setSelectedReport(newReport);
  };
  return (
    <Box sx={{ display: 'flex', height: '95vh', bgcolor: '#f4f6f8' }}>
      <Sidebar 
        reports={reports} 
        onSelect={setSelectedReport} 
        selectedId={selectedReport?.id}
        onOpenModal={() => setIsModalOpen(true)}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
      <DashboardView selectedReport={selectedReport}
        reports={reports} 
        selectedIds={selectedIds}
       />
      <ReportModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddReport} 
      />
      </Box>
  )
}

export default Dashboard
