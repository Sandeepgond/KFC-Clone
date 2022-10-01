import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

export default function Footer(){
    return (
            <div className='footermaindiv'>
                <div className="container44">
                    <p>Calorie Statement</p>
                    <p>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition
                        information available upon request in-store and on kfc.com.<br /> Prices, participation, and product availability
                        may vary.</p>
                    <br />
                    <p>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Sierra Mist are registered trademarks of PepsiCo, Inc.<br />
                        Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</p>
                    <br />
                    <div className="boxes44">
                        <div className="cards44">
                            <img height={"110rem"} style={{ padding: "14px 5px 0px 0px", cursor: "pointer" }} src='https://clone-kfc.netlify.app/static/media/footkfc.dd3745c80d803f896b8ad45b04926ab5.svg' alt="" />
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>KFC Food</p>
                                <li>Menu</li>
                                <li>Full Nutrition Guide</li>
                                <li>Nutrition Calculator</li>
                                <li>Food Allergies & Sensitivities</li>
                            </ul>
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>Company</p>
                                <li>About KFC</li>
                                <li>How We Make Chicken</li>
                                <li>KFC Foundation</li>
                                <li>Company Responsibility</li>
                                <li>Franchise a KFC</li>
                                <li>Resposible Disclosure</li>
                                <li>KFC Newsroom</li>
                            </ul>
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>Career</p>
                                <li>Restaurant Careers</li>
                                <li>Corporate Careers</li>
                                <li>Culture</li>
                                <li>Growth</li>
                            </ul>
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>Resources</p>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                                <li>KFC App</li>
                            </ul>
                        </div>
                        <div className="cards44">
                            <ul>
                                <p>Find a KFC</p>
                                <li>Find a KFC</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lastbox44">
                        <div className="section44">
                            <div className='lastLinefoot'>
                                <p>Privacy Policy </p>
                            </div>
                            <div className='lastLinefoot'>
                                <p>Updated 01/2022</p>
                            </div>
                            <div className='lastLinefoot'>
                                <p>Terms Of Use</p>
                            </div>
                            <div className='lastLinefoot'>
                                <p>Our Cookies & Ads</p>
                            </div>
                            <div className='lastLinefoot'>
                                <p>Do Not Sell My Personal Information</p>
                            </div>
                        </div>
                        <div className='lastLinefoot'>
                            <p>Copyright © KFC Corporation 2022 All Rights Reserved</p>
                        </div>
                        <div style={{ display: "flex" }} className='lastLinefoot'>
                            <Link to={"https://www.instagram.com/_mad___boxer_/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src='./instagram.svg' alt="" /></Link>
                            <Link to={"https://www.facebook.com/people/Arshad-Khan/100004164048208/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src='./facebook.svg' alt="" /></Link>
                            <Link to={"https://www.linkedin.com/in/md-arshad-khan-350206154/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src='./twitter.svg' alt="" /></Link>
                        </div>
                    </div>
                    <div style={{ borderLeft: "gray" }} className='lastLinefoot'>
                        <p> Asessibility Statement</p>
                    </div>
                </div>
                <div style={{ display: "flex" }} className='lastLinefootsvg'>
                    <Link to={"https://www.instagram.com/_mad___boxer_/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src='./instagram.svg' alt="" /></Link>
                    <Link to={"https://www.facebook.com/people/Arshad-Khan/100004164048208/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src='./facebook.svg' alt="" /></Link>
                    <Link to={"https://www.linkedin.com/in/md-arshad-khan-350206154/"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src='./twitter.svg' alt="" /></Link>
                </div>
            </div>
   
    )
}