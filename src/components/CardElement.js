import React from "react";
import "../styles/CardElement.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";

const CardElement = (props) => {
  const { index, itemId, locationId, quantity } = props;

  let parity = 1;
  if (index % 2 == 1) {
    parity = 0;
  }

  return (
    <div className="card--container">
      <div className={`card--status1--title1--box bgColor${parity}`}>
        <div className="title1--items status1--itemId">{itemId}</div>
        <div className="title1--items status1--locationId">{locationId}</div>
        <div className="title1--items status1--quantity">{quantity}</div>
      </div>
    </div>
  );
};

export default CardElement;
