import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social_Media</h3>
                <span className="loginDesc">
                    Conntect with friends and the world around you social_media
                </span>
            
            </div>


            <div className="loginRight">
                <div className="loginBox">
                   <input type='Text' placeholder='Username' className="loginInput" />
                   <input type='Text' placeholder='Email' className="loginInput" />
                   <input type='Text' placeholder='Password' className="loginInput" />
                   <input type='Password' placeholder='Password Again' className="loginInput" />
                   <button className="loginButton">Sign Up</button>
                   {/* <span className="loginForgot">Forgot Password</span> */}
                   <button className="loginRegisterButton">
                    Login into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register