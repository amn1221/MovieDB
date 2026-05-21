// Footer.jsx
import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.column}>
          <a href="/">Audio and Subtitles</a>
          <a href="/">Media Center</a>
          <a href="/">Privacy</a>
          <a href="/">Contact Us</a>
        </div>

        <div className={styles.column}>
          <a href="/">Audio Description</a>
          <a href="/">Investor Relations</a>
          <a href="/">Legal Notices</a>
        </div>

        <div className={styles.column}>
          <a href="/">Help Center</a>
          <a href="/">Jobs</a>
          <a href="/">Cookie Preferences</a>
        </div>

        <div className={styles.column}>
          <a href="/">Gift Cards</a>
          <a href="/">Terms of Use</a>
          <a href="/">Corporate Information</a>
        </div>
      </div>

      <button className={styles.serviceCode}>Service Code</button>

      <p className={styles.copy}>
        © 1997-2026 Netflix Clone by Yesgat
      </p>
    </footer>
  );
}

export default Footer;