import React, {PureComponent} from 'react';
import {withRouter} from "react-router-dom";

class Content extends PureComponent {
  render() {
    const {location} = this.props;
    return <div className={'content'}>
      <h1>Welcome to {location.pathname}</h1>
    </div>;
  }
};
Content.propTypes = {};

export default withRouter(Content);