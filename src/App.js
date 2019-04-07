import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Context from './context';
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {

  state = {
    userList: []
  }

  addUser = (user) => {
    this.setState({
      userList: [...this.state.userList, user]
    })
  }

  render() {
    return (
        <div>
          <Header/>
          <Router>
            <Route exact path={'/'} render={props => <Login {...props} userCallback={this.addUser}/>
            }/>
            <Context.Provider value={{userList: this.state.userList}}>
            {/*<Route path={'/dashboard'} render={() => <Dashboard {...this.state}/>}/>*/}
              <Route path={'/dashboard'} component={Dashboard}/>
            </Context.Provider>
          </Router>
          <Footer/>
        </div>

    );
  }
}

export default App;
