import state from "../state"


export default function CrewComponents(props) {
    return (
        <div className="w-screen h-screen grid grid-flow-dense lg:grid-cols-2 pt-12 lg:pt-40 p-5 md:p-0 text-white place-items-center overflow-y-hidden">
            <div className="flex flex-col  justify-around items-center md:gap-y-4 lg:gap-y-16 lg:pl-[135px] order-3 md:order-1 lg:order-none ">
                <h2 className="hidden md:block text-white md:self-start text-base md:text-xl lg:text-[28px] font-barlow tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] md:pb-6 md:mt-10 lg:mt-0 lg:pb-0 md:pl-10 lg:pl-0"><span className="text-white/20 font-bold">02 </span>MEET YOUR CREW</h2>
                <div className="lg:h-80 md:h-60 text-center lg:text-left">
                    <h3 className="text-base md:text-2xl lg:text-[32px] font-bellefair text-white/50">{props.data.role}</h3>
                    <h1 className="text-[24px] md:text-[40px] lg:text-[56px] text-ellipsis ">{props.data.name}</h1>
                    <p className="text-[#D0D6F9] leading-[25px] md:leading-7 lg:leading-8 text-[15px] md:text-base lg:text-[18px] lg:pr-28 text-center lg:text-left md:mx-24 lg:mx-0 pt-4 lg:pt-0 md:px-12 lg:px-0">{props.data.description}</p>
                </div>
                <div className="hidden md:flex justify-around items-center gap-x-4 md:self-center lg:self-start lg:mb-20 md:my-4 lg:my-0">
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

            <h2 className="text-white md:self-start text-base font-barlow tracking-[2.7px] order-1 md:hidden"><span className="text-white/20 font-bold">02 </span>MEET YOUR CREW</h2>
            <div className="flex justify-center items-center lg:overflow-y-hidden lg:pt-20 order-2 lg:order-none w-[160px] h-[170px]  lg:w-auto lg:h-auto ">
                <div className="flex flex-col justify-center items-center">
                    <img src={props.data.image} alt="" className="w-[160px] md:w-[457px] lg:w-auto lg:h-auto" />
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