import * as S from './styles';
import TransparentText from '../common/Text/Transparent';
import { useState } from 'react';

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { href: "mailto:jaeyeonjung3@gmail.com", text: "EMAIL" },
    { href: "https://www.linkedin.com/in/jungjaeyeon/", text: "LINKEDIN" },
    { href: "https://github.com/solbijae", text: "GITHUB" }
  ];

  return (
    <S.Container>
      {items.map((item, index) => (
        <S.Item
          key={index}
          isHovered={hoveredIndex === index}
        >
          <TransparentText
            customStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '7rem',
              width: '100%'
            }}
            hoverStyle={{
              backgroundColor: 'black',
              color: 'white',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <S.ContactInfo 
              href={item.href}
              target={item.href.startsWith('http') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
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