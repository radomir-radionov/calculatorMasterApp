import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12rem;
  padding: 0 3.7rem;
  background-color: ${({ theme }) => theme.headerBg};
  opacity: 1;
`

export const Logo = styled.a`
  color: ${({ theme }) => theme.logoColor};
`

export const LogoText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[5]};
`

export const Navigation = styled.nav``

export const NavList = styled.ul`
  display: flex;
  gap: 3.2rem;
`

export const NavItem = styled.li``

export const NavLinkStyled = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.navLinkColor};
  opacity: 0.7;

  &.active {
    border-bottom: 2px solid
      ${({ theme }) => theme.navLinkColor};
    opacity: 1;
  }
`
