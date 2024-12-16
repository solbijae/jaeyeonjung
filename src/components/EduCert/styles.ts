import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.desktop_text_gap};
  margin-left: ${({ theme }) => theme.margin.desktop_section_indent};
  padding: ${({ theme }) => theme.padding.desktop_section} 0;
`;

export const EduCertWrap = styled.div`
  padding-bottom: ${({ theme }) => theme.padding.desktop_text_inner};
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.desktop_body_16_B};
`;

export const Detail = styled.p``;

export const Institution = styled.span``;

export const Date = styled.span``;
