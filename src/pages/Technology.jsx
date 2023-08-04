import React from "react";
import { useSnapshot } from "valtio";

import TechnologyComponent from "../components/TechnologyComponent";
import state from "../state";
import { technology } from "../data";


export default function Technology() {
    const snap = useSnapshot(state)
    return (
        <div className="w-screen h-screen technologyMobile md:technologyTablet lg:technologyDesktop">
            {snap.TechnologySection === "LAUNCH VEHICLE" ? <TechnologyComponent data={technology[0]} technologyStep="LAUNCH VEHICLE" /> : <></>}
            {snap.TechnologySection === "SPACEPORT" ? <TechnologyComponent data={technology[1]} technologyStep="SPACEPORT" /> : <></>}
            {snap.TechnologySection === "SPACE CAPSULE" ? <TechnologyComponent data={technology[2]} technologyStep="SPACE CAPSULE" /> : <></>}
        </div>
    )
}