import React from "react";
import "../styles/CardElement2.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";

const CardElement2 = (props) => {
  const {
    index,
    transactionId,
    supplyId,
    demandId,
    itemId,
    locationId,
    quantity,
  } = props;

  let parity = 1;
  if (index % 2 == 1) {
    parity = 0;
  }

  return (
    <div className="card2--container">
      <div className={`card2--status--title--box bgColor${parity}`}>
        <div className="card2--title--items card2--transactionId">
          {transactionId}
        </div>
        <div className="card2--title--items card2--supplyId">{supplyId}</div>
        <div className="card2--title--items card2--demandId">{demandId}</div>
        <div className="card2--title--items card2--itemId">{itemId}</div>
        <div className="card2--title--items card2--locationId">
          {locationId}
        </div>
        <div className="card2--title--items card2--quantity">{quantity}</div>
      </div>
    </div>
  );
};

export default CardElement2;
