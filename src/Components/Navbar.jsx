import { Link } from "react-router-dom";
import "./Navbar.css"
import {FaShoppingBag} from "react-icons/fa"
export default function Navbar(){
    return (
     <div className="fixed">
     <div className="nav"> 
        <div>
            <div><Link to="/"><img className="logo" src="https://famfonts.com/wp-content/uploads/kentucky-fried-chicken-wide.png" alt="" /></Link></div>            
            <div><Link to="/menu">Menu</Link></div>
            <div>Careers</div>
            <div>About</div>
            <div>Find AKFC</div>
        </div>
        <div id="sub_div">
           <button className="start_btn">Start Order</button>
            <div><img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" alt="" /></div>
            <div><Link to="/cart"><FaShoppingBag/></Link></div>
        </div>       
     </div>
      <div> <p>Start an order for pickup or delivery</p> </div>
     </div>
    )
}
