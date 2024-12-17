import * as S from './styles';
import useFetchData from '../../hooks/useFetchData';
import { ProjectsType } from '../../types/projects';
import SectionTitle from '../common/SectionTitle';
import TransparentText from '../common/Text/Transparent';
import ColoredText from '../common/Text/Colored';

const Project = () => {
  const { data } = useFetchData<ProjectsType>('/data/projects.json');

  return (
    <S.Container>
      {data?.projects &&
        data.projects.map((project) => (
          <SectionTitle key={project.type} name={project.type}>
            {project.items &&
              project.items.map((item) => (
                <div key={item.name}>
                  <S.ProjectName>{item.name}</S.ProjectName>
                  {item.skills && item.skills.length > 0 && (
                    <S.SkillsWrap>
                      {item.skills.map((skill, index) => (
                        <TransparentText key={index}>{skill}</TransparentText>
                      ))}
                    </S.SkillsWrap>
                  )}
                  <S.ProjectAbout>{item.about}</S.ProjectAbout>
                  {item.images && item.images.length > 0 && (
                    <S.ImagesWrap>
                      {item.images.map((image, index) => (
                        <S.Image key={index} src={`/images/${image}.png`} alt={`image-${index}`} />
                      ))}
                    </S.ImagesWrap>
                  )}
                  {item.visit && 
                    <ColoredText><a href={item.visit} target="_blank" rel="noopener noreferrer">Visit</a></ColoredText>
                  }
                  {item.github && 
                    <ColoredText><a href={item.github} target="_blank" rel="noopener noreferrer">GitHub</a></ColoredText>
                  }
                </div>
              ))}
          </SectionTitle>
        ))
      }
    </S.Container>
  );
}

export default Project;
