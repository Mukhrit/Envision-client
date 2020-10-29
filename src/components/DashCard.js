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
    let diffchef = 0,
      diffcf = 0,
      atcoderdiff = 0;

    //latest ratings ups and downs
    if (
      user.codechef_handle !== '' &&
      user.codechef_id.allcontests.length !== 0
    ) {
      diffchef =
        parseInt(
          user.codechef_id.allcontests[user.codechef_id.allcontests.length - 1]
            .rating
        ) -
        parseInt(
          user.codechef_id.allcontests[user.codechef_id.allcontests.length - 2]
            .rating
        );
    }
    if (
      user.codeforces_handle !== '' &&
      user.codeforces_id.allcontests.length !== 0
    ) {
      diffcf = parseInt(user.codeforces_id.allcontests[0][4]);
    }
    if (
      user.atcoder_handle !== '' &&
      user.atcoder_id.recentSubmission !== null
    ) {
      if (user.atcoder_id.recentSubmission) {
        atcoderdiff =
          parseInt(
            user.atcoder_id.recentSubmission[
              user.atcoder_id.recentSubmission.length - 1
            ].NewRating
          ) -
          parseInt(
            user.atcoder_id.recentSubmission[
              user.atcoder_id.recentSubmission.length - 1
            ].OldRating
          );
      } else {
        atcoderdiff = 0;
      }
    }

    //colors for positive and negative
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
    //rating colors

    let atcoderranking = 0,
      codechefrating = 0,
      codeforcesrating = 0;

    if (user.atcoder_handle !== '' && user.atcoder_id.data !== null) {
      atcoderranking = parseInt(user.atcoder_id.data[1].substring(6));
    } else {
      atcoderranking = 0;
    }
    if (user.codechef_handle !== '')
      codechefrating = parseInt(user.codechef_id.rating);
    if (user.codeforces_handle !== '')
      codeforcesrating = parseInt(user.codeforces_id.rating);

    let atcodercolor = '';
    let atcodercolorname = '';

    if (atcoderranking >= 0 && atcoderranking <= 399) {
      atcodercolor = 'gray';
      atcodercolorname = 'Gray';
    } else if (atcoderranking >= 400 && atcoderranking <= 799) {
      atcodercolor = 'brown';
      atcodercolorname = 'Brown';
    } else if (atcoderranking >= 800 && atcoderranking <= 1199) {
      atcodercolor = 'limegreen';
      atcodercolorname = 'Green';
    } else if (atcoderranking >= 1200 && atcoderranking <= 1599) {
      atcodercolor = 'cyan';
      atcodercolorname = 'Cyan';
    } else if (atcoderranking >= 1600 && atcoderranking <= 1999) {
      atcodercolor = 'blue';
      atcodercolorname = 'Blue';
    } else if (atcoderranking >= 2000 && atcoderranking <= 2399) {
      atcodercolor = 'yellow';
      atcodercolorname = 'Yellow';
    } else if (atcoderranking >= 2400 && atcoderranking <= 2799) {
      atcodercolor = 'orange';
      atcodercolorname = 'Orange';
    } else if (atcoderranking >= 2800 && atcoderranking <= 3199) {
      atcodercolor = 'red';
      atcodercolorname = 'Red';
    }

    let codechefcolor = '';

    if (codechefrating >= 0 && codechefrating <= 1399) {
      codechefcolor = 'rgb(102, 102, 102)';
    } else if (codechefrating >= 1400 && codechefrating <= 1599) {
      codechefcolor = 'rgb(30, 125, 34)';
    } else if (codechefrating >= 1600 && codechefrating <= 1799) {
      codechefcolor = 'rgb(76, 127, 229)';
    } else if (codechefrating >= 1800 && codechefrating <= 1999) {
      codechefcolor = 'rgb(129, 91, 140)';
    } else if (codechefrating >= 2000 && codechefrating <= 2199) {
      codechefcolor = 'rgb(255, 216, 25)';
    } else if (codechefrating >= 2200 && codechefrating <= 2499) {
      codechefcolor = 'rgb(255, 152, 25)';
    } else if (codechefrating >= 2500) {
      codechefcolor = 'rgb(233, 26, 52)';
    }

    let codeforcescolor = '';

    if (codeforcesrating <= 1199) {
      codeforcescolor = 'gray';
    } else if (codeforcesrating >= 1200 && codeforcesrating <= 1399) {
      codeforcescolor = '	#32CD32';
    } else if (codeforcesrating >= 1400 && codeforcesrating <= 1599) {
      codeforcescolor = 'cyan';
    } else if (codeforcesrating >= 1600 && codeforcesrating <= 1899) {
      codeforcescolor = 'blue';
    } else if (codeforcesrating >= 1900 && codeforcesrating <= 2199) {
      codeforcescolor = 'violet';
    } else if (codeforcesrating >= 2200 && codeforcesrating <= 2299) {
      codeforcescolor = 'orange';
    } else if (codeforcescolor >= 2300 && codeforcesrating <= 2399) {
      codeforcescolor = 'orange';
    } else if (codeforcescolor >= 2400 && codeforcesrating <= 2599) {
      codeforcescolor = 'red';
    } else if (codeforcescolor >= 2600 && codeforcesrating <= 2899) {
      codeforcescolor = 'red';
    } else if (codeforcescolor >= 2900) {
      codeforcescolor = 'red';
    }

    return (
      <div className='cardparent'>
        <div className='row justify-content-center'>
          {user.codechef_handle !== '' && (
            <div class='col-lg-3'>
              <div class='card-stats card'>
                <div class='card-body'>
                  <div class='row'>
                    <div class='col-12'>
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
                  </div>
                  <div className='row' style={{ justifyContent: 'right' }}>
                    <div class='col-12 '>
                      <div class='numbers'>
                        <h3 class='card-title'>
                          Rating :{' '}
                          <span
                            style={{
                              color: 'white',
                              fontSize: '30px',
                              backgroundColor: codechefcolor,
                              padding: '1px',
                              fontWeight: 'bolder',
                              marginLeft: '10px',
                            }}
                          >
                            {user.codechef_id.star}
                          </span>
                          <span> {user.codechef_id.rating}</span>
                        </h3>

                        <p
                          class='card-category'
                          style={{ fontSize: '27px', color: chefcol }}
                        >
                          {diffchef}
                        </p>
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
          )}
          {user.codeforces_handle !== '' && (
            <div class='col-lg-3'>
              <div class='card-stats card'>
                <div class='card-body'>
                  <div class='row'>
                    <div class='col-12'>
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
                  </div>
                  <div className='row' style={{ justifyContent: 'right' }}>
                    <div class='col-12'>
                      <div class='numbers'>
                        <h3 class='card-title'>
                          Rating :{' '}
                          <span
                            style={{
                              marginRight: '10px',
                              color: codeforcescolor,
                              fontWeight: 'bolder',
                              padding: '5px',
                            }}
                          >
                            {user.codeforces_id.rating_stage}
                          </span>
                          {user.codeforces_id.rating}
                        </h3>

                        <p
                          class='card-category'
                          style={{ fontSize: '27px', color: forcecol }}
                        >
                          {diffcf}
                        </p>
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
          )}
          {user.atcoder_handle !== '' && (
            <div class='col-lg-3'>
              <div class='card-stats card'>
                <div class='card-body'>
                  <div class='row'>
                    <div class='col-12'>
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
                  </div>
                  <div className='row' style={{ justifyContent: 'right' }}>
                    <div class='col-12'>
                      <div class='numbers'>
                        <h3 class='card-title'>
                          Rating :
                          <span
                            style={{
                              marginLeft: '10px',
                              color: atcodercolor,
                              fontWeight: 'bolder',
                              padding: '5px',
                            }}
                          >
                            {atcodercolorname}
                          </span>
                          {user.atcoder_id.data
                            ? user.atcoder_id.data[1].substring(6)
                            : 0}
                        </h3>

                        <p
                          class='card-category'
                          style={{ fontSize: '27px', color: atcodercol }}
                        >
                          {atcoderdiff}
                        </p>
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
          )}
        </div>
      </div>
    );
  }
}

export default DashCard;
