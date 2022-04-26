import styles from './Aside.module.css';

const Aside = () => {
  return (  
    <aside className={styles.wrapperAside}>
      <div>
        <p>Boczne menu poświęcone takim działaniom jak: sondaż, głosowanie, propozycje.</p>
      </div>
    </aside>
  );
}
 
export default Aside;