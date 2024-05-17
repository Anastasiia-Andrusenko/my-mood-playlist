import React from "react";

interface HeaderProps {
  nickname: string | null;
}

const Header: React.FC<HeaderProps> = ({ nickname }) => {

  return (
    <header>
      {nickname ? (
        <p>Welcome, {nickname}!</p>
      ) : (
        <p>Not logged in</p>
      )}
    </header>
  );
};

export default Header;
