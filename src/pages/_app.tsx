// import Header from '../components/Header';
import '../styles/globals.scss'; 
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../utils/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const lastPath = localStorage.getItem('lastPath');
        if (lastPath && (lastPath === '/images' || lastPath.startsWith('/playlist'))) {
          router.push(lastPath);
        }
      } else {
        if (router.pathname !== '/login' && router.pathname !== '/register') {
          router.push('/login');
        }
      }
    });
    return () => unsubscribe();
  }, [router]);

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
