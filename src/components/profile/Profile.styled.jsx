import styled from '@emotion/styled';

export const UserCard = styled.div`
  padding: 20px 40px;
  margin: 0 0 20px 0;
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

export const Descrioption = styled.div`
  padding: 10px 0;
`;

export const Avatar = styled.img`
  margin: 0 0 0 10px;
  max-width: 200px;
  border: 2px dotted #0000;
  border-radius: 40px;
`;

export const Name = styled.p`
  margin: 0 0 0 10px;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
`;

export const Tag = styled.p`
  margin: 0 0 0 10px;
  color: #04124f;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
`;

export const Location = styled.p`
  margin: 0 0 0 10px;
  color: #c20030;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
`;
export const Stats = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const StatLabel = styled.span`
  color: #056857;
  font-weight: 700;
  font-size: 16px;
`;
export const StatQuantity = styled.span`
  color: #056857;
  font-weight: 700;
  font-size: 16px;
`;
