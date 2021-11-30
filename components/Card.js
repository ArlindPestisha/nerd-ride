import React from "react";
import styles from "../styles/card.module.css";
import Link from "next/link";

const Card = ({ month, title, sum, date, arrow, time }) => {
  return (
    <>
      <div className={styles.month}>
        <p>{month}</p>
      </div>
      <Link href="/rides/rideOne" passHref>
        <div className={styles.card}>
          <div className={styles.box}>
            <h2>{title} </h2>
            

            <h2>
              {sum} {arrow}
            </h2>
            <p>{time}</p>
            <p>{date}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
