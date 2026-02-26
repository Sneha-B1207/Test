'use client';
import React, { memo, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const ReportModal=({ open, onClose, onSubmit })=>{
  console.log("Model is rendering 1")
  const [form, setForm] = useState({ title: '', subtitle: '' });
  const [errors, setErrors] = useState({ title: '', subtitle: '' });

  const titleRegex = /^[A-Za-z][A-Za-z0-9\s]*$/;

  const genRandomArray = (len, max) => 
    Array.from({ length: len }, () => Math.floor(Math.random() * max) + 5);

  const handleCreate = () => {
    let tErr = "";
    let sErr = "";

    if (!form.title.trim()) tErr = "Title is required";
    else if (!titleRegex.test(form.title)) tErr = "Title must start with a letter";

    if (!form.subtitle.trim()) sErr = "Subtitle is required";

    if (tErr || sErr) {
      setErrors({ title: tErr, subtitle: sErr });
      return;
    }

    const newReport = {
      id: Date.now(),
      title: form.title,
      subtitle: form.subtitle,
      metrics: { 
        openAlerts: Math.floor(Math.random() * 50) + 10, 
        closingRate: parseFloat((Math.random() * 40 + 50).toFixed(1)), 
        oldestAlert: Math.floor(Math.random() * 100) + 1 
      },
      progress: Math.floor(Math.random() * 100),
      barChartData: {
        inProcess: genRandomArray(6, 30),
        unacknowledged: genRandomArray(6, 15),
        onWatch: genRandomArray(6, 20)
      },
      donutChartData: { 
        open: Math.floor(Math.random() * 30) + 5, 
        inProcess: Math.floor(Math.random() * 25) + 5, 
        acknowledged: Math.floor(Math.random() * 20) + 10, 
        onWatch: Math.floor(Math.random() * 15) + 2 
      }
    };

    onSubmit(newReport);
    console.log("Hello")
    setForm({ title: '', subtitle: '' });
    setErrors({ title: '', subtitle: '' }); 
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ fontWeight: 'bold' }}>Add New Report</DialogTitle>
      <DialogContent>
        <TextField 
          label="Title" fullWidth sx={{ mt: 2 }} 
          error={!!errors.title} helperText={errors.title}
          value={form.title}
          onChange={(e) => setForm({...form, title: e.target.value})}
        />
        <TextField 
          label="Subtitle" fullWidth sx={{ mt: 2 }} 
          error={!!errors.subtitle} helperText={errors.subtitle}
          value={form.subtitle}
          onChange={(e) => setForm({...form, subtitle: e.target.value})}
        />
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleCreate} sx={{ bgcolor: '#4e73df' }}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ReportModal;