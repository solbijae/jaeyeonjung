import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.margin.desktop_footer};
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const CopyRight = styled.p`
  ${({ theme }) => theme.typo.desktop_body_12_R};
  color: ${({ theme }) => theme.colors.gray};
`;