import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Login.css';
const Login = () =>
{
    const {signInUsingGoogle } = useFirebase();
   

    
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />

                </form>
                <p>New to ema-john? <Link to="/register">Create Account
                </Link> </p>
                <div>                      or          </div>
                <button
                    className="btn-regular"
                    onClick={signInUsingGoogle}
                >Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;