import React from 'react';
import Add from '../img/addAvatar.png';

const Register = () => {
    return (
        <div className="formContainer">

            <div className="formWrapper">

                <span className="logo">TextAholic</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder='Display Name' />
                    <input type="email" placeholder='Email Address' name="" id="" />
                    <input type="password"  placeholder='Password' name="" id="" />
                    <input style={{display:"none"}} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an Avatar</span>
                    </label>
                   <button>Sign Up</button>

                </form>

                <p>Already Have an Account? Login </p>
            </div>

        </div>
    );
};

export default Register;