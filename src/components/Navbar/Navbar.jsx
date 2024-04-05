import React from 'react'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'

const Header = () => {
  return (
    <Navbar className='w-full z-[20] justify-between bg-background-100 text-secondary'>
      <NavbarBrand className="text-primary text-left">
        <p className='text-lg md:text-xl lg:text-2xl lg:px-6 xl:px-8 text-slate-300 font-light'>Bruno Celia</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        {/* <NavbarItem>
          <Button as={Link} color="primary" variant="flat" className='ml-80'>
            <NavLink to="/contact" className="text-secondary">Contact Me</NavLink>
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  )
}

export default Header
