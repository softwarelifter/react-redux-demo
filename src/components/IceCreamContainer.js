import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>num of icecreams -{numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy icecream</button>
    </div>
  );
}

export default IceCreamContainer;
