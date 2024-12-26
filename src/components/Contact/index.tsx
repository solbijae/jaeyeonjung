import * as S from './styles';
import TransparentText from '../common/Text/Transparent';
import { useState } from 'react';
import { ThemeConfig } from '../../styles/ThemeConfig';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { href: 'mailto:jaeyeonjung3@gmail.com', text: 'EMAIL' },
    { href: 'https://www.linkedin.com/in/jungjaeyeon/', text: 'LINKEDIN' },
    { href: 'https://github.com/solbijae', text: 'GITHUB' },
  ];

  const bnwTheme = useSelector((state: RootState) => state.theme.bnwTheme);
  const currentMode = bnwTheme ? 'bnw' : 'color';
  const theme = ThemeConfig(currentMode);

  return (
    <S.Container>
      {items.map((item, index) => (
        <S.Item key={index} isHovered={hoveredIndex === index}>
          <TransparentText
            customStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '7rem',
              width: '100%',
              fontSize: '2rem',
              fontWeight: '900',
              backgroundColor: theme.colors.textBox,
              color: theme.colors.textDark,
              border: `1px solid ${theme.colors.textBoxBorder}`
            }}
            hoverStyle={{
              backgroundColor: `${theme.colors.dark} !important`,
              color: `${theme.colors.background} !important`,
              border: `1px solid ${theme.colors.dark} !important`
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <S.ContactInfo
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={
                item.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
            >
              {item.text}
            </S.ContactInfo>
          </TransparentText>
        </S.Item>
      ))}
    </S.Container>
  );
};

export default Contact;
