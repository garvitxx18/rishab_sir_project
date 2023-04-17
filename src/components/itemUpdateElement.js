import React, { useState } from "react";
import "../styles/ItemUpdateElement.css";

import { useNavigate } from "react-router-dom";

const ItemUpdateElement = (props) => {
  const [discription, setDiscription] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");

  const hideBox = () => {
    props.setIsShow(0);
    props.setTitle("");
    props.setTemp([]);
  };

  async function updateItem(event) {
    event.preventDefault();
    hideBox();
    const response = await fetch("http://localhost:8080/item/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  }

  return (
    <div className={`upload--container box--display${props.isShow}`}>
      <div className="box--close"></div>
      <div className="upload--form--div">
        <form action="" className="upload--form" onSubmit={updateItem}>
          <div className="upload--form--box">
            <div className="upload--box--item">
              <label htmlFor="">Discription</label>
              <div className="upload--item--input">
                <input
                  type="text"
                  onChange={(e) => {
                    setDiscription(e.target.value);
                  }}
                  name="fullName"
                  placeholder="Enter Discription"
                  value={discription}
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
