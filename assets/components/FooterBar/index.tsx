import { Link } from 'react-router-native';
import React from 'react';
import { Text, View } from 'react-native';

import { stylesFooter } from './style';

const FooterBar = () => {
    return (
        <View style={stylesFooter.footerContainer}>
            <Link to="/profile" style={stylesFooter.footerLink}>
                <Text>Profile</Text>
            </Link>
            <Link to="/dialogs" style={stylesFooter.footerLink}>
                <Text>Messages</Text>
            </Link>
            <Link to="/chat" style={stylesFooter.footerLink}>
                <Text>Chat</Text>
            </Link>
            <Link to="/users" style={stylesFooter.footerLink}>
                <Text>Users</Text>
            </Link>
        </View>
    );
};

export default FooterBar;
