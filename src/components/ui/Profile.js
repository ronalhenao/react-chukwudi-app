import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import userIcon from '../../assets/icons/user.svg';

export const Profile = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <div className="profile mb-5">
            <button 
                className="btn btn-link link"
                onClick={ handleLogout }
            >
                Cerrar sesión
            </button>
            <img className="profile-icon" src={ userIcon } alt="User" />
            <span className="profile-add">3</span>
        </div>
    )
}
