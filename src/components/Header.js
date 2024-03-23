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
        <div className="header flex justify-between shadow-lg items-center">
            <div className="logo-container ">
                <img 
                className="logo cursor-pointer object-cover h-[100px] sm:h-32 2xl:h-[150px]"
                src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex items-center justify-around font-semibold text-[10px] sm:text-lg :sm:font-semibold 2xl:text-xl 2xl:font-semibold">
                
                    <li className="px-2 sm:mx-2 2xl:mx-6  hover:bg-gray-200 hover:rounded-md hover:shadow-md"><Link to ="/">Home</Link></li>
                    <li className="px-2 sm:mx-1 2xl:mx-6 hover:bg-gray-200 hover:rounded-md hover:shadow-md"><Link to = "/about">About Us</Link></li>
                    <li className="px-2 sm:mx-1 2xl:mx-6 hover:bg-gray-200 hover:rounded-md hover:shadow-md"><Link to = "/contact">Contact Us</Link></li>
                    <div className=" flex px-2 sm:mx-1 2xl:mx-6 hover:bg-gray-200 hover:rounded-md hover:shadow-md">
                    <li><FaShoppingCart /></li>
                    <li><Link to = "/cart">({cartItems.length})</Link></li>
                    </div>
        
                    <button 
                    className="login-btn px-2 sm:mx-1 2xl:mx-6 hover:bg-gray-200 hover:rounded-md hover:shadow-md" 
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