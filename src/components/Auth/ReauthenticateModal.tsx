// 
// ReauthenticateModal.tsx
// 
import React, { useEffect, useState } from 'react';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../utils/firebaseConfig';
import styles from './ReauthenticateModal.module.scss';
import { toast } from 'react-toastify';
import { GrClose } from 'react-icons/gr';

interface ReauthenticateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReauthenticate: (credential: any) => void;
}



const ReauthenticateModal: React.FC<ReauthenticateModalProps> = ({ isOpen, onClose, onReauthenticate }) => {
  const {currentUser} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email || '');
    }
  }, [currentUser]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleReauthenticate = () => {
    const credential = EmailAuthProvider.credential(email, password);
    onReauthenticate(credential);
    onClose();
  };



  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
      <span onClick={onClose} className={styles.close}><GrClose /></span>
        <h3 className={styles.title}>Reauthenticate</h3>
        <div className={styles.field}>
          <label className={styles.label}>Current email:</label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Current password:</label>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleReauthenticate}>Submit</button>
          <button className={styles.button} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ReauthenticateModal;
