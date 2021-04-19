import { Link, useHistory, useLocation } from 'react-router-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { stylesFooter } from './style';
import { logout } from '../../store/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCurrentUserLogin,
    selectIsAuth,
} from '../../store/auth-selectors';
import { Icon } from '../icons';
import * as S from './styled';

const FooterBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const isAuth = useSelector(selectIsAuth);
    // const login = useSelector(selectCurrentUserLogin); //Имя пользователя в системе

    const logoutCallBack = async () => {
        await dispatch(logout());
        history.push('/login');
    };

    return (
        <S.Wrapper style={stylesFooter.footerContainer}>
            <Link to="/profile" style={stylesFooter.footerLink}>
                <View style={stylesFooter.linkContainer}>
                    <Icon
                        name="profile"
                        width={20}
                        height={20}
                        fill={
                            location.pathname === '/profile'
                                ? '#2186c4'
                                : '#797979'
                        }
                    />
                    <Text
                        style={[
                            stylesFooter.text,
                            location.pathname === '/profile' &&
                                stylesFooter.active,
                        ]}
                    >
                        Профиль
                    </Text>
                </View>
            </Link>
            <Link to="/dialogs" style={stylesFooter.footerLink}>
                <View style={stylesFooter.linkContainer}>
                    <Icon
                        name="message"
                        width={20}
                        height={20}
                        fill={
                            location.pathname === '/dialogs'
                                ? '#2186c4'
                                : '#797979'
                        }
                    />
                    <Text
                        style={[
                            stylesFooter.text,
                            location.pathname === '/dialogs' &&
                                stylesFooter.active,
                        ]}
                    >
                        Диалоги
                    </Text>
                </View>
            </Link>
            <Link to="/chat" style={stylesFooter.footerLink}>
                <View style={stylesFooter.linkContainer}>
                    <Icon
                        name="chat"
                        width={20}
                        height={20}
                        fill={
                            location.pathname === '/chat'
                                ? '#2186c4'
                                : '#797979'
                        }
                    />
                    <Text
                        style={[
                            stylesFooter.text,
                            location.pathname === '/chat' &&
                                stylesFooter.active,
                        ]}
                    >
                        Общий чат
                    </Text>
                </View>
            </Link>
            <Link to="/users" style={stylesFooter.footerLink}>
                <View style={stylesFooter.linkContainer}>
                    <Icon
                        name="users"
                        width={20}
                        height={20}
                        fill={
                            location.pathname === '/users'
                                ? '#2186c4'
                                : '#797979'
                        }
                    />
                    <Text
                        style={[
                            stylesFooter.text,
                            location.pathname === '/users' &&
                                stylesFooter.active,
                        ]}
                    >
                        Пользователи
                    </Text>
                </View>
            </Link>
            {isAuth ? (
                <TouchableOpacity
                    onPress={logoutCallBack}
                    style={stylesFooter.footerLink}
                >
                    <View style={stylesFooter.linkContainer}>
                        <Icon
                            name="logout"
                            width={20}
                            height={20}
                            fill={'#797979'}
                        />
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
                        <Icon
                            name="login"
                            width={20}
                            height={20}
                            fill={
                                location.pathname === '/login'
                                    ? '#2186c4'
                                    : '#797979'
                            }
                        />
                        <Text
                            style={[
                                stylesFooter.footerLinkLogin,
                                stylesFooter.text,
                                location.pathname === '/login' &&
                                    stylesFooter.active,
                            ]}
                        >
                            Войти
                        </Text>
                    </View>
                </Link>
            )}
        </S.Wrapper>
    );
};

export default FooterBar;
