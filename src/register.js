import React from 'react';
import './register.css';

export default function Register(){
    return(
        <div className="frame">
            <div className="title">
                <h1>SIGN UP</h1>
            </div>
            <div className="inputField">
                <input className="special" type="text" placeholder="Enter account"/>
                <div className="input">
                    <input type="password" className="special" placeholder="Enter password"/>
                </div>
                <div className="input">
                    <input type="password" className="special" placeholder="Enter password again"/>
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

