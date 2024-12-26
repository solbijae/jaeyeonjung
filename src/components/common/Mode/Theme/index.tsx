import * as S from './styles';
import { useState } from 'react';
// import { UseDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../../store/slices/themeSlice';
// import { RootState } from '../../../../store';
import { useDispatch } from 'react-redux';

const Theme = () => {
  const dispatch = useDispatch();
  // const bnwTheme = useSelector(
  //   (state: RootState) => state.theme.bnwTheme,
  // )
  const [rotation, setRotation] = useState(0);

  const toggleHandler = () => {
    dispatch(toggleTheme());
    setRotation(prev => prev + 180);
  }

  return (
    <S.Container>
      <S.Circle onClick={toggleHandler}>
        <S.Semicircle $rotation={rotation} />
      </S.Circle>
    </S.Container>
  );
};

export default Theme;
