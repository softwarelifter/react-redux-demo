import { cakeActionTypes } from "./cakeActionTypes";

const initialState = {
  numOfCake: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case cakeActionTypes.BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
