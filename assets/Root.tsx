import React from 'react';
import { StatusBar, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Profile from './components/Profile';
import { StyleSheet } from 'react-native';
import FooterBar from './components/FooterBar';
import Welcome from './components/Welcome';
import Page404 from './components/Page404';

const Root = () => {
    return (
        <NativeRouter>
            <StatusBar translucent={false} />
            <View>
                {/* Navbar */}
                <View style={styles.container}>
                    <Switch>
                        <Route exact path="/" render={Welcome} />
                        <Route path="/profile" render={Profile} />
                        <Route path="*" render={Page404} />
                    </Switch>
                </View>
            </View>
            <View style={styles.footer}>
                <FooterBar />
            </View>
        </NativeRouter>
    );
};

export default Root;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: '5%',
        paddingTop: '5%',
        backgroundColor: 'lightblue',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});
