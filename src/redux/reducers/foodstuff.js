import { ADD_FOOD } from "../actionTypes";

const initialState = {
   allFood: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FOOD: {
      const { name, storage_id } = action.payload;
      return {
        ...state,
          allFood: [...state.allFood, {name: name, storage_id: storage_id}]        
      };  
    }
    default:
      return state;
  }
}
