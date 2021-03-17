import React from 'react'
import { useLocation } from 'react-router-dom'

import Styled from './NavBar.styled'

function NavBar() {
  const location = useLocation();

  return (
    <Styled.Link to={{
      pathname: '/login',
      state: { background: location }
    }}>Login</Styled.Link>
  )
}

export default NavBar;