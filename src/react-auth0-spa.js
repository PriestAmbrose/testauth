import React, {useState, useEffect, useContext} from 'react';
import createAtuh0Client from '@auth0/auth0-spa-js';

const DEFAULT_REDIRECT_CALLBACK = () => 
window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
    children,
    onRedicrectCallback,
    ...initOptions
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [user, setUser] = useState();
    const [Auth0Client, setAuth0] = useState();
    const [loading, setLoading] =useState(true);
    const [popupOpen, setPopupOpen] = useState(false);
}