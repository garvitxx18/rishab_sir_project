import React, { useEffect, useState } from "react";
import CardElement from "./CardElement";
import "../styles/AvailabilityPage.css";
import Menu from "./menu";

const AvailabilityPage = () => {
  const [availabilityArray, setAvailabilityArray] = useState([
    {
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
  ]);

  useEffect(() => {
    getAvailabilityArray();
  }, []);

  async function getAvailabilityArray() {
    const response = await fetch("http://localhost:8099/availability", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setAvailabilityArray(data);
  }

  const Cards = availabilityArray.map((card, index) => {
    return (
      <CardElement
        key={index}
        index={index}
        itemId={card.itemId}
        locationId={card.locationId}
        quantity={card.quantity}
      />
    );
  });
  return (
    <div className="status1--container">
      <Menu />
      <div className="status1--rightSection">
        <div className="status1--rightSection--heading">AVAILABILITY</div>
        <div className="status1--rightSection--content">
          <div className="status1--items--box">
            <div className="status1--title--box">
              <div className="title1--items status1--itemId">Item Id</div>
              <div className="title1--items status1--locationId">
                Location Id
              </div>
              <div className="title1--items status1--quantity">Quantity </div>
            </div>
            <div className="complaint1--elements">{Cards}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityPage;
