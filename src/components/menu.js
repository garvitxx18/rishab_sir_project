// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";

export default function Menu() {
  return (
    <div className="menu--container">
      <div className="menu--heading">
        <div className="heading--title"></div>
      </div>
      <div className="menu--items--box">
        <Link to="/items" className="menu--items" id="Items">
          Items
        </Link>
      </div>
      <div className="menu--items--box">
        <Link to="/items" className="menu--items" id="Location">
          Location
        </Link>
      </div>
      <div className="menu--items--box">
        <Link to="/availability" className="menu--items" id="Availability">
          Availability
        </Link>
      </div>
      <div className="menu--items--box">
        <Link to="/transaction" className="menu--items" id="Transaction">
          Transaction
        </Link>
      </div>
    </div>
  );
}
