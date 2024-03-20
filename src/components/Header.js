import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";



const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header flex justify-between shadow-lg">
            <div className="logo-container ">
                <img 
                className="logo w-36"
                src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 ">Online Status : {onlineStatus ? "🟢":"🔴"}</li>
                    <li className="px-4 "><Link to ="/">Home</Link></li>
                    <li className="px-4 "><Link to = "/about">About Us</Link></li>
                    <li className="px-4 "><Link to = "/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold text-xl "><Link to = "/cart">Cart - ({cartItems.length} items)</Link></li>
                    <button 
                    className="login-btn" 
                    onClick={() => {
                        btnNameReact === "Login" ? 
                        setBtnNameReact("Logout") : 
                        setBtnNameReact("Login");
                    }}

                    >
                    
                    {btnNameReact}</button>


                </ul>

           </div>

        </div>
    )
};

export default Header;