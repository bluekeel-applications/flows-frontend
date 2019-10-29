import React from 'react';
import { createStore } from '../store';
import { useRoutes } from 'hookrouter';
import routes from '../router';

const App = () => {
  const routeResult = useRoutes(routes);
  const isStart = window.location.pathname === '/' ? true : false;

  return (
    <div className="App">
      {
        isStart ? "" : 
        <div className='startover-button'>
            <a id='startover-button-link' href='http://bluekeel-flows-fe.s3-website-us-east-1.amazonaws.com/'>Start Over</a>
            <hr />
        </div>
      }
      {routeResult}
    </div>
  );
}

export default createStore(App);