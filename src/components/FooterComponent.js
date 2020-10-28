import React, { Component } from 'react';
import '../css/Footer.css';

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer id='footer'>
          <div class='footer-top'>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-12 col-md-12 d-flex justify-content-center'>
                  <div class='footer-info'>
                    <h3>Envision</h3>
                    <p class='pb-3'>
                      <em>
                      We are here for you
                      </em>
                    </p>
                    {/* <p>
                      A108 Adam Street NY 535022, USA
                      <strong>Phone:</strong> +1 5589 55488 55
                      <strong>Email:</strong> info@example.com
                    </p> */}
                    {/* <div class='social-links mt-3'>
                      <a href='#' class='twitter'>
                        <i class='bx bxl-twitter'></i>
                      </a>
                      <a href='#' class='facebook'>
                        <i class='bx bxl-facebook'></i>
                      </a>
                      <a href='#' class='instagram'>
                        <i class='bx bxl-instagram'></i>
                      </a>
                      <a href='#' class='google-plus'>
                        <i class='bx bxl-skype'></i>
                      </a>
                      <a href='#' class='linkedin'>
                        <i class='bx bxl-linkedin'></i>
                      </a>
                    </div> */}
                  </div>
                </div>

                {/* <div class='col-lg-2 col-md-6 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class='bx bx-chevron-right'></i> <a href='#'>Home</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>About us</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Services</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Terms of service</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Privacy policy</a>
                    </li>
                  </ul>
                </div> */}

                {/* <div class='col-lg-2 col-md-6 footer-links'>
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Web Design</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Web Development</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Product Management</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Marketing</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Graphic Design</a>
                    </li>
                  </ul>
                </div> */}

                {/* <div class='col-lg-4 col-md-6 footer-newsletter'>
                  <h4>Our Newsletter</h4>
                  <p>
                    Tamen quem nulla quae legam multos aute sint culpa legam
                    noster magna
                  </p>
                  <form action='' method='post'>
                    <input type='email' name='email' />
                    <input type='submit' value='Subscribe' />
                  </form>
                </div> */}
              </div>
            </div>
          </div>

          <div class='container'>
            <div class='copyright'>
              &copy; Copyright{' '}
              <strong>
                <span>Envision</span>
              </strong>
              . All Rights Reserved
            </div>
            {/* <div class='credits'>Designed by Rakshit and Mukhrit With ❤️ </div> */}
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
