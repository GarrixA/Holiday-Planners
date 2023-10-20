import React from 'react';
import { Outlet } from 'react-router-dom';
import Body from './Body';

function Layout() {
  return (
    <div>
      <Body/>

      <Outlet/>
      
    </div>
  )
}

export default Layout
