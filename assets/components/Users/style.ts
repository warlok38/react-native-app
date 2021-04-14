import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttonFriend: {
        marginLeft: 'auto',
        height: 'auto',
        backgroundColor: '#fff',
    },
    userPhoto: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    userLabel: {
        paddingLeft: 10,
    },
    userName: {
        fontSize: 16,
    },
    userStatus: {
        color: '#797979',
    },
    loading: {
        zIndex: 999,
        position: 'absolute',
        marginVertical: '50%',
        marginHorizontal: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
