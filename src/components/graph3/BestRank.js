export const BestRankoptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest',
    callbacks: {
      label: function (tooltipItem, data) {
        return (
          'Rating: ' +
          data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
        );
      },
      afterLabel: function (tooltipItem, data) {
        return (
          'Contest: ' +
          data.datasets[tooltipItem.datasetIndex].data1[tooltipItem.index]
        );
      },
    },
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          fontColor: '#9e9e9e',
        },
      },
    ],

    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(0,242,195,0.1)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          fontColor: '#9e9e9e',
        },
      },
    ],
  },
};

export const BestRank = (atarr, contestarr, name) => (canvas) => {
  let ctx = canvas.getContext('2d');

  let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
  gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
  gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

  return {
    labels: name,
    datasets: [
      {
        label: 'here',
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: atarr,
        data1: contestarr,
      },
    ],
  };
};
