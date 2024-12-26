import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  margin: ${({ theme }) => theme.margin.desktop_section_title} auto;
  ${({ theme }) => theme.typo.desktop_description};
  color: ${({ theme }) => theme.colors.text};
`;
