import React, { Component } from 'react';
import '../css/body.css';
import axios from 'axios';
import { Button } from 'reactstrap';

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

    alpha(e) {
        const regex = new RegExp("^[a-z A-Z]+$");
        const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (!regex.test(key)) {
            e.preventDefault();
            return false;
        }
    }

    number(e) {
        const regex = new RegExp("^[1-9.]+$");
        const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (!regex.test(key)) {
            e.preventDefault();
            return false;
        }
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
                            <input className="in" name="foodItemName" placeholder="Food Name" onChange={this.handleChange} onKeyPress={e => this.alpha(e)} /><br />
                            <input className="in" name="unitPrice" placeholder="Unit Price" onChange={this.handleChange} onKeyPress={e => this.number(e)} /><br />
                            {/* <input name="inStock" value={inStock} placeholder="Stock" onChange={this.onChange} /> */}

                            <select className="iselect" name="inStock" id="inStock" onChange={this.handleChange}>
                                <option defaultValue disabled >Choose</option>
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