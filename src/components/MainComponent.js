import React, { Component } from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import { loginUser, logoutUser } from '../redux/ActionCreater';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Filldetails from './FilldetailComponent';
import Footer from './FooterComponent';
import Login from './Loginloader';
import LoginModal from './LoginModal';
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
});
class Main extends Component {
  render() {
    const Loginload = ({ match }) => {
      return <Login loginUser={this.props.loginUser} auth={this.props.auth} />;
    };
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/loginmodal'
            component={() => (
              <LoginModal
                buttonLabel='open modal'
                loginUser={this.props.loginUser}
                logoutUser={this.props.logoutUser}
                auth={this.props.auth}
              />
            )}
          />
          <Route exact path='/home' component={() => <Home />} />
          <Route exact path='/filldetails' component={() => <Filldetails />} />
          <Route exact path='/loginload' component={Loginload} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
