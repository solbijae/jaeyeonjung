import * as S from './styles';
import TransparentText from '../common/Text/Transparent';
import useFetchData from '../../hooks/useFetchData';
import { SkillsType } from '../../types/skills';

const Skills = () => {
  const { data } = useFetchData<SkillsType>('/data/skills.json');

  return (
    <S.Container>
      {data && 
        (Object.keys(data) as (keyof SkillsType)[]).map((key) => (
          <S.SkillsWrap>
            <S.Title>{key}</S.Title>
            {data[key].map((value, index) => (
              <TransparentText key={index}>{value}</TransparentText>
            ))}
          </S.SkillsWrap>
        ))
      }
    </S.Container>
  );
}

export default Skills;