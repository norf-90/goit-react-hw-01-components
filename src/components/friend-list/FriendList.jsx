import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        // <ListItem className="item" key={friend.id}>
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
        // </ListItem>
      ))}
    </List>
  );
};

FriendList.protoTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
