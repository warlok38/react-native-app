import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './assets/store/redux-store';
import { Provider } from 'react-redux';
import { Root } from './assets/components/Root';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

const history = createMemoryHistory();

export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Root />
            </Router>
        </Provider>
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
