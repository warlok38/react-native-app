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
    info: {
        display: 'flex',
        flexDirection: 'row',
    },
    nameTitle: {
        fontSize: 20,
    },
    statusTitle: {
        fontSize: 14,
        color: "#4f4f4f"
    }
});
