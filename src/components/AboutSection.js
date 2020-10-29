import React, { Component } from 'react';
import '../css/aboutsection.css';
import 'boxicons';

export class About extends Component {
  render() {
    return (
      <div>
        <section id='about' class='about'>
          <div class='container-fluid'>
            <div class='row'>
              <div
                class='col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch'
                data-aos='fade-right'
              >
                <img
                  src={require('../assetes/img/Group 10.png')}
                  alt='...'
                ></img>
              </div>

              <div
                class='col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5'
                data-aos='fade-left'
              >
                <h3>
                  We provide you the best way to excel in the field of
                  Competitive Progamming.
                </h3>

                <div class='icon-box' data-aos='zoom-in' data-aos-delay='100'>
                  <div class='icon'>
                    <i className='fa fa-trophy'></i>
                  </div>
                  <h4 class='title' style={{ color: 'black' }}>
                    <a disable='true'>Your talent</a>
                  </h4>
                  <p class='description'>
                    Show case others what milestones you have achieved in the
                    competitive programming world.
                  </p>
                </div>

                <div class='icon-box' data-aos='zoom-in' data-aos-delay='200'>
                  <div class='icon'>
                    <i className='fa fa-code'></i>
                  </div>
                  <h4 class='title' style={{ color: 'black' }}>
                    <a href='https://codeforces.com/' target='__blank'>
                      Codeforces,{' '}
                    </a>
                    <a href='https://www.codechef.com/' target='__blank'>
                      Codechef,{' '}
                    </a>
                    <a href='https://atcoder.jp/' target='__blank'>
                      Atcoder
                    </a>
                  </h4>
                  <p class='description'>
                    We provide all your statistics from leading competitive
                    programming websites.
                  </p>
                </div>

                <div class='icon-box' data-aos='zoom-in' data-aos-delay='300'>
                  <div class='icon'>
                    <i class='bx bx-atom'></i>
                  </div>
                  <h4 class='title'>
                    <a disabled='true'>Upcoming and Live Contest</a>
                  </h4>
                  <p class='description'>
                    We will provide you with all upcoming contests with their
                    respective details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
