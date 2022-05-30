//* export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
//* };

import styles from './App.module.css';
import Profile from './profile/Profile';
import user from '../data/user.json';
import Statistics from './statistics/Statistics';
import data from '../data/data.json';
import FriendList from './friend-list/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './transaction-history/TransactionHistory';
import transactions from '../data/transactions.json';

export function App() {
  return (
    <div className={styles.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
