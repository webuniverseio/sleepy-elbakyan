import React, {Component, Fragment} from 'react';
import './App.scss';
import TopNav from "./components/TopBar/TopBar";
import SubNav from "./components/SubNav/SubNav";
import {Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return <Fragment>
      <Route path="/" exact={true} component={() => <Redirect to={'/buy/live-lanes'} />} />
      <Route path="/buy" exact={true} component={() => <Redirect to={'/buy/live-lanes'} />} />
      <TopNav />
      <SubNav />
    </Fragment>;
  }
}

export default App;
