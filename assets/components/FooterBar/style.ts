import { StyleSheet } from 'react-native';

export const stylesFooter: any = StyleSheet.create({
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#eeeeee',
    },
    footerLink: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#797979',
        backgroundColor: '#fff',
    },
    footerLinkLogin: {
        fontWeight: 'bold',
    },
});
