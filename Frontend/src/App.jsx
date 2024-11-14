import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import Layout from "./Layout"
import Home from "./Pages/Home"
import Insert from "./Pages/Insert"
import Display from "./Pages/Display"
import AddBook from "./Pages/AddBook"

function App() {
  

  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="insert" element={<Insert></Insert>}></Route>
                <Route path="display" element={<Display></Display>}></Route>
                <Route path="addmorebook/:id" element={<AddBook></AddBook>}></Route>
            </Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
