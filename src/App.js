import React, { Component } from 'react';
import './App.css';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

class App extends Component {
   render() {
      return (
         <div className="pageContainer">
            <Router>
               <>
                  <NavBar />
                  <Switch>
                     <Route path="/contact" component={Contact} />
                     <Route path="/about" component={About} />
                     <Route path="/projects" component={Projects} />
                     <Route path="/" component={Home} />
                  </Switch>
               </>
            </Router>
         </div>
      );
   }
}

export default App;
