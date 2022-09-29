import { Link } from "react-router-dom";
import "./Navbar.css"
import { LocationModal } from "./LocationModal";
export default function Navbar(){
    return (
     <>
     <div className="nav"> 
        <div>
            <div><Link to="/"><img className="logo" src="https://famfonts.com/wp-content/uploads/kentucky-fried-chicken-wide.png" alt="" /></Link></div>            
            <div ><Link className="text" to="/menu">Menu</Link></div>
            <div>Careers</div>
            <div>About</div>
            <div>Find AKFC</div>
        </div>
        <div id="sub_div">
           <button className="start_btn"><Link to="/menu">Start Order</Link></button>
            <div><img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" alt="" /></div>
            <div><Link to="/cart" ><img height={"60rem"} style={{marginTop:"-12%",marginLeft:"20%" }}  src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-500x281.png" alt="" /></Link></div>
        </div>       
     </div>
     <LocationModal/>
    </>
    )
}
