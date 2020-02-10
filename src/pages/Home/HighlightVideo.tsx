import React from 'react';

import styles from './Home.module.css';

const HighlightVideo = () => {
  return (
    <div className={styles.HighlightVideo}>
      <h1>Video Destacado</h1>
      <iframe
        title='highligth video'
        src='https://player.vimeo.com/video/235215203'
        allowFullScreen
        width='1000'
        height='562'
      ></iframe>
    </div>
  );
};

export default HighlightVideo;
