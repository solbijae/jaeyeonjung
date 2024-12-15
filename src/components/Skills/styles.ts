import styled from 'styled-components';

export const Container = styled.div`
  margin-left: ${({theme}) => theme.margin.desktop_section_title};
`;

export const SkillsWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled.p`
  padding-right: ${({theme}) => theme.padding.desktop_text};

`;