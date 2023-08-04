import state from "../state"

export default function TechnologyComponent(props) {
    return (
        <div className="w-screen h-screen pt-24 lg:pt-40 ">
            <div className="lg:pl-32 lg:pt-10">
                <h2 className="text-white font-barlow text-base lg:text-[28px] tracking-[2.7px] lg:tracking-[4.72px] text-center lg:text-left"><span className="text-white/20 font-bold">03 </span>SPACE LAUNCH 101</h2>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center w-screen lg:h-[87%] text-center lg:text-left">
                <div className="lg:flex lg:w-8/12 lg:px-32 lg:gap-x-10 lg:h-80">
                    <div className="flex lg:grid gap-x-6 lg:gap-x-0  justify-center my-6 lg:my-0">
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
                        <h5 className="font-barlow text-[14px] lg:text-base tracking-[2.36px] lg:tracking-2.7px text-[#D0D6F9]">THE TERMINOLOGY...</h5>
                        <h1 className="text-white font-bellefair text-[24px] lg:text-[56px]">{props.data.step}</h1>
                        <p className="text-[#D0D6F9] text-[15px] lg:text-[18px] leading-[25px] lg:leading-8 px-8 lg:px-0 lg:pr-32 pt-3 lg:pt-0">{props.data.description}</p>
                    </div>
                </div>
                <div className="lg:w-4/12 mt-6 mb-2 lg:mt-0 lg:mb-0">
                    <img src={props.data.imagePortrait} alt="" width="515px" height="527px" className="hidden lg:block " />
                    <img src={props.data.imageLandscape} alt="" className="lg:hidden" />
                </div>

            </div>

        </div>
    )
}