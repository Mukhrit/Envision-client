import React, { Component } from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import { loginUser, logoutUser, filldetailsUser } from '../redux/ActionCreater';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Filldetails from './FilldetailComponent';
import Footer from './FooterComponent';
import Login from './Loginloader';
import LoginModal from './LoginModal';
import DashCard from './DashCard';
import Card3 from './cards3';
import Allcontest from './Allcontest';
import GraphMain from './GraphMain';
import DashboardComponent from './DashboardComponent';
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
  filldetailsUser: (user) =>
    dispatch(filldetailsUser(user)),
});
class Main extends Component {
  render() {
    const Loginload = ({ match }) => {
      return <Login loginUser={this.props.loginUser} auth={this.props.auth} />;
    };

    const PrivateRouteDashboard = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          this.props.auth.isAuthenticated === true && this.props.auth.user.username? (
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
          this.props.auth.isAuthenticated === true &&
          !this.props.auth.user.username ? (
            <Component {...props} />
          ) : this.props.auth.isAuthenticated === true &&
            this.props.auth.user.username ? (
            <Redirect
              to={{
                pathname: `/dashboard/${this.props.auth.user.username}`,
                state: { from: props.location },
              }}
            />
          ) : (
            <Redirect
              to={{
                pathname: `/home`,
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
    const dashboardshow = ({ match }) => {
      let envision_handle = match.params.envision_handle;
      return <DashboardComponent envision_handle={envision_handle} />;
    };
    if(this.props.auth.isAuthenticated===false){
      return (
        <div>
          <Header
            loginUser={this.props.loginUser}
            logoutUser={this.props.logoutUser}
            auth={this.props.auth}
          />
          <Switch>
            <Route
              path="/home"
              component={() => (
                <Home auth={this.props.auth} loginUser={this.props.loginUser} />
              )}
            />
            <Route
              path="/dashboard/:envision_handle"
              component={dashboardshow}
            />
            <Redirect to="/home" />
          </Switch>
          <Footer/>
        </div>
      );
    }
    else if (this.props.auth.isAuthenticated === true && !this.props.auth.user.username) {
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
                path="/filldetails"
                component={() => <Filldetails auth={this.props.auth}  loginUser={this.props.loginUser} filldetailsUser={this.props.filldetailsUser}/>}
              />
              <Redirect to="/filldetails" />
            </Switch>
          </div>
        );
      }else{
         return (
           <div>
             <Header
               loginUser={this.props.loginUser}
               logoutUser={this.props.logoutUser}
               auth={this.props.auth}
             />
             <Switch>
               <Route
                 path="/home"
                 component={() => (
                   <Home
                     auth={this.props.auth}
                     loginUser={this.props.loginUser}
                   />
                 )}
               />
               <Route
                 path="/dashboard/:envision_handle"
                 component={dashboardshow}
               />
               <Redirect to="/home" />
             </Switch>
             <Footer />
           </div>
         );
      }

    // return (
    //   <div>
    //     <Header
    //       loginUser={this.props.loginUser}
    //       logoutUser={this.props.logoutUser}
    //       auth={this.props.auth}
    //     />
    //     <Switch>
    //       <Route
    //         exact
    //         path='/loginmodal'
    //         component={() => (
    //           <LoginModal
    //             loginUser={this.props.loginUser}
    //             logoutUser={this.props.logoutUser}
    //             auth={this.props.auth}
    //           />
    //         )}
    //       />
    //       < Route
    //         path='/dashboard/:envision_handle'
    //         component={dashboardshow}
    //       />
    //       <Route exact path='/dashcard' component={() => <DashCard />} />
    //       <Route exact path='/allcontest' component={() => <Allcontest />} />
    //       <Route exact path='/card3' component={() => <Card3 />} />
    //       <Route
    //         path='/home'
    //         component={() => <Home auth={this.props.auth} />}
    //       />
    //       <PrivateRouteFilldetails exact path='/filldetails' component={()=><Filldetails auth={this.props.auth}/>} />

    //       <Route path='/loginload' component={Loginload} />

    //       <Route path='/graph' component={() => <GraphMain />} />
    //       <Redirect to='/home' />
    //     </Switch>
    //     {/* <Footer /> */}
    //   </div>
    // );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
