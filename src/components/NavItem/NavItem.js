import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class NavItem extends PureComponent {
  render() {
    const {children, type, href} = this.props;
    return <a href={href} className={`list-item${type ? `--${type}`: ''}`}>
      {children}
    </a>;
  }
};
NavItem.types = {
  alt: 'alt'
};
NavItem.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.string,
};