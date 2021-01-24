import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as serviceWorker from 'utils/serviceWorker'
import Home from 'components/pages/Home'
import ROUTES from 'utils/routes'
import './index.css'
import DataProvider from 'context/data'

function App(): JSX.Element {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.home.path} element={<Home />} />
        </Routes>
      </Router>
    </DataProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
