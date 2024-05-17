import React from "react";

import styles from './Header.module.scss';

interface HeaderProps {
  nickname: string | null;
}

const Header: React.FC<HeaderProps> = ({ nickname }) => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {nickname ? (
          <p className={styles.welcome}>Welcome, {nickname}!</p>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
    </header>
  );
};

export default Header;
