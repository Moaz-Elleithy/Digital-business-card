import React from "react";
import SmallMoaz from "../images/image.png";
import Email from "../images/Button.png";
import Linked from "../images/Button (1).png";
import About from "./About";
import Interests from "./Interests";

export default function Info() {
    return (
        <div className="Info-Div">
                <img src={SmallMoaz} className="moaz-image"></img>
            <div className="information">
                <h2>Moaz Elleithy</h2>
                <p className="front">Front-End Developer</p>
                <p className="website">MoazElleithy.website</p>
                <a href="mailto:moaz.ellethey@gmail.com"><img src={Email}></img></a>
                <a href="https://www.linkedin.com/in/moaz-elleithy-b10645293/"><img src={Linked}></img></a>   
                <About />
                <Interests />
            </div>
        </div>
    )
}