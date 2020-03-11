import React from "react";
import { connect } from "react-redux";
import {compose} from "redux";
import Food from "./Food";
import { getFoodstuff } from "../redux/selectors";

export function FoodList (props){
    return(
        <ul>
            {props.foodstuff && props.foodstuff.length
            ? props.foodstuff.map((food, index) => {
                return <li><Food name={food}/></li>
            })
        : "You need a more varied diet!"}
        </ul>
    )
};

function mapStateToProps(state, ownProps) {
  const food = getFoodstuff(state);
  return { foodstuff: food };
  
};
export default compose (connect(mapStateToProps))(FoodList);
