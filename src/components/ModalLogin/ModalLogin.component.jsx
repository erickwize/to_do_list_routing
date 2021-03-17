import React from 'react'

import Styled from './ModalLogin.styled'

function ModalLogin() {
  return (
    <Styled.ModalBackground>
      <Styled.ModalContent>
        <Styled.CloseButton>&times;</Styled.CloseButton>
        <Styled.LoginForm>
          <Styled.FormLabel htmlFor="uname"><b>Username</b></Styled.FormLabel>
          <Styled.Input type="text" placeholder="Enter Username" name="uname" required />

          <Styled.FormLabel htmlFor="psw"><b>Password</b></Styled.FormLabel>
          <Styled.Input type="password" placeholder="Enter Password" name="psw" required />

          <Styled.LoginButton type="button">Login</Styled.LoginButton>
        </Styled.LoginForm>
      </Styled.ModalContent>
    </Styled.ModalBackground>
  )
}

export default ModalLogin;