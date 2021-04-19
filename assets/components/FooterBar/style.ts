import { StyleSheet } from 'react-native';

export const stylesFooter: any = StyleSheet.create({
    footerContainer: {
        elevation: 1,
    },
    footerLink: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        // borderColor: '#797979',
        backgroundColor: '#fff',
    },
    linkContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 5,
        width: '100%',
        backgroundColor: '#fff',
    },
    footerLinkLogin: {
        fontWeight: 'bold',
    },
    icon: { width: 20, height: 20 },
    text: {
        fontSize: 10,
        color: '#797979',
    },
    active: {
        color: '#2186c4',
    },
});
