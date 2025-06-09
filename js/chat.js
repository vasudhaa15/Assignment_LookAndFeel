document.addEventListener('DOMContentLoaded', () => {
  const ctx1 = document.getElementById('styleChart').getContext('2d');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Modern', 'Bohemian', 'Scandinavian', 'Minimalist', 'Vintage', 'Rustic'],
      datasets: [{
        label: 'User Interest by Style',
        data: [45, 30, 25, 35, 20, 15],
        backgroundColor: '#b28967',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Popular Interior Design Styles',
          font: { size: 18 }
        },
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  const ctx2 = document.getElementById('trafficChart').getContext('2d');
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Monthly Site Visits',
        data: [500, 700, 850, 950, 1100, 1300],
        borderColor: '#b28967',
        backgroundColor: 'rgba(178, 137, 103, 0.2)',
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Website Traffic',
          font: { size: 18 }
        }
      }
    }
  });

  const ctx3 = document.getElementById('categoryChart').getContext('2d');
  new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: ['Furniture', 'Lighting', 'Wall Art', 'Decor', 'Textiles'],
      datasets: [{
        label: 'Product Distribution',
        data: [30, 25, 15, 20, 10],
        backgroundColor: [
          '#b28967', '#d9a679', '#c79b73', '#e6ccb3', '#a9825a'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Product Category Distribution',
          font: { size: 18 }
        }
      }
    }
  });
});
