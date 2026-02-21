'use client';
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import defaultReports from '@/data/reports.json';

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [reports, setReports] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const savedReports = localStorage.getItem('dashboard_reports');
    const savedIds = localStorage.getItem('selected_report_ids');

    if (savedReports) {
      setReports(JSON.parse(savedReports));
    } else {
      setReports(defaultReports);
      localStorage.setItem('dashboard_reports', JSON.stringify(defaultReports));
    }
    if (savedIds) {
      setSelectedIds(JSON.parse(savedIds));
    } else {
      const initialSelection = [1, 2]; 
      setSelectedIds(initialSelection);
      localStorage.setItem('selected_report_ids', JSON.stringify(initialSelection));
    }
  }, []);


  useEffect(() => {
    if (selectedIds.length > 0) {
      localStorage.setItem('selected_report_ids', JSON.stringify(selectedIds));
    }
  }, [selectedIds]);

  const toggleSelect = useCallback((id) => {
    setSelectedIds((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }, []);


  const addReport = useCallback((newReport) => {
    setReports((prev) => {
      const updated = [newReport, ...prev];
      localStorage.setItem('dashboard_reports', JSON.stringify(updated));
      return updated;
    });
  }, []);
  const value = useMemo(() => ({
    reports,
    selectedIds,
    addReport,
    toggleSelect
  }), [reports, selectedIds, toggleSelect, addReport]);

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("Error!!!!!!!!!!!!!!!!");
  }
  return context;
};