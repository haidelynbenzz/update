import React, { Component } from 'react';
import '../css/listOrders.css';
import axios from 'axios';

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
            <div className="scrollable1">
            <table>

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
                  this.state.Orders.map((Order, index) => {
                    return (
                      <tr className="add-food-row" key={index}>
                        <td className="add-food-cell">{Order.id}</td>
                        <td className="add-food-cell">{Order.customerName}</td>
                        <td className="add-food-cell">{Order.address}</td>
                        <td className="add-food-cell">{Order.contactNumber}</td>
                        <td className="add-food-cell">
                          {Order.foodItemName}<br />
                        Order Name: {Order.orderItemName}<br />
                        Qty:{Order.quantity}<br />
                        
                        </td>
                        <td className="add-food-cell">{Order.status}</td>
                        <td className="add-food-cell">TOTAL</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListOrders;