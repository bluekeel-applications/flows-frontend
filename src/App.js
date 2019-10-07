import React from 'react';

import { useRoutes, A } from 'hookrouter';
import routes from './router'
import './App.css';

function App() {
  const routeResult = useRoutes(routes)
  return (
    <div className="App">
      <ul className="nav-links">
        <li>
          <A href="/">Start Over</A>
        </li>
      </ul>
      {routeResult}
    </div>
  );
}

export default App;