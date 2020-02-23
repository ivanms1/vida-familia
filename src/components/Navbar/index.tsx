import React from 'react';
import { Menu } from 'antd';

import logo from '../../assets/logo.jpeg';

import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <img className={styles.Logo} src={logo} alt='logo' />
      <Menu mode='horizontal' className={styles.Menu}>
        <Menu.Item key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/blogs'> Blogs</Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/church'>Iglesia</Link>
        </Menu.Item>
        <Menu.Item key='4'>
          <Link to='/contact'>Contacto</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
