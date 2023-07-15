import React from "react";

import backgroundDestinationDesktop from '../images/destination/backgroundDestinationDesktop.jpg'

export default function Destination(){
    return(
        <div className="w-screen h-screen" style={{backgroundImage:`URL(${backgroundDestinationDesktop})`}}>
            <h1>Destination page</h1>
        </div>
    )
}