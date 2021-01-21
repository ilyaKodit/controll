import NavItem from '../../components/NavItem';
import Search from '../Search';

import styles from '../../styles/Navigation.module.css';

const inputStyles = {
  height: '30px',
}

const NavigationMenu = () => {
  return (
    <>
      <nav className={styles.container}>
        <NavItem href="/" value="Главная" />
        <NavItem href="/login" value="Документация" />
        <Search />
      </nav>
    </>
  )
};

export default NavigationMenu;