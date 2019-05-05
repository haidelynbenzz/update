import React, { Component } from 'react';
import '../css/listOrders.css';
import axios from 'axios';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
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
          <Card col-xs-4>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
      <Card col-xs-4>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
      <Card col-xs-4>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
      <Card col-xs-4>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
      
        </div>
        </div> 
      </div>
        );
      }
    }
    export default ListOrders;
