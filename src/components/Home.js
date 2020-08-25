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
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
