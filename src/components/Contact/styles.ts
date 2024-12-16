import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.margin.desktop_text_gap};
  margin-left: ${({ theme }) => theme.margin.desktop_section_indent};
  padding: ${({ theme }) => theme.padding.desktop_section} 0;
`;

export const ContactInfo = styled.a``;
