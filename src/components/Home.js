import React from "react";
import Product from "./products/Product";
import Category from "./categories/Category";
import Order from "./orders/Order";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return (
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3">
          <div className="container">
            <ul className="navbar-nav mr-auto" id="navbarSupportedContent">
            <li className="nav-item">
              <Link to="/products" className="nav-link text-white" >Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link text-white">Categories</Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link text-white">Orders</Link>
            </li>
          </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/categories">
            <Category />
          </Route>
          <Route path="/orders">
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Home;
