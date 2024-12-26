import * as S from './styles';
import { useState } from 'react';

const Theme = () => {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(prev => prev + 180);
  }

  return (
    <S.Container>
      <S.Circle onClick={handleClick}>
        <S.Semicircle $rotation={rotation} />
      </S.Circle>
    </S.Container>
  );
};

export default Theme;
