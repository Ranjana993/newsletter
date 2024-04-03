// import { navItems } from '@/app/config/constants'
import { navItems } from '@/app/configs/constants'
import Link from 'next/link'
import React from 'react'

const Navitems = () => {
  return (
    <div className='w-full hidden md:flex items-center'>
      {
        navItems.map((i: NavItems, index) => (
          <Link key={index} href={"/"} className='px-5 text-lg' >
            {i.title}
          </Link>
        ))
      }
    </div>
  )
}

export default Navitems
