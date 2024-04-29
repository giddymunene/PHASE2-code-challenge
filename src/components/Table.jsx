import React ,{ useState } from "react"
import Row from "./Row"
export default function Table(){
const arr =[{
    Date:"13th/April/2024",
    Description:"Loan",
    Category:"Car Loan",
    Amount:"$6900"
  },
  {
        Date:"14th/April/2024",
        Description:"Deposit",
        Category:"Savings",
        Amount:"$986"
},
 {
            Date:"17th/April/2024",
            Description:"Withdrawal",
            Category:"General use",
            Amount:"$870"
},
{
    Date:"18th/April/2024",
    Description:"Sales",
    Category:"Investment",
    Amount:"$1000"
  },
  {
        Date:"20th/April/2024",
        Description:"Deposit",
        Category:"Savings",
        Amount:"$80"
},
 {
            Date:"21st/April/2024",
            Description:"Withdrawal",
            Category:"School Fees",
            Amount:"$285"
}]
const [transactions,setTransactions] = useState (arr)

function handleChange(event){
    const hint = event.target.value
    if (hint.length > 0){
  const filter =  transactions.filter((transaction)=>{
        return transaction.Description.toLowerCase().includes(hint.toLowerCase())
    })
    setTransactions([...filter])
}else{
    setTransactions([...arr])
}
}
    return(
        <>
        <div className="m-2 p-3">
            <input onChange={handleChange} className="form-control form-control-sm" type="text" placeholder="Search Transaction"/>
        </div>
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            <Row bank={transactions} />
            </tbody>
        </table>

    </>

    )
    
}
