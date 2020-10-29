import Axios from 'axios';
import React from 'react';
import { baseUrl } from '../shared/baseUrl';
import GraphMain from './GraphMain';
import DashCard from './DashCard';
import Allcontest from './Allcontest';
import Card3 from './cards3';
import Dashboardavatar from './Dashboardavatar';

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
  }
  componentDidMount() {
    Axios.get(baseUrl + 'users/' + this.props.envision_handle)
      .then((res) => res.data)
      .then((res) => {
        if (res[0]) this.setState({ user: res[0] });
        else {
          this.setState({ err: true });
        }
        console.log(this.state);
      })
      .catch((err) => console.log(err));
    Axios.get(baseUrl + 'allcontests')
      .then((res) => {
        this.setState({ Allcontest: res.data.currcontests });
      })
      .catch((err) => console.log(err));
  }
  render() {
    if (this.state.user && this.state.Allcontest) {
      let codeforces, codechef, atcoder;
      if (this.state.user.codechef_id) {
        codechef = this.state.user.codechef_id;
      }
      if (this.state.user.codeforces_id) {
        codeforces = this.state.user.codeforces_id;
      }
      if (this.state.user.atcoder_id) {
        atcoder = this.state.user.atcoder_id;
      }
      return (
        <div style={{ backgroundColor: 'rgb(0 255 231)' }}>
          <div className='dashboard-header '></div>
          <div className='row profile-card' style={{ textAlign: 'center' }}>
            <div className='col-lg-12 '>
              <Dashboardavatar user={this.state.user} />
            </div>
          </div>
          <div className='dashboard-graph-main'>
            <GraphMain
              codechef={codechef}
              codeforces={codeforces}
              atcoder={atcoder}
            />
            <div style={{ marginBottom: '50px' }}>
              <DashCard user={this.state.user} />
            </div>
            <div style={{ marginBottom: '50px' }}>
              <Card3 user={this.state.user} />
            </div>
            {/* <DashCard user={this.state.user} /> */}
            <div style={{ marginBottom: '-8px' }}>
              <Allcontest contests={this.state.Allcontest} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='dashboard-header'></div>
          <div className='dashboard_loader'>
            <div className='dashboard_loader_spin'>
              {!this.state.err ? (
                <i class='fa fa-4x fa-spinner fa-spin '></i>
              ) : (
                <h4>User not found</h4>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default DashboardComponent;
