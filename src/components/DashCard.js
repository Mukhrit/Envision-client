import React from 'react';
import '../css/dashcard1.scss';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

class DashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('here');
    const user = this.props.user;
    let diffchef =
      parseInt(
        user.codechef_id.allcontests[user.codechef_id.allcontests.length - 1]
          .rating
      ) -
      parseInt(
        user.codechef_id.allcontests[user.codechef_id.allcontests.length - 2]
          .rating
      );
    let diffcf = user.codeforces_id.allcontests[0][4];

    console.log(diffchef);
    if (diffchef >= 0) {
      diffchef = '+' + String(diffchef);
    } else {
      diffchef = '-' + String(diffchef);
    }

    console.log(user);
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
                        ></span>
                      </i>
                    </div>
                  </div>
                  <div class='col-7'>
                    <div class='numbers'>
                      <p class='card-category'>{diffchef}</p>
                      <h3 class='card-title'>
                        Rating : {user.codechef_id.rating}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card-footer'>
                <hr />
                <div class='stats'>
                  <span
                    class='iconify'
                    data-icon='simple-icons:codechef'
                    data-inline='false'
                    style={{ marginBottom: '4px' }}
                  ></span>{' '}
                  Codechef
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
                      <p class='card-category'>{diffcf}</p>
                      <h3 class='card-title'>
                        Rating : {user.codeforces_id.rating}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card-footer'>
                <hr />
                <div class='stats'>
                  <span
                    class='iconify'
                    data-icon='simple-icons:codeforces'
                    data-inline='false'
                    style={{ marginBottom: '3px' }}
                  ></span>{' '}
                  Codeforces
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
                          data-icon='mdi:unicorn-variant'
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
                  <span
                    class='iconify'
                    data-icon='mdi:unicorn-variant'
                    data-inline='false'
                    style={{ marginRight: '5px', marginBottom: '2px' }}
                  ></span>
                  Atcoder
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
