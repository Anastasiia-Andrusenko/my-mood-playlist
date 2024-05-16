import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../utils/firebaseConfig';

const withAuthRedirect = (WrappedComponent: React.FC) => {
  const ComponentWithAuthRedirect: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          router.push('/');
        }
      });

      return () => unsubscribe();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuthRedirect;
};

export default withAuthRedirect;
