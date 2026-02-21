'use client';
import { List, ListItemButton, ListItemText, Checkbox } from '@mui/material';
import React, { memo, useMemo } from 'react';

const ReportItem = memo(({ report, isSelected, onSelect }) => (
  <ListItemButton
    onClick={() => onSelect(report.id)}
    sx={{
      borderRadius: 1,
      mb: 0.5,
      '&.Mui-selected': { bgcolor: '#eaecf4', color: '#4e73df' },
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <ListItemText primary={report.title} />
    <Checkbox
      checked={isSelected}
      size="small"
      sx={{ p: 0, color: '#d1d3e2', '&.Mui-checked': { color: '#4e73df' } }}
      readOnly
    />
  </ListItemButton>
));

const ReportList = ({ paginatedReports, selectedIds, onSelect }) => {
  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  return (
    <List sx={{ mb: 2, flexGrow: 1, overflowY: 'auto', maxHeight: '93vh' }}>
      {paginatedReports?.map((report) => (
        <ReportItem
          key={report.id}
          report={report}
          isSelected={selectedSet.has(report.id)}
          onSelect={onSelect}
        />
      ))}
    </List>
  );
};

export default memo(ReportList);