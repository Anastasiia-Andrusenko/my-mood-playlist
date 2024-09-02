// 
// AuthForm.tsx
// 
import React, { useState, ReactNode } from 'react';
import styles from './AuthForm.module.scss';
import css from './Button.module.scss';
import { BsFillUnlockFill, BsLock } from 'react-icons/bs';

interface AuthFormProps {
  title: string;
  buttonText: string;
  onSubmit: (email: string, password: string, nickname?: string) => void;
  children?: ReactNode;
  showNickname?: boolean; 
}

const AuthForm: React.FC<AuthFormProps> = ({ title, buttonText, onSubmit, showNickname = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password, nickname);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <button type="button" className={styles.showPasswordBtn} onClick={toggleShowPassword}>
            {showPassword ? <BsLock className={styles.icon}/> : <BsFillUnlockFill className={styles.icon}/>}
          </button>
        </div>
        {showNickname && (
          <div className={styles.inputGroup}>
            <label htmlFor="nickname" className={styles.label}>Nickname:</label>
            <input
              type="text"
              placeholder="Nickname"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className={styles.input}
            />
          </div>
        )}
        <button type="submit" className={css.button}>{buttonText}</button>
      </form>
    </div>
  );
};

export default AuthForm;
