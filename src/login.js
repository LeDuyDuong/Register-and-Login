import React from 'react';
import './login.css';

function Login(){
    return (
        <div className="frame">
            <div className="title">
                <h1>SIGN IN</h1>
            </div>
            <div className="inputField">
                <input className="special" type="text" placeholder="Enter account"/>
                <div className="input">
                    <input type="password" className="special" placeholder="Enter password"/>
                </div>
            </div>
            <div className="submit">
                <button className="submit-1">
                    <a className="submit-1" href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ">Sign In</a>
                </button>
            </div>
        </div>
        );
}

export default Login;