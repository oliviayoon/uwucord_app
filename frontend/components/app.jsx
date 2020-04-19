import React from "react";
import NavContainer from "../components/nav/nav_container"
import {Route,Switch, Redirect} from "react-router-dom"
import LoginContainer from "../components/session/login_container"
import SignUpContainer from "../components/session/signup_container"
import Modal from './modal'
import ListenerContainer from './listener_container'

import {AuthRoute, ProtectedRoute} from '../util/route_util'
import MainContainer from "./home/content/main_container";

const App = () => (
    <>
        <ListenerContainer />
         <Modal />
         <Switch>
            <ProtectedRoute path="/channels/@me/" component={MainContainer} />
            <ProtectedRoute path="/channels/:id" component={MainContainer} />
            <AuthRoute path ="/login" component={LoginContainer} />
            <AuthRoute path="/register" component={SignUpContainer} />
            <AuthRoute  path="/" component={NavContainer}/>
         </Switch>
    
    </>
)

export default App