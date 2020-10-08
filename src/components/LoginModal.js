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
    this.logout=this.logout.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  logout(){
    this.props.logoutUser();
    this.toggle();
  }

  render() {
    const responseGoogle = (response) => {
      var res = response.profileObj;
      console.log(res);
      this.props.loginUser(res);
      this.toggle();
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
          {this.props.auth.isAuthenticated === false? (
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
              <Button color='danger' onClick={() => this.logout()}>
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
