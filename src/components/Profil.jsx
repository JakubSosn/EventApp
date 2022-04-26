import { useContext } from "react";

import IsNotLogged from "./IsNotLogged";
import IsLogged from "./IsLogged";
import UserContext from "../UserContext";

const Profil = () => {

  const { user } = useContext(UserContext);
  const isUserLogged = Boolean(user);

  return (  
    <>
      {isUserLogged && <IsLogged />}
      {!isUserLogged && <IsNotLogged />}
    </>
  );
}
 
export default Profil;