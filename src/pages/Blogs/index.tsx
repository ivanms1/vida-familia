import React from 'react';

import styles from './Blogs.module.css';

const Blogs = () => {
  return (
    <div className={styles.Blogs}>
      <h1>Blogs</h1>
      <div className={styles.Bloggers}>
        <div className={styles.Blogger}>
          <a href='/blogs/charles'>
            <img
              src='https://prabook.com/web/show-photo.jpg?id=1577995'
              alt='charles'
            />
          </a>

          <h2>Charles Spurgeon</h2>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, porro?
          </span>
        </div>
        <div className={styles.Blogger}>
          <a href='/blogs/loren'>
            <img
              src='https://global-conference.transformourworld.org/wp-content/uploads/2019/06/Loren-Cunnigham.jpg'
              alt='loren'
            />
          </a>

          <h2>Loren Cunningham</h2>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
            possimus.
          </span>
        </div>
        <div className={styles.Blogger}>
          <a href='/blogs/john'>
            <img
              src='https://sdejesucristo.org/wp-content/uploads/2016/03/Koe59z5d.jpg'
              alt='loren'
            />
          </a>

          <h2>John Piper</h2>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
            porro?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
