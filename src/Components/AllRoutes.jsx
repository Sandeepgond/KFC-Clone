import {Route, Routes} from "react-router-dom"
import Cart from "./Cart"
import Home from "./Home"
import Menu from "./Menu"
import SignUp from "./SignUp"
export default function AllRoutes(){
    return (
        <div>    
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/signup" element={<SignUp/>}/>              
            </Routes>
        </div>
    )
}

