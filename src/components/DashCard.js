import React from 'react';
import '../css/dashcard1.scss';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

class DashCard extends React.Component {
  render() {
    return (
      <div className='cardparent'>
        <div className='row'>
          <div class='col-md-6 col-lg-3'>
            <div class='card-stats card'>
              <div class='card-body'>
                <div class='row'>
                  <div class='col-5'>
                    <div class='info-icon text-center icon-warning'>
                      <i class='tim-icons icon-chat-33 '>
                        {' '}
                        <span
                          class='iconify'
                          data-icon='simple-icons:codechef'
                          data-inline='false'
                          style={{}}
                        ></span>
                      </i>
                    </div>
                  </div>
                  <div class='col-7'>
                    <div class='numbers'>
                      <p class='card-category'>Number</p>
                      <h3 class='card-title'>150GB</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card-footer'>
                <hr />
                <div class='stats'>
                  <i class='tim-icons icon-refresh-01'></i> Codechef
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6 col-lg-3'>
            <div class='card-stats card'>
              <div class='card-body'>
                <div class='row'>
                  <div class='col-5'>
                    <div class='info-icon text-center icon-warning'>
                      <i class='tim-icons icon-chat-33'>
                        <span
                          class='iconify'
                          data-icon='simple-icons:codeforces'
                          data-inline='false'
                        ></span>
                      </i>
                    </div>
                  </div>
                  <div class='col-7'>
                    <div class='numbers'>
                      <p class='card-category'>Number</p>
                      <h3 class='card-title'>150GB</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card-footer'>
                <hr />
                <div class='stats'>
                  <i class='tim-icons icon-refresh-01'></i> Codeforces
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-6 col-lg-3'>
            <div class='card-stats card'>
              <div class='card-body'>
                <div class='row'>
                  <div class='col-5'>
                    <div class='info-icon text-center icon-warning'>
                      <i class='tim-icons icon-chat-33'>
                        <span
                          class='iconify'
                          data-icon='cib:leetcode'
                          data-inline='false'
                        ></span>
                      </i>
                    </div>
                  </div>
                  <div class='col-7'>
                    <div class='numbers'>
                      <p class='card-category'>Number</p>
                      <h3 class='card-title'>150GB</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card-footer'>
                <hr />
                <div class='stats'>
                  <i class='tim-icons icon-refresh-01'></i> Leetcode
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashCard;
