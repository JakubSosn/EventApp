import { useContext } from "react";

import UserContext from "../UserContext";

const IsLogged = () => {

  const { user, password } = useContext(UserContext);
  return (  
    <>
      <form>
        <div>
          <label>
            Twój login:
            <input type='text' placeholder={ user }></input>
          </label>
        </div>
        <div>
          <label>
            Twoje hasło:
            <input type='password' placeholder={ password }></input>
          </label>
        </div>
      </form>
    </>

  );
}
 
export default IsLogged;