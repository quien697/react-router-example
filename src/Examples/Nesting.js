/* 
    Example : Nesting
*/

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
import Home from '../Pages/Home'

export default function Nesting(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/topics" component={Topics} />
                </Switch>
            </div>
        </Router>
    )
}

function Topics(){
    let { path, url } = useRouteMatch()

    return(
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic</h3>
                </Route>
                <Route path={`${path}/:topicId`} component={Topic} />
            </Switch>
        </div>
    )
}

function Topic(){
    let { topicId } = useParams()

    return(
        <div>
            <h3>{topicId}</h3>
        </div>
    )
}