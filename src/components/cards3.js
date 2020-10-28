import React from 'react';
import classNames from 'classnames';

import { Line, Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardBody, CardTitle, Col } from 'reactstrap';
import { chartExample3, chartExample4 } from '../variables/charts.js';
import { MaxRating, ratingoptions } from './graph3/MaximumRating';
import { Streak, streakoptions } from './graph3/Streak';
import { BestRank, BestRankoptions } from './graph3/BestRank';

class Card3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('here');
    console.log(this.props);
    //Maximum Rating Section
    function number(text) {
      var txt = text;
      var numb = txt.match(/\d/g);
      numb = numb.join('');
      return numb;
    }
    function is_numeric(str) {
      return /^\d+$/.test(str);
    }
    const user = this.props.user;

    let ratingarr = [];
    let ccrating = 0,
      cfrating = 0,
      atrating = '';

    ccrating = number(user.codechef_id.highest_rating);
    cfrating = number(user.codeforces_id.highest_rating);

    if (user.atcoder_id.data !== null) {
      let c = 0;
      for (let i = 0; i <= user.atcoder_id.data[2].length; i++) {
        if (c > 0 && user.atcoder_id.data[2].charAt(i) === ' ') {
          break;
        }
        if (is_numeric(user.atcoder_id.data[2].charAt(i))) {
          c++;
          atrating += user.atcoder_id.data[2].charAt(i);
        }
      }
      atrating = parseInt(atrating);
    }
    if (atrating == '') atrating = 0;
    ratingarr.push(ccrating);
    ratingarr.push(cfrating);
    ratingarr.push(atrating);

    //Streak Section
    let ccstreak = 0,
      cfstreak = 0,
      atstreak = 0;

    let streakarr = [];
    let ct = 0,
      mx = 0;
    if (user.codechef_id !== '') {
      //codechef
      ct = 0;
      mx = 0;
      if (user.codechef_id.allcontests.length === 1) {
        if (user.codechef_id.allcontests[0].rating > 0) {
          ccstreak = 1;
        }
      } else {
        for (let i = 1; i < user.codechef_id.allcontests.length - 1; i++) {
          if (
            parseInt(user.codechef_id.allcontests[i].rating) -
              parseInt(user.codechef_id.allcontests[i - 1].rating) >
            0
          ) {
            ct++;
            if (ct > mx) {
              mx = ct;
            }
          } else {
            ct = 0;
          }
        }
      }
      ccstreak = mx;
    }
    if (user.codeforces_id !== '') {
      //codeforces
      ct = 0;
      mx = 0;
      for (let i = 0; i < user.codeforces_id.allcontests.length - 1; i++) {
        if (user.codeforces_id.allcontests[i][4][0] === '+') {
          ct++;
          if (ct > mx) {
            mx = ct;
          }
        } else {
          ct = 0;
        }
      }
      cfstreak = mx;
    }
    if (user.atcoder_id.data !== null) {
      //atcoder
      ct = 0;
      mx = 0;
      for (let i = 0; i < user.atcoder_id.recentSubmission.length - 1; i++) {
        if (
          user.atcoder_id.recentSubmission[i].NewRating -
            user.atcoder_id.recentSubmission[i].OldRating >
          0
        ) {
          ct++;
          if (ct > mx) {
            mx = ct;
          }
        } else {
          ct = 0;
        }
      }
      atstreak = mx;
    }

    streakarr.push(ccstreak);
    streakarr.push(cfstreak);
    streakarr.push(atstreak);

    //Best Rank

    let ccrank = 0,
      cfrank = 0,
      atrank = 0;

    let rankarr = [];
    let contestarr = [];
    let rank = Number.MAX_VALUE;

    let cccontest = '',
      cfcontest = '',
      atcontest = '';
    if (user.codechef_id !== '' && user.codechef_id.allcontests.length !== 0) {
      //Codechef
      for (let i = 0; i < user.codechef_id.allcontests.length - 1; i++) {
        if (parseInt(user.codechef_id.allcontests[i].rank) < rank) {
          rank = parseInt(user.codechef_id.allcontests[i].rank);
          cccontest = user.codechef_id.allcontests[i].name;
        }
      }
      ccrank = rank;
    }
    if (
      user.codeforces_id !== '' &&
      user.codeforces_id.allcontests.length !== 0
    ) {
      //Codeforces
      rank = Number.MAX_VALUE;
      for (let i = 0; i < user.codeforces_id.allcontests.length - 1; i++) {
        if (parseInt(user.codeforces_id.allcontests[i][2]) < rank) {
          rank = parseInt(user.codeforces_id.allcontests[i][2]);
          cfcontest = user.codeforces_id.allcontests[i][1];
        }
      }
      cfrank = rank;
    }
    if (
      user.atcoder_id.data !== null &&
      user.atcoder_id.recentSubmission.length !== 0
    ) {
      //Atcoder
      rank = Number.MAX_VALUE;
      for (let i = 0; i < user.atcoder_id.recentSubmission.length - 1; i++) {
        if (parseInt(user.atcoder_id.recentSubmission[i].Place) < rank) {
          rank = parseInt(user.atcoder_id.recentSubmission[i].Place);
          atcontest = user.atcoder_id.recentSubmission[i].ContestName;
        }
      }
      atrank = rank;
    }

    rankarr.push(ccrank);
    rankarr.push(cfrank);
    rankarr.push(atrank);
    contestarr.push(cccontest);
    contestarr.push(cfcontest);
    contestarr.push(atcontest);

    return (
      <div>
        <div className='row'>
          <Col lg='4'>
            <Card className='card-chart'>
              <CardHeader>
                <h5 className='card-category'>Envision</h5>
                <CardTitle tag='h3'>
                  <i className='tim-icons icon-bell-55 text-info' /> Highest
                  Rating!
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className='chart-area'>
                  <Line data={MaxRating(ratingarr)} options={ratingoptions} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg='4'>
            <Card className='card-chart'>
              <CardHeader>
                <h5 className='card-category'>Envision</h5>
                <CardTitle tag='h3'>
                  <i className='tim-icons icon-delivery-fast text-primary' />{' '}
                  Streaks!
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className='chart-area'>
                  <Bar data={Streak(streakarr)} options={streakoptions} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg='4'>
            <Card className='card-chart'>
              <CardHeader>
                <h5 className='card-category'>Envision</h5>
                <CardTitle tag='h3'>
                  <i className='tim-icons icon-send text-success' /> Best Rank!
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className='chart-area'>
                  <Line
                    data={BestRank(rankarr, contestarr)}
                    options={BestRankoptions}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </div>
    );
  }
}

export default Card3;
