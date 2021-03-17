import React, {useState} from 'react';
import {useRouteMatch} from 'react-router-dom'

import Styled from './ToDoList.styled';

const todos = ['Eat breakfast', 'Study React']

function ToDoList() {
  const { path } = useRouteMatch();
  const [todoDescription, setTodoDescription] = useState('')

  const onClick = () => {
    todos.push(todoDescription);
    setTodoDescription('');
  };

  return (
    <>
      <Styled.Container>
        <Styled.Header>Todo</Styled.Header>
        {todos.map(todo => (
          <Styled.Element key={todo}>
            <Styled.CheckBox type="checkbox"/>
            <Styled.Link to={`${path}${encodeURI(todo)}`}><Styled.Label>{todo}</Styled.Label></Styled.Link>
          </Styled.Element>
        ))}
        <div>
          <input type="text" value={todoDescription} onChange={(event) => setTodoDescription(event.target.value)}/>
          <button type="button" onClick={onClick}>Save todo</button>
        </div>
      </Styled.Container>
      <Styled.BigLink to="/">Go to Home!</Styled.BigLink>
    </>
  )
}

export default ToDoList;