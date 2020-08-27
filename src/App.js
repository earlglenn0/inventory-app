import React from "react";
import "./App.css";

import Home from "./components/Home";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <Home />
    </div>
  );
  
};

export default App;
