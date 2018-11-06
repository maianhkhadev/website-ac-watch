import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// PAGES
import Home from '@/components/pages/home'
import OurStory from '@/components/pages/our-story'
import Store from '@/components/pages/store'
import ErrorNotFound from '@/components/pages/error-not-found'

class Root extends Component {

//   function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props => fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/our-story' component={ OurStory }/>
        <Route exact path='/store' component={ Store }/>
        <Route component={ ErrorNotFound }/>
      </Switch>
    )
  }
}

export default Root
