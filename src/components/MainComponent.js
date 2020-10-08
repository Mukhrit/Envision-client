import React, { Component } from "react";
import { withRouter, Switch, Redirect, Route } from "react-router-dom";
import { loginUser, logoutUser } from "../redux/ActionCreater";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Filldetails from "./FilldetailComponent";
import Footer from "./FooterComponent";
import Login from "./Loginloader";
import LoginModal from "./LoginModal";
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
    const PrivateRouteHome = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          this.props.auth.isUsername ||
          this.props.auth.isAuthenticated === false ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/filldetails",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );

    return (
      <div>
        <Header
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          auth={this.props.auth}
        />
        <Switch>
          <Route
            exact
            path="/loginmodal"
            component={() => (
              <LoginModal
                buttonLabel="open modal"
                loginUser={this.props.loginUser}
                logoutUser={this.props.logoutUser}
                auth={this.props.auth}
              />
            )}
          />
          <PrivateRouteHome path="/home" component={() => <Home />} />
          <Route path="/filldetails" component={() => <Filldetails auth={this.props.auth}/>} />
          <Route path="/loginload" component={Loginload} />
          <Redirect to="/home" />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
