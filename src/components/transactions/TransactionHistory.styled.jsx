import styled from '@emotion/styled';

export const Table = styled.table`
  padding: 20px 40px;
  margin: 0 0 20px 0;
  font-family: monospace;
  font-size: 20px;
  border-radius: 60px;
  background: linear-gradient(145deg, #a77777, #e0dfdf);
  box-shadow: 5px 5px 10px #7e7e7e, -5px -5px 10px #ffffff;
  transition: box-shadow 100ms linear;
  /* border: 2px solid #000000; */
  :hover {
    box-shadow: 15px 15px 20px #7e7e7e, -15px -15px 20px #ffffff;
  }
`;
export const TableHead = styled.thead`
  font-weight: 900;
  border: 2px solid #000000;
  background-color: #af3e80;

  th {
    padding: 0 10px;
  }
`;

export const Row = styled.tr`
  border: 2px solid #000000;
  :nth-of-type(even) {
    background-color: #ad6991;
  }
`;

export const Cell = styled.td`
  padding: 0 10px;
  text-align: center;
  font-size: 18px;
`;
