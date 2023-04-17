import React, { useState } from "react";
import "../styles/ItemUpdateElement.css";

import { useNavigate } from "react-router-dom";

const ItemUpdateElement = (props) => {
  const itemId = props.itemId;
  const [itemDescription, setDescription] = useState(props.itemDescription);
  const [category, setCategory] = useState(props.category);
  const [type, setType] = useState(props.type);
  const [status, setStatus] = useState(props.status);
  const [price, setPrice] = useState(props.price);

  const hideBox = () => {
    props.setIsShow(0);
  };

  async function updateItem(event) {
    event.preventDefault();
    hideBox();
    const response = await fetch("http://localhost:8080/item/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemId,
        itemDescription,
        category,
        type,
        status,
        price,
      }),
    });
    const data = await response.json();
  }

  return (
    <div className={`upload--container box--display${props.isShow}`}>
      <div className="box--close">
        <button onClick={hideBox}>Cut</button>
      </div>
      <div className="upload--form--div">
        <form action="" className="upload--form" onSubmit={updateItem}>
          <div className="upload--form--box">
            <div className="upload--box--item">
              <label htmlFor="">Discription</label>
              <div className="upload--item--input">
                <input
                  type="text"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  name="fullName"
                  placeholder="Enter Discription"
                  value={itemDescription}
                  required
                />
              </div>
            </div>
          </div>
          <div className="upload--form--box">
            <div className="upload--box--item">
              <label htmlFor="">Category</label>
              <div className="upload--item--input">
                <input
                  type="text"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  name="fullName"
                  placeholder="Enter Category"
                  value={category}
                  required
                />
              </div>
            </div>
          </div>
          <div className="upload--form--box">
            <div className="upload--box--item">
              <label htmlFor="">Type</label>
              <div className="upload--item--input">
                <input
                  type="text"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  name="fullName"
                  placeholder="Enter Type"
                  value={type}
                  required
                />
              </div>
            </div>
          </div>
          <div className="upload--form--box">
            <div className="upload--box--item">
              <label htmlFor="">Status</label>
              <div className="upload--item--input">
                <input
                  type="text"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  name="fullName"
                  placeholder="Enter Status"
                  value={status}
                  required
                />
              </div>
            </div>
          </div>
          <div className="upload--form--box">
            <div className="upload--box--item">
              <label htmlFor="">Price</label>
              <div className="upload--item--input">
                <input
                  type="text"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  name="fullName"
                  placeholder="Enter Price"
                  value={price}
                  required
                />
              </div>
            </div>
          </div>
          <div className="upload--form--box">
            <div className="upload--submit--btn">
              <input type="submit" value="Submit" className="upload--btn" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemUpdateElement;
