/* 
    Example : Custom Link
*/

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

export default function CustomLink(){
    return(
        <Router>
            <div>
                <OldSchoolMenuLink to="/" label="Home" activeOnlyWhenExact={true} />
                <OldSchoolMenuLink to="/about" label="About" />
                
                <hr />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    )
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }){
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    })

    return (
        <div className={match ? "active" : ""}>
            {match && "> "}
            <Link to={to}>{label}</Link>
        </div>
    )
}