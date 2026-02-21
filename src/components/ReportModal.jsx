'use client';
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

export default function ReportModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({ title: '', subtitle: '' });
  const [errors, setErrors] = useState({ title: '', subtitle: '' });

  const titleRegex = /^[A-Za-z][A-Za-z0-9\s]*$/;

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

    onSubmit({ ...form, id: Date.now(), kpiValue: "0" });
    setForm({ title: '', subtitle: '' });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ fontWeight: 'bold' }}>Add New Report</DialogTitle>
      <DialogContent>
        <TextField 
          label="Title" fullWidth sx={{ mt: 2 }} 
          error={!!errors.title} helperText={errors.title}
          onChange={(e) => setForm({...form, title: e.target.value})}
        />
        <TextField 
          label="Subtitle" fullWidth sx={{ mt: 2 }} 
          error={!!errors.subtitle} helperText={errors.subtitle}
          onChange={(e) => setForm({...form, subtitle: e.target.value})}
        />
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleCreate}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}