import React from 'react'
import './App.css';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import FourOFour from './Pages/FourOFour';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Cart from './Components/Cart/Cart';
import CheckoutComp from './Components/Checkout/CheckoutComp/CheckoutComp';
import CarouselComp from './Components/CarouselComp/CarouselComp';
import ProductDetails from './Components/ProductDetails/ProductDetails';

import Noty from 'noty';  
import "../node_modules/noty/lib/noty.css";  
// import "../node_modules/noty/lib/themes/bootstrap-v4.css"; 


function App() {

  const userEmail = localStorage.getItem("ecomUser")

  function PrivateRoute ({Component, path}) {
    return (
      <Route 
      path={path}
      render={(props)=> 
        userEmail? <Component {...props} /> : <Redirect to='/signin'/> 
      }
      />
    )
  }

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={'/'} component={CarouselComp} />
          <Route exact path = {'/signup'} component={SignUp} />
          <Route exact path = {'/signin'} component={SignIn} />
          <PrivateRoute exact path = {'/dashboard'} Component={Dashboard} />
          <PrivateRoute exact path = {'/product'} Component={ProductDetails} />
          <PrivateRoute exact path = {'/cart'} Component={Cart} />
          <PrivateRoute exact path = {'/checkout'} Component={CheckoutComp} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
