import NavItem from '../../components/NavItem';
import Search from '../Search';

import styles from '../../styles/Navigation.module.css';

const NavigationMenu = () => {
  return (
    <>
      <nav className={styles.container}>
        <NavItem href="/" value="Главная" />
        <NavItem href="/docs" value="Документация" />
        <NavItem href="/testing" value="Тестирование" />
        <Search />
      </nav>
    </>
  )
};

export default NavigationMenu;