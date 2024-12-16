import * as S from './styles';
import useFetchData from '../../hooks/useFetchData';
import { EducertType } from '../../types/educert';
import TransparentText from '../common/Text/Transparent';

const EduCert = () => {
  const { data } = useFetchData<EducertType>('/data/educert.json');

  return (
    <S.Container>
      <TransparentText>
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
