import { Link, useHistory } from 'react-router-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { stylesFooter } from './style';
import { logout } from '../../store/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCurrentUserLogin,
    selectIsAuth,
} from '../../store/auth-selectors';
import { icons } from '../icons';

const FooterBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuth = useSelector(selectIsAuth);
    // const login = useSelector(selectCurrentUserLogin); //Имя пользователя в системе

    const logoutCallBack = async () => {
        await dispatch(logout());
        history.push('/login');
    };

    return (
        <View style={stylesFooter.footerContainer}>
            <Link to="/profile" style={stylesFooter.footerLink}>
                <View style={stylesFooter.linkContainer}>
                    <View style={stylesFooter.icon}>{icons.profile}</View>
                    <Text style={stylesFooter.text}>Профиль</Text>
                </View>
            </Link>
            <Link to="/dialogs" style={stylesFooter.footerLink}>
                <View style={stylesFooter.linkContainer}>
                    <View style={stylesFooter.icon}>{icons.message}</View>
                    <Text style={stylesFooter.text}>Диалоги</Text>
                </View>
            </Link>
            <Link to="/chat" style={stylesFooter.footerLink}>
                <View style={stylesFooter.linkContainer}>
                    <View style={stylesFooter.icon}>{icons.chat}</View>
                    <Text style={stylesFooter.text}>Общий чат</Text>
                </View>
            </Link>
            <Link to="/users" style={stylesFooter.footerLink}>
                <View style={stylesFooter.linkContainer}>
                    <View style={stylesFooter.icon}>{icons.users}</View>
                    <Text style={stylesFooter.text}>Пользователи</Text>
                </View>
            </Link>
            {isAuth ? (
                <TouchableOpacity
                    onPress={logoutCallBack}
                    style={stylesFooter.footerLink}
                >
                    <View style={stylesFooter.linkContainer}>
                        <View style={stylesFooter.icon}>{icons.logout}</View>
                        <Text
                            style={[
                                stylesFooter.footerLinkLogin,
                                stylesFooter.text,
                            ]}
                        >
                            Выйти
                        </Text>
                    </View>
                </TouchableOpacity>
            ) : (
                <Link to="/login" style={stylesFooter.footerLink}>
                    <View style={stylesFooter.linkContainer}>
                        <View style={stylesFooter.icon}>{icons.login}</View>
                        <Text
                            style={[
                                stylesFooter.footerLinkLogin,
                                stylesFooter.text,
                            ]}
                        >
                            Войти
                        </Text>
                    </View>
                </Link>
            )}
        </View>
    );
};

export default FooterBar;
