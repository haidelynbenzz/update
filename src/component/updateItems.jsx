import React, { Component } from 'react';
import '../css/updateItems.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';


class UpdateItems extends Component {

    constructor() {
        super();

        this.state = {
            FoodItems: [],
            editFoodData: {
                id: '',
                foodItemName: '',
                unitPrice: '',
                inStock: ''
            },
            editFoodData: false
        };

    }

    //GET THE CURRENT DATA FROM REST
    componentDidMount() {
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
            .then(res => {
                const FoodItems = res.data;
                this.setState({ FoodItems });
            })
    }

    //REFRESH DATA
    componentWillMount() {
        this._refreshFoods();
    }

    toggleEditFoodModal() {
        this.setState({
            editFoodModal: !this.state.editFoodModal
        });
    }

    updateFood() {
        let { foodItemName, unitPrice, inStock } = this.state.editFoodData;

        axios.put("http://localhost:8080/restsample01/rest/AddFoodItem/" + this.state.editFoodData.id, {
            foodItemName, unitPrice, inStock
        }).then((res) => {
            console.log(res.data)
            this._refreshFoods();
            this.setState({
                editFoodModal: false, editFoodData: { id: '', foodItemName: '', unitPrice: '', inStock: '' }
            })

        });
    }
    editFood(id, foodItemName, unitPrice, inStock) {
        this.setState({
            editFoodData: { id, foodItemName, unitPrice, inStock }, editFoodModal: !this.state.editFoodModal
        });
    }

    //DISPLAY EXISTING DATA AFTER UPDATE REQUEST
    _refreshFoods() {
        axios.get("http://localhost:8080/restsample01/rest/AddFoodItem").then((response) => {
            this.setState({
                FoodItems: response.data
            })
        });
    }


     //DELETE REQUEST
     handleDelete(id) {
        axios.delete('http://localhost:8080/restsample01/rest/AddFoodItem/' + id)
            .then(res =>
                console.log(res.data));

    }
    //DISPLAY EXISTING DATA AFTER DELETE REQUEST
    componentDidUpdate() {
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
            .then(res => {
                const FoodItems = res.data;
                this.setState({ FoodItems });
            })
    }
    render() {


        return (

            <div>
                <div className="main-content">
                    <div className="title">
                        DASHBOARD
			        </div>

                    <table>
                        <thead>
                            <th className="add-table-cell">ID</th>
                            <th className="add-table-cell">FOOD ITEM NAME</th>
                            <th className="add-table-cell">UNIT PRICE</th>
                            <th className="add-table-cell">STOCK STATUS</th>
                            <th className="add-table-cell">MODIFY</th>
                        </thead>
                        <tbody>
                            {
                                this.state.FoodItems.map((FoodItem) => {
                                    return (
                                        <tr className="add-food-row">
                                            <td className="add-food-cell">{FoodItem.id}</td>
                                            <td className="add-food-cell">{FoodItem.foodItemName}</td>
                                            <td className="add-food-cell">{FoodItem.unitPrice}</td>
                                            <td className="add-food-cell">{FoodItem.inStock}</td>
                                            <td className="add-food-cell"><button className="edit" type="button" onClick={this.editFood.bind(this, FoodItem.id, FoodItem.foodItemName, FoodItem.unitPrice, FoodItem.inStock)} >EDIT</button>
                                            <button className="delete" type="button" onClick={() => this.handleDelete(FoodItem.id)}>DELETE</button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                        <Modal isOpen={this.state.editFoodModal} toggle={this.toggleEditFoodModal.bind(this)}>
                            <ModalHeader toggle={this.toggleEditFoodModal.bind(this)}>Edit a new Food</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label for="foodItemName">foodItemName</Label>
                                    <Input id="foodItemName" value={this.state.editFoodData.foodItemName} onChange={(e) => {
                                        let { editFoodData } = this.state;

                                        editFoodData.foodItemName = e.target.value;

                                        this.setState({ editFoodData });
                                    }} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="unitPrice">Price</Label>
                                    <Input id="unitPrice" value={this.state.editFoodData.unitPrice} onChange={(e) => {
                                        let { editFoodData } = this.state;

                                        editFoodData.unitPrice = e.target.value;

                                        this.setState({ editFoodData });
                                    }} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="inStock">InStock</Label>
                                    <Input type="select" id="inStock" value={this.state.editFoodData.inStock} onChange={(e) => {
                                        let { editFoodData } = this.state;

                                        editFoodData.inStock = e.target.value;

                                        this.setState({ editFoodData });
                                    }} >
                                    <option disabled selected>Choose</option>
                                    <option>Full Inventory</option>
                                    <option>Limited Stock</option>
                                    <option>Out of Stock</option>
                                    </Input>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.updateFood.bind(this)}>Update Food</Button>{' '}
                                <Button color="secondary" onClick={this.toggleEditFoodModal.bind(this)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </table>

                </div>
            </div>
        );
    }
}


export default UpdateItems;