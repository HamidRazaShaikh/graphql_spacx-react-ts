import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import client from './config';
import { ApolloProvider } from '@apollo/client';
import swDev from './swDev';


// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client = {client}>
    <App />
    </ApolloProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


swDev();