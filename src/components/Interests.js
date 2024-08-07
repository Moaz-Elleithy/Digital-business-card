import React from "react";
import Twitter from '../images/Twitter Icon.png';
import Facebook from "../images/Facebook Icon.png";
import Instagram from "../images/Instagram Icon.png";
import Github from "../images/GitHub Icon.png";

export default function Interests() {
    return (
        <div className="interests">
            <a href="https://x.com/leithyMoaz"><img src={Twitter}></img></a>
            <a href="https://www.facebook.com/profile.php?id=100005966835379"><img src={Facebook}></img></a>
            <a href="https://www.instagram.com/moaz_elleithy.10/"><img src={Instagram}></img></a>
            <a href="https://github.com/Moaz-Elleithy"><img src={Github}></img></a>
        </div>
    )
}