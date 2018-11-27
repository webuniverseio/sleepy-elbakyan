import React, {PureComponent} from 'react';
import NavItem from "../NavItem/NavItem";
import {connect} from "react-redux";
import Nav from "../Nav/Nav";
import {Route, withRouter} from "react-router-dom";

class TopBar extends PureComponent {
  render() {
    const {menu} = this.props;
    return <Route path="/:path" component={({location, match}) => {
      const {children: subNav} = menu.find(x => [location.pathname, `/${match.params.path}`].includes(x.href)) || {children: []};

      return subNav.length ?
             <div className={'sub-nav'}>
               <div className={'sub-nav__item'}>
                 <Nav a11yText={'Sub navigation'}>
                   {subNav.map(x =>
                     <NavItem href={x.href} key={x.href}>
                       {x.text}
                     </NavItem>)}
                 </Nav>
               </div>
             </div> :
             null;
    }}/>;
  }
}

export default withRouter(connect(
  ({menu}) => ({menu})
)(TopBar));