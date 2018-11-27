import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends PureComponent {
  render() {
    const {children, type} = this.props;
    return <span className={`list-item${type ? `--${type}`: ''}`}>
      {children}
    </span>;
  }
};
ListItem.types = {
  alt: 'alt'
};
ListItem.propTypes = {
  type: PropTypes.string
};