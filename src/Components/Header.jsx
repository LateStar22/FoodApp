import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState("Log In");

    // const toggleButton = () => {
    //   setIsLoggedIn(!isLoggedIn);
    // }            

    const onlineStatus = useOnlineStatus(); //custom hook

    const cartItems = useSelector((state) => state.cart.items);
    const sumOfQuantity = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);

    const data = useContext(userContext);

    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="" />
            </div>
            <li style={{ display: "inline" }}>Online Status : {onlineStatus ? "✅" : "😓"}</li>
            <div className="nav-items">
                <ul>
                    <li><Link to="/" className="headerLink">Home</Link></li>
                    <li><Link to="/contact" className="headerLink">Contact Us</Link></li>
                    <li><Link to="/about" className="headerLink">About</Link></li>
                    <li><Link to="/grocery" className="headerLink">Grocery</Link></li>
                    <li><Link to="/cart" className="headerLink">Cart - {sumOfQuantity}</Link></li>
                    <Link to="/LoginSignup">
                        <button className="login" onClick={() => {
                            isLoggedIn === "Log In" ? setIsLoggedIn("LogOut") : setIsLoggedIn("Log In");
                        }}>
                            {isLoggedIn}
                        </button>
                    </Link>
                    <li>{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;