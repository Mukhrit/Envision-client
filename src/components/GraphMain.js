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
import { codechefgraph, optioncodechef } from "./graphutils/codechefgraph";
import { codeforcesgraph, optioncodeforces } from "./graphutils/codeforecsgraph";
import { atcodergraph, optionatcoder } from "./graphutils/atcodergraph";
export default class GraphMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: this.props.codechef ? "codechef" : this.props.codeforces? "codeforces":"atcoder"
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
                        {this.props.codechef ? (
                          <Button
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "codechef",
                            })}
                            color="info"
                            id="0"
                            size="sm"
                            onClick={() => this.setBgChartData("codechef")}
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
                              <i
                                class="iconify"
                                data-icon="simple-icons:codechef"
                              ></i>
                            </span>
                          </Button>
                        ) : null}
                        {this.props.codeforces ? (
                          <Button
                            color="info"
                            id="1"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "codeforces",
                            })}
                            onClick={() => this.setBgChartData("codeforces")}
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
                              <i
                                class="iconify"
                                data-icon="simple-icons:codeforces"
                                data-inline="false"
                              ></i>
                            </span>
                          </Button>
                        ) : null}
                        {this.props.atcoder ? (
                          <Button
                            color="info"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "atcoder",
                            })}
                            onClick={() => this.setBgChartData("atcoder")}
                          >
                            <input
                              className="d-none"
                              name="options"
                              type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              At Coder
                            </span>
                            <span className="d-block d-sm-none">
                              <i class="iconify" data-inline="false">
                                <img src="https://o.remove.bg/downloads/fe55331d-b276-4110-b429-238f1b80378f/atcoder-removebg-preview.png" />
                              </i>
                            </span>
                          </Button>
                        ) : null}
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.bigChartData === "codechef" ? (
                      <Line
                        data={codechefgraph(this.props.codechef)}
                        options={optioncodechef}
                      />
                    ) : this.state.bigChartData === "codeforces" ? (
                      <Line
                        data={codeforcesgraph(this.props.codeforces)}
                        options={optioncodeforces}
                      />
                    ) : (
                      <Line
                        data={atcodergraph(this.props.atcoder)}
                        options={optionatcoder}
                      />
                    )}
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
