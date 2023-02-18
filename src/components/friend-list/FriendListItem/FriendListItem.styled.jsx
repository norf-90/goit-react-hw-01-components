import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const OnlineStatus = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 5px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const Name = styled.p`
  font-weight: 900;
`;
