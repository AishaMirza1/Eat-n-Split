import Friend from "../components/Friend"
export default function FriendsList({friends,handleselectedFriend,selectedFriend}){

    
    return (
   
        <ul>
        {friends.map((friend)=>(
           <Friend friend={friend} key={friend.id} handleselectedFriend={handleselectedFriend} selectedFriend={selectedFriend} />
           ))}
    </ul>
    )
    
}