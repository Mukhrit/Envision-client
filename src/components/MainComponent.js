import React, { Component } from 'react';
import { withRouter ,Switch,Redirect,Route} from 'react-router-dom';
import { connect } from "react-redux";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Filldetails from './FilldetailComponent';
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => ({

});
class Main extends Component {
    render() {
        return (
          <div>
            <Header/>
            <Switch>
              <Route path="/home" component={()=><Home/>} />
              <Route path="/filldetails" component={()=><Filldetails/>}/>
              <Redirect to="/home" />
            </Switch>
          </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));