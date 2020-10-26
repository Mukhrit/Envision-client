import React, { Component } from "react";
import { withRouter, Switch, Redirect, Route } from "react-router-dom";
import { loginUser, logoutUser,filldetailsUser } from "../redux/ActionCreater";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Filldetails from "./FilldetailComponent";
import Footer from "./FooterComponent";
import Login from "./Loginloader";
import LoginModal from "./LoginModal";
import GraphMain from "./GraphMain";
import DashboardComponent from "./DashboardComponent";
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
  filldetailsUser:(user,isUsername)=>dispatch(filldetailsUser(user,isUsername))
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
    const PrivateRouteFilldetails = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
       this.props.auth.isAuthenticated===true && !this.props.auth.user.username? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/home',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
    const dashboardshow=({match})=>{
      let envision_handle=match.params.envision_handle;
      return(
        <DashboardComponent envision_handle={envision_handle}/>
      );
    }

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
                loginUser={this.props.loginUser}
                logoutUser={this.props.logoutUser}
                auth={this.props.auth}
              />
            )}
          />
          <PrivateRouteHome
            path="/home"
            component={() => <Home loginUser={this.props.loginUser} />}
          />
          <PrivateRouteFilldetails
            path="/filldetails"
            component={() => (
              <Filldetails
                auth={this.props.auth}
                filldetailsUser={this.props.filldetailsUser}
              />
            )}
          />
          <Route path="/loginload" component={Loginload} />
          <Route path="/dashboard/:envision_handle" component={dashboardshow} />
          <Route path="/graph" component={() => <GraphMain />} />
          <Redirect to="/home" />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
