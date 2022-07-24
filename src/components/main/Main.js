import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Buffet from "../products/buffet/buffet";
import Closet from "../products/closet/closet";
import TV from "../products/TV/TV";

function Main() {
  return (
    <div>
      <Header />
      <Buffet />
      <Closet />
      <TV />
    </div>
  );
}

export default Main;
