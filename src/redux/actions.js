import { ADD_FOOD } from "./actionTypes";

export const addFood = content => ({
    type: ADD_FOOD,
    payload: {
        content
    }
  });