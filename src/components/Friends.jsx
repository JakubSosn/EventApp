import { useState, useContext } from "react";

import FriendsList from "./FriendsList";
import UserContext from '../UserContext';

import styles from './Friends.module.css'

const Friends = () => {

  const [listOfFriends, setlistOfFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  const API = 'https://randomuser.me/api/?results=9';

  const getRandomUsers = () => {
  
    fetch(API)
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw response
    })
    .then(data => {
      setlistOfFriends(data.results);
    })
    .catch(error => {
      console.error('Error fetching data', error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })

    if (loading) return 'Loading...';
    if (error) return 'Error!';
  }


  if(!user) {
    return <h1 className={styles.header}>Zaloguj się aby zobaczyć znajomych</h1>
  } else {
  return (  
    <div className={styles.container}>
      <h1>Osoby dodane przez Ciebie jako znajomi</h1>
        <ul className={styles.ulFriends}>
          {listOfFriends && <FriendsList listOfFriends={listOfFriends} />}
        </ul>
      <button onClick={getRandomUsers}>Osoby, które możesz znać</button>
    </div>

  );
  }
}
 
export default Friends;