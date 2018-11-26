import React, { Component } from 'react';
import './App.scss';
import ListItem from './components/ListItem/ListItem';
import ListItemIcon from './components/ListItem/ListItemIcon';
import { ReactComponent as ListSVG } from './components/icons/list-icon.svg';

class App extends Component {
  render() {
    return <ListItem>
      <ListItemIcon>
        <ListSVG />
      </ListItemIcon>
      Hello
    </ListItem>;
  }
}

export default App;
