import React from 'react';
import { Icon, Divider } from 'antd';

import styles from './Home.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        <h1>Iglesia Vida y Familia</h1>
        <p className={styles.FooterParagraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          necessitatibus cum ullam praesentium similique delectus ipsam, aperiam
          totam laboriosam reiciendis?
        </p>
      </div>
      <div className={styles.FooterRight}>
        <div className={styles.Icons}>
          <a href='https:'>
            <Icon type='facebook' />
          </a>
          <a href='https'>
            <Icon type='twitter' />
          </a>
          <a href='https'>
            <Icon type='instagram' />
          </a>
          <a href='https'>
            <Icon type='youtube' />
          </a>
        </div>
        <div className={styles.FooterLinks}>
          <span>partners</span>
          <Divider type='vertical' />
          <span>cursos</span>
          <Divider type='vertical' />
          <span>eventos</span>
        </div>
        <div className={styles.Copyright}>
          Copyright © 2020 Iglesia Vida y Familia, INC. Todos derechos
          reservados
        </div>
      </div>
    </div>
  );
};

export default Footer;
