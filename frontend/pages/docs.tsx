// import { GetServerSideProps } from 'next';
import Head from 'next/head';

import styles from '../styles/Login.module.css';

// interface Props {
//   result: object,
// }

function Docs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Controll | Documentation</title>
      </Head>
      <h1>Документация</h1>
    </div>
  );
}

export default Docs;

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const response = await fetch('http://localhost:3000/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       login: 'gluk',
//       email: 'ilya.ilya.87@list.ru',
//       password: '123',
//     }),
//   });
//   const data = await response.json();

//   return {
//     props: {
//       result: data,
//     }
//   }
// };
