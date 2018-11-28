import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import LaneFilter from "../LaneFilter/LaneFilter";
import {Route, withRouter} from "react-router-dom";

class SideBar extends PureComponent {
  render() {
    const {laneData, filterTypes} = this.props;
    return <Route path="/buy/live-lanes" exact={true} component={() => {
      return <div className={'side-bar'}>
        <LaneFilter {...{laneData, filterTypes}} />
      </div>;
    }}/>;
  }
};
SideBar.propTypes = {};

export default withRouter(connect(
  ({laneData, filterTypes}) => ({laneData, filterTypes})
)(SideBar));