import styled from 'styled-components';

export const Container = styled.div<{ isAnimating: boolean }>`
  width: 100%;
  min-height: 100vh;
  background: ${({ isAnimating }) => (isAnimating ? '#000' : 'transparent')};
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContent = styled.div<{ isAnimating: boolean }>`
  transform: scale(${({ isAnimating }) => (isAnimating ? 0.9 : 1)});
  transition: transform 0.5s ease;
  background: ${({ isAnimating }) => (isAnimating ? '#fff' : 'transparent')};
  will-change: transform;
`;
