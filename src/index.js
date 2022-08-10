import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import smoothScrollPolyfill from 'smoothscroll-polyfill'
import {NavProvider} from "./Context"
import "./styles.css"
import App from "./App"

smoothScrollPolyfill.polyfill()

ReactDOM.render(
        <NavProvider>
            <Router>
                <App />
            </Router>
        </NavProvider>, document.getElementById("root"))
