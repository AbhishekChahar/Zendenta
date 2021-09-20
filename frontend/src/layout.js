import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Overview from "./screens/Overview/Overview";
import Home from "./screens/Home/Home";
import PatientsList from './components/Patients-List/PatientsList';

const layout = () => {
    return (
      <Router>
      <div>
        <div className="App">
          <SideBar />
          <div className="mainBar">
            <Header />
            <Route path="/">
              <Overview />
            </Route>

            <Route path="/PatientList">
              <PatientsList />
            </Route>
          </div>
        </div>
      </div>
      </Router>
    );
}

export default layout
