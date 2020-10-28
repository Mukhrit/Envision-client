import React, { Component } from 'react';
import '../css/features.css';

export class Features extends Component {
  render() {
    return (
      <div>
        <section id="features" class="features mb-5">
          <div class="container">
            <div
              class="section-title"
              data-aos="fade-up"
              style={{ color: "#17252a" }}
            >
              <h2 style={{ color: "#17252a" }}>Features</h2>
              <p style={{ color: "#17252a" }}>Check The Features</p>
            </div>

            <div class="row" data-aos="fade-left">
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
                  <i
                    class="ri-bar-chart-box-line"
                    style={{ color: "#5578ff" }}
                  ></i>
                  <h3>
                    <a>Accurate Data</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="150">
                  <i
                    class="fa fa-fast-forward"
                    style={{ color: "#e80368" }}
                  ></i>
                  <h3>
                    <a>Dynamic report</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="350">
                  <i
                    class="ri-file-list-3-line"
                    style={{ color: "#11dbcf" }}
                  ></i>
                  <h3>
                    <a>Overall rating graph</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="400">
                  <i class="fa fa-star " style={{ color: "#4233ff" }}></i>
                  <h3>
                    <a >Maximum rating over all websites</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="450">
                  <i class="fa fa-bar-chart" style={{ color: "#b2904f" }}></i>
                  <h3>
                    <a>Streaks!</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="500">
                  <i class="fa fa-file-code-o" style={{ color: "#b20969" }}></i>
                  <h3>
                    <a>Total Contest</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="550">
                  <i class="fa fa-arrow-up" style={{ color: "#ff5828" }}></i>
                  <h3>
                    <a>Maximum rank in a contest</a>
                  </h3>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mt-4">
                <div class="icon-box" data-aos="zoom-in" data-aos-delay="600">
                  <i class="fa fa-search" style={{ color: "#29cc61" }}></i>
                  <h3>
                    <a >Search Your friends</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
