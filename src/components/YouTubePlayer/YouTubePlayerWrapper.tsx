import { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';

const YouTubePlayer = lazy(() => import('./YouTubePlayer'));

const YouTubePlayerWrapper: React.FC<{ playlistId: string }> = ({ playlistId }) => (
  <Suspense fallback={<Loader />}>
    <YouTubePlayer playlistId={playlistId} />
  </Suspense>
);

export default YouTubePlayerWrapper;