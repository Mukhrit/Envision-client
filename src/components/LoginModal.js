/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/login.css';
import { auth, provider } from "../firebase";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.login = this.login.bind(this);
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.signin = this.signin.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  logout() {
    this.props.logoutUser();
    this.toggle();
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
      this.toggle()
  }
  render() {
    return (
      <div>
        <Button onClick={this.toggle}>
          <span>Login/Signup</span>
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Lets Kick In!</ModalHeader>
          <ModalBody>
            <div className="d-flex justify-content-center button-google">
              <Button
               className="  " onClick={this.signin}>
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  className="img-fluid"
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
  );
}
}
export default LoginModal;


