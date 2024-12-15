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
    black: '#000000',
  },
  shadows: {},
  typo: {
    desktop_title: typoCreator('8rem', 900, 'normal', 'normal'),
    desktop_description: typoCreator('1.5rem', 900, 'normal', 'normal'),
    desktop_body_B: typoCreator('1.25rem', 700, 'normal', 'normal'),
    desktop_body_R: typoCreator('1.25rem', 400, 'normal', 'normal'),
    desktop_impt: typoCreator('4rem', 900, 'normal', 'normal'),
    desktop_mode: typoCreator('2rem', 900, 'normal', 'normal'),
  },

  margin: {
    desktop_title: '5rem',
    desktop_section_title: '4.2rem',
  },

  padding: {
    desktop_section_title: '1rem',
    desktop_text: '0.5rem'

  }
};
export type TColor = keyof (typeof ThemeConfig)['colors'];
