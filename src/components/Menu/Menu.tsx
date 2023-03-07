import React from 'react'
import styled, { keyframes } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { NavLink } from 'react-router-dom'

import Home from '../../assets/img/home_icon.svg'
import Trade from '../../assets/img/trade_icon.svg'
import Pools from '../../assets/img/pools_icon.svg'
import Farm from '../../assets/img/farm_icon.svg'
import Active from '../../assets/img/active_menu.svg'
import Logo from '../Logo'
import MenuOpen from '../../assets/img/menu_open.svg'
import MenuClose from '../../assets/img/menu_close.svg'

interface MenuProps {
  onDismiss?: () => void
  visible?: boolean
  onClickMenu: () => void,
  showMenu: boolean
}

const Menu: React.FC<MenuProps> = ({ onDismiss, visible, showMenu, onClickMenu }) => {
  return (
    <StyledMenuWrapper className={isMobile ? visible ? 'show mobile': 'hide': visible ? 'show' : 'minimize'}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <StyledLogoWrapper>
          <WrapIconMenu>
            <img
              onClick={() => onClickMenu()}
              src={showMenu ? MenuOpen : MenuClose}
              width="25"
              style={{ cursor: 'pointer' }}
            />
          </WrapIconMenu>
          <Logo />
        </StyledLogoWrapper>
      </div>
      <div>
        <StyledAbsoluteLink href="http://212.47.235.97:9999/#/home">
          <img className='active' src={Active} alt="active" />
          <img src={Home} alt="home" />
          Home
        </StyledAbsoluteLink>
        <StyledAbsoluteLink href="http://212.47.235.97:9999/#/swap">
          <img className='active' src={Active} alt="active" />
          <img src={Trade} alt="trade" />
          Trade
        </StyledAbsoluteLink>
        <StyledNavLink exact activeClassName="active" to="/" onClick={isMobile && onDismiss}>
          <img className='active' src={Active} alt="active" />
          <img src={Farm} alt="pools" />
          Farm
        </StyledNavLink>
        <StyledNavLink exact activeClassName="active" to="/pools" onClick={isMobile && onDismiss}>
          <img className='active' src={Active} alt="active" />
          <img src={Pools} alt="pools" />
          Pools
        </StyledNavLink>
      </div>
    </StyledMenuWrapper>
  )
}

const StyledMenuWrapper = styled.div`
  position: fixed;
  padding-top: 5px;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #FFF;
  height: 100%;
  transition: padding-top 0.2s ease 0s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border-right: 0px;
  overflow: hidden;
  transform: translate3d(0px, 0px, 0px);
  white-space: nowrap;
  display: block;
  &.show {
    display: block;
    width: 240px;
  }
  &.minimize {
    display: block;
    width: 56px;
  }
  &.hide {
    display: none;
  }
`

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  display: flex;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  text-decoration: none;
  font-weight: 600;
  color: #89DBC4;
  :hover {
    color: #50E3C2;
    background: #89DBC420;
    cursor: pointer;
  }
  > img {
    width: 12px;
    margin-right: 1.25rem;
    margin-left: 0.5rem;
    &.active {
      display: none;
      margin-left: 0;
    }
  }

  &.active {
    color: #50E3C2;
    > img {
      &.active {
        display: block;
        position: absolute;
        left: 0;
      }
    }
`
const StyledAbsoluteLink = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  text-decoration: none;
  font-weight: 600;
  color: #89DBC4;
  :hover {
    color: #50E3C2;
    background: #89DBC420;
    cursor: pointer;
  }
  > img {
    width: 12px;
    margin-right: 1.25rem;
    margin-left: 0.5rem;
    &.active {
      display: none;
      margin-left: 0;
    }
  }

  &.active {
    > img {
      &.active {
        display: block;
        position: absolute;
        left: 0;
      }
    }
`
const StyledLogoWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  @media (max-width: 767px) {
    width: auto;
  }
`
const WrapMenuMobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`
const WrapIconMenu = styled.div`
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Menu
