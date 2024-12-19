import styled from 'styled-components';

interface ContainerProps {
  customStyle?: React.CSSProperties; // React의 CSSProperties 사용
  hoverStyle?: React.CSSProperties; // React의 CSSProperties 사용
}

export const Container = styled.div.attrs<ContainerProps>(({ customStyle }) => ({
  style: customStyle,
}))<ContainerProps>`
  padding: ${({ theme }) => theme.padding.desktop_text_inner};
  margin-right: ${({ theme }) => theme.margin.desktop_text_gap};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;

  &:hover {
    ${({ hoverStyle }) => hoverStyle && { ...hoverStyle }}
  }
`;
