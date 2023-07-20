import React from "react"

import state from '../state'


export default function Planets(props){
    return(
        <div className="w-screen h-screen grid grid-cols-2 pt-40 pl-32">
            <div className="flex flex-col justify-center items-center gap-y-20">
                <h2 className="text-white self-start text-[28px] font-barlow tracking-[4.72px] pl-10"><span className="text-white/20 font-bold">01 </span>PICK YOUR DESTINATION</h2>
                <img src={props.data.image} alt="" className="w-[444px]" />
            </div>
            <div className="flex flex-col justify-evenly items-start pt-28 pb-20">
                <div>
                    <ul className="text-[#D0D6F9] flex justify-center items-center gap-x-12 ">
                        <li className={props.planet==='MOON' ? 'activePlanet':'unactivePlanet'} onClick={()=>state.section="MOON"} >MOON</li>
                        <li className={props.planet==='MARS' ? 'activePlanet':'unactivePlanet'} onClick={()=>state.section="MARS"}  >MARS</li>
                        <li className={props.planet==='EUROPA' ? 'activePlanet':'unactivePlanet'} onClick={()=>state.section="EUROPA"}  >EUROPA</li>
                        <li className={props.planet==='TITAN' ? 'activePlanet':'unactivePlanet'} onClick={()=>state.section="TITAN"}  >TITAN</li>
                    </ul>
                </div>
                <h1 className="text-white text-[100px] font-bellefair">{props.data.name}</h1>
                <p className="text-[#D0D6F9] leading-8 text-[18px] pr-48">{props.data.description}</p>
                {/* <hr  className="bg-white h-2"/> */}
                <div className="flex justify-start items-center gap-x-28 w-[450px] border-t border-white/20 mt-6 pt-10">
                    <div>
                        <h3 className="text-[#D0D6F9] text-sm font-barlow tracking-[2.32px]">AVG. DISTANCE</h3>
                        <h2 className="text-white text-[28px] font-bellefair ">{props.data.distance} KM</h2>
                    </div>
                    <div>
                    <h3 className="text-[#D0D6F9] text-sm font-barlow tracking-[2.32px]">EST. TRAVEL TIME</h3>
                        <h2 className="text-white text-[28px] font-bellefair ">{props.data.travelTime.no} {props.data.travelTime.period_of_time}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}