import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90vw;
`;

export const ThemeWrapper = styled.div`
  position: absolute;
  top: 88px;
`;

export const TabsWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 90vw;
`;
