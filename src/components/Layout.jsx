import { Fragment } from 'react';
import CTA from './CTA';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, whiteHeader, isNeedCTA, digital }) => {
  return (
    <Fragment>
      <Header white={whiteHeader} digital={digital} />
      <main>
        {children}
        {!isNeedCTA && <CTA />}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
