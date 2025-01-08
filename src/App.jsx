import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.less';
import Routes from './components/Routes';
import Nav from './components/Nav';

function App() {
  return (
    <div className={`${styles.app_container} ${styles['montserrat-alternates-regular']}`}>
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
