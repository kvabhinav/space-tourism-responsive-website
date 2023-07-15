import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

import Navbar from "../src/components/NavBar"

function App() {
  return (
    <div className='w-screen h-screen relative'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Destination' element={<Destination />}></Route>
        <Route path='/Crew' element={<Crew />}></Route>
        <Route path='/Technology' element={<Technology />}></Route>
      </Routes>
    </div>
  );
}

export default App;
