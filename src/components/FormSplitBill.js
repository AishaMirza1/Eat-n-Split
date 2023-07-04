import { useState } from "react"
import Button from "./Button"

export default function FormSplitBill({selectedFriend,onSplitBill}){
    const [bill,setBill] = useState("")
    const [userExpense,setUserExpense] = useState("")
    const [whoIsPaying,setWhoIsPaying ] = useState("user")
    const friendExpense =bill? bill-userExpense : ""

    function handleSubmit(e){
      e.preventDefault()

      if(!bill || !userExpense) return
      onSplitBill(whoIsPaying==="user"?friendExpense:-userExpense)

    }
    return(
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split the Bill with {selectedFriend.name}</h2>
            <label>💸Bill Value</label>
            <input type="number"  value={bill} onChange={(e)=>setBill(e.target.value)}  />
            <label>Your Expense</label>
            <input value={userExpense} onChange={(e)=>setUserExpense( Number(e.target.value) > bill ? userExpense : Number(e.target.value))} />
           
            <label>{selectedFriend.name}'s expense</label>
            <input type="number" value={friendExpense}disabled />

            <label>Who is paying?</label>
            <select value={whoIsPaying} onChange={(e)=>{setWhoIsPaying(e.target.value)}}>
                <option value="{user}">You</option>
                <option value="Friend">{selectedFriend.name}</option>
            </select>   
            <Button>Split Bill</Button>
        </form>
    )
}