import React from 'react';
import './Hamburger.css';

 const Hamburger = ()=> {
    const x = document.getElementById("myLinks");
    console.log(x)
    // if (x.style.display === "block") {
    //     x.style.display = "none";
    // } else {
    //     x.style.display = "block";
    // }
    return (
        
  <div>
            
    <div className="mobile-container">

        <div className="topnav">
        <a href="#home" className="active">Logo</a>
            <div id="myLinks">
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <a href="javascript:void(0);" className="icon" onClick="Hamburger()">
            <i className="fa fa-bars"></i>
        </a>
        </div>

        <div style="padding-left:16px">
            <h3>Vertical Mobile Navbar</h3>
            <p>This example demonstrates how a navigation menu on a mobile/smart phone could look like.</p>
            <p>Click on the hamburger menu (three bars) in the top right corner, to toggle the menu.</p>
        </div>

    </div>
</div>
    )
}

export default Hamburger;