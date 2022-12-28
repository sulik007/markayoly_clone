import React from 'react'
import logo from './../../assets/logo.png'
import {RiSearchLine} from 'react-icons/ri'
import {RxPerson} from 'react-icons/rx'
import {BsHeart} from 'react-icons/bs'
import {SlBasket} from 'react-icons/sl'

const Header = () => {
  return (
    <div>
     
     
      <div className='w-full bg-gray-50 absolute '>
        <div className='flex my-2 flex-row-reverse gap-4 mx-10'>
            <button className='bg-white w-12 text-black h-6 text-sm rounded-md border border-gray-500'>TM</button>
            <button className='bg-orange-500 w-12 text-white h-6 text-sm rounded-md'>RU</button>
          </div>
          
          
          
          <div className='w-full bg-white h-20 border'>
                 <div className='flex my-4'>
                  <img src={logo} alt="logo" className='w-32 mx-8' />
                      <div className='flex mx-40'>
                    <div className='border border-orange-500 flex rounded-sm'>
                    <RiSearchLine className='h-8 w-5 my-auto mx-2'/>
                    <input type="search"  placeholder='Harydy filter boyunca gozlet' className=' focus:outline-none w-80 placeholder:w-full '/>
                    </div>
                    <button className='w-20 bg-orange-500 text-sm font-semibold text-white rounded-l-none rounded-sm'>Gozlet</button>
                  </div>

                  <div className='text-xs font-bold flex my-auto mx-36'>
                    <div className=' mx-4 space-y-1'>
                    <RxPerson className='w-7 h-5'/>
                    <p>Giris</p>
                    </div>
                    <div className='mx-4 space-y-1'>
                    <BsHeart className='w-7 h-5 mx-auto'/>
                    <p>Halanlarym</p>
                    </div>
                    <div className='mx-4 space-y-1'>
                    <SlBasket className='w-7 h-5 mx-auto'/>
                     <p>Sebedim</p>
                    </div>
                  </div>
                 </div>
             </div>
             </div>

             
      
    </div>
  )
}

export default Header