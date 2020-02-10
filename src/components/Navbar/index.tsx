import React from 'react';
import { Menu } from 'antd';

import logo from '../../assets/logo.jpeg';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <img className={styles.Logo} src={logo} alt='logo' />
      <Menu mode='horizontal' className={styles.Menu}>
        <Menu.Item key='1'>Home</Menu.Item>
        <Menu.Item key='2'>Blog</Menu.Item>
        <Menu.Item key='3'>Iglesia</Menu.Item>
        <Menu.Item key='4'>Contacto</Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
