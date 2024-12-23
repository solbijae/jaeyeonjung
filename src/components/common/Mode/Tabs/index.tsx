import * as S from './styles'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setAnimating } from '../../../../store/slices/themeSlice';
import { RootState } from '../../../../store';

const Tabs = () => {
  const dispatch = useDispatch();
  const profileMode = useSelector((state: RootState) => state.theme.profileMode);
  const isAnimating = useSelector((state: RootState) => state.theme.isAnimating);

  const toggleHandler = () => {
    dispatch(setAnimating(true));
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        dispatch(setAnimating(false));
        dispatch(toggleTheme());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [profileMode]);

  return (
    <S.Container>
      <S.CheckBox
        type="checkbox"
        id="toggleBtn"
        onChange={toggleHandler}
        checked={profileMode}
      />
      <S.ButtonLabel htmlFor="toggleBtn">
        <S.ToggleCircle profileMode={profileMode}>
          <S.CircleText profileMode={profileMode}>
            {profileMode
              ? Array(10).fill('PROFILE').join(' ')
              : Array(10).fill('WORK').join(' ')}
          </S.CircleText>
        </S.ToggleCircle>
      </S.ButtonLabel>
    </S.Container>
  );
};

export default Tabs;
