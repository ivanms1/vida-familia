import React from 'react';

import styles from './Home.module.css';
import { Card } from 'antd';

const Articles = () => {
  return (
    <div className={styles.Articles}>
      <h1>Articulos recientes</h1>
      <div className={styles.ArticlesGrid}>
        <Card
          hoverable
          className={styles.Article}
          cover={
            <img
              alt='worship'
              src='https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3456&q=80'
            />
          }
        >
          <Card.Meta
            title='Lorem ipsum dolor sit amet.'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus, necessitatibus laudantium eveniet numquam sit.'
          />
        </Card>
        <Card
          hoverable
          className={styles.Article}
          cover={
            <img
              alt='iglesia'
              src='https://images.unsplash.com/photo-1515615424560-27cdb10de410?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80'
            />
          }
        >
          <Card.Meta
            title='Lorem ipsum dolor sit amet.'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus, necessitatibus laudantium eveniet numquam sit.'
          />
        </Card>
        <Card
          hoverable
          className={styles.Article}
          cover={
            <img
              alt='oracion'
              src='https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
            />
          }
        >
          <Card.Meta
            title='Lorem ipsum dolor sit amet.'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus, necessitatibus laudantium eveniet numquam sit.'
          />
        </Card>
      </div>
    </div>
  );
};

export default Articles;
