import React from "react"

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom"
import Home from "./Home"
import Documentation from "./Documentation"

function HomePage() {
    return (
        <Home />
    )
}

function DocumentationPage() {
    return (
        <Documentation />
    )
}
function Body() {
    return (
        <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/documentation" component={DocumentationPage} />
        </Router>
    )
}

export default Body