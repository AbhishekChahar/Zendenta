import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Overview from "./screens/Overview/Overview";
import Home from "./screens/Home/Home";
import PatientsList from "./components/Patients-List/PatientsList";


function App() {
  return (
    <Router>
      <Route exact path = "/">
        <Home/>  
      </Route>

      <Route path = "/layout">
        <div className="App">
        <SideBar />
        <div className="mainBar">
          <Header />
            <Route path="/overview">
              <Overview /> 
            </Route>

            <Route path="/PatientsList">
              <PatientsList /> 
            </Route>
            
          </div>
        </div>
      </Route>
      
      
    </Router>
  );
}

export default App;
