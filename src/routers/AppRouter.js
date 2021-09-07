import React, { Component } from 'react'
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
}   from "react-router-dom"

import Registro from '../components/Registro'
import Login from '../components/Login'
import MainContainer from '../containers/MainContainer'

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/registro" component={Registro}/>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/main" component={MainContainer}/>
                </Switch>
            </Router>
        )
    }
}
