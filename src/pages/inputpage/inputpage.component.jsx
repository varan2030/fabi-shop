import React from 'react';

import './inputpage.styles.scss';

import TextField from '@material-ui/core/TextField';
import CustomButton from '../../components/custom-button/custom-button.component';

class InputPage extends React.Component {
    constructor() {
        super();

        this.state = {
            vendorCode: '',
            model: '',
            sex:['men', 'women', 'children', 'girls', 'boys'],
            season:['winter', 'spring', 'summer', 'demi', 'all season'],
            type: '',
            size: '',
                       
        }
    }

    handleChange = event => {
        event.preventDefault();
        console.log(event.target.value);
       const {value, name} = event.target;
       this.setState({[name]: value})
        console.log(this.state);
    }

    handleSubmit = event => {
        event.preventDefault()
        // const {vendorCode} = this.state;
        alert(this.state.vendorCode)
    }

    render() {
        return (
          <div>
            <h1>Input page</h1>
            <form onSubmit={this.handleSubmit}>
               <TextField
                    id="standard-name"
                    name="vendorCode"
                    label="Vendor Code"
                    // className={classes.textField}
                    value={this.state.vendorCode}
                    onChange={this.handleChange}
                    margin="normal"
                    required
                />
                <CustomButton type='submit'>
                    SUBMIT
                </CustomButton>
            </form>
            </div>
        )
    }
}

export default InputPage;