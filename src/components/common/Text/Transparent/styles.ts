import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.padding.desktop_text_inner};
  margin-right: ${({ theme }) => theme.margin.desktop_text_gap};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
`;
