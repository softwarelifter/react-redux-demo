import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCakes } from "../redux";

function HooksCakeContainer() {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCake}</h2>
      <button onClick={() => dispatch(buyCakes())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
