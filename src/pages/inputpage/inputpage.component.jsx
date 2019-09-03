import React from 'react';

import './inputpage.styles.scss';

import TextField from '@material-ui/core/TextField';
import { number, string } from 'prop-types';

class InputPage extends React.Component {
    constructor() {
        super();

        this.state = {
            article: '',
            model: '',
            sex:['men', 'women', 'children', 'girls', 'boys'],
            season:['winter', 'spring', 'summer', 'demi', 'all season'],
            type: '',
            size: '',
                       
        }
    }

    handleChange = event => {
       const {value, name} = event.target;
       this.setState({[name]: value})
        console.log(this.state);
    }

    render() {
        return (
           <div>
               <h1>Input page</h1>
               <TextField
                    id="standard-name"
                    name="article"
                    label="Article"
                    // className={classes.textField}
                    value={this.state.article}
                    onChange={this.handleChange}
                    margin="normal"
                />
           </div>
        )
    }
}

export default InputPage;