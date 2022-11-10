import Footer from './Footer';
import Header from './Header';
import Aside from './Aside';
import { useReducer, Fragment, useState } from 'react';
import AdvMenuPhone from './AdvMenuPhone';

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* <div className='max-w-[120rem]'> */}
        <Header />
        <AdvMenuPhone />
        <Aside />
          <main className='max-w-[120rem]'>
            {children}
          </main>
        <Footer />
      {/* </div> */}
    </Fragment>
  );
};

export default Layout;
