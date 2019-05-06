import React, { Component } from 'react';
import '../css/listOrders.css';
import axios from 'axios';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';

class ListOrders extends Component {


  constructor() {
    super();

    this.state = {
      Orders: [],
      listSelectOrderData: false,
    };

  }

  componentDidMount() {
    axios.get('http://localhost:8080/restsample01/rest/AddOrder')
      .then(res => {
        const Orders = res.data;
        this.setState({ Orders });
      })
  }

//   componentDidMount() {
//     axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
//         .then(res => {
//             const FoodItems = res.data;
//             this.setState({ FoodItems });
//         })
// }

  toggleSelectOrder() {
    this.setState({
      openSelectOrderModal: !this.state.openSelectOrderModal
    });
  }
  render() {


    return (

      <div className="ListOrders">
        <div className="main-content">
          <div className="title">
            DASHBOARD
			    </div>
          <div className="widget">
            <div className="title">Listed Orders</div>

            <Table striped bordered hover>

              <thead>

              </thead>
              <tbody>
                <tr className="add-food-row">
                  <th className="add-table-cell">ORDER ID</th>
                  <th className="add-table-cell">CUSTOMER NAME</th>
                  <th className="add-table-cell">ADDRESS</th>
                  <th className="add-table-cell">CONTACT NUMBER</th>
                  <th className="add-table-cell">ORDER ITEMS</th>
                  <th className="add-table-cell">STATUS</th>
                  <th className="add-table-cell">TOTAL</th>


                </tr>
                {
                  this.state.Orders.map((Order) => {
                    return (
                      <tr className="add-food-row">
                        <td className="add-food-cell">{Order.id}</td>
                        <td className="add-food-cell">{Order.customerName}</td>
                        <td className="add-food-cell">{Order.address}</td>
                        <td className="add-food-cell">{Order.contactNumber}</td>
                        <td className="add-food-cell">
                          <Button color="outline-success" onClick={this.toggleSelectOrder.bind(this)}>ORDER ITEMS</Button>
                        </td>
                          <Modal isOpen={this.state.openSelectOrderModal} toggle={this.toggleSelectOrder.bind(this)}>
                            <ModalHeader toggle={this.toggleSelectOrder.bind(this)}>ORDERED ITEMS LIST</ModalHeader>
                            <ModalBody>
                              <tr>
                                <th >FOOD NAME</th>
                                <th>PRICE</th>
                                <th>TOTAL</th>
                              </tr>
                                <tr>
                                  <td className="add-food-cell">{Order.foodItemName}</td>
                                  <td className="add-food-cell">{Order.unitPrice}</td>
                                  <td className="add-food-cell">TOTAL</td>
                                </tr>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="secondary" onClick={this.toggleSelectOrder.bind(this)}>Cancel</Button>
                            </ModalFooter>
                          </Modal>
                        <td className="add-food-cell">{Order.status}</td>
                        <td className="add-food-cell">TOTAL</td>
                      </tr>
                    )
                  })
                }
                
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
export default ListOrders;
