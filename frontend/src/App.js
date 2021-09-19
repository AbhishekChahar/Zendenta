import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Overview from "./screens/Overview/Overview";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="mainBar">
          <Header />
          <Route path='/overview'>
            <Overview />
          </Route>
        </div>
      </div>



    </Router>
  );
}

export default App;
