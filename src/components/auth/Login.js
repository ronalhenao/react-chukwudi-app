import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const Login = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email:'',
        password:''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        dispatch( startLoginEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h3 className="auth-title">Iniciar sesión</h3>
            <form onSubmit={ handleLogin }>
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
                <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    disabled={ loading }
                >
                    Iniciar sesión
                </button>
                <div className="auth-socialNetworks">
                    <p>Inicia sesión con Google</p>
                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Inicia sesión con Google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Crear cuenta
                </Link>

            </form>
        </>
    )
}
