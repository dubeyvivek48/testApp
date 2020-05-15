import React from 'react';
import './scss/main.scss'
import Navbar from "./components/Navbar";
import routes from "./routes";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
        <Router>
            <Navbar/>
            {routes}
        </Router>
  );
}

export default App;
