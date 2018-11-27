import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class SideBar extends PureComponent {
  render() {
    const {laneData} = this.props;
    return <div className={'side-bar'}>
      <div className={'lane-filter'}>
        {laneData.map(({year, status, bidType, type, lane, remaining, watching}) =>
          <div className={`lane-filter__entry--${status}`}>
            <div>
              LANE {lane} {bidType}
            </div>
            <div className={'lane-filter__car-info'}>{year} {type} is live</div>
            <div>
              <span className={'lane-filter__remaining'}>{remaining} Items remaining</span>
              {watching > 0 && <Fragment>
                , <span className={'lane-filter__watching'}>{watching} {watching === 1 ? 'is' : 'are'} on your watchlist</span>
              </Fragment>}
            </div>
          </div>)}
      </div>
    </div>;
  }
};
SideBar.propTypes = {};

export default connect(
  ({laneData}) => ({laneData})
)(SideBar);