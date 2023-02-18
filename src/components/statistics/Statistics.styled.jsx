import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
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

export const Title = styled.h2`
  margin: 0 0 0 10px;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
`;
export const StatsList = styled.ul`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 0;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column-reverse;

  height: ${({ percentage }) => percentage * 5}px;
  background-color: ${({ color }) => color};
  text-align: center;
`;

export const StatLabel = styled.span`
  color: #04124f;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
  transform: translateY(20px);
`;

export const StatValue = styled.span`
  color: #04124f;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
  transform: translateY(${({ percentage }) => -percentage * 5 + 20}px);
`;
