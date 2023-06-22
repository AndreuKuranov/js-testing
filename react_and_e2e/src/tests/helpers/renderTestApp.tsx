import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import AppRouter from "../../router/AppRouter";
import { MemoryRouter } from "react-router-dom";
import { ReactElement, JSXElementConstructor, ReactNode } from "react";
import { render } from "@testing-library/react";

export const renderTestApp = (component: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, options: { route: any; initialState: any; }) => {
  const store = createReduxStore(options?.initialState);

  return render (
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  )
}