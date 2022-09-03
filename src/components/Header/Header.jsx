import React from 'react'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import {
  HeaderStyled,
  Logo,
  LogoText,
  Navigation,
  NavList,
  NavItem,
  NavLinkStyled,
} from './components'

const Header = () => {
  return (
    <HeaderStyled>
      <Logo href={HOME_PAGE_ROUTE}>
        <LogoText>Calculator App</LogoText>
      </Logo>
      <Navigation>
        <NavList>
          <NavItem>
            <NavLinkStyled to={HOME_PAGE_ROUTE}>
              Home
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to={SETTINGS_PAGE_ROUTE}>
              Settings
            </NavLinkStyled>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderStyled>
  )
}

export default Header
