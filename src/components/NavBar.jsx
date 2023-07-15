import logo from '../images/logo.svg'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar() {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div className='h-20 w-[1385px] absolute top-10 left-14 text-white font-nav flex justify-between items-center text-base'>
            <img src={logo} alt='logo'></img>
            <div className='w-[473px] h-[1px] bg-white/20 backdrop-blur-lg absolute top-10 left-32 z-10  ' ></div>
            <ul className='h-24 w-[830px] px-40 flex justify-between items-center gap-x-12 bg-white/5 backdrop-blur-lg '>
                <div>
                    <li><Link to='/'><span className='font-bold mx-2'>00</span>Home</Link></li>
                    {location.pathname === '/' && <div className='w-16 h-[3px] bg-white absolute top-[92px] left-[165px]'></div>}
                </div>
                <div>
                    <li><Link to='/destination'><span className='font-bold mx-2'>01</span>Destination</Link></li>
                    {location.pathname === '/destination' && <div className='w-24 h-[3px] bg-white absolute top-[92px] left-[294px]'></div>}
                </div>
                <div>
                    <li><Link to='/crew'><span className='font-bold mx-2'>03</span>Crew</Link></li>
                    {location.pathname === '/crew' && <div className='w-16 h-[3px] bg-white absolute top-[92px] left-[455px]'></div>}
                </div>

                <div>
                    <li><Link to='/technology'><span className='font-bold mx-2'>04</span>Technology</Link></li>
                    {location.pathname === '/technology' && <div className='w-24 h-[3px] bg-white absolute top-[92px] left-[583px]'></div>}
                </div>
            </ul>
        </div>
    )
}