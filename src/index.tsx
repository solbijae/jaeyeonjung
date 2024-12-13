import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import mediaQueries from './styles/MediaQuery';
import { ThemeConfig } from './styles/ThemeConfig';
import { GlobalStyle } from './styles/GlobalStyle';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={{ ...ThemeConfig, mediaQueries }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);