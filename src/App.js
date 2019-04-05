import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from "./components/login";
import Dashboard from "./components/dashboard";

class App extends Component {

  state = {
    userList: []
  }

  addUser = (user) => {
    console.log("#######")
    console.log(user);
    this.setState({
      userList: [...this.state.userList, user]
    }
  )
  }

  render() {
    return (
        <div>
          <Router>
            <Route exact path={'/'} render={props => <Login {...props} userCallback={this.addUser}/>
            }/>
            <Route path={'/dashboard'} render={() => <Dashboard {...this.state}/>}/>
          </Router>
        </div>

    );
  }
}

export default App;
