import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GoogleLogin from 'react-google-login';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const responseGoogle = (response) => {
      var res = response.profileObj;
      console.log(res);
      this.props.loginUser(res);
    };
    return (
      <div>
        <Button color='danger' onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Lets Kick In!</ModalHeader>
          {this.props.auth.isAuthenticated === true &&
          this.props.auth.user.username !== null ? (
            <ModalBody style={{ marginLeft: '145px' }}>
              <GoogleLogin
                clientId='251356479099-8nu01f24fennvd2htamjmf541br3tedm.apps.googleusercontent.com'
                buttonText='Login with Google'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              ></GoogleLogin>
            </ModalBody>
          ) : (
            <ModalBody style={{ marginLeft: '145px' }}>
              <Button color='danger' onClick={() => this.props.logoutUser()}>
                Logout
              </Button>
            </ModalBody>
          )}

          <ModalFooter>
            <Button color='secondary' onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
