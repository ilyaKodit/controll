import NavItem from '../../components/NavItem';
import Search from '../Search';

import styles from '../../styles/Navigation.module.css';

const NavigationMenu = () => {
  return (
    <>
      <nav className={styles.container}>
        <NavItem href="/" value="Главная" />
        <NavItem href="/docs" value="Документация" />
        <NavItem href="/contacts" value="Связаться с нами" />
        <Search />
      </nav>
    </>
  )
};

export default NavigationMenu;