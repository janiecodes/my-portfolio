import './App.css';
import React from 'react';
import {withRouter} from 'react-router-dom';
import routes from './routes'
import Header from './Components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      
      {routes}

    </div>
  );
}

export default withRouter(App)
