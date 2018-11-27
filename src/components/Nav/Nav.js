import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Nav extends PureComponent {
  render() {
    const {a11yText, children} = this.props;
    return <nav className={'nav'}>
      <h2 className={'o-a11y__element'}>{a11yText}</h2>
      {children}
    </nav>;
  }
};
Nav.propTypes = {
  a11yText: PropTypes.string.isRequired
};