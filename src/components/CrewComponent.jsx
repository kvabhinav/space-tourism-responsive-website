import state from "../state"


export default function CrewComponents(props) {
    return (
        <div className="w-screen h-screen grid grid-flow-dense grid-cols-2 pt-40 text-white">
            <div className="flex flex-col justify-around items-center gap-y-16 pl-[135px]">
                <h2 className="text-white md:self-start text-base lg:text-[28px] font-barlow tracking-[2.7px] lg:tracking-[4.72px] "><span className="text-white/20 font-bold">02 </span>MEET YOUR CREW</h2>
                <div className="h-80">
                    <h3 className="text-[32px] font-bellefair text-white/50">{props.data.role}</h3>
                    <h1 className="text-[56px] text-ellipsis text-left">{props.data.name}</h1>
                    <p className="text-[#D0D6F9] leading-[25px] lg:leading-8 text-[15px] lg:text-[18px] lg:pr-28 text-center lg:text-left md:mx-24 lg:mx-0">{props.data.description}</p>
                </div>
                <div className="flex justify-around items-center gap-x-4 self-start mb-20">
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
            <div className="flex justify-center items-center overflow-y-hidden pt-20">
                <img src={props.data.image} alt="" />

            </div>
        </div>
    )
}