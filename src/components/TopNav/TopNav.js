import React, {PureComponent} from 'react';

export default class TopNav extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="top-nav">
      <h1>E-Block</h1>
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
      </section>
    </div>;
  }
}