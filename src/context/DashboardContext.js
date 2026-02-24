'use client';
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { STATIC_REPORTS } from '@/data/reports';

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [reports, setReports] = useState([]);
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const savedReports = localStorage.getItem('dashboard_reports');
    const savedActiveId = localStorage.getItem('active_report_id');
    if (savedReports) {
      const parsed = JSON.parse(savedReports);
      
      if (!parsed[0].metrics) {
        setReports(STATIC_REPORTS);
        localStorage.setItem('dashboard_reports', JSON.stringify(STATIC_REPORTS));
      } else {
        setReports(parsed);
      }
    } else {
      setReports(STATIC_REPORTS);
      localStorage.setItem('dashboard_reports', JSON.stringify(STATIC_REPORTS));
    }

    if (savedActiveId) {
      setActiveId(JSON.parse(savedActiveId));
    } else {
      setActiveId(1);
      localStorage.setItem('active_report_id', JSON.stringify(1));
    }
  }, []);

  const selectReport = useCallback((id) => {
    setActiveId(id);
  }, []);
  useEffect(() => {
  if (activeId) {
    localStorage.setItem('active_report_id', JSON.stringify(activeId));
  }
  }, [activeId]);
  useEffect(() => {
  if (reports.length > 0) {
    localStorage.setItem('dashboard_reports', JSON.stringify(reports));
    }
  }, [reports]);

  const addReport = useCallback((newReport) => {
    setReports((prev) => {
      const updated = [newReport, ...prev];
      localStorage.setItem('dashboard_reports', JSON.stringify(updated));
      return updated;
    });
  }, []);
  const activeReport = useMemo(() => {
    return reports.find((r) => r.id === activeId) || reports[0];
  }, [reports, activeId]);
  const value = useMemo(() => ({
    reports,
    activeReport,
    selectReport,
    addReport,
  }), [reports, activeReport, selectReport, addReport]);

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};