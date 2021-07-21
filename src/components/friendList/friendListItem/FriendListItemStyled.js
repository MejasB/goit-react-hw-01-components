import styled from "styled-components";

export const FriendListItemContainer = styled.li`
  margin-left: 60px;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 10px 15px;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0px 2px 7px -2px #000000;
  height: 60px;
  width: 200px;

  .avatar {
    border-radius: 5px;
    margin-right: 15px;
  }
  .name {
    font-size: 22px;
    color: #122236;
    font-weight: 600;
    margin: 0;
  }
`;

export const FriendListItemStatus = styled.span`
  background-color: ${(props) => (props.isOnline ? "green" : "red")};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;
