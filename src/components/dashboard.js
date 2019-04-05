import React, {Component} from 'react';
import dashboardHOC from './DashboardHOC';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Link to={'/'}>Back</Link>
                <ul>
                    {this.props.userList.map((user, index) => {
                        return (
                            <li key={index}>
                                {user.fullname} registered {(this.props.time-user.time)/1000} seconds ago
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const WrappedDashboard = dashboardHOC(Dashboard);
export default WrappedDashboard;