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
    
      handleAddFood = (event) => {
        this.props.addFood({name:this.state.name});
        event.preventDefault();
        this.setState({ name: "" });
      };
    
    render(){
        return(
        <form onSubmit={this.handleAddFood}>
        <label>Food to add:
          <input type="text" value={this.state.name} onChange={e => this.updateName(e.target.value)}/>
        </label>
        <input type="submit" value="Add food" />
        </form>
        )
    }

}
export default connect(
    null,
    { addFood }
  )(AddFood)