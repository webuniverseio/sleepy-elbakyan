import React, {PureComponent} from 'react';
import NavItem from "../NavItem/NavItem";
import {connect} from "react-redux";
import Nav from "../Nav/Nav";
import {withRouter} from "react-router-dom";

class TopBar extends PureComponent {
  render() {
    const {menu, location, match} = this.props;
    const {children: subNav} =
      menu.find(x => [location.pathname, `/${match.params.path}`].includes(x.href)) || {children: []};

    if (subNav.length) {
      return <div className={'sub-nav'}>
        <div className={'sub-nav__item'}>
          <Nav a11yText={'Sub navigation'}>
            {subNav.map(x =>
              <NavItem href={x.href} key={x.href}>
                {x.text}
              </NavItem>)}
          </Nav>
        </div>
      </div>;
    }
    return null;
  }
}

export default withRouter(connect(
  ({menu}) => ({menu})
)(TopBar));