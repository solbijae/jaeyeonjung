import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin-top: ${({ theme }) => theme.margin.desktop_title};
  overflow: hidden;
  white-space: nowrap;
`;

const marquee = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

export const Text = styled.span`
  will-change: transform;
  display: inline-block;
  animation: ${marquee} 30s linear infinite;
  white-space: nowrap;
  ${({ theme }) => theme.typo.desktop_title}
  color: ${({ theme }) => theme.colors.dark}
`;
