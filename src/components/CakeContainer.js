import React from "react";
import { connect } from "react-redux";
import { buyCakes } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes-{props.numOfCake}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
