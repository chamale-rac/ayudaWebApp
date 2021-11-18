import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'

import { Posts } from './components/Posts'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Log } from './components/Log'
import { Add } from './components/Add'
import { Miposts } from './components/Miposts'

import { Landing } from './components/Landing'
import { Profile } from './components/Profile'
import { Individual } from './components/Individual';



function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Navbar />
      {
        isAuthenticated ?
          <Switch>
            <Route path="/log" component={Log} />
            <Route path="/posts" component={Posts} />
            <Route path="/add" component={Add} />
            <Route path="/myposts" component={Miposts} />
            <Route path="/profile" component={Profile} />

            <Route path="/indiv" component={Individual} />
            <Route path="/" component={Landing} />
          </Switch>
          :
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
      }

    </Router>
  );
}

export default App;
