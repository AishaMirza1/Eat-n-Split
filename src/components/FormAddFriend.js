import { useState } from "react"
import Button from "./Button"
export default function FormAddFriend({handleFriends}){
   const [name,setFriendName]= useState("")
   const[image,setImg] = useState("https://i.pravatar.cc/48")
   const id = crypto.randomUUID()
  function handleOnSubmit(e){
    e.preventDefault()
    const newFriend = {
        id,
        name,
        img:`${image}?=${id}`,
        Balance:0
       }
      if(!name || !image) return
      handleFriends(newFriend)
       setFriendName("")
       setImg("https://i.pravatar.cc/48")
  }
 
    return(
        <form className="form-add-friend" onSubmit={handleOnSubmit} >
              <label>Friend Name</label>
              <input type="text"value={name} onChange={(e)=>setFriendName(e.target.value)}/>
              <label>Img URL</label>
              <input value={image} onChange={(e=>setImg(e.target.value))} type="text" />
              <Button >ADD</Button>
        </form>
    )
}