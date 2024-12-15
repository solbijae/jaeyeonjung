import { ReactNode } from 'react';
import * as S from './styles';

interface TransparentTextProps {
  children?: ReactNode;
}

const TransparentText = ({ children }: TransparentTextProps) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default TransparentText;