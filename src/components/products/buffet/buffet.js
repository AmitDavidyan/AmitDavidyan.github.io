import React from "react";
import { useEffect, useState } from "react";
import "../buffet/buffet.css";

function Products() {
  const [buffet, setBuffet] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/buffet")
      .then((ress) => ress.json())
      .then((th) => {
        setBuffet(th);
      });
  });
  return buffet.map((props, i) => {
    return (
      <div className="main" key={i}>
        <div>
          <h3 className="title">{props.title}</h3>
          <img src={props.image} width={210}></img>
          <h4 className="price">price : {props.price}$</h4>
          <div className="button">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    );
  });
}

export default Products;
