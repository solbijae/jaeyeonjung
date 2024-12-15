import Title from '../components/common/TItle';
import Description from '../components/Description';
import SectionTitle from '../components/common/SectionTitle';
import Skills from '../components/Skills';

const Profile = () => {
  return(
    <>
      <Title />
      <Description />
      <SectionTitle name={"SKILLS"}>
        <Skills />
      </SectionTitle>
    </>
  );
}

export default Profile;