import styled from 'styled-components';

const Container = styled.div`
  background-color: rgba(255,255,255,0.9);
  padding: 20px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 5px 5px;
  min-width: 250px;
`

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Styled = {
  Container,
  Header,
}

export default Styled;