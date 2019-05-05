import React, { Component } from 'react';
import '../css/create.css';
import axios from 'axios';
import { Table, Button, Input, } from 'reactstrap';

class Create extends Component {

    constructor() {
        super();

        this.state = {
            FoodItems: [],
            customerName : '',
            address: '',
            contactNumber: '',
            status: '',
            validation: '',
            Items:'',
            isHidden: false,
        };

    }

    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    //SUBMIT FUNCTION
    handleSubmit = e => {
        e.preventDefault();

        const details = {
            customerName: this.state.customerName,
            address: this.state.address,
            contactNumber: this.state.contactNumber,
            status: this.state.status,
            option: this.state.option,
            quantity: this.state.quantity,
        }

        console.log("details");
        console.log(details);

        axios.post('http://localhost:8080/restsample01/rest/AddOrder', details)
            .then(res => {
                console.log(res);
                //console.log(res.data);
            })

    }

    componentDidMount() {
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
            .then(res => {
                const FoodItems = res.data;
                this.setState({ FoodItems });
            })
    }
    //console.log({this.state.validation});

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
                                <input name="customerName" placeholder="Customer Name" onChange={this.handleChange}/>
                                <input name="address" placeholder="Address" onChange={this.handleChange}/>
                                <input name="contactNumber" placeholder="Contact Number" onChange={this.handleChange}/>
                                <select name="status" id="status" onChange={this.handleChange}>
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <td ><Input type="select" name="option" value={this.state.Items} onChange={(e) => this.setState({Items: e.target.value, validation: e.target.value === ""})}>
                                            {this.state.FoodItems.map((FoodItem) => {
                                                    return (
                                                        <option>{FoodItem.foodItemName} (Php: {FoodItem.unitPrice})</option>
                                                )})
                                            }</Input></td>
                                            
                                        <td><Input type="number" min="1" max="20" name="quantity" onChange={this.handleChange}></Input></td>
                                        <td><Button color="primary" onSubmit={this.handleSubmit}>ADD</Button></td>
                                    </tbody>
                                </Table>
                                
                                <Table striped bordered hover>
                                    <thead>
                                        <th>Quantity</th>
                                        <th>Ordered Items</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>{this.state.quantity}</td>
                                        <td>{this.state.validation}</td>
                                        
                                        </tr>
                                        <tr>
                                        <td>Quantity</td>
                                        <td>Food Name</td>
                                        </tr>
                                        
                                       
                                        
                                    </tbody>
                                </Table>
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