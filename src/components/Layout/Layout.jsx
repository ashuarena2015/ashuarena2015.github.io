import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.less';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.layout_container}>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.objectOf,
};

export default Layout;
