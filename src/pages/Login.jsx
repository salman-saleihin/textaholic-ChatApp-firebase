import React from 'react';
import Add from '../img/addAvatar.png';

const Login = () => {
    return (
        <div className="formContainer">

            <div className="formWrapper">

                <span className="logo">TextAholic</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder='Email Address' name="" id="" />
                    <input type="password"  placeholder='Password' name="" id="" />
                    
                   <button>Sign In</button>

                </form>

                <p>You Don't Have an Account? Register </p>
            </div>

        </div>
    );
};

export default Login;