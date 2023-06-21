import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from "react-router-dom";

describe('TEST APP', () => {
  it('Router test', async () => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  it('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/asfasfafasf']}>
        <App/>
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
})