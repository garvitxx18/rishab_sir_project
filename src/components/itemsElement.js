import React from "react";
import "../styles/itemsElement.css";

const ItemsElement = (props) => {
  const {
    itemId,
    itemDescription,
    category,
    type,
    status,
    price,
    index,
    showBox,
  } = props;
  console.log(props);
  let parity = 1;
  if (index % 2 == 1) {
    parity = 0;
  }
  async function deletItem(event) {
    event.preventDefault();
    console.log(itemId);
    const response = await fetch("http://localhost:8080/items/{itemId}", {
      method: "DELET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  //   async function updateItem(event) {
  //     event.preventDefault();
  //     console.log(itemId);
  //     const response = await fetch("http://localhost:8080/items/{itemId}", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   }
  return (
    <div className="card--container">
      <div className={`card--status--title--box bgColor${parity}`}>
        <div className="card--title--items card--title--sn" id="status--bullet">
          {itemId}
        </div>
        <div className="card--title--items card--title--room">
          {itemDescription}
        </div>
        <div className="card--title--items card--title--hbuilding">
          {category}
        </div>
        <div className="card--title--items card--title--subject">{type}</div>
        <div className="card--title--items card--title--complaint">
          {status}
        </div>
        <div
          className={`card--title--items card--title--status bullet${status}`}
        >
          {price}
        </div>
        <div
          className={`card--title--items card--title--status bullet${status}`}
        >
          <button onClick={showBox}>Edit</button>
          <button onClick={deletItem}>Delet</button>
        </div>
      </div>
    </div>
  );
};

export default ItemsElement;
