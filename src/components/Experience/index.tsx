import * as S from './styles';
import { useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { ExperienceType } from '../../types/experience';
import TransparentText from '../common/Text/Transparent';

const Experience = () => {
  const { data } = useFetchData<ExperienceType>('/data/experience.json');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <S.Container>
      {data?.experience &&
        data.experience.map((item, index) => (
          <S.ItemWrap>
            <S.Company>{item.company}</S.Company>
            <TransparentText key={index}>
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
