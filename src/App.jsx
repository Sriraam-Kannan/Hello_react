import React, {src} from React
import { BrowserRouter as Router, Route,Switch,Redirect } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviesHomepage from './Movies/MoviesHomepage'
import MoviesDetailed from './Movies/MoviesDetailed'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My React app</h1>
      <h2>Using Vite + React.</h2>

      <div>
      <Router>

      </Router>
      </div>

    </>
  )
}

export default App
