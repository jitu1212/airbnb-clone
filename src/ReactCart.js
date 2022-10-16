import React from "react";
import "./ReactCard.css";

export default function ReactCart({ src, title, description, price }) {
  return (
    <>
      <div className="maincard">
        <div className="card">
          <img src={src} alt="" />
          <div className="card__info">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
