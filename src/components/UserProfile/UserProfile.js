import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class UserProfile extends PureComponent {
  render() {
    const {name, picturePath, className = ''} = this.props;
    return <section className={`user-profile ${className}`}>
      <h2 className={'o-a11y__skip'}>User profile</h2>
      <img src={picturePath} alt={name} className={'user-profile__avatar'}/>
      <button className={'user-profile__button'} type={'button'} onClick={() => alert('show user actions')}>
        <span className={'user-profile__button-arrow'} />
      </button>
    </section>;
  }
};
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  picturePath: PropTypes.string.isRequired,
  className: PropTypes.string
};