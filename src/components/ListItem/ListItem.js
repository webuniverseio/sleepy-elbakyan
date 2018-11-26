import React, {PureComponent} from 'react';

export default class ListItem extends PureComponent {
  render() {
    const {children} = this.props;
    return <span className={'list-item'}>
      {children}
    </span>;
  }
};