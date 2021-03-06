import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
function App() {
    return (
      <div className="App"> 
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Login />            
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/detail/:id">
            <Detail />
          </Route>
          </Switch>
        </Router>
       </div>
    )
}

export default App;