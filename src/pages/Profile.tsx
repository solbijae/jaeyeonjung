// import Title from 'components/common/Title';
import Title from 'components/common/Title';
import Description from 'components/Description';
import SectionTitle from 'components/common/SectionTitle';
import Skills from 'components/Skills';
import Experience from 'components/Experience';
import EduCert from 'components/EduCert';
import Contact from 'components/Contact';
import Mode from 'components/common/Mode';
import Footer from 'components/common/Footer';

const Profile = () => {
  return (
    <>
      <Title />
      <Description />
      <SectionTitle name={'SKILLS'}>
        <Skills />
      </SectionTitle>
      <SectionTitle name={'EXPERIENCE'}>
        <Experience />
      </SectionTitle>
      <SectionTitle name={'EDUCATION / CERTIFICATION'}>
        <EduCert />
      </SectionTitle>
      <SectionTitle name={'CONTACT'}>
        <Contact />
      </SectionTitle>
      <Mode />
      <Footer />
    </>
  );
};

export default Profile;
