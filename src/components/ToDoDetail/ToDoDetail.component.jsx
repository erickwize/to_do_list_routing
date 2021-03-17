import React from 'react';
import { useParams } from 'react-router-dom'

import { capitalize } from '../../utils'
import Styled from './ToDoDetail.styled';

function ToDoDetail() {
  const {description} = useParams()
  return (
    <Styled.Container>
    <Styled.Header>{capitalize(description)}</Styled.Header>
      <Styled.Img src="https://picsum.photos/300/300" alt="random"/>
    </Styled.Container>
  )
}

export default ToDoDetail;