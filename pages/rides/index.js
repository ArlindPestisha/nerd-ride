import React from "react";
import Link from "next/link";
import Card from "../../components/Card";

const History = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/rides/rideOne" passHref>
        <Card
          month="November"
          title="Ride Scooter"
          sum="50.55 kr"
          date="2021.11.24"
        />
      </Link>
      <Card
        month="November"
        title="Ride Scooter"
        sum="50.55 kr"
        date="2021.11.24"
      />
      <Card
        month="November"
        title="Ride Scooter"
        sum="50.55 kr"
        date="2021.11.24"
      />
    </div>
  );
};

export default History;
