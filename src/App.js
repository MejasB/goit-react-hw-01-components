import React from "react";
import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import FriendList from "./components/friendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <Statistics stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
