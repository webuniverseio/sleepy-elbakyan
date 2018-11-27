import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends PureComponent {
  render() {
    const {src, alt} = this.props;
    return <img {...{src}} alt={alt} className={'list-item__icon'} />;
  }
};
ListItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};