import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../../GlobalStyles'

export const Nav = styled.nav`
  background: #101522;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  padding: 1.2rem 0;
  top: 0;
  left: 0;
  z-index: 100;
`
export const NavLogo = styled(FaMagento)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`
export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  color: white;
  align-items: center;
`

export const MobileIcon = styled.div`
  display: none;
  padding: 0;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 55%;
    right: 0;
    transform: translate(-100%, -50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  //media query
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    left: ${({ click }) => (click ? 0 : '-100%')};
    transition: all 0.5s ease;
    background: #101522;
  }
`

export const NavItem = styled.li`
  text-align: center;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: solid 2px #4b59f7;
    color: Red;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    border: none;
    margin-top: 1rem;
    &:hover {
      border: none;
    }
  }
`
export const NavLink = styled(Link)`
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      color: #4b59f7;
    }
  }
`

export const NavItemBtn = styled.button`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
`
