import React from "react";
import PropTypes from "prop-types";
import {
  FriendListItemContainer,
  FriendListItemStatus,
} from "./FriendListItemStyled";

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendListItemContainer>
    <FriendListItemStatus isOnline={isOnline} />
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </FriendListItemContainer>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
