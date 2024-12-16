import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.desktop_text_gap};
  margin-left: ${({ theme }) => theme.margin.desktop_section_indent};
  padding: ${({ theme }) => theme.padding.desktop_section} 0;
`;

export const SkillsWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Title = styled.p`
  margin-right: ${({ theme }) => theme.margin.desktop_text_gap};
  ${({ theme }) => theme.typo.desktop_body_16_B};
`;
