import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import Landing from "./pages/Landing"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"

function App() {

    return (
        <Switch>
            <Route exact path='/'>
                <>
                    <Navbar />
                    <Landing />
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Contact />
                </>
            </Route>
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    )
}

export default App
