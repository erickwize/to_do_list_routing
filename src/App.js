import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './globalStyle';
import Routes from './components/Routes'
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </Router>
  )
}


export default App;
