import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export const AuthRouter = () => {
    return (
        <div className="auth-main">
            <div className="auth-container">
                <Switch>
                    <Route exact path="/auth/login" component={ Login }></Route>
                    <Route exact path="/auth/register" component={ Register }></Route>
                    <Redirect to="/auth/login"></Redirect>
                </Switch>

            </div>
        </div>
    )
}
