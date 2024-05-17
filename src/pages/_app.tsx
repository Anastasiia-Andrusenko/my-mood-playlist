// _app.tsx
// 
import '../styles/globals.scss'; 
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';



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
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
};

export default App;
