import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate 추가
import mediaQueries from './styles/MediaQuery';
import { ThemeConfig } from './styles/ThemeConfig';
import { GlobalStyle } from './styles/GlobalStyle';
import App from './App';
import { store, persistor, RootState } from './store'; // persistor 임포트

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

root.render(
  <Provider store={store}>
    {/* PersistGate로 감싸기 */}
    <PersistGate loading={null} persistor={persistor}>
      <RootItem />
    </PersistGate>
  </Provider>
);
