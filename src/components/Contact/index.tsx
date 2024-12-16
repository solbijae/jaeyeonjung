import * as S from './styles';
import TransparentText from '../common/Text/Transparent';

const Contact = () => {
  return (
    <S.Container>
      <TransparentText>
        <S.ContactInfo href="mailto:jaeyeonjung3@gmail.com">EMAIL</S.ContactInfo>
      </TransparentText>
      <TransparentText>
        <S.ContactInfo
          href="https://www.linkedin.com/in/jungjaeyeon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </S.ContactInfo>
      </TransparentText>
      <TransparentText>
        <S.ContactInfo
          href="https://github.com/solbijae"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </S.ContactInfo>
      </TransparentText>
    </S.Container>
  );
};

export default Contact;
