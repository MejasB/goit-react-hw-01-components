import styled from "styled-components";

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 60px;
  border-radius: 2px;
  background-color: #ecf1f4;
  box-shadow: 0px 2px 2px 0px rgba(2, 2, 2, 0.02);
  width: 400px;

  margin-bottom: 50px;
  .title {
    font-size: 20px;
    /* color: rgb(71, 89, 101); */
    line-height: 1.2;
    margin-top: 25px;
    text-align: center;
    text-transform: uppercase;
  }
  .stat-list {
    display: flex;
    margin: 0;
    padding: 0;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 80px;
    height: 70px;
    color: white;
  }
  .item:nth-child(1) {
    background-color: #4fc5f4;
  }
  .item:nth-child(2) {
    background-color: #a43cf3;
  }
  .item:nth-child(3) {
    background-color: #e64c66;
  }
  .item:nth-child(4) {
    background-color: #20b8c4;
  }
  .item:nth-child(5) {
    background-color: #c147ad;
  }
  .label {
    font-size: 14px;
    line-height: 1.6;
  }
  .percentage {
    font-size: 20px;
    line-height: 1.1;
  }
`;
