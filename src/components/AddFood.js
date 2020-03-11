import React from 'react';
import { connect } from "react-redux";
import { addFood } from "../redux/actions";

import Button from '@material-ui/core/Button';

export class AddFood extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({name: event.target.value});
      }
    
      handleSubmit(event) {
        this.props.addFood(this.state.name);
        this.setState({ name: "" });
        event.preventDefault();
      }
    
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
        <label>Food to add:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        )
    }

}
export default connect(
    null,
    { addFood }
  )(AddFood)