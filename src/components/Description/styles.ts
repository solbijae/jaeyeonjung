import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: ${({ theme }) => theme.margin.desktop_section_title} auto;

  text-align: center;
  ${({ theme }) => theme.typo.desktop_description}
`;