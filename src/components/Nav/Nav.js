import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Nav extends PureComponent {
  render() {
    const {a11yText, children, className = ''} = this.props;
    return <nav className={`nav ${className}`}>
      <h2 className={'o-a11y__element'}>{a11yText}</h2>
      {children}
    </nav>;
  }
};
Nav.propTypes = {
  className: PropTypes.string,
  a11yText: PropTypes.string.isRequired
};