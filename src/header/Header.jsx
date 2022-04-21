  import styles from './Header.module.css'
  
  const Header = () => {
    return (  
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <h1 className={styles.title}>To jest Header przyszłej strony z mojej głowy</h1>

      </header>
    );
  }
   
  export default Header;