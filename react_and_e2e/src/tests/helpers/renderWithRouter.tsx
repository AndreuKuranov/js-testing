import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";

export const renderWithRouter = (component: string | number | boolean | JSX.Element | Iterable<ReactNode> | null | undefined, initialRoute = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  )
}