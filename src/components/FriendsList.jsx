import styles from './FriendsList.module.css'

const FriendsList = ({listOfFriends}) => {

  const friend = listOfFriends.map(data => (
    <div className={styles.friend} key={data.login.uuid}>
      <img className={styles.img} src={data.picture.medium} alt={data.name.last}/>
      <p>{data.name.first} {data.name.last}</p>
    </div>
  ))
  return (  
    <>
      {friend}
    </>
  );
}
 
export default FriendsList;