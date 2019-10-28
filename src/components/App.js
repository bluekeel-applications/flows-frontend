import React from 'react';
import { createStore } from '../store';
import { useRoutes, A } from 'hookrouter';
import routes from '../router'


const App = () => {
  const routeResult = useRoutes(routes);
  const isStart = window.location.pathname === '/' ? true : false;

  return (
    <div className="App">
      {
        isStart ? "" : 
        <div>
          <ul className="nav-links">
            <li>
              <A href="/">Start Over</A>
            </li>
          </ul>
        </div>
      }
      {routeResult}
    </div>
  );
}

export default createStore(App);