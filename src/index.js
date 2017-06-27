import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { ApolloProvider } from 'react-apollo'
import Client from './client'

ReactDOM.render(
    <ApolloProvider client={Client}>
    <App />
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
