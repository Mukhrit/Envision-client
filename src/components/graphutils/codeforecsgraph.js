export const optioncodeforces = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    callbacks: {
      title: function (tooltipItem, data) {
        return data.labels[tooltipItem[0].index];
      },

      beforeLabel: function (tooltipItem, data) {
        return (
          "Rating: " +
          data.datasets[tooltipItem.datasetIndex].data1[tooltipItem.index]
        );
      },

      label: function (tooltipItem, data) {
        return (
          "Contest: " +
          data.datasets[tooltipItem.datasetIndex].data3[tooltipItem.index]
        );
      },
      afterLabel: function (tooltipItem, data) {
        return (
          "Rank: " +
          data.datasets[tooltipItem.datasetIndex].data4[tooltipItem.index]
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
          color: "",
          zeroLineColor: "transparent",
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
  },
};
export const codeforcesgraph=(codeforces)=>(canvas)=>{
    let allcontests = codeforces.allcontests.slice(0).reverse();

    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: allcontests.map((item) => item[0]),
      datasets: [
        {
          label: "Rating",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#3acabb",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#3acabb",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#3acabb",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: allcontests.map((item) => item[5]),
          data1: allcontests.map((item) => `${item[5]}(${item[4]})`),
          data3: allcontests.map((item) => item[1]),
          data4: allcontests.map((item) => item[2]),
        },
      ],
    }
}