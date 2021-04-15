import { Link } from 'react-router-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { stylesFooter } from './style';
import { logout } from '../../store/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCurrentUserLogin,
    selectIsAuth,
} from '../../store/auth-selectors';

const FooterBar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    // const login = useSelector(selectCurrentUserLogin);

    const logoutCallBack = () => {
        dispatch(logout());
    };

    return (
        <View style={stylesFooter.footerContainer}>
            <Link to="/profile" style={stylesFooter.footerLink}>
                <Text>Profile</Text>
            </Link>
            <Link to="/dialogs" style={stylesFooter.footerLink}>
                <Text>dialogs</Text>
            </Link>
            <Link to="/chat" style={stylesFooter.footerLink}>
                <Text>Chat</Text>
            </Link>
            <Link to="/users" style={stylesFooter.footerLink}>
                <Text>Users</Text>
            </Link>
            {isAuth ? (
                <TouchableOpacity
                    onPress={logoutCallBack}
                    style={stylesFooter.footerLink}
                >
                    <Text style={stylesFooter.footerLinkLogin}>logout</Text>
                </TouchableOpacity>
            ) : (
                <Link to="/login" style={stylesFooter.footerLink}>
                    <Text style={stylesFooter.footerLinkLogin}>login</Text>
                </Link>
            )}
        </View>
    );
};

export default FooterBar;
