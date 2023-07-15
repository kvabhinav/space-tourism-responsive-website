import React from "react";

import backgroundTechnologyDesktop from '../images/technology/backgroundTechnologyDesktop.jpg'

export default function Technology(){
    return(
        <div className="w-screen h-screen" style={{backgroundImage:`URL(${backgroundTechnologyDesktop})`}}>
            <h1>Technology page</h1>
        </div>
    )
}