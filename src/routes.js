import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Landing from "./components/Landing/Landing";
import Profile from "./components/Profile/Profile";

export default (
  <Switch>
    <Route exact path ='/' component ={Auth}/>
    <Route path = '/home' component={Landing}/>
    <Route path='/cart' component={Cart} />
    <Route path='/profile' component={Profile} />
    <Route path='/checkout' component={Checkout} />
  </Switch>
);
