import styled from 'styled-components';

export const Container = styled.div``;

export const Circle = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
`;

export const Semicircle = styled.div`
  width: 17px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 17px 0 0 17px;
`; 