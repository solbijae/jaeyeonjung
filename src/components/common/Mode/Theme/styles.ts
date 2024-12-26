import styled, { keyframes } from 'styled-components';

const initialRotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const slideIn = keyframes`
  from {
    transform: translate(-10px, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0, -50%);
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Circle = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &::after {
    content: "CHANGE THEME";
    position: absolute;
    top: 50%;
    left: 40px;
    opacity: 0;
    white-space: nowrap;
    animation: none;
  }

  &:hover::after {
    animation: ${slideIn} 0.3s ease forwards;
  }
`;

export const Semicircle = styled.div<{ $rotation: number}>`
  width: 17px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 17px 0 0 17px;
  transition: transform 0.5s ease;
  transform-origin: right center;
  animation: ${initialRotation} 0.8s ease;
  transform: ${({ $rotation }) => `rotate(${$rotation}deg)`};
`;