import React, { Component } from 'react';
import '../css/updateOrders.css';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';

class UpdateOrders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Orders: [],
            editOrderItemData: {
                id: '',
                customerName: '',
                address: '',
                contactNumber: '',
                status: '',

                foodItemName: '',
            },
            editOrderItemData: false,
        };

    }

    componentDidMount() {
        axios.get('http://localhost:8080/restsample01/rest/AddOrder')
            .then(res => {
                const Orders = res.data;
                this.setState({ Orders });
            })
    }

    updateOrderItem() {
        let { customerName, address, contactNumber, status } = this.state.editOrderItemData;

        axios.put("http://localhost:8080/restsample01/rest/AddOrder/" + this.state.editOrderItemData.id, {
            customerName, address, contactNumber, status
        }).then((res) => {
            console.log(res.data)
            //this._refreshFoods();
            this.setState({
                openSelectOrderModal: false, editOrderItemData: { id: '', customerName: '', address: '', contactNumber: '', status: '' }
            })

        });
    }
    editOrderItem(id, customerName, address, contactNumber, status) {
        this.setState({
            editOrderItemData: { id, customerName, address, contactNumber, status }, openSelectOrderModal: !this.state.openSelectOrderModal
        });
    }

    //DELETE REQUEST
    handleDelete(id) {
        axios.delete('http://localhost:8080/restsample01/rest/AddOrder/' + id)
            .then(res =>
                console.log(res.data));

    }
    //DISPLAY EXISTING DATA AFTER DELETE REQUEST
    componentDidUpdate() {
        axios.get('http://localhost:8080/restsample01/rest/AddOrder')
            .then(res => {
                const Orders = res.data;
                this.setState({ Orders });
            })
    }

    toggleSelectOrder() {
        this.setState({
            openSelectOrderModal: !this.state.openSelectOrderModal
        });
    }

    // toggleSelectOrderItems() {
    //     this.setState({
    //         openSelectOrderItemModal: !this.state.openSelectOrderItemModal
    //     });
    // }

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
        const regex = new RegExp("^[1-9-]+$");
        const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (!regex.test(key)) {
            e.preventDefault();
            return false;
        }
    }

    render() {
        return (
            <div>
                <div className="main-content">
                    <div className="title">
                        DASHBOARD
			        </div>
                    <div className="scrollable">
                        <table>
                            <thead>
                                <tr>
                                    <th className="add-table-cell">ORDER ID</th>
                                    <th className="add-table-cell">CUSTOMER NAME</th>
                                    <th className="add-table-cell">ADDRESS</th>
                                    <th className="add-table-cell">CONTACT NUMBER</th>
                                    <th className="add-table-cell">ORDER ITEMS</th>
                                    <th className="add-table-cell">STATUS</th>
                                    <th className="add-table-cell">TOTAL</th>
                                    <th className="add-table-cell">MODIFY</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.Orders.map((Order) => {
                                        return (
                                            <tr className="add-food-row" key={Order.id}>
                                                <td className="add-food-cell" key={Order.id1}>{Order.id}</td>
                                                <td className="add-food-cell">{Order.customerName}</td>
                                                <td className="add-food-cell">{Order.address}</td>
                                                <td className="add-food-cell">{Order.contactNumber}</td>
                                                <td className="add-food-cell">
                                                    {/* <Button color="outline-success" onClick={this.toggleSelectOrderItems.bind(this)}>UPDATE ORDER LIST</Button> */}

                                                    {Order.foodItemName}<br />
                                                    Price: {Order.unitPrice}<br />
                                                    Qty: {Order.quantity}<br />
                                                    TOTAL {this.props.quantity * this.props.foodItemName}
                                            </td>

                                                <td className="add-food-cell">{Order.status}</td>
                                                <td className="add-food-cell">TOTAL</td>
                                                <td className="add-food-cell">
                                                    <button className="edit" type="button" onClick={this.editOrderItem.bind(this, Order.id, Order.customerName, Order.address, Order.contactNumber, Order.status)}>EDIT</button>
                                                    <button className="delete" type="button" onClick={() => this.handleDelete(Order.id)}>DELETE</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <Modal isOpen={this.state.openSelectOrderModal} toggle={this.toggleSelectOrder.bind(this)}>
                                <ModalHeader toggle={this.toggleSelectOrder.bind(this)}>EDIT ORDER ITEMS</ModalHeader>
                                <ModalBody>
                                    <FormGroup>
                                        <Label for="customerName">Customer Name</Label>
                                        <Input id="customerName" onKeyPress={e => this.alpha(e)} value={this.state.editOrderItemData.customerName} onChange={(e) => {
                                            let { editOrderItemData } = this.state;

                                            editOrderItemData.customerName = e.target.value;

                                            this.setState({ editOrderItemData });
                                        }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input id="address" onKeyPress={e => this.alpha(e)} value={this.state.editOrderItemData.address} onChange={(e) => {
                                            let { editOrderItemData } = this.state;

                                            editOrderItemData.address = e.target.value;

                                            this.setState({ editOrderItemData });
                                        }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="contactNumber">Contact Name</Label>
                                        <Input id="contactNumber" onKeyPress={e => this.number(e)} value={this.state.editOrderItemData.contactNumber} onChange={(e) => {
                                            let { editOrderItemData } = this.state;

                                            editOrderItemData.contactNumber = e.target.value;

                                            this.setState({ editOrderItemData });
                                        }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="status">Status</Label>
                                        <Input type="select" id="status" value={this.state.editOrderItemData.status} onChange={(e) => {
                                            let { editOrderItemData } = this.state;

                                            editOrderItemData.status = e.target.value;

                                            this.setState({ editOrderItemData });
                                        }} >
                                            <option defaultValue disabled>Choose</option>
                                            <option>Recieved</option>
                                            <option>Kitchen</option>
                                            <option>In Transit</option>
                                            <option>Delivered</option>
                                            <option>Cancelled</option>
                                        </Input>
                                    </FormGroup>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.updateOrderItem.bind(this)}>UPDATE</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleSelectOrder.bind(this)}>Cancel</Button>
                                </ModalFooter>
                            </Modal>

                            {/* FOR ORDER ITEM EDIT MODAL */}
                            {/* <Modal isOpen={this.state.openSelectOrderItemModal} toggle={this.toggleSelectOrderItems.bind(this)}>
                                <ModalHeader toggle={this.toggleSelectOrderItems.bind(this)}>EDIT SELECTED ORDER ITEMS</ModalHeader>
                                <ModalBody>
                                    
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" >UPDATE</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleSelectOrderItems.bind(this)}>Cancel</Button>
                                </ModalFooter>
                            </Modal> */}
                        </table>
                    </div>
                </div>
            </div>
        )

    }
}

export default UpdateOrders;