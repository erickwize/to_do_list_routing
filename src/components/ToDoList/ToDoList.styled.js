import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  background-color: rgba(255,255,255,0.9);
  padding: 20px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 5px 5px;
  min-width: 250px;
`;

const Header = styled.h1`
  margin: 10px 0;
`;

const Element = styled.div`
  padding: 10px 0;
`

const Label = styled.label`
  cursor: pointer;
`

const CheckBox = styled.input`
  margin-right: 10px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const BigLink = styled(StyledLink)`
  font-size: 2em;
  margin-top: 80px;
  text-decoration: underline;
  color: #9FBEFF;
`;

const Styled = {
  Container,
  Header,
  Element,
  Label,
  CheckBox,
  Link: StyledLink,
  BigLink
}

export default Styled;