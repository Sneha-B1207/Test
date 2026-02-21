'use client';
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [reports, setReports] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const savedReports = localStorage.getItem('dashboard_reports');
    const savedIds = localStorage.getItem('selected_report_ids');
    if (savedReports) setReports(JSON.parse(savedReports));
    if (savedIds) setSelectedIds(JSON.parse(savedIds));
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

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export const useDashboard = () => useContext(DashboardContext);