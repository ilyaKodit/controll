const validation = {
  login: async (login: string) => {
    if (login.length < 5 && login !== '') {
      return {
        result: false,
        message: 'Логин должен содержать не менее 5 символов',
      }
    }
    return { result: true };
  },
  email: (email: string) => {
    if (email.length < 5 && email !== '') {
      return {
        result: false,
        message: 'Почта должена содержать не менее 5 символов',
      }
    }
    return { result: true };
  },
  password: (pass: string) => {
    if (pass.length < 5 && pass !== '') {
      return {
        result: false,
        message: 'Пароль должен содержать не менее 5 символов',
      }
    }
    return { result: true };
  },
  passwords: (pass1: string, pass2: string) => {
    if (pass1 !== pass2) {
      return {
        result: false,
        message: 'Пароли не совпадают друг с другом',
      }
    }
    return { result: true };
  },
}

export { validation }; 