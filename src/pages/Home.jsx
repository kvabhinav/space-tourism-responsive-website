import React from "react"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="w-screen h-screen homeMobile md:homeTablet  lg:homeDesktop" >
            <div className="w-screen h-screen pt-40 grid grid-cols-2 justify-center items-center text-left">
                <div className="flex flex-col pl-40">
                    <h2 className="text-3xl font-barlow tracking-[4.72px] text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className="text-[150px] font-bellefair text-white">SPACE</h1>
                    <h3 className=" font-normal text-lg leading-8 text-[#D0D6F9] text-left">Let’s face it; if you want to go to space, you might as well <br />
                        genuinely go to outer space and not hover kind of on the <br />
                        edge of it. Well sit back, and relax because we’ll give you a <br /> truly out of this world experience!
                    </h3>
                </div>
                <div className="flex justify-center pt-24">
                    
                    <div className="w-[450px] h-[450px] rounded-full hover:bg-[#979797]/20 flex justify-center items-center ">
                        <Link to='/destination'>
                            <div className="w-[274px] h-[274px] bg-white rounded-full flex justify-center items-center ">
                                <h2 className="text-[#0B0D17] font-bellefair tracking-[2px] text-[32px]">EXPLORE</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}