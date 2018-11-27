import React, {PureComponent} from 'react';
import ListItem from "../ListItem/ListItem";
import ListItemIcon from "../ListItem/ListItemIcon";
import {connect} from "react-redux";
import Nav from "../Nav/Nav";

class TopBar extends PureComponent {
  render() {
    const {menu} = this.props;
    return <div className="top-bar">
      <Nav a11yText={'Primary navigation'}>
        {menu.map(x => <ListItem type={ListItem.types.alt}>
          <ListItemIcon src={x.iconPath} alt={x.text} />
          {x.text}
        </ListItem>)}
      </Nav>
      {/*<h1>E-Block</h1>
      <nav>
        <h2>Main navigation</h2>
        <a href="#buy">Buy</a>
        <a href="#sell">Sell</a>
        <a href="#pending">Pending</a>
        <a href="#finished">Finished</a>
      </nav>
      <section className='top-nav__profile'>
        <h2>User profile</h2>
        <img src="/profile-picture" alt="John Doe"/>
      </section>*/}
    </div>;
  }
}
export default connect(
  ({menu}) => ({menu})
)(TopBar);