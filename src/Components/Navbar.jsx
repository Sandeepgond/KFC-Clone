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
            <div><Link to="/login"><img height={"37rem"} style={{width:"100%",marginTop:"-10%",marginLeft:"40%" }}  src="https://clone-kfc.netlify.app/static/media/signin.4ca6b9a4a3e8956c891e492aed5f31f0.svg" alt="" /></Link></div>
            <div><Link to="/cart" ><img height={"60rem"} style={{marginTop:"-15%",marginLeft:"30%" }}  src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-500x281.png" alt="" /></Link></div>
        </div>       
     </div>
     <LocationModal/>
    </>
    )
}
