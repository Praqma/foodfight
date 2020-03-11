import React from 'react';
import { connect } from "react-redux";
import { addFood } from "../redux/actions";

export class AddFood extends React.Component {
    constructor(props){
        super(props);
        this.state = {name:""}
      }
    
      updateName = name => {
        this.setState({name});
      };
    
      handleAddFood = () => {
        this.props.addFood({name:this.state.name});
        this.setState({ name: "" });
      };
    
    render(){
        return(
        <div>
        <label>Food to add:
          <input type="text" value={this.state.name} onChange={e => this.updateName(e.target.value)}/>
        </label>
        <button className="add-food" onClick={this.handleAddFood}>
          Add Food</button>      
        </div>
        )
    }

}
export default connect(
    null,
    { addFood }
  )(AddFood)