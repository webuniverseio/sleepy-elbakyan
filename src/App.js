import React, {Component, Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';
import './App.scss';
import TopNav from "./components/TopBar/TopBar";
import SubNav from "./components/SubNav/SubNav";
import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content/Content"

class App extends Component {
  render() {
    return <Fragment>
      <Route path="/" exact={true} component={() => <Redirect to={'/buy/live-lanes'} />} />
      <Route path="/sleepy-elbakyan" exact={true} component={() => <Redirect to={'/buy/live-lanes'} />} />
      <Route path="/buy" exact={true} component={() => <Redirect to={'/buy/live-lanes'} />} />
      <TopNav />
      <SubNav />
      <main>
        <SideBar />
        <Content />
      </main>
    </Fragment>;
  }
}

export default App;
