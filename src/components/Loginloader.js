import React, { Component } from 'react';
import { Button } from 'reactstrap';
//import { Redirect } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import LoginModal from './LoginModal';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const responseGoogle = (response) => {
      var res = response.profileObj;
      console.log(res);
      this.props.loginUser(res);
      //   this.signup(response);
    };
    return (
      <div>
        <GoogleLogin
          clientId='251356479099-8nu01f24fennvd2htamjmf541br3tedm.apps.googleusercontent.com'
          buttonText='Login with Google'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        ></GoogleLogin>

        {/* <a href="http://localhost:5000/google/signin">
          <Button color="primary">primary</Button>{" "}
        </a> */}
      </div>
    );
  }
}

export default Login;
