import React, { Component } from "react";

export default class Home extends Component {

    logoutHandler =(e) => {
      this.props.history.push('/login')
    } 

    render() {
        return ( 
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand mr-auto mt-2 mt-lg-0" href="/">Test</a>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                <div className="form-inline my-2 my-lg-0">
                  <a className="navbar-brand" href="/login" onClick={e=>this.logoutHandler(e)}>Logout</a>
                </div>
            </div>
          </nav>
          <main role="main" className="container">
            <div className="starter-template">
              <h1 className="mt-2">Welcome, you are now Login</h1>
            </div>
          </main>
        </div>

        )
								
    }
}