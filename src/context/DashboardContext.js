'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { STATIC_REPORTS } from '@/data/reports';

const DashboardStateContext = createContext();
const DashboardActionsContext = createContext();

export function DashboardProvider({ children }) {
  const [reports, setReports] = useState([]);
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const savedReports = localStorage.getItem('dashboard_reports');
    const savedActiveId = localStorage.getItem('active_report_id');

    if (savedReports) {
      setReports(JSON.parse(savedReports));
    } else {
      setReports(STATIC_REPORTS);
      localStorage.setItem(
        'dashboard_reports',
        JSON.stringify(STATIC_REPORTS)
      );
    }

    if (savedActiveId) {
      setActiveId(JSON.parse(savedActiveId));
    }
  }, []);

  useEffect(() => {
    if (reports.length) {
      localStorage.setItem(
        'dashboard_reports',
        JSON.stringify(reports)
      );
    }
  }, [reports]);

  useEffect(() => {
    localStorage.setItem(
      'active_report_id',
      JSON.stringify(activeId)
    );
  }, [activeId]);

  const selectReport = useCallback((id) => {
    setActiveId(id);
  }, []);

  const addReport = useCallback((newReport) => {
    setReports((prev) => [newReport, ...prev]);
  }, []);

  const stateValue = useMemo(
    () => ({
      reports,
      activeId,
    }),
    [reports, activeId]
  );

  const actionsValue = useMemo(
    () => ({
      selectReport,
      addReport,
    }),
    [selectReport, addReport]
  );

  return (
    <DashboardStateContext.Provider value={stateValue}>
      <DashboardActionsContext.Provider value={actionsValue}>
        {children}
      </DashboardActionsContext.Provider>
    </DashboardStateContext.Provider>
  );
}

export const useDashboardState = () =>
  useContext(DashboardStateContext);

export const useDashboardActions = () =>
  useContext(DashboardActionsContext);