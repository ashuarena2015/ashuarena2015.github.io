import React from 'react';
import Layout from '../Layout';
import styles from './Work.less';

const Work = () => (
  <Layout>
    <div className={styles.introBox}>
      <div className={styles.left_section}>
        <h1>My Works</h1>
        <p>
          Here are some of my works.
        </p>
      </div>
    </div>
  </Layout>
);

export default Work;
