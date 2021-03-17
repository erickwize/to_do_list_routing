import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body {
  width: 100vw;
  height: 100vh;
  background: url('http://localhost:3000/background.jpeg') no-repeat;
  background-position: center center;
  background-size: cover;
}

h1 {
  margin: 0;
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
`