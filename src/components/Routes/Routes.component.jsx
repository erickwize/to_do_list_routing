import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'

import Home from '../Home'
import ToDoList from '../ToDoList'
import ModalLogin from '../ModalLogin';
import ToDoDetail from '../ToDoDetail/ToDoDetail.component';

export default function Routes() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path="/todo" render={({match}) => {
          return (
            <>
              <Route exact path={`${match.url}/`} component={ToDoList}/>
              <Route path={`${match.url}/:description`} component={ToDoDetail} />
            </>
          )
        }}/>
        <Route path='/login' component={ModalLogin}/>
        <Route exact path="/" component={Home}/>
      </Switch>
      {background && <Route path='/login' component={ModalLogin}/>}
    </>
  )
}