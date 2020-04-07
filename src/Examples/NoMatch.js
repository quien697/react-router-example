/* 
    Example : No Match (404)
*/

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation } from 'react-router-dom'
import Home from '../Pages/Home'
import WillMatch from '../Pages/WillMatch'

export default function NoMatch(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/old-match">Old Match, to be redirected</Link>
                    </li>
                    <li>
                        <Link to="/will-match">Will Match</Link>
                    </li>
                    <li>
                        <Link to="/will-not-match">Will Not Match</Link>
                    </li>
                    <li>
                        <Link to="/also/will/not/match">Also Will Not Match</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/old-match">
                        <Redirect to="/will-match" />
                    </Route>
                    <Route path="/will-match" component={WillMatch} />
                    <Route path="*" component={NoMatchPage} />
                </Switch>
            </div>
        </Router>
    )
}

function NoMatchPage(){
    let location = useLocation()

    return(
        <div>
            <h3>
                No Match for <code>{ location.pathname }</code>
            </h3>
        </div>
    )
}