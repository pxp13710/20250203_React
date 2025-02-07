import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

function Layout() {
  return (
    <div>
      <Header></Header>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
