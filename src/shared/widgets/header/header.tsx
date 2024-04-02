import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import Navitems from './nav.items'

const Header = () => {
  return (
    <div className='w-full sticky top-0 left-0 border-b border-b[#000] flex items-center justify-between bg-white text-black z-[999] px-10 py-2'>
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
        <div>
          <Navitems />
        </div>
      </div>
    </div>
  )
}

export default Header