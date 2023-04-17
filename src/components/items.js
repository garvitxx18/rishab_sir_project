import React, { useState, useEffect } from "react";
import Menu from "./menu";
import ItemsElement from "./itemsElement";
import ItemUpdateElement from "./itemUpdateElement";
import "../styles/items.css";

const Items = () => {
  const [itemsData, setItemsData] = useState([
    {
      itemId: "10",
      itemDescription: "Hat",
      category: "Apparel",
      type: "HSN001",
      status: "00/01",
      price: 100.0,
      pickupAllowed: true,
      shippingAllowed: true,
      deliveryAllowed: true,
    },
    {
      itemId: "10",
      itemDescription: "Hat",
      category: "Apparel",
      type: "HSN001",
      status: "00/01",
      price: 100.0,
      pickupAllowed: true,
      shippingAllowed: true,
      deliveryAllowed: true,
    },
    {
      itemId: "10",
      itemDescription: "Hat",
      category: "Apparel",
      type: "HSN001",
      status: "00/01",
      price: 100.0,
      pickupAllowed: true,
      shippingAllowed: true,
      deliveryAllowed: true,
    },
  ]);

  const [isShow, setIsShow] = useState(0);
  const [title, setTitle] = useState("");

  const showBox = () => {
    setIsShow(1);
  };
  function showBox2(title1) {
    setIsShow(1);
    setTitle(title1);
  }

  return (
    <div className="items-top-div">
      <Menu />
      <div className="status2--rightSection">
        <div className="status2--rightSection--heading">ITEMS</div>
        <div className="status2--rightSection--content">
          <div className="status2--complaint2--box">
            <div className="status2--title2--box">
              <div className="title2--items" id="title2--sn">
                Id
              </div>
              <div className="title2--items" id="title2--room">
                Description
              </div>
              <div className="title2--items" id="title2--hbuilding">
                Category
              </div>
              <div className="title2--items" id="title2--subject">
                Type
              </div>
              <div className="title2--items" id="title2--complaint2">
                Status
              </div>
              <div className="title2--items" id="title2--status2">
                Price
              </div>
              <div className="title2--items" id="title2--status2"></div>
            </div>
            <div className="complaint2--elements">
              {itemsData.map((card, index) => (
                <ItemsElement
                  itemId={card.itemId}
                  itemDescription={card.itemDescription}
                  category={card.category}
                  type={card.type}
                  status={card.status}
                  price={card.price}
                  index={index}
                  showBox={showBox}
                />
              ))}
            </div>
            <ItemUpdateElement
              isShow={isShow}
              setIsShow={setIsShow}
              title={title}
              setTitle={setTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
