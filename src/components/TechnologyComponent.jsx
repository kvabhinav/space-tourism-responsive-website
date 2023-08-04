import state from "../state"

export default function TechnologyComponent(props) {
    return (
        <div className="w-screen h-screen pt-40 ">
            <div className="pl-32 pt-10">
                <h2 className="text-white font-barlow text-[28px] tracking-[4.72px]"><span className="text-white/20 font-bold">03 </span>SPACE LAUNCH 101</h2>
            </div>
            <div className="flex justify-center items-center w-screen h-[87%]">
                <div className="flex w-8/12 px-32 gap-x-10 h-80">
                    <div className="grid  justify-center ">
                        <div className={props.technologyStep === "LAUNCH VEHICLE" ? "technology_Button_active" : "technology_Button_unactive"} onClick={()=>state.TechnologySection="LAUNCH VEHICLE"}>
                            <h2 className={props.technologyStep === "LAUNCH VEHICLE" ? "tech_Button_No_active" : "tech_Button_No_unactive"} >1</h2>
                        </div>
                        <div className={props.technologyStep === "SPACEPORT" ? "technology_Button_active" : "technology_Button_unactive"} onClick={()=>state.TechnologySection="SPACEPORT"}>
                            <h2 className={props.technologyStep === "SPACEPORT" ? "tech_Button_No_active" : "tech_Button_No_unactive"}>2</h2>
                        </div>
                        <div className={props.technologyStep === "SPACE CAPSULE" ? "technology_Button_active" : "technology_Button_unactive"} onClick={()=>state.TechnologySection="SPACE CAPSULE"}>
                            <h2 className={props.technologyStep === "SPACE CAPSULE" ? "tech_Button_No_active" : "tech_Button_No_unactive"}>3</h2>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-barlow tracking-2.7px text-[#D0D6F9]">THE TERMINOLOGY...</h5>
                        <h1 className="text-white font-bellefair text-[56px]">{props.data.step}</h1>
                        <p className="text-[#D0D6F9] text-[18px] leading-8 pr-32">{props.data.description}</p>
                    </div>
                </div>
                <div className="w-4/12">
                    <img src={props.data.imagePortrait} alt="" width="515px" height="527px" className="hidden lg:block " />
                    <img src={props.data.imageLandscape} alt="" className="lg:hidden" />
                </div>

            </div>

        </div>
    )
}