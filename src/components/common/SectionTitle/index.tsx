import { ReactNode } from 'react';
import * as S from './styles';

interface SectionTitleProps {
  name: string;
  children?: ReactNode;
}

const SectionTitle = ({ name, children }: SectionTitleProps) => {
  return (
    <S.Container>
      <S.SectionWrap>
        <S.Title>{name}</S.Title>
        <hr />
      </S.SectionWrap>
      {children}
    </S.Container>
  );
};

export default SectionTitle;
