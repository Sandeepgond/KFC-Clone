import Footer from "./Footer";
import "./Menu.css"
import Beverages from "./MenuItem/Beverages";
import Buckets from "./MenuItem/Buckets";
import Desserts from "./MenuItem/Desserts";
import Featured from "./MenuItem/Featured";
import FriedChicken from "./MenuItem/FriedChicken";
import PotPies from "./MenuItem/PotPies";
import Sandwiches from "./MenuItem/Sandwiches";
import Sauces from "./MenuItem/Sauces";
import Slides from "./MenuItem/Slides";
import Tenders from "./MenuItem/Tenders";

export default function Menu(){
    return (
        <>
            <div id="main">
                <div id="left">
                    <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="" />
                    <h1>KFC MENU</h1>
                    <p>Featured</p>
                    <p >Buckets</p>
                    <p >Tenders</p>
                    <p >Sandwitches</p>
                    <p >Fried Chicken</p>
                    <p >Pot Pies & Bowls</p>
                    <p >Slides</p>
                    <p>Sauces</p>
                    <p>Desserts</p>
                    <p>Beverages</p>
                </div>

                <div id="right">
                    <br/>
                    <br/>
                    <br/>
                    <h1>Featured</h1>
                    <div id="featured"><Featured/>
                    </div>
                    <br/>
                    <br/>
                    <h1>Buckets</h1>
                    <div id="bucket"><Buckets/>
                    </div>
                    <br/>
                    <h1>Tenders</h1>
                    <div id="tender"><Tenders/>
                    </div>
                    <br/>
                    <br/>
                    <h1>Sandwitches</h1>
                    <div id="sand"><Sandwiches/>
                    </div>
                    <br/>
                    <h1>Fried Chicken</h1>
                    <div id="fried_chicken"><FriedChicken/>
                    </div>
                    <br/>
                    <br/>
                    <h1> Pot Pies & Bowls</h1>
                    <div id="pot"><PotPies/>
                    </div>
                    <br/>
                    <br/>
                    <h1>Slides</h1>
                    <div id="slide"><Slides/>
                    </div>
                    <br/>
                    <br/>
                    <h1>Sauces</h1>
                    <div id="sauce"><Sauces/>
                    </div>
                    <br/>
                    <br/>
                    <h1>Desserts</h1>
                    <div id="desserts"><Desserts/>
                    </div>
                    <br/>
                    <br/>
                    <h1> Beverages</h1>
                    <div id="beverages"><Beverages/>
                    </div>
                </div>
            </div>
          <Footer/>
        </>
    )
}