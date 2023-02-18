import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 20px 40px;
  margin: 0 0 20px 0;
  list-style: none;

  font-family: monospace;
  font-size: 20px;
  border-radius: 60px;
  background: linear-gradient(145deg, #a77777, #e0dfdf);
  box-shadow: 5px 5px 10px #7e7e7e, -5px -5px 10px #ffffff;
  transition: box-shadow 100ms linear;

  :hover {
    box-shadow: 15px 15px 20px #7e7e7e, -15px -15px 20px #ffffff;
  }
`;
