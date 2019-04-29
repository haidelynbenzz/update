import React, { Component } from 'react';
import '../css/updateOrders.css';


import gallery from '../img/catering.png';

class UpdateOrders extends Component {

    render() {
        return (
            <div>
                <div className="main-content">
                    <div className="title">
                        DASHBOARD
			</div>

                    <table>
                        <thead>
                            <th className="add-table-cell">ORDER ID</th>
                            <th className="add-table-cell">CUSTOMER NAME</th>
                            <th className="add-table-cell">ADDRESS</th>
                            <th className="add-table-cell">CONTACT NUMBER</th>
                            <th className="add-table-cell">ORDER ITEMS</th>
                            <th className="add-table-cell">STATUS</th>
                            <th className="add-table-cell">TOTAL</th>
                            <th className="add-table-cell">MODIFY</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="add-food-cell"><button className="edit" type="button" >EDIT</button><button className="delete" type="button" >DELETE</button></td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        )

    }
}

export default UpdateOrders;