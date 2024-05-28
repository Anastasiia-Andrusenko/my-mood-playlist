import React, { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';

const ProfileEdit = lazy(() => import('./ProfileEdit'));

const ProfileEditWrapper: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <ProfileEdit />
  </Suspense>
);

export default ProfileEditWrapper;
