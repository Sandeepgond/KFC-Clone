import {Route, Routes} from "react-router-dom"
import Login from "./Login"
import Cart from "./Cart"
import Home from "./Home"
import Menu from "./Menu"
import PageNotFound from "./PageNotFound"
import SignUp from "./SignUp"
export default function AllRoutes(){
    return (
        <div>    
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>    
                <Route path="*" element={<PageNotFound />}></Route>           
            </Routes>
        </div>
    )
}

