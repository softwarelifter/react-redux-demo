import { iceCreamActionTypes } from "./iceCreamActionTypes";

const initialState = {
  numOfIceCream: 10,
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case iceCreamActionTypes.BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};
