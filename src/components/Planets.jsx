import React from "react"

import state from '../state'


export default function Planets(props){
    return(
        <div className="w-screen h-max md:h-screen grid lg:grid-flow-dense lg:grid-cols-2 px-5 lg:px-0 pt-24 lg:pt-40 lg:pl-32">
            <div className="flex flex-col justify-center items-center gap-y-6 lg:gap-y-20">
                <h2 className="text-white md:self-start text-base lg:text-[28px] font-barlow tracking-[2.7px] lg:tracking-[4.72px] lg:pl-10"><span className="text-white/20 font-bold">01 </span>PICK YOUR DESTINATION</h2>
                <img src={props.data.image} alt="" className="w-[170px] lg:w-[444px]" />
            </div>
            <div className="flex flex-col justify-evenly items-center lg:items-start pt-10 lg:pt-28 lg:pb-20">
                <div>
                    <ul className="text-[#D0D6F9] flex justify-center items-center gap-x-6 lg:gap-x-12 ">
                        <li className={props.planet==='MOON' ? 'activePlanet':'unactivePlanet'} onClick={()=>state.section="MOON"} >MOON</li>
                        <li className={props.planet==='MARS' ? 'activePlanet':'unactivePlanet'} onClick={()=>state.section="MARS"}  >MARS</li>
                        <li className={props.planet==='EUROPA' ? 'activePlanet':'unactivePlanet'} onClick={()=>state.section="EUROPA"}  >EUROPA</li>
                        <li className={props.planet==='TITAN' ? 'activePlanet':'unactivePlanet'} onClick={()=>state.section="TITAN"}  >TITAN</li>
                    </ul>
                </div>
                <h1 className="text-white text-[56px] lg:text-[100px] font-bellefair pt-6 lg:pt-0 ">{props.data.name}</h1>
                <p className="text-[#D0D6F9] leading-[25px] lg:leading-8 text-[15px] lg:text-[18px] lg:pr-48 text-center lg:text-left">{props.data.description}</p>
                {/* <hr  className="bg-white h-2"/> */}
                <div className="flex sm:flex-col lg:flex-row justify-center lg:justify-start items-center gap-y-10 lg:gap-y-0 lg:gap-x-28 w-[335px] lg:w-[450px] border-t border-white/20 mt-6 pt-10">
                    <div>
                        <h3 className="text-[#D0D6F9] text-sm font-barlow tracking-[2.36px] lg:tracking-[2.32px] text-center lg:text-left">AVG. DISTANCE</h3>
                        <h2 className="text-white text-[28px] font-bellefair ">{props.data.distance} KM</h2>
                    </div>
                    <div className="mb-10 lg:mb-0">
                    <h3 className="text-[#D0D6F9] text-sm font-barlow tracking-[2.36px] lg:tracking-[2.32px]">EST. TRAVEL TIME</h3>
                        <h2 className="text-white text-[28px] font-bellefair text-center lg:text-left">{props.data.travelTime.no} {props.data.travelTime.period_of_time}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}