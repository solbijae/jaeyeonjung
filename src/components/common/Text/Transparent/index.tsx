import { ReactNode, CSSProperties } from 'react';
import * as S from './styles';

interface TransparentTextProps {
  customStyle?: CSSProperties;
  hoverStyle?: CSSProperties;
  children?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const TransparentText = ({
  customStyle,
  hoverStyle,
  children,
  onMouseEnter,
  onMouseLeave,
}: TransparentTextProps) => {
  return (
    <S.Container
      style={customStyle}
      hoverStyle={hoverStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </S.Container>
  );
};

export default TransparentText;
