import React, { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';

const Header = lazy(() => import('./Header'));

const HeaderWrapper: React.FC<{ nickname: string, page: string }> = ({ nickname, page }) => (
  <Suspense fallback={<Loader />}>
    <Header nickname={nickname} page={page} />
  </Suspense>
);

export default HeaderWrapper;