import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 60px;
  margin-top: 60px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  width: 270px;
  height: 340px;
  margin-bottom: 50px;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
  }
  .avatar {
    border-radius: 50%;
    background-color: rgb(0, 0, 0);
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
    width: 99px;
    height: 99px;
    margin-bottom: 15px;
  }
  .name {
    font-size: 18px;
    color: rgb(18, 34, 54);
    font-weight: bold;
    line-height: 1.778;
    text-align: left;
    margin: 0;
  }
  .tag {
    font-size: 14px;
    color: rgb(118, 134, 150);
    line-height: 1.5;
    text-align: left;
    margin: 0;
  }
  .location {
    font-size: 14px;
    color: rgb(118, 134, 150);
    line-height: 2.286;
    text-align: left;
    margin: 0;
  }

  .stats {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding-left: 0;
    width: 100%;
    height: 80px;
    border-top: 1px solid #e4e9f0;
    background-color: #ecf1f4;
    margin-bottom: 0;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% / 3);
    border: 1px solid #e4e9f0;
  }
  .label {
    font-size: 14px;
    color: rgb(118, 134, 150);
    line-height: 1.5;
    text-align: center;
  }
  .quantity {
    line-height: 1.5;
    text-align: center;
    font-weight: bold;
  }
`;
