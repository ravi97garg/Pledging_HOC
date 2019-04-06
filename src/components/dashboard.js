import React, {Component} from 'react';
import dashboardHOC from './DashboardHOC';
import {Link} from 'react-router-dom';
import Context from '../context';

class Dashboard extends Component {
    static contextType = Context;

    render() {
        return (
            <div>
                <Link to={'/'}>Back</Link>
                <ul>
                    {this.context.userList.map((user, index) => {
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