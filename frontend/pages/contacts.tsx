import Head from 'next/head';

import styles from '../styles/Login.module.css';

function Contacts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Controll | Контакты</title>
      </Head>
      <h1>Контакты</h1>
    </div>
  );
}

export default Contacts;
