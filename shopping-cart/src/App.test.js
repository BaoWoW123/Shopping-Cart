import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('initial render',() =>{
  test('On home page', () => {
    const {container} = render(<App />);
    expect(container).toMatchSnapshot();

  });
})

describe('update render after userEvents',() =>{
  test('Click on Cart buttons renders cart', () => {
    render(<App/>);
    const cartBtn = screen.getByRole('button', {name:'Cart'});
    userEvent.click(cartBtn);
    expect(screen.getByRole('heading').textContent).toBe('Cart');
  });
})