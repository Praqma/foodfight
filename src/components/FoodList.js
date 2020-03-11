import React from "react";
import { connect } from "react-redux";
import Food from "./Food";
import {getAllFood} from "../redux/selectors"
const FoodList = ({allFood}) => (
    
        <ul>
            {allFood && allFood.length
            ? allFood.map((food, index) => {
                return <li key={food}><Food name={food}/></li>
            })
        : "You need a more varied diet!"}
        </ul>
);

export function mapStateToProps(state) {
    return getAllFood(state)
  
};
export default  connect(mapStateToProps)(FoodList);
