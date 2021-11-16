import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export const Log = () => {
    const { loginWithRedirect, logout } = useAuth0();
    return (
        <div>
            <button onClick={() => loginWithRedirect()} className="btn btn-secondary rounded-pill mx-1 px-md-5 px-4 py-2 radius-0 text-light light-300 ">Login AUTH0</button>
            <button onClick={() => logout({ returnTo: window.location.origin })} className="btn btn-secondary rounded-pill mx-1 px-md-5 px-4 py-2 radius-0 text-light light-300 ">Logout AUTH0</button>
            <button onClick={() => loginWithRedirect()} className="btn btn-secondary rounded-pill mx-1 px-md-5 px-4 py-2 radius-0 text-light light-300 ">Delete AUTH0</button>
        </div>)
}
