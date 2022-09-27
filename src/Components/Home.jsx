import "./Home.css"
import {FaArrowRight,FaInfoCircle} from "react-icons/fa"
export default function Home(){
    return (
        <>
           <img className="img1" src="https://images.ctfassets.net/9tka4b3550oc/1kVHyQzS2pOuiFxgj6N6NY/cd1930942315f3663bdd387049f2971b/Desktop-2pcBigBox.jpg?q=75&w=1680" alt="" />          
           <div>
               <h3>FOR THE BUSY FAMILY</h3>
               <h1>FAMILY-STYLE COOKIN' IS A TAP AWAY</h1>
               <p>Get dinner on the table in no time with Quick Pick-Up on the KFC app. Our 12pc Tenders Meal is loaded with 12 Extra Crispy™ Tenders, 3 large sides of your choice, 6 dipping sauces, plus 6 biscuits.</p>
               <p className="bold_p"> <a href="/menu">Order Now&nbsp;&nbsp;<FaArrowRight/> </a> </p>
           </div>
           <div> <p>Prices and participation may vary. Meal includes 12 tenders, 3 lg sides, 6 biscuits, and 6 sauces. Tax and substitutions extra.</p> </div>
           <h1 className="left-align">FEATURED ITEMS</h1>
           <div className="featured-item">
               <div>
                  <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-sandwichandtendersmeal?q=75&w=1280" alt="" />
                  <p>Touchdown Tenders & Sandwiches Meal</p>
                  <p>calories: 4700-7430</p>
                  <p>Set location for pricing <FaInfoCircle/></p>
               </div>
               <div>
                  <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-sandwichandsidesmeal?q=75&w=1280" alt="" />
                  <p>Sandwitch Tailgate Bundle</p>
                  <p>calories: 3040-4280</p>
                  <p>Set location for pricing <FaInfoCircle/></p>
               </div>
               <div>
                  <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-2DTCombo?q=75&w=1280" alt="" />
                  <p>2 pc. Drum & Thigh Combo</p>
                  <p>calories: 540-1100</p>
                  <p>Set location for pricing <FaInfoCircle/></p>
               </div>
               <div>
                  <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-2pcBigBox?q=75&w=1280" alt="" />
                  <p>2 pc. Drum & Thigh Big Box</p>
                  <p>calories: 550-1610</p>
                  <p>Set location for pricing <FaInfoCircle/></p>
               </div>
           </div>
           <div>
                <div className="mid-sec">
                    <div><h1>FINGER LICKIN' GOOD® IS NOW JUST A FEW CLICKS AWAY</h1></div>
                    <div><button className="start_btn2">Start Order</button></div>
                </div>
                <div >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>Our Food</p>
                <h1>WE MAKE IT THE HARD WAY</h1>
                <p>See what goes into making our world famous fried chicken.</p>
                <button className="learn-btn">Learn More</button><br />
                <img className="bucket-logo" src="awful-letters-5446\src\img\KFCBucket_Lead-removebg-preview.jpg" alt="" />
                {/* <img src="https://toppng.com/uploads/preview/kfc-logo-png-11660169059yyvel7gnry.png" alt="" /> */}
           </div>           
        </>
    )
}