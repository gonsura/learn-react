import { useState } from 'react'
import NavBtn from '../../Elements/NavBtn'
import NavMenuItem from '../../Elements/NavMenuItem'
import NavSearchBtn from '../../Elements/NavSearchBtn'
import NavSearchInput from '../../Elements/NavSearchInput/index';

const NavMenu = () => {
  const [isHamburgerOpen, setisHamburgerOpen] = useState(false)
  const hamburgerOpenMenu = () => {
    setisHamburgerOpen(!isHamburgerOpen)
  }
  const [isSearchOpen, setisSearchOpen] = useState(false)
  const searchOpenMenu = () => {
    setisSearchOpen(!isSearchOpen)
  }
  return (
    <>
      <ul
        className={`transition-all absolute md:static inset-0  bg-zinc-800 h-screen md:h-0 flex flex-col md:flex-row justify-around items-center md:justify-between md:w-4/6 ${
          isHamburgerOpen ? 'w-full top-0' : 'w-0 top-[-100vh]'
        } `}
      >
        <NavMenuItem />
      </ul>
      <div>
        <NavSearchBtn onClick={searchOpenMenu} isOpen={isSearchOpen} />
        <NavBtn onClick={hamburgerOpenMenu} isOpen={isHamburgerOpen} />
      </div>
      <NavSearchInput isOpen={isSearchOpen} />
    </>
  )
}

export default NavMenu
