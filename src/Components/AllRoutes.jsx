import {Route, Routes} from "react-router-dom"
import Cart from "./Cart"
import Home from "./Home"
import Menu from "./Menu"
import Navbar from "./Navbar"
export default function AllRoutes(){
    return (
        <div>    
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    )
}

