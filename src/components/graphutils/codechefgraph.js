export const optioncodechef = {
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
          if (tooltipItem.index === 0) {
            return (
              "Ranking: " +
              data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
            );
          }
          if (
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] -
              data.datasets[tooltipItem.datasetIndex].data[
                tooltipItem.index - 1
              ] >
            0
          ) {
            return (
              "Ranking: " +
              data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] +
              " (" +
              `+${
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ] -
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index - 1
                ]
              })`
            );
          } else {
            return (
              "Ranking: " +
              data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] +
              " (" +
              `${
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ] -
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index - 1
                ]
              })`
            );
          }
        },

        label: function (tooltipItem, data) {
          return (
            "Contest: " +
            data.datasets[tooltipItem.datasetIndex].data1[tooltipItem.index]
          );
        },
        afterLabel: function (tooltipItem, data) {
          return (
            "Rank: " +
            data.datasets[tooltipItem.datasetIndex].data3[tooltipItem.index]
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

export const codechefgraph=(codechef)=>(canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "#17252a");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: codechef.allcontests.map((item) => item.code),
      datasets: [
        {
          beforeLabel: "Contest",
          label: "Rating",
          afterLabel: "Contest",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#3acabb",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#3acabb",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: codechef.allcontests.map(
            (item) => item.color
          ),
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: codechef.allcontests.map((item) => item.rating),
          data1: codechef.allcontests.map((item) => item.name),
          data3: codechef.allcontests.map((item) => item.rank),
        },
      ],
    };
};
