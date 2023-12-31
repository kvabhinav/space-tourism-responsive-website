import React from "react";
import { useSnapshot } from "valtio";

import state from "../state";
import Planets from "../components/Planets";
import { planets } from "../data";

export default function Destination() {
    const snap = useSnapshot(state)

    return (
        <div className="w-screen h-max lg:h-screen destinationMobile md:destinationTablet lg:destinationDesktop">
            {snap.section==="MOON"?<Planets data={planets[0]} planet="MOON"/>:<></>}
            {snap.section==="MARS"?<Planets data={planets[1]} planet="MARS" />:<></>}
            {snap.section==="EUROPA"?<Planets data={planets[2]} planet="EUROPA"/>:<></>}
            {snap.section==="TITAN"?<Planets data={planets[3]} planet="TITAN" />:<></>}
        </div>
    )
}