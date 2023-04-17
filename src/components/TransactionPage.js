import React, { useState, useEffect } from "react";

import "../styles/TransactionPage.css";
import CardElement2 from "./CardElement2";
import Menu from "./Menu";

const TransactionPage = () => {
  const [transactionArray, setTransactionArray] = useState([
    {
      transactionId: "d545k4nd5611nsjdfnsd845r545n324nn34kjnjk23n4n324",
      supplyId: "---",
      demandId: "d545k4nd5611nsjdfnsd845r545n",
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      transactionId: "d545k4nd5611nsjdfnsd845r545n",
      supplyId: "---",
      demandId: "d545k4nd5611nsjdfnsd845r545n",
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      transactionId: "d545k4nd5611nsjdfnsd845r545n",
      supplyId: "---",
      demandId: "d545k4nd5611nsjdfnsd845r545n",
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      transactionId: "d545k4nd5611nsjdfnsd845r545n",
      supplyId: "---",
      demandId: "d545k4nd5611nsjdfnsd845r545n",
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      transactionId: "d545k4nd5611nsjdfnsd845r545n",
      supplyId: "---",
      demandId: "d545k4nd5611nsjdfnsd845r545n",
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
    {
      transactionId: "d545k4nd5611nsjdfnsd845r545n",
      supplyId: "---",
      demandId: "d545k4nd5611nsjdfnsd845r545n",
      itemId: "1",
      locationId: "mumbai",
      quantity: "80",
    },
  ]);

  useEffect(() => {
    getTransactionArray();
  }, []);

  async function getTransactionArray() {
    const response = await fetch("http://localhost:8080/transaction", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setTransactionArray(data);
  }

  const Cards = transactionArray.map((card, index) => {
    return (
      <CardElement2
        key={index}
        index={index}
        transactionId={card.transactionId}
        supplyId={card.supplyId}
        demandId={card.demandId}
        itemId={card.itemId}
        locationId={card.locationId}
        quantity={card.quantity}
      />
    );
  });

  return (
    <div className="transaction--container">
      <Menu />
      <div className="transaction--rightSection">
        <div className="transaction--rightSection--heading">TRANSACTION</div>
        <div className="transaction--rightSection--content">
          <div className="transaction--items--box">
            <div className="transaction--title--box">
              <div className="transaction--title--items transaction--transactionId">
                Transaction Id
              </div>
              <div className="transaction--title--items transaction--supplyId">
                Supply Id
              </div>
              <div className="transaction--title--items transaction--demandId">
                Demand Id
              </div>
              <div className="transaction--title--items transaction--itemId">
                Item Id
              </div>
              <div className="transaction--title--items transaction--locationId">
                Location Id
              </div>
              <div className="transaction--title--items transaction--quantity">
                Quantity
              </div>
            </div>
            <div className="transaction--elements">{Cards}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
