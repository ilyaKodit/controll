import React, { useState, useEffect } from 'react';

import NavItem from '../../components/NavItem';
import Modal from '../../components/Modal';
import Input from '../../components/Input';

import { NEXT_URL } from '../../config';

import styles from '../../styles/AuthMenu.module.css';

import { validation } from '../../utils/validation';

const inputStyle = {
  width: '250px',
  height: '35px',
  display: 'block',
  margin: '5px auto',
}

const AuthMenu = () => {
  const [didMount, setDidMount] = useState(false);
  const [loginWindow, setLoginWindow] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  const [authEmail, setAuthLogin] = useState('');
  const [authPass, setAuthPass] = useState('');

  const [validAuth, setValidAuth] = useState({
    status: true,
    message: '',
  });

  const [regLogin, setRegLogin] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPass1, setRegPass1] = useState('');
  const [regPass2, setRegPass2] = useState('');
  
  const [validRegLogin, setValidRegLogin] = useState({
    status: true,
    message: '',
  });
  const [validRegEmail, setValidRegEmail] = useState({
    status: true,
    message: '',
  });
  const [validRegPass, setValidRegPass] = useState({
    status: true,
    message: '',
  });

  useEffect(() => setDidMount(true), []);

  useEffect(() => {
    if (didMount) validationRegLogin();
  }, [regLogin]);

  useEffect(() => {
    if (didMount) validationRegEmail();
  }, [regEmail]);

  useEffect(() => {
    if (didMount) validationRegPass();
  }, [regPass1, regPass2]);

  const ok = (): void => {
    if (isAuth) {
      auth();
    } else {
      registration();
    }
  };

  const cencel = (): void => {
    clearState();
    setIsAuth(true);
    setLoginWindow(false);
  };

  const clearState = (): void => {
    setAuthLogin('');
    setAuthPass('');
    setRegLogin('');
    setRegEmail('');
    setRegPass1('');
    setRegPass2('');
  };

  const validationRegLogin = (): void => {
    if (validation.login(regLogin).result) {
      setValidRegLogin({
        status: true,
        message: '',
      });
    } else {
      setValidRegLogin({
        status: false,
        message: validation.login(regLogin).message,
      });
    }
  };

  const validationRegEmail = (): void => {
    if (validation.email(regEmail).result) {
      setValidRegEmail({
        status: true,
        message: '',
      });
    } else {
      setValidRegEmail({
        status: false,
        message: validation.email(regEmail).message,
      });
    }
  };

  const validationRegPass = (): void => {
    if (validation.passwords(regPass1, regPass2).result && validation.password(regPass1).result) {
      setValidRegPass({
        status: true,
        message: '',
      });
    } else {
      
      if (!validation.password(regPass1).result) {
        setValidRegPass({
          status: false,
          message: validation.password(regPass1).message,
        });
      }

      if (!validation.passwords(regPass1, regPass2).result) {
        setValidRegPass({
          status: false,
          message: validation.passwords(regPass1, regPass2).message,
        });
      }
    }
  };

  const auth = async () => {
    const response = await fetch(`${NEXT_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ROUTER: 'auth',
        email: authEmail,
        password: authPass,
      }),
    });
    const user = await response.json();

    if (user.status === 200) {
      console.log('Пользователь найден, добро пожаловать');
      setValidAuth({
        status: true,
        message: '',
      });

      clearState();
      setIsAuth(true);
      setLoginWindow(false);
    } else {
      setValidAuth({
        status: false,
        message: 'Пользователь не найден',
      });
      setTimeout(() => {
        setValidAuth({
          status: true,
          message: '',
        });
      }, 6000);
    }
  };

  const registration = async () => {

    if (validRegLogin.status && validRegEmail.status && validRegPass.status) {
      if (regLogin !== '' && regEmail !== '' && regPass1 !== '') {
        const response = await fetch(`${NEXT_URL}/api/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ROUTER: 'registration',
            login: regLogin,
            email: regEmail,
            password: regPass1,
          }),
        });
        const user = await response.json();

        if (user.status === 200) {
          console.log(user.data);
          clearState();
          setIsAuth(true);
          setLoginWindow(false);
        }
    
        
      }
    }
  };

  return (
    <>
      <nav className={styles.container}>
        <NavItem value="Войти" onClick={() => {setLoginWindow(true)}} />
      </nav>
      <Modal
        isOpen={loginWindow}
        width="250px"
        minHeight="270px"
        ok={ok}
        okName={isAuth ? "Войти" : "Регистрация"}
        cencel={cencel}
        decoration
      >
        {isAuth ? (
          <>
            <p className={styles.modalTitle}>Авторизация</p>
            <Input 
              style={inputStyle} 
              placeholder="Введите почту" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthLogin(e.target.value)} 
              value={authEmail}
              notValid={!validAuth.status}
            />
            <Input 
              style={inputStyle} 
              type="password" 
              placeholder="Введите пароль"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthPass(e.target.value)}
              value={authPass}
              notValid={!validAuth.status}
              errMsg={!validAuth.status && validAuth.message}
            />
            <br/>
            <span className={styles.text}>или <a onClick={() => {setIsAuth(false)}}>зарегистрируйтесь</a></span>
          </>
        ) : (
          <>
            <p className={styles.modalTitle}>Регистрация</p>
            <Input 
              style={inputStyle} 
              placeholder="Введите ваш логин"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegLogin(e.target.value)}
              value={regLogin}
              notValid={!validRegLogin.status}
              errMsg={!validRegLogin.status && validRegLogin.message}
            />
            <Input 
              style={inputStyle}
              type="email"
              inputMode="email"
              placeholder="Введите вашу почту"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegEmail(e.target.value)}
              value={regEmail}
              notValid={!validRegEmail.status}
              errMsg={!validRegEmail.status && validRegEmail.message}
            />
            <Input 
              style={inputStyle}
              type="password"
              placeholder="Введите пароль"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegPass1(e.target.value)}
              value={regPass1}
              notValid={!validRegPass.status}
              errMsg={!validRegPass.status && validRegPass.message}
            />
            <Input 
              style={inputStyle}
              type="password"
              placeholder="Введите пароль еще раз"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegPass2(e.target.value)}
              value={regPass2}
              notValid={!validRegPass.status}
              errMsg={!validRegPass.status && validRegPass.message}
            />
            <br/>
            <span className={styles.text}>вурнуться к <a onClick={() => {setIsAuth(true)}}>авториациии</a></span>
          </>
        )}
        
      </Modal>
    </>
  )
};

export default AuthMenu;