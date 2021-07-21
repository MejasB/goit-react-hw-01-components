import styled from "styled-components";

export const TransactionHistoryContainer = styled.table`
  margin: 60px auto;
  border-radius: 3px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  th {
    background-color: #07bcd3;
    color: #fff;
    padding: 15px 15px;
    min-width: 250px;
    font-size: 20px;
    text-transform: uppercase;
  }

  td {
    text-align: center;
    font-size: 16px;
    color: #696e72;
    line-height: 2;
  }
  td::first-letter {
    text-transform: capitalize;
  }

  tr {
    &:nth-child(odd) {
      background-color: #ecf1f4;
    }
    &:nth-child(even) {
      background-color: #fff;
    }
  }
`;
