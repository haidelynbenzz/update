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
            getUnitPrice: {
            unitPrice: '',
            },
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

    //GET THE DATA FROM FOODITEMTBL
    componentDidMount() {
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
            .then(res => {
                const FoodItems = res.data;
                this.setState({ FoodItems });
            })
    }

    //WHEN CLICK "ORDER NOW", IT WILL RUN THIS FUNTION
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    //
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeTotal = e => {
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

        //FOR FOODITEMTBL
        axios.post('http://localhost:8080/restsample01/rest/AddFoodItem', AddFoodItem)
            .then(res => {
                console.log(res);
                //console.log(res.data);
            })

        //FOR ORDERITEMTBL
        axios.post('http://localhost:8080/restsample01/rest/OrderItem', OrderItem)
            .then(res => {
                console.log(res);
            })

        //FOR ORDERTBL
        axios.post('http://localhost:8080/restsample01/rest/AddOrder', AddOrder)
            .then(res => {
                console.log(res);
            })

    }

    //RESTRICT USER FROM ENTERING SPECIAL CHARACTERS AND NUMBERS
    alpha(e) {
        const regex = new RegExp("^[a-z A-Z]+$");
        const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (!regex.test(key)) {
            e.preventDefault();
            return false;
        }
    }
    //RESTRICT USER FROM ENTERING SPECIAL CHARACTERS AND LETTERS
    number(e) {
        const regex = new RegExp("^[0-9.]+$");
        const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (!regex.test(key)) {
            e.preventDefault();
            return false;
        }
    }
    render() {

        var shown = {
            display: this.state.isHidden ? "block" : "none"
        };

        let FoodList = this.state.FoodItems.map(FoodItem=>
            <option> {FoodItem.foodItemName} (Php: {FoodItem.unitPrice})</option>
        )

        let List = this.state.FoodItems.map(FoodItem =>
            <option> {FoodItem.unitPrice}</option>
        )

        return (

            <div>
                <div className="main-content">
                    <div className="title">
                        DASHBOARD</div>
                    <div className="main">
                        <div className="widget">
                            <div className="title">Create Order</div>
                            <form onSubmit={this.handleSubmit}>
                                <input className="i" name="customerName" placeholder="Customer Name" onKeyPress={e => this.alpha(e)} onChange={this.handleChange} />
                                <input className="i" name="address" placeholder="Address" onKeyPress={e => this.alpha(e)} onChange={this.handleChange} />
                                <input className="i" name="contactNumber" placeholder="Contact Number" onKeyPress={e => this.number(e)} onChange={this.handleChange} />
                                <input className="i" name="orderItemName" placeholder="e.g. Order#" onChange={this.handleChange} />
                                <select className="i" name="status" id="status" onChange={this.handleChange}>
                                    <option defaultValue disabled>Choose</option>
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
                                                <th>QUANTITY</th>
                                                <th>MENU</th>
                                                <th>ORDER HERE</th>
                                                <th>MODIFY</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Input type="number" min="1" max="20" name="quantity" onKeyPress={e => this.number(e)} onChange={this.handleChange}></Input></td>
                                                <td><Input type="select">{FoodList}</Input></td>
                                                <td><Input type="select" name="foodItemName"
                                                    onChange={this.handleChangeTotal}>{List}
                                                </Input></td>
                                                <td><Button color="primary" onSubmit={this.handleSubmit}>ADD</Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div className="TableForDisplayTotal">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Quantity</th>
                                                    <th>Ordered Items</th>
                                                    <th>Total Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{this.state.quantity}</td>
                                                    <td>{this.state.foodItemName}</td>
                                                    <td>{this.state.quantity * this.state.foodItemName}</td>
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