import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './component/home.jsx';
import Body from './component/body.jsx';
import ListItems from './component/list-items.jsx';
import UpdateItems from './component/updateItems.jsx';
import Create from './component/create.jsx';
import ListOrders from './component/list-orders.jsx';
import UpdateOrders from './component/updateOrders.jsx';
import './App.css';

import image from '../src/img/catering.png';
import image2 from '../src/img/images.png';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={image} alt="image" className="img" />
            <p>Hi! Admin</p>
            <img src={image2} alt="image" className="profile" />
            <div className="logo">
              <div className="branch"></div>
              <span>FasterFood ®</span>
            </div>
          </header>

          <body>
            <div className="side-nav">

              <nav>
                <ul>
                <li>
                    <NavLink to='/Home'>
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/Body'>
                      <span>Add Food Item</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/ListItems'>
                      <span>List Food Items</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/UpdateItems'>
                      <span>Update Items</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/Create'>
                      <span>Create Order</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/ListOrders'>
                      <span>List of Orders</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/UpdateOrders'>
                      <span>Update Orders</span>
                    </NavLink>
                  </li>
                </ul>
                <div className='content'>
                  <Route exact path="/Home" component={Home} />
                  <Route path="/Body" component={Body} />
                  <Route path="/ListItems" component={ListItems} />
                  <Route path="/UpdateItems" component={UpdateItems} />
                  <Route path="/Create" component={Create} />
                  <Route path="/ListOrders" component={ListOrders} />
                  <Route path="/UpdateOrders" component={UpdateOrders} />
                </div>
              </nav>

            </div>
          </body>

          <footer>
            <h5>
            Copyright © 2019 FasterFood  ®
            </h5>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
