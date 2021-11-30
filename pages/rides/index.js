import React from "react";
import Link from "next/link";
import Card from "../../components/Card";
import styles from '../../styles/historyPage.module.css'

const History = () => {
  return (
    <div className={styles.container}>
      <h1>Ride Histories</h1>
      <Link href="/rides/rideOne" passHref>
        <Card
          month="November"
          title="Ride Scooter"
          sum="50.55 kr"
          date="2021.11.24"
          arrow='&rarr;'
        />
      </Link>
      <Card
        month="November"
        title="Trip History 2"
        sum="50.55 kr"
        date="2021.11.24"
        arrow='&rarr;'
      >
        <Link href="/rides/rideTwo" passHref>
         
        </Link>
      </Card>
      <Card
        month="November"
        title="Trip History 3"
        sum="50.55 kr"
        date="2021.11.24"
        arrow='&rarr;'
      />
    </div>
  );
};

export default History;
