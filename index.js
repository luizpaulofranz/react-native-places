import { AppRegistry } from 'react-native';
import React from 'react';
// to wrap root component and provides redux access
import { Provider } from 'react-redux';
// helper file to boiler plate redux codes
import configureStore from './src/store/configureStore';
import App from './App';

const store = configureStore();

const ReduxWrapper = () => (
    <Provider store = {store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('rncourse', () => ReduxWrapper);
