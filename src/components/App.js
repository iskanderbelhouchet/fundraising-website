import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactus from '../pages/Contactus'
import Story from '../pages/Story'
import Storydetails from '../pages/Storydetails'
import Signup from '../pages/Auth/Signup'
import Login from '../pages/Auth/Login/Login'

function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Switch>
          <Route path='/Signup'>
            <Signup />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/Contactus'>
            <Contactus />
          </Route>
          <Route path='/Story'>
            <Story />
          </Route>
          <Route path='/Storydetails'>
            <Storydetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
