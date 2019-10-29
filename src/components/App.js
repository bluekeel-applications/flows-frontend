import React from 'react';
import { createStore } from '../store';
import { useRoutes } from 'hookrouter';
import routes from '../router'

import { A } from 'hookrouter';


const App = () => {
  const routeResult = useRoutes(routes);
  const isStart = window.location.pathname === '/' ? true : false;

  return (
    <div className="App">
      {
        isStart ? "" : 
        <div className='startover-button'>
            <A id='startover-button-link' href='/'>Start Over</A>
            <hr />
        </div>
      }
      {routeResult}
    </div>
  );
}

export default createStore(App);