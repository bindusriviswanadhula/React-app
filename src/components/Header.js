import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";



const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header flex justify-between shadow-lg items-center w-full">
            <div className="logo-container ">
                <img 
                className="logo cursor-pointer object-cover h-[100px]"
                src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex items-center justify-around font-bold text-[10px]">
                
                    <li className="px-2 "><Link to ="/">Home</Link></li>
                    <li className="px-2 "><Link to = "/about">About Us</Link></li>
                    <li className="px-2 "><Link to = "/contact">Contact Us</Link></li>
                    <div className=" flex px-2">
                    <li className=""><FaShoppingCart /></li>
                    <li><Link to = "/cart">({cartItems.length})</Link></li>
                    </div>
        
                    <button 
                    className="login-btn px-2" 
                    onClick={() => {
                        btnNameReact === "Login" ? 
                        setBtnNameReact("Logout") : 
                        setBtnNameReact("Login");
                    }}
                    

                    >
                    
                    
                    {btnNameReact}
                    {onlineStatus ? "🟢":"🔴"}</button>
                    
                    


                </ul>

           </div>

        </div>
    )
};

export default Header;