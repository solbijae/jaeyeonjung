import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux'; // 올바르게 임포트
import { Provider } from 'react-redux'; // Redux Provider 추가
import mediaQueries from './styles/MediaQuery';
import { ThemeConfig } from './styles/ThemeConfig';
import { GlobalStyle } from './styles/GlobalStyle';
import App from './App';
import { store, RootState } from './store'; // store 임포트

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const RootItem = () => {
  const bnwTheme = useSelector((state: RootState) => state.theme.bnwTheme); // Redux 상태 가져오기

  const currentTheme = ThemeConfig(bnwTheme ? 'bnw' : 'color'); // 상태에 따라 테마 선택

  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...currentTheme, mediaQueries }}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

// Redux Provider로 RootItem 감싸기
root.render(
  <Provider store={store}>
    <RootItem />
  </Provider>
);