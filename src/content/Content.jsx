import { Routes, Route } from "react-router-dom";

import Event from "../components/Event";
import Friends from "../components/Friends";
import Home from "../Home";
import Message from "../components/Message";
import Profil from "../components/Profil"

import styles from './Content.module.css'

const Content = () => {
  return (  
    <main>
        <div className={styles.content}>
        <Routes>
            <Route path='/' element={<Home />} />;
            <Route path='/event' element={<Event />} />;
            <Route path='/profil' element={<Profil />} />;
            <Route path='/friends' element={<Friends />} />;
            <Route path='/message' element={<Message />} />;
        </Routes> 
        </div>
    </main>
  );
}
 
export default Content;