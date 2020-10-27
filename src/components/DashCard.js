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
    const user = this.props.user;

    console.log(user);

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

    let atcoderdiff =
      user.atcoder_id.recentSubmission[
        user.atcoder_id.recentSubmission.length - 1
      ].NewRating -
      user.atcoder_id.recentSubmission[
        user.atcoder_id.recentSubmission.length - 1
      ].OldRating;

    let chefcol = '#7CFC00';
    let forcecol = '#7CFC00';
    let atcodercol = '#7CFC00';

    if (diffchef >= 0) {
      diffchef = '+' + String(diffchef);
    } else {
      chefcol = '#FF3A3A';
    }

    if (diffcf < 0) {
      forcecol = '#FF3A3A';
    }

    if (atcoderdiff >= 0) {
      atcoderdiff = '+' + String(atcoderdiff);
    } else {
      atcodercol = '#FF3A3A';
    }

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
                      <p
                        class='card-category'
                        style={{ fontSize: '27px', color: chefcol }}
                      >
                        {diffchef}
                      </p>
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
                      <p
                        class='card-category'
                        style={{ fontSize: '27px', color: forcecol }}
                      >
                        {diffcf}
                      </p>
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
                      <p
                        class='card-category'
                        style={{ fontSize: '27px', color: atcodercol }}
                      >
                        {atcoderdiff}
                      </p>
                      <h3 class='card-title'>
                        Rating :{user.atcoder_id.data[1].substring(6)}
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
