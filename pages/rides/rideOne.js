import React from "react";
import Image from "next/image";
import styles from "./../../styles/ride.module.css";
import data from "./../../test.json";
import Card from "../../components/Card";

const rideOne = () => {
  // const time = data.Time
  // console.log(time);
  // console.log(data)

  const date = data.map((d) => {
    return d.Date;
  });

  const time = data.map((t) => {
    return <p key={t.id}>Time {t.Time}</p>;
    //  return t.Time
  });
  // console.log(total);

  // const total1 = data.map((milage) => {
  //   return milage.Totalmileage

  // })
  // const total2 = data.map((milage) => {
  //   return milage.Totalmileage2

  // })
  // console.log(total1)
  // console.log(total2)

  // const total = total1 - total2
  // console.log(total)
  // const total = data.reduce((s, p) => s + p.Totalmileage, 0);
  // console.log(total);

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        {" "}
        <Image src={"/trip.png"} height={480} width={428} alt="map" />
      </div>
      {/* <div className={styles.data}>
        {data.map((i) => (
          <>
            <div className={styles.map}>
              <h4>{i.Date} </h4>

              <div className={styles.time}>
                <h5>
                  <br />
                  {i.Time}
                  
                </h5>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className={styles.sum}>
        <h4>50.53 kr</h4>
      </div> */}
      <div className={styles.data}>
        <Card time={time} sum="50.55 kr" title={date} />
      </div>
    </div>
  );
};

export default rideOne;
