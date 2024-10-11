import { cakeActionTypes } from "./cakeActionTypes";

export const buyCakes = () => {
  return {
    type: cakeActionTypes.BUY_CAKE,
  };
};
