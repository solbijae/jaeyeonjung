import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* 원하는 높이 설정 */
`;

export const CopyRight = styled.p`
  ${({ theme }) => theme.typo.desktop_body_12_R};
  color: ${({ theme }) => theme.colors.gray};
`;