import React, { Component } from 'react';
import './App.css';
// import HelloWorld, { WORLD } from './components/HelloWorld';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/About';

class App extends Component {
   render() {
      return (
         <Router>
            <>
               <NavBar />
               <Switch>
                  <Route path="/about" component={About} />
                  {/* <Route path="/projects" component={Projects}/> */}
                  <Route path="/" component={Home} />
               </Switch>
            </>
         </Router>
      );
   }
}

export default App;
