import React, { Component } from 'react';
import '../css/home.css';
import './AboutSection';
import About from './AboutSection';
import Features from './Features';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { auth, provider } from "../firebase";
import { Link } from 'react-router-dom';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.login = this.login.bind(this);
    this.toggle = this.toggle.bind(this);
    this.signin = this.signin.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  login() {
    this.toggle();
  }
  signin() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.additionalUserInfo.profile);
        this.props.loginUser(result.additionalUserInfo.profile);
      })
      .catch((error) => alert(error.message));
    this.toggle();
  }

  render() {
    return (
      <div className="home_div">
        <section id="hero">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div data-aos="zoom-out">
                  <h1>
                    Anaylze your Competitive Programming with
                    <span>Envision</span>
                  </h1>
                  <h2>
                    We are here to showcase your talent and anaylze you cp with
                    your friends
                  </h2>
                  {this.props.auth.isAuthenticated === false ? (
                    <div class="text-center text-lg-left">
                      <a onClick={this.toggle} class="btn-get-started btn">
                        Get Started
                      </a>
                    </div>
                  ) : (
                    <div class="text-center text-lg-left">
                      <Link
                        to={(location) =>
                          `dashboard/${this.props.auth.user.username}`
                        }
                        class="btn-get-started btn"
                      >
                        Your Profile
                      </Link>
                    </div>
                  )}
                  <div>
                    <Modal
                      isOpen={this.state.modal}
                      toggle={this.toggle}
                      className={this.props.className}
                    >
                      <ModalHeader toggle={this.toggle}>
                        Lets Kick In!
                      </ModalHeader>
                      <ModalBody>
                        <div className="d-flex justify-content-center">
                          <Button
                            color="link"
                            className="button-google "
                            onClick={this.signin}
                          >
                            <img
                              src="https://img.icons8.com/color/16/000000/google-logo.png"
                              className="img-fluid"
                              alt="Google"
                            ></img>{" "}
                            Sign in /Login via Google
                          </Button>
                        </div>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="" onClick={this.toggle}>
                          Close
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-5 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img
                  src={require("../assetes/img/Group 8.png")}
                  class="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>

          <svg
            class="hero-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="wave1">
              <use
                xlinkHref="#wave-path"
                x="50"
                y="3"
                fill="rgba(255,255,255, .1)"
              />
            </g>
            <g class="wave2">
              <use
                xlinkHref="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .2)"
              />
            </g>
            <g class="wave3">
              <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
            </g>
          </svg>
        </section>
        <About />
        <Features />
      </div>
    );
  }
}

export default Home;
