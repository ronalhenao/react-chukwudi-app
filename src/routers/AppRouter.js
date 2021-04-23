import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { Ui } from '../components/ui/Ui';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if ( user?.uid ) {
                dispatch( login( user.id, user.displayName ) );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);
        })
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if ( checking ) {
        return (
            <p>Cargando...</p>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    >
                    </PublicRoute>

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/" 
                        component={ Ui }
                    >
                    </PrivateRoute>

                    <Redirect to="/auth/login"></Redirect>
                </Switch>
            </div>
        </Router>
    )
}
