import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.less';

const Nav = () => (
  <div className={styles.nav}>
    <ul>
      <li>
        <Link className={styles.box} to="/intro">
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.box} to="/about">
          About us
        </Link>
      </li>
      <li>
        <Link className={styles.box} to="/work">
          Work
        </Link>
      </li>
      <li>
        <Link className={styles.box} to="/contact">
          Contacts
        </Link>
      </li>
    </ul>
  </div>
);

export default Nav;
