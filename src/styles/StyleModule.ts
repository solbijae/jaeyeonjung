import styled from 'styled-components';

export const Container = styled.div<{ isAnimating: boolean }>`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const InnerContent = styled.div<{ isAnimating: boolean }>`
  background-color: ${({ theme }) => theme.colors.background};
`;
