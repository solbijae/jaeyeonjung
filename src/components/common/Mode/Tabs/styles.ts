import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.input`
  display: none;
`;

export const ButtonLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  width: 147px;
  height: 48px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const ToggleCircle = styled.div<{ profileMode: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ profileMode }) => (profileMode ? '10px' : '47px')};
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  width: 90px;
  height: 38px;
  background-color:  ${({ theme }) => theme.colors.white};;
  border-radius: 50px;
  transition: left 0.3s ease;
`;

const marquee = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-20%, 0, 0);
  }
  100% {
    transform: translate3d(-40%, 0, 0);
  }
`;

export const CircleText = styled.span<{ profileMode: boolean }>`
  will-change: transform;
  display: inline-block;
  animation: ${marquee} 30s linear infinite;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
`;
