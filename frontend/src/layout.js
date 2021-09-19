import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Overview from "./screens/Overview/Overview";
import Home from "./screens/Home/Home";

const layout = () => {
    return (
      <Router>
      <div>
        <div className="App">
          <SideBar />
          <div className="mainBar">
            <Header />
            <Route path="/overview">
              <Overview />
            </Route>
          </div>
        </div>
      </div>
      </Router>
    );
}

export default layout