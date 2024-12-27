import * as S from './styles';
import Tabs from './Tabs';
import Theme from './Theme';

const Mode = () => {
  return (
    <S.Container>
      <S.ThemeWrapper>
        <Theme />
      </S.ThemeWrapper>
      <S.TabsWrapper>
        <Tabs />
      </S.TabsWrapper>
    </S.Container>
  );
};

export default Mode;