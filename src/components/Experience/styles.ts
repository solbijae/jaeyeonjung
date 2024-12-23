import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.desktop_text_gap};
  margin-left: ${({ theme }) => theme.margin.desktop_section_indent};
  padding: ${({ theme }) => theme.padding.desktop_section} 0;
  ${({ theme }) => theme.typo.desktop_body_16_R};
`;

export const ItemWrap = styled.div`
  &:not(:first-child) {
    padding-top: ${({ theme }) => theme.padding.desktop_section};
  }
`;

export const Company = styled.p`
  padding-bottom: ${({ theme }) => theme.padding.desktop_section_title};
  ${({ theme }) => theme.typo.desktop_body_16_B};
`;

export const ItemTitleWrap = styled.div`
  ${({ theme }) => theme.typo.desktop_body_16_B};
  padding-bottom: ${({ theme }) => theme.padding.desktop_text_inner};
`;

export const Position = styled.span``;

export const Dates = styled.span``;

export const Roles = styled.div``;

export const Role = styled.div`
  padding-bottom: ${({ theme }) => theme.padding.desktop_text_inner};
`;

export const RoleTitle = styled.p``;

export const Responsibilities = styled.ul``;

export const Responsibility = styled.li`
  padding-left: ${({ theme }) => theme.padding.desktop_text_inner};
`;
