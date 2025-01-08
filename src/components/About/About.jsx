import React from 'react';
import Layout from '../Layout';
import styles from './About.less';
// import AboutRightImg from '../assets/images/about-us.png';

const About = () => (
  <Layout>
    <div className={styles.introBox}>
      <div className={styles.left_section}>
        <h1>About Me, </h1>
        <p>
          As a dedicated web developer with a penchant for innovation, I
          thrive on the ever-evolving landscape of web technologies, with
          ReactJS being my playground of choice.
        </p>
        <p>
          My journey began 2013-2015, sparking my fascination with crafting
          seamless user interfaces and scalable applications.
        </p>
        <div className={styles.flex_box_wrapper}>
          <div className={styles.flex_box}>
            <h3>Passion for ReactJS:</h3>
            <p>
              My love affair with ReactJS stems from its versatility and
              efficiency in creating dynamic, interactive web applications. The
              ability to architect robust solutions while maintaining a clean and
              modular codebase fuels my enthusiasm for every project.
            </p>
          </div>
          <div className={styles.flex_box}>
            <h3>Approach to Development:</h3>
            <p>
              My approach revolves around marrying creativity with functionality.
              I am a firm believer in user-centric design and adhere to industry
              best practices, ensuring each line of code contributes to a stellar
              user experience. Continuous Learning: In the ever-evolving tech
              sphere, I embrace the ethos of continuous learning. Beyond mastering
              ReactJS, I actively explore new frameworks, methodologies, and
              design patterns to stay at the forefront of web development trends.
            </p>
          </div>
        </div>
        <div className={styles.flex_box_wrapper}>
          <div className={styles.flex_box}>
            <h3>Collaborative Spirit:</h3>
            <p>
              Having collaborated with diverse teams, I value the synergy of
              teamwork. Communicative, adaptable, and receptive to feedback, I
              thrive in environments where ideas converge, fostering innovation.
            </p>
          </div>
          <div className={styles.flex_box}>
            <h3>Beyond Coding:</h3>
            <p>
              When I'm not crafting code, you might find me on cricket field or
              just sitting on my sofa and watching web series, providing a
              balanced perspective that enriches my problem-solving abilities and
              creativity in development. Conclusion: In essence, my dedication to
              creating seamless digital experiences, coupled with my passion for
              ReactJS, drives me to continually push boundaries and deliver
              solutions that resonate with users and exceed expectations.
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.right_section}>
        <img src={AboutRightImg} alt="Ashutosh" />
      </div> */}
    </div>
  </Layout>
);

export default About;
