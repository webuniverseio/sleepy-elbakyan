import React, {PureComponent} from 'react';
import NavItem from "../NavItem/NavItem";
import ListItemIcon from "../NavItem/NavItemIcon";
import {connect} from "react-redux";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import UserProfile from "../UserProfile/UserProfile";
import {withRouter} from "react-router-dom";

class TopBar extends PureComponent {
  render() {
    const {menu, appData, user} = this.props;
    return <div className={'top-bar'}>
      <div className={'top-bar__item'}>
        <Logo href={appData.homePage} text={appData.siteName} logoPath={appData.logoPath} className={'top-bar__logo'} />
        <Nav a11yText={'Primary navigation'} className={'top-bar__nav'}>
          {menu.map(x =>
            <NavItem key={x.href} type={NavItem.types.alt} href={x.href}>
              <ListItemIcon src={x.iconPath} alt={x.text}/>
              {x.text}
            </NavItem>)}
        </Nav>
      </div>
      <UserProfile name={user.name} picturePath={user.picturePath} className={'top-bar__user-profile'} />
    </div>;
  }
}

export default withRouter(connect(
  ({menu, appData, user}) => ({menu, appData, user})
)(TopBar));