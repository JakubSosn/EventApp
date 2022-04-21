import { Link } from 'react-router-dom';

import styles from './NavBar.module.css'


const navBar = () => {
  return ( 
     <nav className={styles.nav}>
      <div className={styles.navBar}>
        <Link to='/'>Home</Link>
        <Link to='/event'>Event</Link>
        <Link to='/profil'>Profil</Link>
        <Link to='/friends'>Friends</Link>
        <Link to='/message'>Message</Link>
      </div>
    </nav>
  );
}
 
export default navBar;