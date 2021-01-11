import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from './react-auth0-spa';
import {authConfig} from './auth.config';

const onRedirectCallback = appState => {
  window.history.replaceSate(
    {},
    document.title,
    appState && appState.targetUrl
    ? appState.targetUrl
    : window.location.pathname
  )
}

ReactDOM.render(
  <Auth0Provider
    domain = {authConfig.domain}
    client_id = {authConfig.clientId}
    redirect_uri = {window.location.origin}
    onRedicrectCallback = {onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
