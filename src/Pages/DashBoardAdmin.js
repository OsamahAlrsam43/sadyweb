import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Users from "../components/Users"
import DashBoard from "../components/DashBoard"

const DashBoardAdmin = () => {
    return (
        <div>
        <Router>
       
          <Switch>
             <Route exact path="/dashboard" component={DashBoard} />
            <Route path="/usersmange" component={Users} />
             
        

          
        </Switch>
      </Router>
        </div>
    )
}

export default DashBoardAdmin
