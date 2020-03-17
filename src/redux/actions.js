import { ADD_FOOD } from "./actionTypes";

export const addFood = content => ({
    type: ADD_FOOD,
    payload: {
        name: content.name,
        storage_id: content.storage_id
    }
  });