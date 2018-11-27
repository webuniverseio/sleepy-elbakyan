import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export default class Logo extends PureComponent {
  render() {
    const {href, text, logoPath, className = ''} = this.props;
    return <h1 className={`logo ${className}`}>
      <NavLink to={href}>
        <img src={logoPath} alt={text}/>
        <span className={'o-a11y__element'}>{text}</span>
      </NavLink>
    </h1>;
  }
};
Logo.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  logoPath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};