import React, { Component } from "react";
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { codechef, codeforces } from "../test-source";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
let option = {
  data1: {
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
  },
  data2: {
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
  },
};

let chartExample1 = {
  data1: (canvas) => {
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
  },
  data2: (canvas) => {
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
    };
  },
  data3: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          label: "My First dataset",
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
          data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
        },
      ],
    };
  },
};

export default class GraphMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
    };
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    });
  };
  render() {
    return (
      <div>
        <div className="content graph-main">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Overall Rating</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1",
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                           Codechef
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data2",
                          })}
                          onClick={() => this.setBgChartData("data2")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Codeforces
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data3",
                          })}
                          onClick={() => this.setBgChartData("data3")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Sessions
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={option[this.state.bigChartData]}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
