import React from 'react';

export default (Component) => {
    class WrapperComponent extends React.Component{
        render() {
            return (
                <Component {...this.props} time={Date.now()}/>
            )
        }
    }

    return WrapperComponent;
}