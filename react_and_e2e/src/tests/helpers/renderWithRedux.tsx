import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export const renderWithRedux = (component: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, initialState: {} | undefined) => {
  const store = createReduxStore(initialState);

  return render (
    <Provider store={store}>
      {component}
    </Provider>
  )
}