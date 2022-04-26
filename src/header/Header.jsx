import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Header.module.css'
import UserContext from '../UserContext';
  
  const Header = () => {

    const { user } = useContext(UserContext);
    const isLoggedIn = user 
      ? <span>Cześć {user}</span>
      : <Link to='/profil'><button className={styles.button}>Zaloguj się</button></Link>;

    return (  
      <header className={styles.header}>
        <div className={styles.logo}>EventApp</div>
        <h1 className={styles.title}>Organizacja spotkań jeszcze nie była taka prosta...</h1>
        <div className={styles.user}>{isLoggedIn}</div>
      </header>
    );
  }
   
  export default Header;