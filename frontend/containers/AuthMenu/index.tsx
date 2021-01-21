import React, { useState } from 'react';

import NavItem from '../../components/NavItem';
import Modal from '../../components/Modal';
import Input from '../../components/Input';

import styles from '../../styles/AuthMenu.module.css';

const inputStyle = {
  width: '250px',
  height: '35px',
  display: 'block',
  margin: '5px auto',
}

const AuthMenu = () => {
  const [loginWindow, setLoginWindow] = useState(false);
  const [auth, setAuth] = useState(true);

  const loginOk = () => {
    console.log('Ok');
    setLoginWindow(false);
  };

  const loginCencel = () => {
    console.log('Cencel');
    setAuth(true);
    setLoginWindow(false);
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
        ok={loginOk}
        okName={auth ? "Войти" : "Регистрация"}
        cencel={loginCencel}
        decoration
      >
        {auth ? (
          <>
            <p className={styles.modalTitle}>Авторизация</p>
            <Input style={inputStyle} placeholder="Введите логин" />
            <Input style={inputStyle} type="password" placeholder="Введите пароль" />
            <br/>
            <span className={styles.text}>или <a onClick={() => {setAuth(false)}}>зарегистрируйтесь</a></span>
          </>
        ) : (
          <>
            <p className={styles.modalTitle}>Регистрация</p>
            <Input style={inputStyle} type="email" inputMode="email" placeholder="Введите ваш email" />
            <Input style={inputStyle} placeholder="Введите ваш логин" />
            <Input style={inputStyle} type="password" placeholder="Введите пароль" />
            <Input style={inputStyle} type="password" placeholder="Введите пароль еще раз" />
            <br/>
            <span className={styles.text}>вурнуться к <a onClick={() => {setAuth(true)}}>авториациии</a></span>
          </>
        )}
        
      </Modal>
    </>
  )
};

export default AuthMenu;