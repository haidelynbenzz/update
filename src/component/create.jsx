import React, { Component } from 'react';
import '../css/create.css';
import axios from 'axios';
import { Table, Button, Input, } from 'reactstrap';

class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FoodItems: [],
            foodItemName: '',
            unitPrice: '',
            quantity: '',
            orderItemName: '',
            total: 0,
            customerName: '',
            address: '',
            contactNumber: '',
            status: '',
            isHidden: false,
        };

    }

    componentDidMount() {
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
            .then(res => {
                const FoodItems = res.data;
                this.setState({ FoodItems });
            })
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //SUBMIT FUNCTION
    handleSubmit = e => {
        e.preventDefault();

        const AddOrder = {
            // items: this.state.items,
            customerName: this.state.customerName,
            address: this.state.address,
            contactNumber: this.state.contactNumber,
            status: this.state.status,

        }

        const OrderItem = {
            quantity: this.state.quantity,
            orderItemName: this.state.orderItemName,
        }

        const AddFoodItem = {
            foodItemName: this.state.foodItemName,
            unitPrice: this.state.unitPrice,
        }
        //console.log(this.state.items);
        console.log("details");
        console.log(AddOrder);
        console.log(OrderItem);
        console.log(AddFoodItem);

        axios.post('http://localhost:8080/restsample01/rest/AddFoodItem', AddFoodItem)
            .then(res => {
                console.log(res);
                //console.log(res.data);
            })

        axios.post('http://localhost:8080/restsample01/rest/OrderItem', OrderItem)
            .then(res => {
                console.log(res);
            })

        axios.post('http://localhost:8080/restsample01/rest/AddOrder', AddOrder)
            .then(res => {
                console.log(res);
            })

    }

    getTotal(){
        //this.FoodItems.unitPrice * this.state.quantity
        this.state.FoodItems.map((FoodItem) => {
            return (
                FoodItem.unitPrice * this.state.quantity
            )
        })
        
    }

    render() {

        var shown = {
            display: this.state.isHidden ? "block" : "none"
        };
        return (

            <div>
                <div className="main-content">
                    <div className="title">
                        DASHBOARD</div>
                    <div className="main">
                        <div className="widget">
                            <div className="title">Create Order</div>
                            <form onSubmit={this.handleSubmit}>
                                <input className="i" name="customerName" placeholder="Customer Name" onChange={this.handleChange} />
                                <input className="i" name="address" placeholder="Address" onChange={this.handleChange} />
                                <input className="i" name="contactNumber" placeholder="Contact Number" onChange={this.handleChange} />
                                <input className="i" name="orderItemName" placeholder="e.g. Order#" onChange={this.handleChange} />
                                <select className="i" name="status" id="status" onChange={this.handleChange}>
                                    <option disabled selected>Choose</option>
                                    <option>Recieved</option>
                                    <option>Kitchen</option>
                                    <option>In Transit</option>
                                    <option>Delivered</option>
                                    <option>Cancelled</option>
                                </select>
                                <Button as="input" color="info" onClick={this.toggleHidden.bind(this)}>ORDER NOW</Button>
                                <div style={shown}>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Food Name</th>
                                                <th>Quantity</th>
                                                <th>MODIFY</th>
                                            </tr>
                                        </thead>
                                        <td><Input type="number" min="1" max="20" name="quantity" onChange={this.handleChange}></Input></td>
                                        <td><Input type="select" name="foodItemName"
                                            onChange={this.handleChange}>
                                            {this.state.FoodItems.map((FoodItem) => {
                                                return (
                                                    <option>{FoodItem.foodItemName} (Php: {FoodItem.unitPrice})</option>
                                                )
                                            })
                                            }</Input></td>
                                        <td><Button color="primary" onSubmit={this.handleSubmit}>ADD</Button></td>
                                    </Table>
                                    <div className="TableForDisplayTotal">
                                        <Table striped bordered hover>
                                            <thead>
                                                <th>Quantity</th>
                                                <th>Ordered Items</th>
                                                <th>Total Price</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{this.state.quantity}</td>
                                                    <td>{this.state.foodItemName}</td>
                                                    {/* {this.state.FoodItems.map((FoodItem) => {
                                                        return (
                                                            <td key={FoodItem.id}>{this.state.quantity * FoodItem.unitPrice}</td>
                                                        )
                                                    })
                                                    } */}
                                                    <td>{this.getTotal()}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}


export default Create;