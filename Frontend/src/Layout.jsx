import { Link, Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <>
           <hr size="4" color="red"></hr>
           <h1>
           <Link to="home">Home | </Link>
           <Link to="insert">Insert |</Link>
           <Link to="display">Display |</Link>
           </h1>
           <hr size="4" color="red"></hr>
           <Outlet></Outlet>
           <hr size="4" color="red"></hr>


        </>
    )
}
export default Layout