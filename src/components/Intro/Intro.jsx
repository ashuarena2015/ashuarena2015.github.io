import React from 'react';
import Layout from '../Layout';
import styles from './Intro.less';
import IntroRightImg from '../assets/images/intro_right.png';

const Introduction = () => {
  const getResume = () => {
    console.log('getResume');
    window.open('https://drive.google.com/file/d/1cUF3GW7pNVolgntSF9KU8DhXdvkG-bzw/view?usp=drive_link', '_blank');
  };
  return (
    <Layout>
      <div className={styles.introBox}>
        <div className={styles.left_section}>
          <h1>
            I AM, ASHUTOSH KUMAR
          </h1>
          <p style={{ fontSize: '2rem', margin: 0 }}>Senior Software Engineer</p>
          <p>
            Senior Front-End Developer with over 10+ years of professional
            experience focusing on React- based applications.
            <br />
            {' '}
            Proficient with JavaScript and Git. Developed and owned
            different modules for onboarding and Sales related features.
            <br />
            Experience in working on Micro frontend services. Handling and
            assisting Team.
          </p>
          <button
            onClick={() => getResume()}
            style={{ width: '200px' }}
            type="button">
            Download CV
          </button>
        </div>
        <div className={styles.right_section}>
          <img src={IntroRightImg} alt="Ashutosh" />
        </div>
      </div>
    </Layout>
  );
};
export default Introduction;
