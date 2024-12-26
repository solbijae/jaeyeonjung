import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

export const SectionWrap = styled.div`
  display: flex;
  align-items: center;

  hr {
    flex: 1;
  }
`;

export const Title = styled.div`
  padding-right: ${({ theme }) => theme.padding.desktop_section_title};
  ${({ theme }) => theme.typo.desktop_body_20_B};
  color: ${({ theme }) => theme.colors.text};
`;
