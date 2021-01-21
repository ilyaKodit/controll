import styles from '../../styles/Header.module.css';

import NavigationMenu from '../NavigationMenu';
import AuthMenu from '../AuthMenu';

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <NavigationMenu />
        <AuthMenu />
      </header>
    </>
  );
}
