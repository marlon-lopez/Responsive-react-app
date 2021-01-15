import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from './styles'
import { Button } from '../../GlobalStyles'

const NavBar = () => {
  const [click, setClick] = useState(false)

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavContainer>
          <NavLogo />
          <MobileIcon onClick={() => setClick(!click)}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={click}>
            <NavItem>
              <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Contact</NavLink>
            </NavItem>
            <NavItem>
              <Button>SIGN UP</Button>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default NavBar
