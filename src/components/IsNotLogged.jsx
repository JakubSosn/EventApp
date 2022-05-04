import { useState, useContext } from "react";
import styles from './IsNotLogged.module.css'

import UserContext from "../UserContext";

const IsNotLogged = () => {
  const [login, setLogin] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const { setUser, setPassword } = useContext(UserContext);

  const handleOnChangeLogin = ({ target: { value } }) => setLogin(value);
  const handleOnChangePassword = ({ target: { value } }) => setNewPassword(value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setUser(login);
    setPassword(newPassword);
    setLogin('');
    setNewPassword('')
  }

  return (  
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <div className={styles.row}>
        <label>
          Podaj swój login:
          <input type="text" onChange={handleOnChangeLogin} value={login}/>
        </label>
      </div>
      <div className={styles.row}>
        <label>
          Podaj swóje hasło:
          <input type='password' onChange={handleOnChangePassword} value={newPassword}/>
        </label>
      </div>
      <div className={styles.row}>
        <button className={styles.button} type='submit'>Zaloguj</button>
      </div>
    </form>
  );
}
 
export default IsNotLogged;