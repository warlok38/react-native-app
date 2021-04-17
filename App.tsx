import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './assets/store/redux-store';
import { Provider } from 'react-redux';
import { Root } from './assets/components/Root';
import { Router } from 'react-router';
import { history } from './assets/helpers/history';

export default function App() {
    return (
        <Router history={history}>
            <Provider store={store}>
                <Root />
            </Provider>
        </Router>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
