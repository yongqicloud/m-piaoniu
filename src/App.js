import React from 'react';
import { Switch,Redirect,Route} from 'react-router-dom'
import Home from 'pages/home/Home'
import Page404 from '@/Page404'
import List from 'pages/list/List'

import 'assets/styles/reset.css'
import './App.css'
import list from './data/list'
console.log(list)
function App() {
  let data = {
    list
  }
  return (
    <div className="scroll-wrap">
      <Switch>
        <Route
          path="/home"
          render={props=><Home {...data} {...props} />}
        />
        <Route
          path="/list"
          component={List}
        />
        <Redirect 
          from="/"
          exact
          to="home"
        />
        <Route 
          path="*"
          component={Page404}
        />
      </Switch>
    </div>  
  );
}

export default App;
