import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import { Posts } from './components/Posts'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Log } from './components/Log'
import { Add } from './components/Add'
import { Miposts } from './components/Miposts'

import { Landing } from './components/Landing'



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route path="/log" component={Log} />
        <Route path="/posts" component={Posts} />
        <Route path="/add" component={Add} />
        <Route path="/myposts" component={Miposts} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
