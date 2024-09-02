import React from 'react';
import styles from './Button.module.scss';

interface AuthButtonProps {
  onClick: () => void;
  text: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default AuthButton;
