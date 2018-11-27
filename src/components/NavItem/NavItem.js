import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export default class NavItem extends PureComponent {
  render() {
    const {children, type, href} = this.props;
    return <NavLink to={href} className={`nav-item${type ? `--${type}`: ''}`}>
      {children}
    </NavLink>;
  }
};
NavItem.types = {
  alt: 'alt'
};
NavItem.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.string,
};