import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import { render } from '@testing-library/react';

export const renderWithRouter = (component: string | number | boolean | JSX.Element | Iterable<ReactNode> | null | undefined, initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  )
}