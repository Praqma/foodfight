import { ADD_FOOD } from "../actionTypes";

const initialState = {
   allFood: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FOOD: {
      const { name } = action.payload;
      return {
        ...state,
          allFood: [...state.allFood, name]        
      };  
    }
    default:
      return state;
  }
}
