import { css } from 'styled-components';
const typoCreator = (
  fontSize: string,
  fontWeight: number,
  letterSpacing: string,
  lineHeight: string,
) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
  `;
};
export const ThemeConfig = {
  colors: {
    white: '#FFFFFF',
    gray: '#656565',
    black: '#000000',
  },
  shadows: {},
  typo: {
    desktop_title: typoCreator('10rem', 900, 'normal', 'normal'),
    desktop_description: typoCreator('1.5rem', 700, 'normal', '1.5'),
    desktop_body_20_B: typoCreator('1.5rem', 700, 'normal', 'normal'),
    desktop_body_20_R: typoCreator('1.25rem', 400, 'normal', 'normal'),
    desktop_body_16_B: typoCreator('1.25rem', 700, 'normal', 'normal'),
    desktop_body_16_R: typoCreator('1.1rem', 400, 'normal', '1.5'),
    desktop_body_12_R: typoCreator('0.75rem', 400, 'normal', '1.5'),
    desktop_impt: typoCreator('4rem', 900, 'normal', 'normal'),
    desktop_mode: typoCreator('2rem', 900, 'normal', 'normal'),
  },

  margin: {
    desktop_title: '3rem',
    desktop_section_title: '6rem',
    desktop_section_indent: '5.7rem',
    desktop_subtitle: '1rem',
    desktop_text_gap: '0.5rem',
    desktop_footer: '8rem',
  },

  padding: {
    desktop_project: '5.5rem',
    desktop_section: '3.5rem',
    desktop_section_title: '1rem',
    desktop_text_inner: '0.5rem',
  },
};
export type TColor = keyof (typeof ThemeConfig)['colors'];
