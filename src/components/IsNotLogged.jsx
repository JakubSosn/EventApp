import { useState, useContext } from "react";
import styles from './IsNotLogged.module.css'

import UserContext from "../UserContext";

const IsNotLogged = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleOnChangeLogin = ({ target: { value } }) => setLogin(value);
  const handleOnChangePassword = ({ target: { value } }) => setPassword(value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setUser(login);
    setLogin('');
    setPassword('')
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
          <input type='password' onChange={handleOnChangePassword} value={password}/>
        </label>
      </div>
      <div className={styles.row}>
        <button className={styles.button} type='submit'>Zaloguj</button>
      </div>
    </form>
  );
}
 
export default IsNotLogged;