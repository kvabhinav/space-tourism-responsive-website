import logo from '../images/logo.svg'
import hamburgerIcon from '../images/hamburgerIcon.svg'
import closeIcon from '../images/closeIcon.svg'

import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar() {

    const [toggle,setToggle]=useState(false)

    const location = useLocation()
    console.log(location.pathname)

    const toggleMenu=()=>{
        setToggle(prev=>!prev)
    }
    return (
        <div className='w-screen h-20 px-6 md:px-0 pt-6 lg:h-20 lg:w-[1385px] absolute top-0 left-0 lg:top-10 lg:left-14 text-white font-nav flex justify-between items-center lg:text-base'>

            {/* logo  */}
            <img src={logo} alt='logo' className='w-10 h-10 md:w-12 md:h-12 ' onClick={toggleMenu}></img>

            {/* Hamburger menu  */}
            <div className='md:hidden'>
                <img src={hamburgerIcon} alt='hamburger' className='' onClick={toggleMenu}></img>
            </div>
            {toggle&&<nav className='w-64 h-screen absolute right-0 top-0 bg-white/5 backdrop-blur-lg md:hidden' id='navbar'>
                <img src={closeIcon} alt="close" className='ml-auto w-[20px] h-[20px] my-8 mx-6' onClick={toggleMenu}/>
                <div className='text-white mt-20'>
                    <ul className='flex flex-col ml-6 gap-7 tracking-[2.7px]'>
                        <div className='flex justify-between items-center group'>
                            <li><Link to='/' onClick={toggleMenu}><span className='font-bold mx-2'>00</span>HOME</Link></li>
                            {location.pathname === '/' ? <div className='w-[3px] h-6 bg-white'></div> : <div className='w-[3px] h-6 group-hover:bg-[#979797]/50'></div>}
                        </div>
                        <div className='flex justify-between items-center group'>
                            <li><Link to='/destination' onClick={toggleMenu}><span className='font-bold mx-2'>00</span>DESTINATION</Link></li>
                            {location.pathname === '/destination' ? <div className='w-[3px] h-6 bg-white'></div> : <div className='w-[3px] h-6 group-hover:bg-[#979797]/50'></div>}
                        </div>
                        <div className='flex justify-between items-center group'>
                            <li><Link to='/crew' onClick={toggleMenu}><span className='font-bold mx-2'>00</span>CREW</Link></li>
                            {location.pathname === '/crew' ? <div className='w-[3px] h-6 bg-white'></div> : <div className='w-[3px] h-6 group-hover:bg-[#979797]/50'></div>}
                        </div>
                        <div className='flex justify-between items-center group'>
                            <li><Link to='/technology' onClick={toggleMenu}><span className='font-bold mx-2'>00</span>TECHNOLOGY</Link></li>
                            {location.pathname === '/technology' ? <div className='w-[3px] h-6 bg-white'></div> : <div className='w-[3px] h-6 group-hover:bg-[#979797]/50'></div>}
                        </div>


                    </ul>
                </div>
            </nav>}

            {/* line  */}
            <div className='hidden lg:block w-[473px] h-[1px] bg-white/20 backdrop-blur-lg absolute top-[52] left-32 z-10  ' ></div>

            {/* Navbar lists  */}
            <ul className='hidden  h-24 w-[830px] px-40 md:flex justify-between items-center gap-x-12 bg-white/5 backdrop-blur-lg tracking-[2.7px] '>
                <div className='group'>
                    <li><Link to='/'><span className='font-bold mx-2'>00</span>HOME</Link></li>
                    {location.pathname === '/' ? <div className='w-[69px] h-[3px] bg-white absolute top-[92px] left-[167px]'></div> : <div className='w-[69px] h-[3px] group-hover:bg-[#979797]/50 absolute top-[92px] left-[167px]'></div>}
                </div>
                <div className='group'>
                    <li><Link to='/destination'><span className='font-bold mx-2'>01</span>DESTINATION</Link></li>
                    {location.pathname === '/destination' ? <div className='w-32 h-[3px] bg-[white] absolute top-[92px] left-[291px]'></div> : <div className='w-32 h-[3px] group-hover:bg-[#979797]/50 absolute top-[92px] left-[291px]'></div>}
                </div>
                <div className='group'>
                    <li><Link to='/crew'><span className='font-bold mx-2'>03</span>CREW</Link></li>
                    {location.pathname === '/crew' ? <div className='w-16 h-[3px] bg-white absolute top-[92px] left-[475px]'></div> : <div className='w-16 h-[3px] group-hover:bg-[#979797]/50 absolute top-[92px] left-[475px]'></div>}
                </div>

                <div className='group'>
                    <li><Link to='/technology'><span className='font-bold mx-2'>04</span>TECHNOLOGY</Link></li>
                    {location.pathname === '/technology' ? <div className='w-32 h-[3px] bg-white absolute top-[92px] left-[600px]'></div> : <div className='w-32 h-[3px] group-hover:bg-[#979797]/50 absolute top-[92px] left-[600px]'></div>}
                </div>
            </ul>
        </div>
    )
}