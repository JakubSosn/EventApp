import { useState } from "react";

import FriendsList from "./FriendsList";

import styles from './Friends.module.css'

const Friends = () => {

  const [listOfFriends, setlistOfFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = 'https://randomuser.me/api/?results=3';

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


  return (  
    <div className={styles.container}>
      <h1>Osoby dodane przez Ciebie jako znajomi</h1>
      <div>
        <ul>
          {listOfFriends && <FriendsList listOfFriends={listOfFriends} />}
        </ul>
      </div>
      <button onClick={getRandomUsers}>Osoby, które możesz znać</button>
    </div>

  );
}
 
export default Friends;