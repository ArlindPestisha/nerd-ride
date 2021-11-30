import React from "react";
import Link from "next/link";
import styles from "../../styles/homePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.h2}>&larr; Profile</h2>
        <h4 className={styles.h4}>log out</h4>
      </div>
      <div className={styles.line}></div>
      <div className={styles.name}>
        <h4 className={styles.h4}>Arlind Pestisha</h4>
      </div>
      <div className={styles.line}></div>
      <div className={styles.email}>
        <h4 className={styles.h4}>arlind.pestisha@gmail.com</h4>
      </div>
      <div className={styles.line}></div>
      <div className={styles.number}>
        <h4 className={styles.h4}>046790469341</h4>
      </div>
      <div className={styles.line}></div>
      <div className={styles.box}>
        <Link href="/rides" passHref>
          <h4 className={styles.h4}>Ride History </h4>
        </Link>
        <Link href="/rides" passHref>
          <h4 className={styles.h4}>&rarr;</h4>
        </Link>
      </div>
      <div className={styles.line}></div>
      <div className={styles.box}>
        <h4 className={styles.h4}>Language </h4>
        <h4 className={styles.h4}>&rarr;</h4>
      </div>
      <div className={styles.line}></div>
      <div className={styles.box}>
        <h4 className={styles.h4}>Terms and Conditions </h4>
        <h4 className={styles.h4}>&rarr;</h4>
      </div>
      <div className={styles.line}></div>
      <div className={styles.box}>
        <h4 className={styles.h4}>Social Media</h4>
        <h4 className={styles.h4}>&rarr;</h4>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default HomePage;
