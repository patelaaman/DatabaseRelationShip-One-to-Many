import { useState } from "react"
import axios from "axios"
const Insert=()=>{
    const [input,setInput] = useState({})
    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values,[name]:value}))

    }
    const handleSubmit=()=>{
         let api ="http://localhost:8080/book/booksave"
         axios.post(api,input).then((res)=>{
            console.log(res);
           alert("Data Saved!!!");
         })
    }
    return(
        <>
            <h1>Insert The Data </h1>
            <hr size="4" color="red"></hr>
            <h3>
                Enter Auther Name<input type="text" name="authorname" value={input.authorname} onChange={handleInput}></input><br></br>
                Enter Book Name<input type="text" name="bookname" value={input.bookname} onChange={handleInput}></input><br></br>
                Enter Book Price<input type="text" name="price" value={input.price} onChange={handleInput}></input><br></br>
               <button onClick={handleSubmit}>Submit</button>
            </h3>

        </>
    )
}
export default Insert