import './App.scss';
import React, { Component, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';
import { Header, Footer, About, Projects, Contact, Photography, Main } from './components/index'

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Molengo', 'Varela']
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <div>
      <Header />
        <Switch>
         <Route path="/" component={Main} exact/>
         <Route path="/ramseyvdm" component={Main} exact/>
         <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/about" component={About}/>
         <Route path="/projects" component={Projects}/>
         <Route path="/Photography" component={Photography}/>
        <Route component={Error}/>
       </Switch>
    </div> 
  </BrowserRouter>
  );
}

export default App;
