import React, { useState } from 'react'
import user_image from "./person.png"
import email_image from "./email.png"
import password_image from "./password.png"

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="loginheader">
                <h1>{action}</h1>
            </div>
            <div className="inputs">
                {action === "Log In" ? <div></div> : <div className="input">
                    <img src={user_image} alt="" />
                    <input type="text" placeholder='name' />
                </div>}
                <div className="input">
                    <img src={email_image} alt="" />
                    <input type="email" placeholder='email' />
                </div>
                <div className="input">
                    <img src={password_image} alt="" />
                    <input type="password" placeholder='password' />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">
                Lost Password ?<span>Click Here</span>
            </div>}

            <div className="submit-container">
                <div className={action === "Sign Up" ? "submit" : "submit gray"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                <div className={action === "Log In" ? "submit" : "submit gray"} onClick={() => setAction("Log In")}>Log In</div>
            </div>
        </div>
    )
}

export default LoginSignup;