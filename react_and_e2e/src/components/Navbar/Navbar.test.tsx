import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Navbar from "./Navbar";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";


describe('USERS TEST', () => {
  it('test user link', async() => {
    renderWithRouter(<Navbar />);
    const usersLink = screen.getByTestId('users-link');
    await userEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
  it('test about link', async() => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId('about-link');
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
  it('test main link', async() => {
    renderWithRouter(<Navbar />, '/users');
    const mainLink = screen.getByTestId('main-link');
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
})