import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {},
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'yellow',
    },
    avatar: {
        width: 80,
        height: 80,
    },
    avatarImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    mainContainer: {
        height: '100%',
    },
    footerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        marginLeft: 10,
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
    },
    about: {
        fontSize: 16,
    },
    nameTitle: {
        fontSize: 21,
    },
    statusTitle: {
        fontSize: 14,
        color: '#4f4f4f',
    },
    loading: {
        zIndex: 999,
        position: 'absolute',
        marginVertical: '50%',
        marginHorizontal: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleButton: {
        display: 'flex',
        marginRight: 'auto',
        paddingVertical: 5,
    },
    toggleButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    contacts: {
        paddingLeft: 20,
    },
});
