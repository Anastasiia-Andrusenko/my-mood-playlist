import React, { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';

const FavoritesPlaylists = lazy(() => import('./FavoritesPlaylists'));

const FavoritesPlaylistsWrapper: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <FavoritesPlaylists />
  </Suspense>
);

export default FavoritesPlaylistsWrapper;
