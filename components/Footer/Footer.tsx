import React from 'react';
import styles from './Footer.module.scss'; 
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerPrivacy}>
          <ul className={styles.footerLinks}>
            <li className={styles.text}><Link href="/terms">Terms of Use</Link></li>
            <li className={styles.text}><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
          <p className={styles.text}><Link href="/contact">Contact Us</Link></p>
        </div>
        <p className={styles.rights}>© 2024 YourMusicApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
