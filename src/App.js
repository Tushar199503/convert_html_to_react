import React from 'react';
/* import './App.css'; */
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './Pages/About';
import Service from './Pages/Service';
import Single from './Pages/Single';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';


function App() {
  return (
    <div >
      <Router>
      
      <Header/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/single' component={Single} />
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/contact' component={Contact} />

      </Switch>
     
      <Footer/>


      </Router>
     
          </div>
  );
}

export default App;
