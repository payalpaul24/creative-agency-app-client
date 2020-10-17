import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Order from './components/Dashboard/Order/Order';
import OrderList from './components/Dashboard/OrderList/OrderList';
import Reviews from './components/Dashboard/Reviews/Reviews';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import AdminServiceList from './components/Admin/AdminServiceList/AdminServiceList';
import AddService from './components/Admin/AddService/AddService';
import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

	const globalStates = {
		user: [loggedInUser, setLoggedInUser],

	};
  return (
    <UserContext.Provider value={globalStates}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Reviews></Reviews>
          </PrivateRoute>
          <PrivateRoute path="/adminDashboard">
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
          <PrivateRoute path="/adminServiceList">
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
