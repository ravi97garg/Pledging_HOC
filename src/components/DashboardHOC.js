import React from 'react';
import './DashboardHOC.css';

export default (Component) => {
    class WrapperComponent extends React.Component{
        render() {
            return (
                <div className='dashboard-wrapper'>
                    <Component {...this.props} time={Date.now()}/>
                </div>
            )
        }
    }

    return WrapperComponent;
}