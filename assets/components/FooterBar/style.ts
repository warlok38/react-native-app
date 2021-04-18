import { StyleSheet } from 'react-native';

export const stylesFooter: any = StyleSheet.create({
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#eeeeee',
    },
    linkContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    footerLink: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 5,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        // borderColor: '#797979',
        backgroundColor: '#fff',
    },
    isActive: {
        color: '#92c1e8',
    },
    footerLinkLogin: {
        fontWeight: 'bold',
    },
    icon: { width: 20, height: 20 },
    text: {
        fontSize: 10,
        color: '#797979',
    },
});
