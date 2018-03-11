import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
      <Router>
        <div>
          <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            <div className="container">
              <a className="navbar-brand" href="/"><i className="fa d-inline fa-lg fa-train"></i><b className = "app-title">Smarta-Commute</b></a>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/about"><i className="fa d-inline fa-lg"></i>About</a>
                  </li>
                </ul>
              </div>
          </nav>
          <Route exact path="/" component='' />
        </div>
      </Router>

      <div className="text-white bg-primary footer">
            <div className = "footer-text">
              <p></p>
            </div>
      </div>
</div >
)
  }
}

export default App;