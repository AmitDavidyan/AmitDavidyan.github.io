import React from "react";
import { useEffect, useState } from "react";
import "./products.css";
// import photos from "./data2.json";

function Products(menuItem) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/products")
  //     .then((ress) => ress.json())
  //     .then((th) => {
  //       setProducts(th);
  //     });
  // });
  return menuItem.map((props, i) => {
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
