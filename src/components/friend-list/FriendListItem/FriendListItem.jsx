import PropTypes from 'prop-types';
import { ListItem, OnlineStatus, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ListItem>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.protoTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
