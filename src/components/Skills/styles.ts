import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.desktop_subtitle};
  margin-left: ${({ theme }) => theme.margin.desktop_section_indent};
  padding: ${({ theme }) => theme.padding.desktop_section} 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const SkillsWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Title = styled.p`
  margin-right: ${({ theme }) => theme.margin.desktop_subtitle};
  ${({ theme }) => theme.typo.desktop_body_16_B};
`;
