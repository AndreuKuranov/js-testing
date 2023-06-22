/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from '@testing-library/react';
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";

jest.mock('axios');

describe('USERS TEST', () => {
  let response: any;
  beforeEach(() => {
    response = {
      data: [
        { "id": 1, "name": "Leanne Graham", },
        { "id": 2, "name": "Ervin Howell", },
        { "id": 3, "name": "Clementine Bauch", },
      ]
    }
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('renders learn react link', async() => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockReturnValue(response);
    render(
      <MemoryRouter initialEntries={['/users']}>
        <Routes>
          <Route path="/users" element={<Users/>} />
        </Routes>
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });

  it('test redirect to details page', async() => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockReturnValue(response);
    // render(
    //   <MemoryRouter>
    //     <AppRouter />
    //     <Users />
    //   </MemoryRouter>
    // )
    renderWithRouter(<Users />); // renderWithRouter - Хелпер для удобного тестирования компонентов
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    await userEvent.click(users[0])
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
})
