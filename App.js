import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div>
                <img 
                className="logo"
                src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>

           </div>

        </div>
    )
};

const RestaurantCard = () => {
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res- image"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"/>
            <h3>Meghana foods</h3>
            <h4>Biryani, North Indian</h4>
            <h4>4.7 starts</h4>
            <h4>38 minutes</h4>

        </div>
    )
}


const Body =() => {
    return(
        <div className="body">
            <div className="search">Search</div>

                <div className="res-container">
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />

                </div>
            

        </div>
    )
};


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
       </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
