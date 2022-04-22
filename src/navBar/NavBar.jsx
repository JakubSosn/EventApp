import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays,faUser, faUserGroup, faMessage } from '@fortawesome/free-solid-svg-icons';

import styles from './NavBar.module.css'


const navBar = () => {
  return ( 
     <nav className={styles.nav}>
      <div className={styles.navBar}>
        <Link to='/' className={styles.link}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link to='/event' className={styles.link}>
          <FontAwesomeIcon icon={faCalendarDays} />
        </Link>
        <Link to='/profil' className={styles.link}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to='/friends' className={styles.link}>
          <FontAwesomeIcon icon={faUserGroup} />
        </Link>
        <Link to='/message' className={styles.link}>
          <FontAwesomeIcon icon={faMessage} />
        </Link>
      </div>
    </nav>
  );
}
 
export default navBar;