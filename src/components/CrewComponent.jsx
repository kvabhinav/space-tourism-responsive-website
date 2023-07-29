import state from "../state"


export default function CrewComponents(props) {
    return (
        <div className="w-screen h-screen grid grid-flow-dense lg:grid-cols-2 pt-12 lg:pt-40 p-5 lg:p-0 text-white place-items-center">
            <div className="flex flex-col  justify-around items-center lg:gap-y-16 lg:pl-[135px] order-3 lg:order-none">
                <h2 className="hidden md:block text-white md:self-start text-base lg:text-[28px] font-barlow tracking-[2.7px] lg:tracking-[4.72px] "><span className="text-white/20 font-bold">02 </span>MEET YOUR CREW</h2>
                <div className="lg:h-80 text-center lg:text-left">
                    <h3 className="text-base lg:text-[32px] font-bellefair text-white/50">{props.data.role}</h3>
                    <h1 className="text-[24px] lg:text-[56px] text-ellipsis ">{props.data.name}</h1>
                    <p className="text-[#D0D6F9] leading-[25px] lg:leading-8 text-[15px] lg:text-[18px] lg:pr-28 text-center lg:text-left md:mx-24 lg:mx-0 pt-4 lg:pt-0">{props.data.description}</p>
                </div>
                <div className="hidden md:flex justify-around items-center gap-x-4 self-start lg:mb-20 ">
                    <div className={props.crew === "COMMANDER" ? "activeCrew" : "unactiveCrew"} onClick={() => state.crewSection = "COMMANDER"}>

                    </div>
                    <div className={props.crew === "MISSION SPECIALIST" ? "activeCrew" : "unactiveCrew"} onClick={() => state.crewSection = "MISSION SPECIALIST"}>

                    </div>
                    <div className={props.crew === "PILOT" ? "activeCrew" : "unactiveCrew"} onClick={() => state.crewSection = "PILOT"}>

                    </div>
                    <div className={props.crew === "FLIGHT ENGINEER" ? "activeCrew" : "unactiveCrew"} onClick={() => state.crewSection = "FLIGHT ENGINEER"}>

                    </div>
                </div>
            </div>

            <h2 className="text-white md:self-start text-base font-barlow tracking-[2.7px] order-1 lg:hidden"><span className="text-white/20 font-bold">02 </span>MEET YOUR CREW</h2>
            <div className="flex justify-center items-center lg:overflow-y-hidden lg:pt-20 order-2 lg:order-none w-[160px] h-[170px] lg:w-auto lg:h-auto">
                <div className="flex flex-col justify-center items-center">
                    <img src={props.data.image} alt="" className="w-[160px]  lg:w-auto lg:h-auto" />
                    <div className="w-80 h-[0.5px] bg-[#979797]/20 lg:hidden"></div>
                    <div className="flex md:hidden justify-around items-center gap-x-4 pt-6 lg:mb-20">
                        <div className={props.crew === "COMMANDER" ? "activeCrewMobile" : "unactiveCrewMobile"} onClick={() => state.crewSection = "COMMANDER"}>

                        </div>
                        <div className={props.crew === "MISSION SPECIALIST" ? "activeCrewMobile" : "unactiveCrewMobile"} onClick={() => state.crewSection = "MISSION SPECIALIST"}>

                        </div>
                        <div className={props.crew === "PILOT" ? "activeCrewMobile" : "unactiveCrewMobile"} onClick={() => state.crewSection = "PILOT"}>

                        </div>
                        <div className={props.crew === "FLIGHT ENGINEER" ? "activeCrewMobile" : "unactiveCrewMobile"} onClick={() => state.crewSection = "FLIGHT ENGINEER"}>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}