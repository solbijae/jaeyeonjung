import { ReactNode } from 'react';
import * as S from './styles';

interface ColoredTextProps {
  children?: ReactNode;
}

const ColoredText = ({ children }: ColoredTextProps) => {
  return <S.Container>{children}</S.Container>;
}

export default ColoredText;