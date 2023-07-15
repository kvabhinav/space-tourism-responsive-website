import React from "react";

import backgroundCrewDesktop from '../images/crew/backgroundCrewDesktop.jpg'

export default function Crew(){
    return(
        <div className="w-screen h-screen" style={{backgroundImage:`URL(${backgroundCrewDesktop})`}} >
            <h1>Crew page</h1>
        </div>
    )
}