export const ratingoptions = {
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
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          fontColor: '#9a9a9a',
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.1)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          fontColor: '#9a9a9a',
        },
      },
    ],
  },
};

export const MaxRating = (ratingarr) => (canvas) => {
  let ctx = canvas.getContext('2d');

  let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
  gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
  gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
  let contestnames = ['Codechef', 'Codeforces', 'Atcoder'];
  let finalcontestnames = [];
  let c = 0;

  for (let i = 0; i < ratingarr.length - 1; i++) {
    finalcontestnames.push(contestnames[c++]);
  }

  return {
    labels: finalcontestnames,
    datasets: [
      {
        label: 'Rating',
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#1f8ef1',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#1f8ef1',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#1f8ef1',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: ratingarr,
      },
    ],
  };
};
