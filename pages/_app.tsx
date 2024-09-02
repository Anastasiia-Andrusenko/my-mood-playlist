// _app.tsx
// 
import '../styles/globals.scss'; 
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loader from '../components/Loader/Loader';
import { QueryClientProvider } from 'react-query';
import queryClient from '../utils/queryClient';
import { AuthProvider } from '../context/AuthContext';



const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();


  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/images' || url.startsWith('/playlist')) {
        localStorage.setItem('lastPath', url);
      } else {
        localStorage.removeItem('lastPath');
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader/>}>
            <Component {...pageProps} />
            <ToastContainer />
        </Suspense>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
