// 
// AuthContext.tsx
// 
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth } from '../utils/firebaseConfig'; // Ваша конфігурація Firebase
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

interface AuthContextProps {
  currentUser: any;
  isAuthenticated: boolean;
  logout: () => void;
  updateDisplayName: (displayName: string) => void; 
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          setCurrentUser(user);
          setIsAuthenticated(true);
        } else {
          toast.warn('Please verify your email address before proceeding.');
          signOut(auth);
        }
      } else {
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const updateDisplayName = (displayName: string) => {
    if (currentUser) {
      setCurrentUser({ ...currentUser, displayName });
    }
  };

  const value = {
    currentUser,
    isAuthenticated,
    logout,
    updateDisplayName,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


