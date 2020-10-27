import Axios from 'axios';
import React from 'react';
import { baseUrl } from '../shared/baseUrl';
import GraphMain from './GraphMain';
import DashCard from './DashCard';
import { Dashboard } from '@material-ui/icons';
import Allcontest from './Allcontest';
import Card3 from './cards3';

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    Axios.get(baseUrl + 'users/' + this.props.envision_handle)
      .then((res) => res.data)
      .then((res) => {
        this.setState({ user: res[0] });
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
        <div>
          <div className='dashboard-header'></div>
          <div className='dashboard-graph-main'></div>
          <DashCard user={this.state.user} />
          <Allcontest contests={this.state.Allcontest} />
          <Card3 />
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
export default DashboardComponent;
