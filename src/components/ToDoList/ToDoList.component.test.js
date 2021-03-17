import React from 'react';
import {MemoryRouter } from 'react-router-dom'
import { screen, render } from '@testing-library/react';
import Routes from '../Routes'

describe('ToDoList', () => {
  const createRouter = (initialEntry = '/') => {
    return (
      <MemoryRouter initialEntries={[initialEntry]}>
        <Routes />
      </MemoryRouter>
    )
  }
  it('should render properly', () => {
    render(createRouter('/todo'));
    expect(screen.getByText('Eat breakfast')).toBeInTheDocument();
    expect(screen.getByText('Study React')).toBeInTheDocument();
  });

  it('should not render the component', () => {
    render(createRouter('/'));
    expect(screen.queryByText('Eat breakfast')).toBeNull();
    expect(screen.queryByText('Study React')).toBeNull();
  })
})




