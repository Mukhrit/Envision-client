export const streakoptions = {
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
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: 'rgba(225,78,202,0.1)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          suggestedMin: 0,

          padding: 20,
          fontColor: '#9e9e9e',
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: 'rgba(225,78,202,0.1)',
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

export const Streak = (streakarr) => (canvas) => {
  let ctx = canvas.getContext('2d');

  let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
  gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
  gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
  let contestnames = ['Codechef', 'Codeforces', 'Atcoder'];
  let finalcontestnames = [];
  let c = 0;
  for (let i = 0; i < streakarr.length - 1; i++) {
    finalcontestnames.push(contestnames[c++]);
  }
  return {
    labels: finalcontestnames,
    datasets: [
      {
        label: 'Streak',
        fill: true,
        backgroundColor: gradientStroke,
        hoverBackgroundColor: gradientStroke,
        borderColor: '#d048b6',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: streakarr,
      },
    ],
  };
};
