import React from 'react';
import { Link } from 'react-router-dom'

import Styled from './Home.styled'

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Header>Welcome to the best To Do List!</Styled.Header>
      <Link to='/todo'>Go to ToDo List</Link>
    </Styled.Container>
  )
}