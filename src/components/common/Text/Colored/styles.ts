import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  padding: ${({ theme }) => theme.padding.desktop_text_inner};
  margin-right: ${({ theme }) => theme.margin.desktop_text_gap};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
