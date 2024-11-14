import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Display=()=>{
    const[mydata, setMydata] = useState([])
    const navigate  = useNavigate();

    const loadData=()=>{
        let api ="http://localhost:8080/book/bookdisplay"
        axios.get(api).then((res)=>{
            console.log(res.data)
            setMydata(res.data)
        })
    }

    useEffect(()=>{
        loadData()
    },[])

    const addmoreBook=(id)=>{
        navigate(`/addmorebook/${id}`);
    }
    let i=0
 const ans = mydata.map((key)=>{
    i++
    return(
        <>
           <tr>
             <td>{i}</td> 
             <td>{key.author_name}</td>
             <td>
                {key.author_books.map((key1)=>{
                    return(
                        <p>Name : {key1.book_name},  - Price {key1.book_pricr}</p>
                    )
                })}
             </td>
             <td>
                 <button onClick={()=>{addmoreBook(key._id)}}>Add More Book</button>
             </td>
           </tr>
        </>
    )
 })
    return(
        <>
          <h1>Display Page</h1>
          <table border="2px">
            <tr>
                 <th>Sno</th>
                 <th>Name</th>
                 <th>Book Details</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Display