import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.margin.desktop_section_title};
  color: ${({ theme }) => theme.colors.text};
`;

export const ItemWrapper = styled.div<{ hasMultipleItems: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.desktop_text_gap};
  margin-left: ${({ theme }) => theme.margin.desktop_section_indent};
  padding: ${({ theme }) => theme.padding.desktop_project} 0;
  ${({ theme }) => theme.typo.desktop_body_16_R};

  ${({ hasMultipleItems }) =>
    hasMultipleItems &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.light};

      &:last-child {
        border-bottom: none;
      }
    `}
`;

export const ProjectName = styled.p`
  padding-bottom: ${({ theme }) => theme.padding.desktop_section_title};
  ${({ theme }) => theme.typo.desktop_body_16_B};
`;

export const SkillsWrap = styled.div`
  display: flex;
  padding-bottom: ${({ theme }) => theme.padding.desktop_section};
`;

export const MainWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.margin.desktop_section_indent};
`;

export const ProjectAbout = styled.p`
  padding-bottom: ${({ theme }) => theme.padding.desktop_section_title};
  width: 33%;
`;

export const ImagesWrap = styled.div`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.margin.desktop_text_gap};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 20rem;
  height: 15rem;
  object-position: top;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.textBoxBorder};
  /* transform: translate(-35%, -120%) rotate(2deg); */

  &:first-child {
    /* transform: translate(-70%,-75%) rotate(-3deg); */
    z-index: 1;
  }
`;

export const LinkWrap = styled.div`
  display: flex;
`;
