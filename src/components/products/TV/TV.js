import React, { useEffect, useState } from "react";
// import image from "./TV.json";
import "../TV/TV.css";

function Products() {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/TV")
      .then((ress) => ress.json())
      .then((th) => {
        setTv(th);
      });
  });

  return tv.map((props, i) => {
    return (
      <div className="main" key={i}>
        <div>
          <h3 className="title">{props.title}</h3>
          <img src={props.image} width={210} height={150}></img>
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
