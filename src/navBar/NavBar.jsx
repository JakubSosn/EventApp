import Event from "../components/Event";
import Friends from "../components/Friends";
import Message from "../components/Message";
import Profil from "../components/Profil"


const navBar = () => {
  return (  
    <>
      <Profil />
      <Event />
      <Friends />
      <Message />
    </>
  );
}
 
export default navBar;