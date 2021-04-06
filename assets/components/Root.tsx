import React, { useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { NativeRouter, Redirect, Route, Switch } from 'react-router-native';
import Profile from './Profile';
import { StyleSheet } from 'react-native';
import FooterBar from './FooterBar';
import Welcome from './Welcome';
import Page404 from './Page404';
import { sleep } from '../helpers/sleep';
import { ProfileContainer } from './Profile/ProfileContainer';
import { UsersContainer } from './Users/UsersContainer';

const Root = () => {
    const [isInitialized, setInitialazed] = useState(false);

    const initialize = async () => {
        await sleep(3000);
        setInitialazed(true);
    };

    initialize();

    if (!isInitialized) {
        return <Welcome />;
    }
    return (
        <NativeRouter>
            <StatusBar translucent={false} />
            <View>
                {/* Navbar */}
                <View style={styles.container}>
                    <ScrollView>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => <Redirect to="/profile" />}
                            />
                            <Route
                                path="/profile/:userId?"
                                component={ProfileContainer}
                            />
                            <Route path="/users" component={UsersContainer} />
                            <Route path="*" component={Page404} />
                        </Switch>
                    </ScrollView>
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
        paddingBottom: 35,
        backgroundColor: 'lightblue',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});
