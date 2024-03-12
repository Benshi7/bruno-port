import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <Navbar className="w-full justify-between text-secondary">
        <NavbarBrand className="text-primary">
          <p className="font-semibold text-2xl px-8 text-slate-300">Bruno Celia</p>
        </NavbarBrand>
        <NavbarContent justify="end">
{/*           <NavbarItem>
            <Button as={Link} color="primary" variant="flat" className='ml-80'>
              <NavLink to="/contact" className="text-secondary">Contact Me</NavLink>
            </Button>
          </NavbarItem> */}
        </NavbarContent>
      </Navbar>
  )
}

export default Header
