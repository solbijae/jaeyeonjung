import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  a:link{
    color: black;
    text-decoration:none;
  }
  a:visited{
    color: black;
    text-decoration:none;
  }
  a:hover{
    color: black;
    text-decoration:none;
  }
  body {
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    -ms-overflow-style: none; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    overflow-y: auto;
    /* background-color: ${(props) => props.theme.colors.backGroundColor}; */
    &::-webkit-scrollbar{
      display: none;
    }
  }
  &::-webkit-scrollbar {
    /* background-color: ${(props) => props.theme.colors.gray_3}; */
    width: 0.4rem;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    /* background-color: ${(props) => props.theme.colors.white}; */
    border-radius: 10px;
  }
  #root {
  width: 100vw;
  height: 100vh;
  }
`;
