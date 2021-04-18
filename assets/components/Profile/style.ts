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
        flex: 1,
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
    status: {},
    statusEdit: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#797979',
        backgroundColor: '#fff',
    },
    statusTitle: {
        overflow: 'hidden',
        fontSize: 14,
    },
    statusHasTitle: {
        color: '#4f4f4f',
    },
    statusHasNoTitle: {
        color: 'blue',
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
        flexDirection: 'row',
        alignItems: 'center',
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
    editButton: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
});
