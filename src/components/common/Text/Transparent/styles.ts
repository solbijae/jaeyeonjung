import styled from 'styled-components';

interface ContainerProps {
  customStyle?: React.CSSProperties; // React의 CSSProperties 사용
  hoverStyle?: React.CSSProperties; // React의 CSSProperties 사용
}

export const Container = styled.div.attrs<ContainerProps>(
  ({ customStyle }) => ({
    style: customStyle,
  }),
)<ContainerProps>`
  padding: ${({ theme }) => theme.padding.desktop_text_inner};
  margin-right: ${({ theme }) => theme.margin.desktop_text_gap};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 5px;
  /* color: ${({ theme }) => theme.colors.text}; */
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  a {
    color: inherit;
  }

  &:hover {
    ${({ hoverStyle }) => hoverStyle && { ...hoverStyle }}
  }
`;
