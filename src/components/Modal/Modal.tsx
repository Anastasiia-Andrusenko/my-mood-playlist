import React, { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, onClose, onConfirm }) => {
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

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <span onClick={onClose} className={styles.close}>x</span>
        <p>Are you sure?</p>
        <div className={styles.buttons}>
          <button onClick={onConfirm} className={styles.button}>Yes</button>
          <button onClick={onClose} className={styles.button}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

