import PropTypes from 'prop-types';
import { Fragment } from 'react';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    // <li className="item" key={id}>
    <Fragment>
      <span className={isOnline ? 'status--online' : 'status'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Fragment>
    // </li>
  );
};

FriendListItem.protoTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
