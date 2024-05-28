// 
// ProfileEdit.tsx
// 
import React, { useEffect, useState } from 'react';
import { updateProfile, updateEmail, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';
import { useAuth } from '../../context/AuthContext';
import styles from './ProfileEdit.module.scss';
import { GrEdit } from "react-icons/gr";
import { TfiClose } from 'react-icons/tfi';
import { BsFillUnlockFill } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import ReauthenticateModal from '../Auth/ReauthenticateModal';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';

const ProfileEdit: React.FC = () => {
  const { currentUser, updateDisplayName } = useAuth();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [password, setPassword] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [reauthenticateModalOpen, setReauthenticateModalOpen] = useState(false);
  const [pendingUpdate, setPendingUpdate] = useState(false);

  useEffect(() => {
    if (reauthenticateModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [reauthenticateModalOpen]);

  const sendVerificationEmail = async (user: any) => {
    try {
      await sendEmailVerification(user);
      toast.success('Verification email sent to new email address. Please verify and try updating again.');
    } catch (error) {
      toast.error('Error sending verification email. Please try again.');
      console.error('Error sending verification email: ', error);
    }
  };

  const handleUpdateProfile = async () => {
    if (!currentUser) return;
    setPendingUpdate(true);
    try {
      if (displayName && displayName !== currentUser.displayName) {
        await updateProfile(currentUser, { displayName });
        updateDisplayName(displayName);
      }
      if (email && email !== currentUser.email) {
        // Відправка листа із підтвердженням на нову адресу електронної пошти
        await sendVerificationEmail(currentUser);
        toast.info('Please verify the new email address before changing it.');
        setPendingUpdate(false);
        return;
      }
      if (password) {
        await updatePassword(currentUser, password);
      }
      toast.success('Profile updated successfully!');
    } catch (error: any) {
      handleUpdateError(error);
    } finally {
      setPendingUpdate(false); // Приховати лоудер
    }
  };

  const handleUpdateError = (error: any) => {
    if (error.code === 'auth/requires-recent-login') {
      setReauthenticateModalOpen(true);
      setPendingUpdate(false);
    } else if (error.code === 'auth/invalid-email') {
      toast.warn('Invalid email format.');
    } else if (error.code === 'auth/email-already-in-use') {
      toast.warn('Email is already in use.');
    } else if (error.code === 'auth/weak-password') {
      toast.warn('Password is too weak.');
    } else {
      console.error('Error updating profile: ', error);
    }
  };

  const toggleForm = () => {
    setFormOpen((prev) => !prev);
    // console.log(formOpen);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validateInputs = () => {
    if (displayName === currentUser?.displayName && email === currentUser?.email && password === '') {
      toast.warn('No changes to update');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.warn('Please enter a valid email address');
      return false;
    }
    if (password && password.length < 6) {
      toast.warn('Password should be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleReauthenticateModalOpen = () => {
    setReauthenticateModalOpen(true);
  };

  const handleCloseReauthenticateModal = () => {
    setReauthenticateModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInputs()) {
      setReauthenticateModalOpen(false);
      handleUpdateProfile();
    }
  };

  const reauthenticateUser = async (credential: any) => {
    if (currentUser) {
      try {
        await reauthenticateWithCredential(currentUser, credential);
        setReauthenticateModalOpen(false);
        await handleUpdateProfile();
      } catch (error) {
        toast.error('Reauthentication failed. Please try again.');
      }
    }
  };

  return (
    <div className={styles.section}>
      {pendingUpdate && <Loader />}
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Edit Profile</h3>
          <div className={styles.tooltip} onClick={toggleForm}>
            {formOpen ? <TfiClose className={styles.icon}/> : <GrEdit className={styles.icon}/>}
            <span className={styles.tooltipText}>{formOpen ? `Done` : `Edit profile`}</span>
          </div>
        </div>
        {formOpen && (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label}>Name:</label>
              <input
                className={styles.input}
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email:</label>
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Password:</label>
              <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className={styles.showPasswordBtn} onClick={toggleShowPassword}>
                {showPassword ? <BsLock className={styles.icon}/> : <BsFillUnlockFill className={styles.icon}/>}
              </button>
            </div>
            <button className={styles.btn} type='submit'>Update</button>
          </form>
        )}
      </div>
      {reauthenticateModalOpen && (
        <ReauthenticateModal 
          isOpen = {reauthenticateModalOpen}
          onClose={handleCloseReauthenticateModal} 
          onReauthenticate={reauthenticateUser} 
        />
      )}
    </div>
  );
};

export default ProfileEdit;

