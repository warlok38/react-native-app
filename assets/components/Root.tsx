import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { NativeRouter, Redirect, Route, Switch } from 'react-router-native';

import Profile from './Profile';
import { StyleSheet } from 'react-native';
import FooterBar from './FooterBar';
import Welcome from './Welcome';
import Page404 from './Page404';
import { sleep } from '../helpers/sleep';
import { UsersContainer } from './Users/UsersContainer';
import { withSuspense } from './hoc/withSuspense';
import { Login } from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../store/redux-store';
import { initializeApp } from '../store/app-reducer';

const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const ChatPage = React.lazy(() => import('./Chat/ChatPage'));

const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedChatPage = withSuspense(ChatPage);

export const Root = () => {
    const initialized = useSelector(
        (state: AppStateType) => state.app.initialized
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeApp());
    }, []);

    if (!initialized) {
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
                                render={() => <SuspendedProfile />}
                            />
                            <Route
                                path="/users"
                                render={() => (
                                    <UsersContainer pageTitle="users" />
                                )}
                            />
                            <Route
                                path="/chat"
                                render={() => <SuspendedChatPage />}
                            />
                            <Route path="/login" render={() => <Login />} />
                            <Route path="*" render={() => <Page404 />} />
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
