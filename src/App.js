import React from 'react';
import Main from './Pages/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LogIn from "./components/LogIn"
import Users from "./components/Users"
import DashBoard from "./components/DashBoard"

import DashBoardAdmin from './Pages/DashBoardAdmin';
import AddUsers from './components/Users/AddUsers';
import UpdateUsers from './components/Users/UpdateUsers';
import FilesUsers from './components/Users/FilesUsers';
import ProtectedRoute from './components/ProtectedRoute';
import Mustakdem from './components/Users/Mustakdem';

const App = () => {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={LogIn} />
          <ProtectedRoute  path="/updateusers" Component={UpdateUsers} />
           <ProtectedRoute path="/usersmange" Component={Users} />
          <ProtectedRoute path="/addusers" Component={AddUsers} />
          <ProtectedRoute path="/Mustakdem" Component={Mustakdem} />

         
          <Route path="/FilesUsers" component={FilesUsers} />


        
        </Switch>
      </Router>
    </div>
  )
}

export default App
