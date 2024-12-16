import * as S from './styles';
import { useState } from 'react';

const Theme = () => {
  const [profileMode, setProfileMode] = useState(true);

  const toggleHandler = () => {
    setProfileMode((prev) => !prev);
  };

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

export default Theme;
