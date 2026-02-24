export const STATIC_REPORTS = [
  {
    id: 1,
    title: 'Number of Open Alerts',
    subtitle: 'Real-time alert monitoring dashboard',
    metrics: { openAlerts: 84, closingRate: 44.5, oldestAlert: 128 },
    progress: 75,
    barChartData: {
      inProcess: [15, 22, 18, 25, 20, 12],
      unacknowledged: [5, 8, 4, 10, 6, 3],
      onWatch: [10, 15, 12, 18, 14, 8]
    },
    donutChartData: { open: 32, inProcess: 23, acknowledged: 23, onWatch: 20 }
  },
  {
    id: 2,
    title: 'Closing Rate %',
    subtitle: 'Alert resolution efficiency metrics',
    metrics: { openAlerts: 56, closingRate: 67.2, oldestAlert: 45 },
    progress: 85,
    barChartData: {
      inProcess: [10, 15, 12, 18, 14, 20],
      unacknowledged: [2, 4, 3, 5, 2, 6],
      onWatch: [5, 7, 6, 8, 5, 9]
    },
    donutChartData: { open: 15, inProcess: 35, acknowledged: 25, onWatch: 25 }
  },
  {
    id: 3,
    title: 'Oldest Unacknowledged Alert',
    subtitle: 'Critical alerts requiring attention',
    metrics: { openAlerts: 23, closingRate: 78.9, oldestAlert: 256 },
    progress: 30,
    barChartData: {
      inProcess: [25, 20, 15, 10, 5, 8],
      unacknowledged: [12, 10, 8, 6, 4, 5],
      onWatch: [8, 6, 4, 2, 1, 3]
    },
    donutChartData: { open: 40, inProcess: 20, acknowledged: 30, onWatch: 10 }
  },
  {
    id: 4,
    title: 'Network Connectivity',
    subtitle: 'Network health and uptime tracking',
    metrics: { openAlerts: 12, closingRate: 95.4, oldestAlert: 2 },
    progress: 98,
    barChartData: {
      inProcess: [5, 4, 6, 5, 4, 7],
      unacknowledged: [1, 0, 1, 1, 0, 2],
      onWatch: [12, 14, 11, 15, 13, 16]
    },
    donutChartData: { open: 5, inProcess: 10, acknowledged: 75, onWatch: 10 }
  },
  {
    id: 5,
    title: 'SSL Certificate Expiry',
    subtitle: 'Security certificate lifecycle',
    metrics: { openAlerts: 4, closingRate: 100, oldestAlert: 0 },
    progress: 100,
    barChartData: {
      inProcess: [1, 2, 1, 1, 2, 1],
      unacknowledged: [0, 0, 0, 0, 0, 0],
      onWatch: [20, 18, 22, 19, 21, 20]
    },
    donutChartData: { open: 2, inProcess: 3, acknowledged: 90, onWatch: 5 }
  },
  {
    id: 6,
    title: 'Backup Failure Alerts',
    subtitle: 'Data redundancy job status',
    metrics: { openAlerts: 18, closingRate: 62.1, oldestAlert: 34 },
    progress: 55,
    barChartData: {
      inProcess: [12, 10, 14, 9, 11, 13],
      unacknowledged: [8, 7, 9, 6, 8, 7],
      onWatch: [4, 5, 3, 6, 4, 5]
    },
    donutChartData: { open: 20, inProcess: 30, acknowledged: 40, onWatch: 10 }
  },
  {
    id: 7,
    title: 'Queue Processing Delays',
    subtitle: 'Message broker health metrics',
    metrics: { openAlerts: 42, closingRate: 51.3, oldestAlert: 89 },
    progress: 40,
    barChartData: {
      inProcess: [30, 28, 35, 32, 30, 25],
      unacknowledged: [15, 12, 18, 14, 16, 11],
      onWatch: [5, 4, 6, 5, 7, 4]
    },
    donutChartData: { open: 35, inProcess: 25, acknowledged: 20, onWatch: 20 }
  },
  {
    id: 8,
    title: 'Third-Party API Failures',
    subtitle: 'External service availability',
    metrics: { openAlerts: 29, closingRate: 74.2, oldestAlert: 56 },
    progress: 68,
    barChartData: {
      inProcess: [20, 18, 22, 15, 19, 17],
      unacknowledged: [10, 8, 11, 7, 9, 6],
      onWatch: [5, 6, 4, 7, 5, 8]
    },
    donutChartData: { open: 25, inProcess: 30, acknowledged: 30, onWatch: 15 }
  },
  {
    id: 9,
    title: 'Load Balancer Issues',
    subtitle: 'Traffic distribution monitoring',
    metrics: { openAlerts: 7, closingRate: 88.9, oldestAlert: 12 },
    progress: 90,
    barChartData: {
      inProcess: [5, 4, 6, 3, 5, 4],
      unacknowledged: [2, 1, 2, 1, 2, 1],
      onWatch: [15, 12, 18, 14, 16, 13]
    },
    donutChartData: { open: 8, inProcess: 12, acknowledged: 70, onWatch: 10 }
  },
  {
    id: 10,
    title: 'API Latency Spikes',
    subtitle: 'Endpoint response time analysis',
    metrics: { openAlerts: 31, closingRate: 58.7, oldestAlert: 42 },
    progress: 50,
    barChartData: {
      inProcess: [25, 22, 28, 24, 26, 21],
      unacknowledged: [12, 10, 14, 11, 13, 9],
      onWatch: [8, 7, 9, 6, 10, 5]
    },
    donutChartData: { open: 30, inProcess: 25, acknowledged: 25, onWatch: 20 }
  },
  {
    id: 11,
    title: 'User Login Failures',
    subtitle: 'Authentication security tracking',
    metrics: { openAlerts: 15, closingRate: 81.4, oldestAlert: 24 },
    progress: 82,
    barChartData: {
      inProcess: [10, 8, 12, 9, 11, 7],
      unacknowledged: [4, 3, 5, 2, 4, 3],
      onWatch: [15, 18, 14, 16, 17, 15]
    },
    donutChartData: { open: 12, inProcess: 18, acknowledged: 60, onWatch: 10 }
  },
  {
    id: 12,
    title: 'Database Connection Errors',
    subtitle: 'Database health monitoring',
    metrics: { openAlerts: 11, closingRate: 91.5, oldestAlert: 14 },
    progress: 92,
    barChartData: {
      inProcess: [2, 3, 2, 4, 5, 1],
      unacknowledged: [1, 0, 1, 2, 0, 1],
      onWatch: [3, 2, 4, 5, 3, 2]
    },
    donutChartData: { open: 10, inProcess: 15, acknowledged: 60, onWatch: 15 }
  },
  {
    id: 13,
    title: 'Memory Usage Alerts',
    subtitle: 'Server memory utilization',
    metrics: { openAlerts: 22, closingRate: 69.8, oldestAlert: 56 },
    progress: 60,
    barChartData: {
      inProcess: [18, 20, 22, 19, 21, 23],
      unacknowledged: [5, 6, 4, 7, 5, 8],
      onWatch: [2, 3, 2, 4, 3, 5]
    },
    donutChartData: { open: 25, inProcess: 45, acknowledged: 20, onWatch: 10 }
  }
];