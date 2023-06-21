/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('test app', () => {
  it('renders learn react link', () => {
    render(<App />);
    const test = screen.getByText(/test/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/value.../i);
    expect(test).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    // screen.debug();
  });

  it('renders learn react link 2', () => {
    render(<App />);
    const test = screen.queryByText(/test2/i);
    expect(test).toBeNull();
  });

  it('renders learn react link 3', async () => {
    render(<App />);
    // screen.debug();
    const test = await screen.findByText(/data/i);
    expect(test).toBeInTheDocument();
    expect(test).toHaveStyle({color: 'red'});
    // screen.debug();
  });

  it('click event', async () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn); // событие клика
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  it('input event', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/value.../i);
    expect(screen.queryByTestId('value-elem')).toContainHTML(''); // ожидается пустая строка
    // Искуственное событие
    // fireEvent.input(input, {
    //   target: {value: '123123'}
    // }); 
    // Близко к пользователю, обрабатываются события нажатия клавиш и тд
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  });
})


