import React from "react";
import PropTypes from "prop-types";
import { FriendListItem } from "./friendListItem/FriendListItem";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend) => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
