import React, { Component } from 'react';
import '../css/listOrders.css';

const apiURL = 'http://localhost:8080/restsample01/rest/AddFoodItem';

class ListOrders extends Component {


  render() {


    return (

      <div className="ListOrders">
        <div className="main-content">
          <div className="title">
            DASHBOARD
			    </div>
          <div className="widget">
                        <div className="title">Listed Orders</div>
                    
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
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        </div> 
      </div>
        );
      }
    }
    export default ListOrders;
