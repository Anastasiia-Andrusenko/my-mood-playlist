import { useEffect, useState } from 'react';
import { auth } from '../utils/firebaseConfig';

const Header = () => {
  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setNickname(user.displayName);
    }
  }, []);

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
