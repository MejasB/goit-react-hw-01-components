import React from "react";
import PropTypes from "prop-types";
import { ProfileContainer } from "./ProfileStyled";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <ProfileContainer>
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <li className="item">
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className="item">
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className="item">
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </ProfileContainer>
);

Profile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
