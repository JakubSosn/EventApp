import Aside from './Aside';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';
import NavBar from './navBar/NavBar';

import './App.css'

const App = () => {
  return (  
      <>
        <Header />
          <div className='content-wrapper'>
            <NavBar />
            <Content />
            <Aside />
          </div>
        <Footer />
      </>
  );
}
 
export default App;

// https://randomuser.me/