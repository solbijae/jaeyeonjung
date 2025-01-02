import * as S from './styles';
import useFetchData from '../../hooks/useFetchData';
import { EducertType } from '../../types/educert';
import TransparentText from '../common/Text/Transparent';
import { ThemeConfig } from '../../styles/ThemeConfig';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const EduCert = () => {
  const { data } = useFetchData<EducertType>('data/educert.json');
  const bnwTheme = useSelector((state: RootState) => state.theme.bnwTheme);
  const currentMode = bnwTheme ? 'bnw' : 'color';
  const theme = ThemeConfig(currentMode);
  
  return (
    <S.Container>
      <TransparentText
        customStyle={{
          backgroundColor: theme.colors.textBox,
          color: theme.colors.textDark,
          border: `1px solid ${theme.colors.textBoxBorder}`
        }}
      >
        {data?.edu_cert &&
          data.edu_cert.map((datum) => (
            <S.EduCertWrap>
              <S.Title>{datum.title}</S.Title>
              <S.Detail>
                <S.Institution>{datum.institution}&nbsp;</S.Institution>
                <S.Date>({datum.year})</S.Date>
              </S.Detail>
            </S.EduCertWrap>
          ))}
      </TransparentText>
    </S.Container>
  );
};

export default EduCert;
