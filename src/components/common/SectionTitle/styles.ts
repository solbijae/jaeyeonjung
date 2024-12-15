import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const SectionWrap = styled.div`
  width: 100%;
  display: flex;
  
  hr {
    flex: 1;

  }
`;

export const Title = styled.div`
  padding-right: ${({theme}) => theme.padding.desktop_section_title};
`;