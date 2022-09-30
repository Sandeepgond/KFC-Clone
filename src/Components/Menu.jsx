import Footer from "./Footer";
import "./Menu.css"
import Featured from "./Menu/Featured";

export default function Menu(){
    return (
        <>
            <div id="main">
                <div id="left">
                    <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="" />
                    <h1>KFC MENU</h1>
                    <p id="match">Featured</p>
                    <p id="chicken">Buckets</p>
                    <p id="biryani">Tenders</p>
                    <p id="box">Sandwitches</p>
                    <p id="bur">Fried Chicken</p>
                    <p id="stay">Pot Pies & Bowls</p>
                    <p id="sna">Slides</p>
                    <p>Sauces</p>
                    <p>Desserts</p>
                    <p id="beve">Beverages</p>
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
                    <div id="bucket">
                    </div>
                    <br/>
                    <h1>Tenders</h1>
                    <div id="tender">
                    </div>
                    <br/>
                    <br/>
                    <h1>Sandwitches</h1>
                    <div id="sand">
                    </div>
                    <br/>
                    <h1>Fried Chicken</h1>
                    <div id="fried_chicken">
                    </div>
                    <br/>
                    <br/>
                    <h1> Pot Pies & Bowls</h1>
                    <div id="pot">
                    </div>
                    <br/>
                    <br/>
                    <h1>Slides</h1>
                    <div id="slide">
                    </div>
                    <br/>
                    <br/>
                    <h1>Sauces</h1>
                    <div id="sauce">
                    </div>
                    <br/>
                    <br/>
                    <h1>Desserts</h1>
                    <div id="dessert">
                    </div>
                    <br/>
                    <br/>
                    <h1> Beverages</h1>
                    <div id="beverages">
                    </div>
                </div>
            </div>
          <Footer/>
        </>
    )
}