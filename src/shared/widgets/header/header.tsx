import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import Navitems from './nav.items'
import Toolbar from './Toolbar'

const Header = () => {
  return (
    <div className='w-full sticky top-0 left-0 border-b border-b[#000] flex items-center justify-between bg-white text-black z-[999] px-10 py-2'>
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div>
        <Navitems />
      </div>
      <div className="flex items-center gap-3">
        <Toolbar />
      </div>
    </div>
  )
}

export default Header