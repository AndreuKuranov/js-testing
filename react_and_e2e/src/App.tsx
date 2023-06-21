// import React, { ReactElement, useEffect, useState } from 'react';
// import './App.css';

// const App = (): ReactElement => {
//   const [data, setData] = useState<null | {}>(null);
//   const [toggle, setToggle] = useState<boolean>(false);
//   const [value, setValue] = useState<string>('');

//   const onClick = (): void => setToggle(prev => !prev);

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   }, [])

//   return (
//     <div className="App">
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{color: 'red'}}>data</div>}
//       <h1 className="h1">test</h1>
//       <button data-testid="toggle-btn" onClick={onClick}>click</button>
//       <input onChange={e => setValue(e.target.value)} type="text" placeholder='value...'/>
//     </div>
//   );
// }

// export default App;

// -------------------------------------------------------------------------

import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import Users from './components/users/Users';
import ErrorPage from './pages/ErrorPage';
import UserDetailsPage from './pages/UserDetailsPage';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <Link to="/" data-testid="main-link">main</Link>
      <Link to="/about" data-testid="about-link">about</Link>
      <Link to="/users" data-testid="users-link">users</Link>
      <AppRouter />
    </div>
  );
};

export default App;
