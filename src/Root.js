import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// PAGES
import Home from '@/components/pages/home'
import ErrorNotFound from '@/components/pages/error-not-found'

class Root extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route component={ ErrorNotFound }/>
      </Switch>
    )
  }
}

export default Root
