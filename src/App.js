
import FriendsList from "./components/FriendsList";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";


function App() {
  const [showAddFriend,setShowAddFriend] = useState(false)
  const[friends,setFriends] = useState(initialFriends)
  const[selectedFriend,setSelectedFriend] = useState(null)

  function handleFriends(newFriend){
     setFriends((friends)=>[...friends,newFriend])
  }
  
  function handleselectedFriend(friend){
   setSelectedFriend((curr)=>
  (  curr?.id === friend.id ? null : friend)
   )
   setShowAddFriend(false)
  }
  
  function handleSplitBill(value){
    setFriends((friends) =>
    friends.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: friend.balance + value }
        : friend
    )
  );

  setSelectedFriend(null);
  }
  function  handleShowAddFriend(){
    setShowAddFriend((show)=>!show)
  }

  return (
    <div className="app">
    <div className="sidebar">
        <FriendsList  friends={friends} handleselectedFriend={handleselectedFriend} selectedFriend={selectedFriend}/>
        {showAddFriend && <FormAddFriend handleFriends={handleFriends}  />}
        <Button onClick={handleShowAddFriend}>{showAddFriend===true ? "Close" : "Add Friend"} </Button>
    </div>
    {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  );
}

export default App;
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];