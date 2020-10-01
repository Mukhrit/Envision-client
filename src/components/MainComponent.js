import React, { Component } from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import {loginUser} from '../redux/ActionCreater';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Filldetails from './FilldetailComponent';
import Footer from './FooterComponent';
import Login from './Loginloader';
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
});
class Main extends Component {
    render() {
      const Loginload=({match})=>{
        return(<Login  loginUser={this.props.loginUser} auth={this.props.auth}/>);
      }
        return (
          <div>
          { (this.props.auth.isAuthenticated===true && this.props.auth.user.username!==null)?
            (<Switch>
              <Route path="/home" component={()=><Home/>} />
              <Route path="/filldetails" component={()=><Filldetails/>}/>
              <Route path="/loginload" component={Loginload}/>
              <Redirect to="/home" />
            </Switch>)
            :
             (<Switch>
              <Redirect path="/filldetails" component={()=><Filldetails/>}/>
            </Switch>)}
          </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
