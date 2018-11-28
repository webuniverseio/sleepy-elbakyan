import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {ReactComponent as Search} from "../icons/search.svg";

export default class LaneFilter extends PureComponent {
  render() {
    const {laneData} = this.props;
    return <div className={'lane-filter'}>
      <div className={'lane-filter__manage'}>
        <div className={'lane-filter__search-box'}>
          <input type="text" placeholder={'Search Live Lanes'} className={'lane-filter__search'}/>
          <button type={'button'} className={'lane-filter__search-button'}
                  onClick={() => alert('Maybe search should just narrow as you type')}>
            <Search />
          </button>
        </div>
        <div className={'lane-filter__tabs'}>
          <button type={'button'} className={'lane-filter__tab'} onClick={() => alert('Show all ;)')}>All</button>
          {_(laneData)
          .groupBy(x => x.status)
          .entries()
          .sort()
          .map(([type, entries]) =>
            <button type={'button'} className={'lane-filter__tab'} onClick={() => alert(`Show ${type}`)}>
              {type}
              <span className={`lane-filter__tab-number--${type.toLowerCase()}`}>
                {entries.length}
              </span>
            </button>)
          .value()}
        </div>
      </div>
      <LaneList {...{laneData}}/>
    </div>;
  }
};
LaneFilter.propTypes = {
  laneData: PropTypes.array.isRequired,
  filterTypes: PropTypes.object.isRequired
};

class LaneList extends PureComponent {
  render() {
    return this.props.laneData.map((x) => {
      const {year, status, bidType, type, lane, remaining, watching} = x;
      const [watchingSeparator, watchingMessage] =
        watching > 0 ?
          [', ', <span className={'lane-filter__watching'}>{watching} {watching === 1 ? 'is' : 'are'} on your watchlist</span>] :
          [null, null];

      return <div className={`lane-filter__entry--${status.toLowerCase()}`} key={JSON.stringify(x)}>
        <button className={'lane-filter__entry-button'} onClick={() => alert(`Show ${type} bid info`)}>
        <div>
          <span className={`lane-filter__entry-lane`}>LANE {lane}</span>
          <span className={'lane-filter__bid-type'}>{bidType}</span>
        </div>
        <div className={'lane-filter__car-info'}>{year} {type} is live</div>
        <div>
          <span className={'lane-filter__remaining'}>{remaining} Items remaining{watchingSeparator}</span>
          {watchingMessage}
        </div>
        </button>
      </div>;
    });
  }
}
LaneFilter.propTypes = {
  laneData: PropTypes.array.isRequired
};