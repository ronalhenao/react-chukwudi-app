import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const Register = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(name, email, password, password2);

        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName( email, password, name) );
        }
    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            dispatch( setError('Nombre es requerido') )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Correo no es valido') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Contraseñas deben ser iguales y de 6 caracteres') )
            return false;
        }

        dispatch( removeError() );

        return true;
    }

    return (
        <>
            <h3 className="auth-title">Crear cuenta</h3>
            <form onSubmit={ handleRegister }>
                {
                    msgError && 
                    (
                        <div className="auth-alert alert alert-danger">
                            { msgError }
                        </div>
                    )
                }

                <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth-input mb-3"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth-input mb-3"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth-input mb-3"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <input 
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="password2"
                    className="auth-input mb-3"
                    value={ password2 }
                    onChange={ handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-primary mb-2"
                >
                    Crear cuenta
                </button>
                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Prefiero iniciar sesión
                </Link>
            </form>
        </>
    )
}
