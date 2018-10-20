import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderStyle = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 1000;
`

const Header = ({
  movieCount
}) => {
  return (
  <HeaderStyle>
    <nav className="navbar sticky-top navbar-light bg-light">
      <Link className="navbar-brand" to="/">{ blockCopy.title }</Link>
      <nav className="nav nav-pills nav-justified">
        <Link className="nav-link" to={ blockCopy.link1 }>{ blockCopy.menu1 }</Link>
        <Link className="nav-link" to={ blockCopy.link2 }>{ blockCopy.menu2 }</Link>
        <Link to={ blockCopy.link2 }><button type="button" className={ `btn btn-${movieCount ? 'info' : 'secondary'}` } style={{borderRadius: '100%', height: '40px', width: '40px'}}>{ movieCount }</button></Link>
      </nav>
    </nav>
  </HeaderStyle>
  )
}

const blockCopy = {
  title: "Piratial-Liz's Bay.com",
  menu1: "MOVIES",
  link1: "/",
  menu2: "SHOPPING CART",
  link2: "/shopping-cart"
}

export default Header
