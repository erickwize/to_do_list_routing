import React from 'react'
import { useHistory } from 'react-router-dom'

import Styled from './ModalLogin.styled'

function ModalLogin() {
  const history = useHistory();

  const goBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  return (
    <Styled.ModalBackground>
      <Styled.ModalContent>
        <Styled.CloseButton onClick={goBack}>&times;</Styled.CloseButton>
        <Styled.LoginForm>
          <Styled.FormLabel htmlFor="uname"><b>Username</b></Styled.FormLabel>
          <Styled.Input type="text" placeholder="Enter Username" name="uname" required />

          <Styled.FormLabel htmlFor="psw"><b>Password</b></Styled.FormLabel>
          <Styled.Input type="password" placeholder="Enter Password" name="psw" required />

          <Styled.LoginButton type="button" onClick={goBack}>Login</Styled.LoginButton>
        </Styled.LoginForm>
      </Styled.ModalContent>
    </Styled.ModalBackground>
  )
}

export default ModalLogin;