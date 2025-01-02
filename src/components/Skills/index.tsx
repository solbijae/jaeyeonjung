import * as S from './styles';
import TransparentText from '../common/Text/Transparent';
import useFetchData from '../../hooks/useFetchData';
import { SkillsType } from '../../types/skills';
import { ThemeConfig } from '../../styles/ThemeConfig';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Skills = () => {
  const { data: skills } = useFetchData<SkillsType>('data/skills.json');
  const bnwTheme = useSelector((state: RootState) => state.theme.bnwTheme);
  const currentMode = bnwTheme ? 'bnw' : 'color';
  const theme = ThemeConfig(currentMode);

  return (
    <S.Container>
      {skills &&
        (Object.keys(skills) as (keyof SkillsType)[]).map((key) => (
          <S.SkillsWrap>
            <S.Title>{key}</S.Title>
            {skills[key].map((data, index) => (
              <TransparentText 
                key={index}
                customStyle={{
                  backgroundColor: theme.colors.textBox,
                  color: theme.colors.textDark,
                  border: `1px solid ${theme.colors.textBoxBorder}`
                }}
              >{data}</TransparentText>
            ))}
          </S.SkillsWrap>
        ))}
    </S.Container>
  );
};

export default Skills;
