import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { store } from './store';
import { RootState } from './store';
import { Container, InnerContent } from './styles/StyleModule';
import Profile from './pages/Profile';
import Work from './pages/Work';

const AppContent = () => {
  const profileMode = useSelector((state: RootState) => state.theme.profileMode);
  const isAnimating = useSelector((state: RootState) => state.theme.isAnimating);

  return (
    <Container isAnimating={isAnimating}>
      <InnerContent isAnimating={isAnimating}>
        {profileMode ? <Profile /> : <Work />}
      </InnerContent>
    </Container>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
