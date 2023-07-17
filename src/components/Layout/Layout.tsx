import Header from '@components/Header';
import React from 'react';
import {Outlet} from 'react-router-dom';

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
