import React from 'react';
import styles from './Footer.module.scss'; 
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <p>© 2024 YourMusicApp. All rights reserved.</p>
        </div>
        <div className={styles.footerRight}>
          <ul className={styles.footerLinks}>
            {/* <li><a href="/terms">Terms of Use</a></li> */}
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
          {/* <ul className="footer-social">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
