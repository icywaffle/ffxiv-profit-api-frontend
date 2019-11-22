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
            <Route path="/api/home/" exact component={HomePage} />
            <Route path="/api/home/documentation/" component={DocumentationPage} />
        </Router>
    )
}

export default Body