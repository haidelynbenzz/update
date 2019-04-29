import React, {Component} from 'react';
import '../css/body.css';
import axios from 'axios';

class Create extends Component{

    constructor(){
        super();

        this.state = {
            FoodItems: [],
            foodName: {
                foodItemName: '',
                unitPrice: '',
                inStock: ''
            }
        };

    }


    handleChange = e => {
        this.setState({
            foodName: e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        
        const foodName = {
            foodName: this.state.foodItemName,
            foodName: this.state.unitPrice,
            foodName: this.state.inStock
        }

        axios.post('http://localhost:8080/restsample01/rest/AddFoodItem', { foodName })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    }
    
        
render(){
            

    return(

    <div>
        <div className="main-content">
			<div className="title">
				DASHBOARD
			</div>
			<div className="main">
				<div className="widget">
					<div className="title">Create Order</div>
                    <form onSubmit={this.handleSubmit}>
                        <input name="customerName" placeholder="Customer Name" />
                        <input name="address" placeholder="Address" />
                        <input name="contactNumber" placeholder="Contact Number" />
                        <input name="order" placeholder="Ordered Items" />
                        <input name="Total" placeholder="Total" />
                        <select name="status" id="status">
                        <option disabled selected>Choose</option>
                        <option>Recieved</option>
                        <option>Kitchen</option>
                        <option>In Transit</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                    </select>
                    <br/>
                    <button type="submit" className="submit" onSubmit={this.onSubmit}>ADD</button>
                    </form>
				    </div>
			    </div>
            </div>
        </div>
        );
    }
}


export default Create;