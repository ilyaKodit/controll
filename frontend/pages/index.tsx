import Head from 'next/head';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Task Manager</title>
      </Head>
      <h1>Главная</h1>
    </div>
  );
}

export default Home;
