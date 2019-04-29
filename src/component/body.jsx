import React, { Component } from 'react';
import '../css/body.css';
import axios from 'axios';

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
                            <form onSubmit={this.handleSubmit}>
                                <input name="foodItemName" placeholder="Food Name" onChange={this.handleChange} />
                                <input name="unitPrice" placeholder="Unit Price" onChange={this.handleChange} />
                                {/* <input name="inStock" value={inStock} placeholder="Stock" onChange={this.onChange} /> */}

                                <select name="inStock" id="inStock" onChange={this.handleChange}>
                                    <option disabled selected>Choose</option>
                                    <option>Full Inventory</option>
                                    <option>Limited Stock</option>
                                    <option>Out of Stock</option>
                                </select>
                                <br />
                                <button onClick={() => { alert('Food Item Added! Thank You!'); }} type="submit" className="submit" onSubmit={this.handleSubmit}>ADD</button>

                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}


export default Body;