import { UserProvider } from './UserContext';

import Aside from './Aside';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';
import NavBar from './navBar/NavBar';

import './App.css'

const App = () => {
  return (  
      <>
        <UserProvider>
          <Header />
            <div className='content-wrapper'>
              <NavBar />
              <Content />
              <Aside />
            </div>
          <Footer />
        </UserProvider>
      </>
  );
}
 
export default App;

// https://randomuser.me/