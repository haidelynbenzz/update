import React, { Component } from 'react';
import '../css/body.css';
import axios from 'axios';
import {Button} from 'reactstrap';

class Body extends Component {

    constructor() {
        super();

        this.state = {
            foodItemName: '',
            unitPrice: '',
            inStock: ''

        };

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //SUBMIT FUNCTION
    handleSubmit = e => {
        e.preventDefault();

        const ser = {
            foodItemName: this.state.foodItemName,
            unitPrice: this.state.unitPrice,
            inStock: this.state.inStock
        }

        console.log("input");
        console.log(ser);

        axios.post('http://localhost:8080/restsample01/rest/AddFoodItem', ser)
            .then(res => {
                console.log(res);
                //console.log(res.data);
            })

    }
    


    render() {


        return (

                <div className="main-content">
                    <div className="title">
                        DASHBOARD
			</div>
                    <div className="main">
                        <div className="widget">
                            <div className="title">Add Food Item</div>
                            <form onSubmit={this.handleSubmit} className="OrderForm">
                                <input className="in" name="foodItemName" placeholder="Food Name" onChange={this.handleChange} /><br/>
                                <input className="in" name="unitPrice" placeholder="Unit Price" onChange={this.handleChange} /><br/>
                                {/* <input name="inStock" value={inStock} placeholder="Stock" onChange={this.onChange} /> */}

                                <select className="iselect" name="inStock" id="inStock" onChange={this.handleChange}>
                                    <option disabled selected>Choose</option>
                                    <option>Full Inventory</option>
                                    <option>Limited Stock</option>
                                    <option>Out of Stock</option>
                                </select>
                                <br />
                                <br />
                                <Button onClick={() => { alert(this.state.foodItemName + ' Food Item Added! Thank You!'); }} color="primary" type="submit" onSubmit={this.handleSubmit}>ADD</Button>
                                <span>&nbsp;&nbsp;</span>
                                <Button as="input" color="danger" type="reset" value="Reset">Reset</Button>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}


export default Body;