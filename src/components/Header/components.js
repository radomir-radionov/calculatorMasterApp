import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '@/theme'

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 37px;
  background: ${theme.colors.blackLight};
  border: 1px solid ${theme.colors.gray};
  opacity: 1;
`

export const Logo = styled.a``

export const LogoText = styled.span`
  font-size: ${theme.fontSizes[5]}px;
  color: ${theme.colors.white};
`

export const Navigation = styled.nav``

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
`

export const NavItem = styled.li``

export const NavLinkStyled = styled(NavLink)`
  font-size: ${theme.fontSizes[5]}px;
  color: ${theme.colors.white};
  opacity: 0.7;

  &.active {
    border-bottom: 2px solid ${theme.colors.white};
    opacity: 1;
  }
`
