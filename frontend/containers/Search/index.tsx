import { useState } from 'react';
import Input from '../../components/Input';

import styles from '../../styles/Search.module.css';

const Search = () => {
  const [valid, setValid] = useState(false);

  const Enter = async (e) => {
    const { value } = e.target;

    if (e.keyCode === 13) {
      setValid(true);
      setTimeout(() => {
        setValid(false);
      }, 3000);
    }
  }

  return (
    <div className={styles.container}>
      <Input notValid={valid} placeholder="Поиск" inputMode="search" onKeyDown={Enter} />
    </div>
  )
};

export default Search;