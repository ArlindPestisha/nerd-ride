import React from "react";
import styles from "../styles/card.module.css";
import Link from "next/link";

const Card = ({ month, title, sum, date }) => {
  return (
    <>
      <div className={styles.month}>
        <p>{month}</p>
      </div>

      <div className={styles.card}>
        <div className={styles.box}>
          <h2>{title} </h2>
          <Link href="/rides/rideOne" passHref>
            <h2>{sum} &rarr;</h2>
          </Link>

          <p>{date}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
