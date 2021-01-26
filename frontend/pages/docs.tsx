// import { GetServerSideProps } from 'next';
import Head from 'next/head';

import styles from '../styles/Login.module.css';

// interface Props {
//   login: string,
// }

function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Controll | Documentation</title>
      </Head>
      <h1>Documentation</h1>
    </div>
  );
}

export default Login;

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const res = await fetch('http://localhost:3000/api/login');
//   const checkLogin = await res.json();

//   return {
//     props: {
//       login: checkLogin.result,
//     }
//   }
// };
