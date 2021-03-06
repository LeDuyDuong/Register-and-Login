import React, {useState} from "react";
import Login from "./login";
import Register from "./register";
import './Toggle.css';

export  default function Toggle(){
    const [show,setShow] = useState(false);

    return (
        <div>
            <div className="base">
                <button onClick={() => setShow(!show)}>Toggle</button>
            </div>
            <div>
                {
                    show ? <Register/> : <Login />
                }
            </div>
        </div>
    );
}