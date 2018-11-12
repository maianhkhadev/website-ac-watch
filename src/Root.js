import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// PAGES
import Home from '@/components/pages/home'
import OurStory from '@/components/pages/our-story'
import Store from '@/components/pages/store'
import OurServices from '@/components/pages/our-services'
import AboutUs from '@/components/pages/about-us'
import ErrorNotFound from '@/components/pages/error-not-found'

class Root extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/our-story' component={ OurStory }/>
        <Route exact path='/store' component={ Store }/>
        <Route exact path='/our-services' component={ OurServices }/>
        <Route exact path='/about-us' component={ AboutUs }/>
        <Route component={ ErrorNotFound }/>
      </Switch>
    )
  }
}

export default Root
