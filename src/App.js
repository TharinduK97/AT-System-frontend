import React, {Component,useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Nav from './components/Navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/Home/home';
import Profile from './components/profile/profile';
import Login from './components/Login/login';
import Interviews from "./components/Interviews/interviews";
import Appliedjobs from "./components/Applied jobs/appliedjobs";

const App = (props) => {

  return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Switch>
              <Route path="/appliedjobs"><Appliedjobs/></Route>
              <Route path="/interview"><Interviews/></Route>
              <Route path="/login"><Login/></Route>
              <Route path="/profile"><Profile/></Route>
              <Route path="/" exact component={Home}/>
            <Redirect to="/"/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>

  );
}



export default App;


