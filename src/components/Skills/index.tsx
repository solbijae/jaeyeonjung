import * as S from './styles';
import TransparentText from '../common/Text/Transparent';
import useFetchData from '../../hooks/useFetchData';
import { SkillsType } from '../../types/skills';

const Skills = () => {
  const { data: skills } = useFetchData<SkillsType>('/data/skills.json');

  return (
    <S.Container>
      {skills &&
        (Object.keys(skills) as (keyof SkillsType)[]).map((key) => (
          <S.SkillsWrap>
            <S.Title>{key}</S.Title>
            {skills[key].map((data, index) => (
              <TransparentText key={index}>{data}</TransparentText>
            ))}
          </S.SkillsWrap>
        ))}
    </S.Container>
  );
};

export default Skills;
