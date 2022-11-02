import Footer from './Footer';
import Header from './Header';
import Aside from './Aside';
import { useReducer, Fragment, useState } from 'react';

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* <div className='max-w-[120rem]'> */}
        <Header />
        <Aside />
          <main className='h-[1000px]'>
            {children}
          </main>
        <Footer />
      {/* </div> */}
    </Fragment>
  );
};

export default Layout;
