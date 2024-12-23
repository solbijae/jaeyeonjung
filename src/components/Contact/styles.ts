import styled from 'styled-components';

interface ItemProps {
  isHovered: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.margin.desktop_text_gap};
  margin-left: ${({ theme }) => theme.margin.desktop_section_indent};
  padding: ${({ theme }) => theme.padding.desktop_section} 0;
  cursor: pointer;
`;

export const Item = styled.div<ItemProps>`
  flex: ${({ isHovered }) => isHovered ? 1 : 0.5};
  transition: flex 0.3s ease;
`;

export const ContactInfo = styled.a``;