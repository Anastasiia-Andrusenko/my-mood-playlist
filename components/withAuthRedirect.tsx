// 
// withAuthRedirect.tsx
// 

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext'; // Коректний шлях до AuthContext


const withAuthRedirect = (WrappedComponent: React.FC) => {
  const ComponentWithAuthRedirect: React.FC = (props) => {
    const { currentUser } = useAuth(); // Використовуємо useAuth для отримання поточного користувача
    const router = useRouter();

    useEffect(() => {
      if (!currentUser) {
        router.push('/login'); // Перенаправлення на сторінку логіну, якщо користувач не авторизований
      }
    }, [currentUser, router]);

   // Показуємо компонент лише якщо користувач авторизований
   return currentUser ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuthRedirect;
};

export default withAuthRedirect;
