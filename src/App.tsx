import { Provider } from 'react-redux';
import { store } from './store';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Container, InnerContent } from './styles/StyleModule';
import Profile from './pages/Profile';
import Work from './pages/Work';
import { AnimatePresence, motion } from 'framer-motion';

const AppContent = () => {
  const profileMode = useSelector(
    (state: RootState) => state.theme.profileMode,
  );
  const isAnimating = useSelector(
    (state: RootState) => state.theme.isAnimating,
  );

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '-99%' : '99%',
      scale: 0.8,
      transition: {
        x: { type: 'tween', duration: 0.5 },
        scale: { type: 'tween', duration: 0, delay: 0.5 },
      },
    }),
    center: {
      x: 0,
      scale: 1,
      transition: {
        x: { type: 'tween', duration: 0.3 },
        scale: { type: 'tween', duration: 0.8, delay: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '99%' : '-99%',
      scale: 0.8,
      transition: {
        x: { type: 'tween', duration: 0.3 },
        scale: { type: 'tween', duration: 0 },
      },
    }),
  };

  const direction = profileMode ? 1 : -1;

  return (
    <Container isAnimating={isAnimating}>
      <AnimatePresence
        initial={false}
        mode="wait"
        custom={direction}
        onExitComplete={() => {
          // 애니메이션 끝났을 때 추가적인 작업을 여기에 넣을 수 있음
        }}
      >
        <motion.div
          key={profileMode ? 'profile' : 'work'}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <InnerContent isAnimating={isAnimating}>
            {profileMode ? <Profile /> : <Work />}
          </InnerContent>
        </motion.div>
      </AnimatePresence>
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
