import React from 'react';

import Articles from './Articles';
import ContactForm from './ContactForm';
import HighlightVideo from './HighlightVideo';

import styles from './Home.module.css';

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.Home}>
        <h1 className={styles.Title}>Iglesia Vida y Familia</h1>
      </div>
      <Articles />
      <ContactForm />
      <HighlightVideo />
    </React.Fragment>
  );
};

export default Home;
