import React, { useEffect, useRef } from 'react';
import * as S from './styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useFetchData from '../../hooks/useFetchData';
import { ProjectsType } from '../../types/projects';
import SectionTitle from '../common/SectionTitle';
import TransparentText from '../common/Text/Transparent';
import ColoredText from '../common/Text/Colored';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const { data } = useFetchData<ProjectsType>('/data/projects.json');
  const imageRefs = useRef<{ [key: string]: HTMLImageElement[] }>({});

  useEffect(() => {
    Object.values(imageRefs.current).forEach((projectImages) => {
      // 각 프로젝트 이미지 그룹에 대해 별도의 타임라인 생성
      const tl = gsap.timeline({
        paused: true,
        defaults: { duration: 0.5 },
      });

      projectImages.forEach((image, index) => {
        if (image) {
          const transformTo =
            index === 0
              ? 'translate(-70%, -65%) rotate(-3deg)'
              : 'translate(-35%, -100%) rotate(2deg)';

          const defaultTransform = 'translate(-50%, -100%)';

          // 초기 상태 설정
          gsap.set(image, {
            transform: defaultTransform,
          });

          // 각 이미지에 대한 ScrollTrigger 생성
          ScrollTrigger.create({
            trigger: image,
            // 트리거 영역을 좀 더 위쪽으로 조정
            start: 'top 85%', // 요소가 화면 하단 근처에 도달했을 때
            end: 'bottom 15%', // 요소가 화면 상단 근처를 벗어나기 직전
            onToggle: (self) => {
              if (self.isActive) {
                // 뷰포트 안에 있을 때
                gsap.to(image, {
                  transform: transformTo,
                  duration: 0.5,
                  overwrite: true,
                });
              } else {
                // 뷰포트 밖에 있을 때
                gsap.to(image, {
                  transform: defaultTransform,
                  duration: 0.5,
                  overwrite: true,
                });
              }
            },
            // toggleActions를 사용하여 스크롤 방향에 관계없이 일관된 동작 보장
            toggleActions: 'play none play reverse',
          });
        }
      });
    });
  }, [data]);

  return (
    <S.Container>
      {data?.projects &&
        data.projects.map((project) => (
          <SectionTitle key={project.type} name={project.type}>
            {project.items &&
              project.items.map((item) => (
                <S.ItemWrapper
                  key={item.name}
                  hasMultipleItems={project.items.length > 1}
                >
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
                        <S.Image
                          key={`${item.name}-${index}`}
                          ref={(el) => {
                            if (el) {
                              // 각 프로젝트의 이미지들을 개별적으로 관리
                              if (!imageRefs.current[item.name]) {
                                imageRefs.current[item.name] = [];
                              }
                              imageRefs.current[item.name][index] = el;
                            }
                          }}
                          src={`/images/${image}.png`}
                          alt={`image-${index}`}
                        />
                      ))}
                    </S.ImagesWrap>
                  )}
                  <S.LinkWrap>
                    {item.visit && (
                      <ColoredText>
                        <a
                          href={item.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit
                        </a>
                      </ColoredText>
                    )}
                    {item.github && (
                      <ColoredText>
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </ColoredText>
                    )}
                  </S.LinkWrap>
                </S.ItemWrapper>
              ))}
          </SectionTitle>
        ))}
    </S.Container>
  );
};

export default Project;
