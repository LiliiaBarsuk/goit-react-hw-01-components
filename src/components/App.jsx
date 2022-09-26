import  user from 'dataFolder/user.json';
import data from 'dataFolder/data.json';
import friends from 'dataFolder/friends.json';
import transactions from 'dataFolder/transactions.json'

import { Profile } from "components/Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
export const App = () => {
  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 100,
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#c4efcd',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
