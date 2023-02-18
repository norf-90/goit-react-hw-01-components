import user from '../profile/user.json';
import Profile from '../profile/Profile';

import data from '../statistics/data.json';
import Statistics from '../statistics/Statistics';

import friends from '../friend-list/friends.json';
import FriendList from '../friend-list/FriendList';

import transactions from '../transactions/transactions.json';
import TransactionHistory from '../transactions/TransactionHistory';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        key={user.name}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
