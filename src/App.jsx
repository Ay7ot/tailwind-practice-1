import './App.css'
import Navbar from './Navbar'
import NavMobile from './NavMobile'
import useWindowDimensions from './windowDimensions'
import { useState } from "react";
import { FaRegCreditCard, FaCreditCard } from 'react-icons/fa'

function App() {

  const [isToggled, setIsToggled] = useState(false)

  const { height, width } = useWindowDimensions()

  function toggleNav(){
    setIsToggled(prevIstoggled=>!prevIstoggled)
  }

  console.log(isToggled)

  return (
    <section className='bg-gray-700 px-4 pt-6 font-serif md:px-[3rem] xl:px-24'>
      {width > 640 ? <Navbar /> : 
      <NavMobile isToggled={isToggled} toggleNav={toggleNav}/>}
      <div className='header lg:mt-[15%] xl:mt-[10%] 2xl:mt-[7%]'>
        <h1 className='mt-6 font-bold text-white text-center text-[2rem] md:mt-12 lg:text-[2.5rem] lg:mt-24'>
          Scaffolding a New Company
        </h1>
        <p className='text-yellow-100 text-center font-semibold md:text-[1.1rem] lg:text-[1.3rem]'>Join us with the lastest blockchain innovations</p>
      </div>
      <div className='mt-5 xl:px-[15%] lg:grid lg:grid-cols-3 lg:gap-4 xl:gap-2 lg:mt-[10%]'>
        <div className='flex flex-col items-center justify-center pb-5'>
          <div className='-mb-6 z-50'>
            <i className='text-yellow-500 text-[3rem]'><FaCreditCard /></i>
          </div>
          <div className='mt-1 bg-slate-900 py-16 px-6 rounded-xl'>
            <p className='text-sm font-semibold text-white text-center lg:text-lg'>Join us with the lastest blockchain innovations</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center pb-5'>
          <div className='-mb-6 z-50'>
            <i className='text-yellow-500 text-[3rem]'><FaRegCreditCard /></i>
          </div>
          <div className='mt-1 bg-slate-900 py-16 px-6 rounded-xl'>
            <p className='text-sm font-semibold text-white text-center lg:text-lg'>Join us with the lastest blockchain innovations</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center pb-5'>
          <div className='-mb-6 z-50'>
            <i className='text-yellow-500 text-[3rem]'><FaCreditCard /></i>
          </div>
          <div className='mt-1 bg-slate-900 py-16 px-6 rounded-xl'>
            <p className='text-sm font-semibold text-white text-center lg:text-lg'>Join us with the lastest blockchain innovations</p>
          </div>
        </div>
      </div>
      <footer className='relative top-0 left-0 mt-[40%] md:mt-[32%] xl:mt-[20%]'>
        <img src='curve.png' className='relative top-0 left-0 self-center xl:left-[8%]'/>
        <img src='laptop.png' className='absolute -top-[355%] md:-top-[250%] left-3 md:left-[25%] xl:left-[35%] lg:top-[-160%]'/>
      </footer>
    </section>
  )
}

export default App
