import React from 'react';
import { StatusBar, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Profile from './Profile';
import { StyleSheet } from 'react-native';
import FooterBar from './FooterBar';
import Welcome from './Welcome';
import Page404 from './Page404';

const Root = () => {
    return (
        <NativeRouter>
            <StatusBar translucent={false} />
            <View>
                {/* Navbar */}
                <View style={styles.container}>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/profile:userId?" component={Profile} />
                        <Route path="*" component={Page404} />
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
