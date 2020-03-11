import React from 'react';
import Button from '@material-ui/core/Button';

class AddFood extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Button variant='contained'>Add</Button>
        )
    }

}

module.exports = AddFood;