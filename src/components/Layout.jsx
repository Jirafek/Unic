import Footer from './Footer';
import Header from './Header';
import { useReducer, Fragment, useState } from 'react';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
