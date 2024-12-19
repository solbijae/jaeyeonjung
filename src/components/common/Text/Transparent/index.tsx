import { ReactNode, CSSProperties } from 'react';
import * as S from './styles';

interface TransparentTextProps {
  customStyle?: CSSProperties; // React의 CSSProperties를 사용
  hoverStyle?: CSSProperties; // hover 상태의 스타일 추가
  children?: ReactNode;
}

const TransparentText = ({ customStyle, hoverStyle, children }: TransparentTextProps) => {
  return (
    <S.Container style={customStyle} hoverStyle={hoverStyle}>
      {children}
    </S.Container>
  );
};

export default TransparentText;
