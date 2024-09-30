import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


export default function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h2 className='text-center font-extrabold text-[55px] mt-16'><span className='text-indigo-800'>AI Trip Planner for your</span>
        <span className='text-[42px] font-extrabold'> <br></br>personalized itenaries.</span></h2>
           <p className='text-xl text-center'>Plan your next trip with the help of AI and zero the chance of missing out on the places.</p>
          
          <Link to={'/create-trip'}> <Button>Get Started.</Button></Link>
    </div>
  )
}
