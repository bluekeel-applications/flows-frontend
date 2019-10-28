import React from 'react';
import { createStore } from '../store';
import { useRoutes } from 'hookrouter';
import routes from '../router'

import ButtonLink from './shared/ButtonLink';


const App = () => {
  const routeResult = useRoutes(routes);
  const isStart = window.location.pathname === '/' ? true : false;

  return (
    <div className="App">
      {
        isStart ? "" : 
        <div className='start-over-button'>
          <ButtonLink 
            href='/'
            updateOnClick={false}
            text='Start Over'
          />
        </div>
      }
      {routeResult}
    </div>
  );
}

export default createStore(App);