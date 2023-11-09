import React from "react";
import Detail from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.firstname}</h2>
      </div>
      <div className="bottom">
        <Detail detailInfo={props.lastname} />
        <Detail detailInfo={props.country} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
