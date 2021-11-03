import React, { Component } from "react";
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import  Home from './components/Content/Home';
import  Series from './components/Content/Series';
import  Movies from './components/Content/Movies';




class Main extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="content">         
            <Route exact path="/" component={Home}/>
            <Route exact path="/series" component={Series}/>
            <Route exact path="/movies" component={Movies}/>


          </div>
          
        </div>
        </BrowserRouter>
    );
  }
}
 
export default Main;