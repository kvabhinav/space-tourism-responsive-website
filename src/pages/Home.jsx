import React from "react"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="w-screen h-screen homeMobile md:homeTablet  lg:homeDesktop" >
            <div className="w-screen h-screen pt-28 lg:pt-40 grid lg:grid-flow-dense lg:grid-cols-2 justify-center items-center text-center lg:text-left">
                <div className="flex flex-col px-5 lg:pl-40">
                    <h2 className="text-base lg:text-3xl font-barlow tracking-[4.72px] text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className="text-[80px] md:text-[150px] font-bellefair text-white">SPACE</h1>
                    <h3 className=" font-normal text-[15px] lg:text-lg leading-6 lg:leading-8 text-[#D0D6F9] text-center lg:text-left">Let’s face it; if you want to go to space, you might as well <br className="hidden lg:block"/>
                        genuinely go to outer space and not hover kind of on the <br className="hidden lg:block"/>
                        edge of it. Well sit back, and relax because we’ll give you a <br className="hidden lg:block"/> truly out of this world experience!
                    </h3>
                </div>
                <div className="flex justify-center items-center px-5 lg:pt-24">
                    
                    <div className="w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] rounded-full hover:bg-[#979797]/20 flex justify-center items-center  ">
                        <Link to='/destination'>
                            <div className="w-[150px] h-[150px] lg:w-[274px] lg:h-[274px] bg-white rounded-full flex justify-center items-center ">
                                <h2 className="text-[#0B0D17] font-bellefair tracking-[2px] text-xl lg:text-[32px]">EXPLORE</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}