import React, { Component } from 'react';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => ({});
class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={() => <Home />} />

          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
