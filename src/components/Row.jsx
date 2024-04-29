
export default function Row ({bank}){
    const rows=bank.map((transaction,index)=> {
        return(
            <tr key={index+1}>
        <td>{transaction.Date}</td>
        <td>{transaction.Description}</td>
        <td>{transaction.Category}</td>
        <td>{transaction.Amount}</td>
        </tr>
    )

    }
        )
    return(
        <>
        {rows}
        
        </>
    )
}