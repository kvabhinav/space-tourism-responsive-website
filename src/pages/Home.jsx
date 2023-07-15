import React from "react" 

import backgroundHomeDesktop from '../images/home/backgroundHomeDesktop.jpg'

export default function Home(){
    return(
        <div className="w-screen h-screen" style={{backgroundImage:`URL(${backgroundHomeDesktop})`}}>
            {/* <Navbar/> */}
            <h1>Home page</h1>
        </div>
    )
}