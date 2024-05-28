import React, { Suspense, lazy } from 'react';
import Loader from '../Footer/Footer';

const Footer = lazy(() => import('./Footer'));

const FooterWrapper: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <Footer />
  </Suspense>
);

export default FooterWrapper;
