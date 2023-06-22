import React, { ReactElement } from 'react';
import Counter from "../components/Counter/Counter";

const MainPage = (): ReactElement => {
  return (
    <div data-testid="main-page">
      MAIN PAGE
      <Counter />
    </div>
  );
};

export default MainPage;