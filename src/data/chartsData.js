export const stackedBarData = {
  labels: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'],
  datasets: [
    { label: 'On Watch', data: [4, 7, 3, 8, 9, 5], backgroundColor: '#4e73df' },
    { label: 'Unacknowledged', data: [5, 3, 4, 2, 4, 3], backgroundColor: '#d1d3e2' },
    { label: 'In Process', data: [5, 3, 4, 4, 3, 5], backgroundColor: '#b19cd9' },
  ],
};

export const donutData = {
  labels: ['Open', 'In Process', 'Acknowledged', 'On Watch'],
  datasets: [{
    data: [32, 23, 23, 20],
    backgroundColor: ['#4e73df', '#b19cd9', '#858796', '#eaecf4'],
    hoverOffset: 4
  }]
};