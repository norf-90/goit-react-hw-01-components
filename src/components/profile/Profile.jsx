import PropTypes from 'prop-types';

import {
  UserCard,
  Descrioption,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatLabel,
  StatQuantity,
} from './Profile.styled';

const Profile = user => {
  const { username, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;

  return (
    <UserCard>
      <Descrioption>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Descrioption>

      <Stats>
        <StatsItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </StatsItem>
      </Stats>
    </UserCard>
  );
};

Profile.protoTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
