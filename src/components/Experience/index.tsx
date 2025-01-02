import * as S from './styles';
import { useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { ExperienceType } from '../../types/experience';
import TransparentText from '../common/Text/Transparent';
import { ThemeConfig } from '../../styles/ThemeConfig';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Experience = () => {
  const { data } = useFetchData<ExperienceType>('data/experience.json');
  const bnwTheme = useSelector((state: RootState) => state.theme.bnwTheme);
  const currentMode = bnwTheme ? 'bnw' : 'color';
  const theme = ThemeConfig(currentMode);


  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <S.Container>
      {data?.experience &&
        data.experience.map((item, index) => (
          <S.ItemWrap>
            <S.Company>{item.company}</S.Company>
            <TransparentText 
              key={index}
              customStyle={{
                backgroundColor: theme.colors.textBox,
                color: theme.colors.textDark,
                border: `1px solid ${theme.colors.textBoxBorder}`
              }}
            >
              <S.ItemTitleWrap>
                <S.Position>{item.position} &nbsp;</S.Position>
                <S.Dates>({item.dates})</S.Dates>
              </S.ItemTitleWrap>
              {item.roles && (
                <S.Roles>
                  {item.roles.map((role, roleIndex) => (
                    <S.Role key={roleIndex}>
                      <S.RoleTitle>{role.title}</S.RoleTitle>
                      <S.Responsibilities>
                        {role.responsibilities.map((resp, respIndex) => (
                          <S.Responsibility key={respIndex}>
                            - {resp}
                          </S.Responsibility>
                        ))}
                      </S.Responsibilities>
                    </S.Role>
                  ))}
                </S.Roles>
              )}
              {item.responsibilities && (
                <S.Responsibilities>
                  {item.responsibilities.map((resp, respIndex) => (
                    <S.Responsibility key={respIndex}>
                      - {resp}
                    </S.Responsibility>
                  ))}
                </S.Responsibilities>
              )}
            </TransparentText>
          </S.ItemWrap>
        ))}
    </S.Container>
  );
};

export default Experience;
