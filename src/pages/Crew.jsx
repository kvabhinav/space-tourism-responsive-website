import React from "react";
import { useSnapshot } from "valtio";

import CrewComponents from "../components/CrewComponent";
import { crews } from "../data";
import state from "../state";

export default function Crew() {
    const snap = useSnapshot(state)

    return (
        <div className="w-screen h-screen crewMobile md:crewTablet lg:crewDesktop">
            {snap.crewSection === "COMMANDER" ? <CrewComponents data={crews[0]} crew="COMMANDER" /> : <></>}
            {snap.crewSection === "MISSION SPECIALIST" ? <CrewComponents data={crews[1]} crew="MISSION SPECIALIST" /> : <></>}
            {snap.crewSection === "PILOT" ? <CrewComponents data={crews[2]} crew="PILOT" /> : <></>}
            {snap.crewSection === "FLIGHT ENGINEER" ? <CrewComponents data={crews[3]} crew="FLIGHT ENGINEER" /> : <></>}
        </div>
    )
}